import { Lang, PortfolioData } from '../../models/portfolio.models';
import { similarity } from './fuzzy';
import { ChatAction, Entity, Intent, Reply, buildKnowledge } from './knowledge';
import { OTHER_TECHS, SYN_GROUPS } from './synonyms';
import { tokens } from './text';

export type { ChatAction, Reply } from './knowledge';

/** quanto um assunto (@grupo) reconhecido na pergunta soma para as intenções ligadas a ele */
const GROUP_WEIGHT = 2.4;
/** abaixo disso, o grupo não conta (evita ligar palavras pouco parecidas) */
const GROUP_MIN = 0.78;
/** atributos usados em perguntas de continuação */
const ATTRS = ['@code', '@demo', '@when', '@techs', '@details'] as const;

interface Scored {
  intent: Intent;
  score: number;
  /** maior semelhança entre uma palavra da pergunta e uma palavra-chave forte (nome de projeto, tecnologia...) */
  strong: number;
}

/**
 * Assistente offline do "Dúvidas?".
 * Liga a pergunta, de forma tolerante (sem acento, com erro de digitação, em PT/EN/ES), aos dados do portfólio
 * e sempre tenta responder algo concreto. Roda inteiro no navegador, sem custo.
 */
export class AssistantEngine {
  private readonly cache = new Map<Lang, Intent[]>();
  private last: Entity | null = null;

  constructor(private readonly data: PortfolioData) {}

  /** esquece o assunto da conversa */
  reset(): void {
    this.last = null;
  }

  answer(question: string, lang: Lang, cvHref = this.data.cv.pt): Reply {
    const intents = this.knowledge(lang, cvHref);
    const t = (key: string, vars: Record<string, string> = {}) =>
      (this.data.i18n[lang][key] ?? this.data.i18n.pt[key] ?? key).replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? '');
    const words = [...new Set(tokens(question))];
    if (!words.length) return this.remember(intents.find((i) => i.id === 'small:help')!);

    const groups = this.detectGroups(words);
    const ranked = this.rank(words, groups, intents);
    const best = ranked[0];

    // 1) pergunta de continuação sobre o último assunto ("e o código?", "quando foi?")
    const attr = ATTRS.find((a) => groups.has(a));
    const otherTopic = [...groups.keys()].some((g) => !(ATTRS as readonly string[]).includes(g));
    if (this.last && attr && !otherTopic && (!best || best.strong < 0.85)) {
      const follow = this.followUp(attr, this.last, intents, t);
      if (follow) return follow;
    }

    // 2) tecnologia que não está no portfólio ("sabe python?")
    const unknown = words.map((w) => OTHER_TECHS.find((o) => similarity(w, o) >= 0.8)).find(Boolean);
    if (unknown && (!best || best.strong < 0.86)) {
      const stack = this.data.skills.flatMap((g) => g.items).slice(0, 6).join(', ');
      const name = unknown.charAt(0).toUpperCase() + unknown.slice(1);
      return { text: t('ans_unknown_tech', { name, stack }), actions: [{ kind: 'section', label: t('act_contact'), value: 'contact' }], follow: [t('fu_projects')] };
    }

    if (!best || best.score < 0.6) return this.closest(ranked, intents, t);

    // um nome reconhecido (projeto, tecnologia, empresa, certificado) vale mais que um assunto genérico
    if (!best.intent.entity) {
      const named = ranked.find((r) => r.intent.entity && r.strong >= 0.7 && r.score >= best.score * 0.75);
      if (named) {
        ranked.splice(ranked.indexOf(named), 1);
        ranked.unshift(named);
      }
    }
    return this.answerRanked(ranked, t);
  }

  private answerRanked(ranked: Scored[], t: (k: string, v?: Record<string, string>) => string): Reply {
    const best = ranked[0];
    const second = ranked[1];

    // 3) empate: mostra um resumo de cada assunto parecido
    //    (se a melhor resposta é um nome reconhecido, só empata com outros nomes, não com assuntos genéricos)
    const ties = ranked
      .filter((r) => r.score >= best.score * 0.85 && r.intent.kind !== 'small' && (!best.intent.entity || r.intent.entity))
      .slice(0, 3);
    if (ties.length > 1) {
      return {
        text: `${t('ans_tie')}\n${ties.map((r) => `• ${r.intent.brief}`).join('\n')}`,
        actions: ties.map((r) => this.pick(r.intent, t)),
        follow: [],
      };
    }

    // 4) resposta direta (confiante) ou com "acho que você quer saber sobre…"
    const confident = best.score >= 2.2 || best.strong >= 0.9 || (second ? best.score >= second.score * 1.6 : best.score >= 1.2);
    const reply = this.remember(best.intent);
    if (confident || !best.intent.label) return reply;
    const alts = ranked.slice(1, 4).filter((r) => r.score >= 0.35 && r.intent.label).map((r) => this.pick(r.intent, t));
    return { ...reply, text: `${t('ans_guess', { label: best.intent.label })}\n${reply.text}`, actions: [...reply.actions, ...alts].slice(0, 5) };
  }

  /** para depurar: assuntos reconhecidos e as 5 intenções mais pontuadas */
  explain(question: string, lang: Lang): { groups: [string, number][]; top: { id: string; score: number; strong: number }[] } {
    const intents = this.knowledge(lang, this.cvHref || this.data.cv.pt);
    const words = [...new Set(tokens(question))];
    const groups = this.detectGroups(words);
    const top = this.rank(words, groups, intents).slice(0, 5).map((r) => ({ id: r.intent.id, score: +r.score.toFixed(2), strong: +r.strong.toFixed(2) }));
    return { groups: [...groups].map(([g, s]) => [g, +s.toFixed(2)]), top };
  }

  // ---------------------------------------------------------------------------

  private knowledge(lang: Lang, cvHref: string): Intent[] {
    const key = lang;
    let intents = this.cache.get(key);
    if (!intents || this.cvHref !== cvHref) {
      this.cvHref = cvHref;
      intents = buildKnowledge({ data: this.data, lang, cvHref });
      this.applyRarity(intents);
      this.cache.set(key, intents);
    }
    return intents;
  }
  private cvHref = '';

  /** palavras que aparecem em muitas intenções valem menos (ex.: "tecnologia"); nomes raros valem mais */
  private applyRarity(intents: Intent[]): void {
    const df = new Map<string, number>();
    for (const i of intents) for (const k of i.keys.keys()) df.set(k, (df.get(k) ?? 0) + 1);
    const n = intents.length;
    for (const i of intents) for (const [k, w] of i.keys) i.keys.set(k, w * Math.min(1.6, Math.log(1 + n / (df.get(k) ?? 1)) / 2));
  }

  /** quais assuntos (@grupos de sinônimos) a pergunta toca, e com que força */
  private detectGroups(words: string[]): Map<string, number> {
    const found = new Map<string, number>();
    for (const [g, list] of SYN_GROUPS) {
      let best = 0;
      for (const w of words) for (const s of list) best = Math.max(best, similarity(w, s));
      if (best >= GROUP_MIN) found.set(g, best);
    }
    return found;
  }

  private rank(words: string[], groups: Map<string, number>, intents: Intent[]): Scored[] {
    const scored: Scored[] = [];
    // palavras de assunto ("projeto", "trabalho", "certificado"...) pesam menos quando batem com nomes
    const genericWords = new Set(words.filter((w) => SYN_GROUPS.some(([, list]) => list.some((s) => similarity(w, s) >= 0.9))));
    for (const intent of intents) {
      let score = 0;
      let strong = 0;
      for (const w of words) {
        let bestW = 0;
        const generic = genericWords.has(w) ? 0.4 : 1;
        for (const [k, weight] of intent.keys) {
          const s = similarity(w, k);
          if (!s) continue;
          bestW = Math.max(bestW, s * s * weight * generic);
          if (weight >= 1.5 && generic === 1 && s > strong) strong = s;
        }
        score += bestW;
      }
      for (const g of intent.groups) score += (groups.get(g) ?? 0) * GROUP_WEIGHT;
      if (score > 0) scored.push({ intent, score, strong });
    }
    return scored.sort((a, b) => b.score - a.score);
  }

  private remember(intent: Intent): Reply {
    if (intent.entity) this.last = intent.entity;
    return intent.reply();
  }

  /** botão que pergunta de novo sobre um assunto */
  private pick(intent: Intent, t: (k: string) => string): ChatAction {
    if (intent.entity?.type === 'project') return { kind: 'project', label: intent.label, value: intent.entity.id };
    return { kind: 'ask', label: intent.label || t('act_section'), value: intent.label };
  }

  /** último recurso: em vez de "não sei", mostra os assuntos mais parecidos */
  private closest(ranked: Scored[], intents: Intent[], t: (k: string, v?: Record<string, string>) => string): Reply {
    const near = ranked.filter((r) => r.score >= 0.3 && r.intent.label && r.intent.kind !== 'small').slice(0, 4);
    if (near.length) {
      return {
        text: `${t('ans_closest')}\n${near.map((r) => `• ${r.intent.brief}`).join('\n')}`,
        actions: [...near.map((r) => this.pick(r.intent, t)), { kind: 'section', label: t('act_contact'), value: 'contact' }],
        follow: [],
      };
    }
    return intents.find((i) => i.id === 'small:help')!.reply();
  }

  /** responde um atributo ("código", "quando", "tecnologias"...) do último assunto da conversa */
  private followUp(attr: (typeof ATTRS)[number], entity: Entity, intents: Intent[], t: (k: string, v?: Record<string, string>) => string): Reply | null {
    if (entity.type === 'project') {
      const p = this.data.projects.find((x) => x.id === entity.id);
      if (!p) return null;
      if (attr === '@code')
        return p.code
          ? { text: t('ans_code', { title: p.title }), actions: [{ kind: 'link', label: t('act_code'), value: p.code }], follow: [t('fu_tech')] }
          : { text: t('ans_no_code', { title: p.title }), actions: [{ kind: 'project', label: t('act_details'), value: p.id }], follow: [] };
      if (attr === '@demo')
        return p.demo
          ? { text: t('ans_demo', { title: p.title }), actions: [{ kind: 'link', label: t('act_demo'), value: p.demo }], follow: [] }
          : { text: t('ans_no_demo', { title: p.title }), actions: [{ kind: 'project', label: t('act_details'), value: p.id }], follow: [t('fu_code')] };
      if (attr === '@techs') return { text: `${p.title}: ${p.tags.join(', ')}.`, actions: [{ kind: 'project', label: t('act_details'), value: p.id }], follow: [t('fu_code')] };
    }
    if ((entity.type === 'job' || entity.type === 'edu') && attr === '@when') {
      const [k, idx] = entity.id.split(':') as ['work' | 'edu', string];
      const item = this.data.timeline[k][+idx];
      const intent = intents.find((i) => i.id === entity.id);
      if (item && intent) return { text: t('ans_when', { title: intent.label, when: typeof item.when === 'string' ? item.when : intent.brief.match(/\(([^)]+)\)$/)?.[1] ?? '' }), actions: [], follow: [] };
    }
    // "mais detalhes": repete o assunto completo
    if (attr !== '@details') return null;
    const intent = intents.find((i) => i.entity?.id === entity.id);
    return intent ? intent.reply() : null;
  }
}
