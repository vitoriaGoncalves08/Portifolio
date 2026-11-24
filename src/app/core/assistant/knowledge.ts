import { Lang, Localized, PortfolioData, Text } from '../../models/portfolio.models';
import { tokens } from './text';

/** Botão que aparece embaixo de uma resposta do assistente. */
export interface ChatAction {
  kind: 'project' | 'section' | 'link' | 'cv' | 'ask';
  label: string;
  /** id do projeto, id da seção, URL ou a pergunta a enviar */
  value: string;
}

export interface Reply {
  text: string;
  actions: ChatAction[];
  /** sugestões de próxima pergunta */
  follow: string[];
}

/** Assunto com nome (para perguntas de continuação como "e o código?"). */
export interface Entity {
  type: 'project' | 'tech' | 'job' | 'edu' | 'cert';
  id: string;
}

/** Algo que o assistente sabe responder. */
export interface Intent {
  id: string;
  kind: 'project' | 'tech' | 'job' | 'edu' | 'cert' | 'topic' | 'faq' | 'small' | 'passage';
  /** nome curto do assunto, no idioma atual */
  label: string;
  /** palavra normalizada → peso (já com raridade aplicada pelo motor) */
  keys: Map<string, number>;
  /** assuntos (@grupos de sinônimos) que puxam esta intenção */
  groups: string[];
  entity?: Entity;
  /** resposta curta, usada quando vários assuntos empatam */
  brief: string;
  reply(): Reply;
}

export interface KnowledgeContext {
  data: PortfolioData;
  lang: Lang;
  cvHref: string;
}

/** todas as versões de um texto traduzido (para entender perguntas em qualquer idioma) */
const allLangs = (x: Text | undefined): string =>
  x == null ? '' : typeof x === 'string' ? x : [x.pt, x.en ?? '', x.es ?? ''].join(' ');

/** palavras extras para nomes compostos: "Spring Boot" → também "springboot"; "React.js" → "react" */
function nameKeys(name: string): string[] {
  const t = tokens(name, true);
  const extra = [t.join('')];
  for (const w of t) if (w.endsWith('js') && w.length > 4) extra.push(w.slice(0, -2));
  return [...t, ...extra].filter((w) => w.length > 1);
}

/** adiciona o nome com peso cheio no nome inteiro e peso menor em cada pedaço de nomes compostos */
function addName(map: Map<string, number>, name: string, weight: number): void {
  const parts = tokens(name, true);
  const whole = nameKeys(name).filter((w) => parts.length === 1 || !parts.includes(w));
  addKeys(map, whole, weight);
  if (parts.length > 1) addKeys(map, parts, weight * 0.6);
}

function addKeys(map: Map<string, number>, words: string[], weight: number): void {
  for (const w of words) if (w.length > 1) map.set(w, Math.max(map.get(w) ?? 0, weight));
}

/** Monta todas as intenções a partir dos dados do portfólio, com respostas no idioma pedido. */
export function buildKnowledge(ctx: KnowledgeContext): Intent[] {
  const { data, lang } = ctx;
  const t = (key: string, vars: Record<string, string | number> = {}): string => {
    const raw = data.i18n[lang][key] ?? data.i18n.pt[key] ?? key;
    return raw.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ''));
  };
  const tr = (x: Text | undefined): string => (x == null ? '' : typeof x === 'string' ? x : x[lang] ?? x.pt);
  const list = (items: string[]) => items.map((i) => `• ${i}`).join('\n');
  const intents: Intent[] = [];
  const contactAction = (): ChatAction => ({ kind: 'section', label: t('act_contact'), value: 'contact' });
  const reply = (text: string, actions: ChatAction[] = [], follow: string[] = []): Reply => ({ text, actions, follow });

  // ---------- projetos ----------
  for (const p of data.projects) {
    const keys = new Map<string, number>();
    addName(keys, p.title, 3);
    addKeys(keys, [p.id], 3);
    for (const tag of p.tags) addName(keys, tag, 1.2);
    addKeys(keys, tokens(p.cat), 1);
    addKeys(keys, tokens([p.problem, p.solution, p.arch, p.challenges, p.result].map(allLangs).join(' ')), 0.5);
    // a descrição curta diz do que o projeto trata (ex.: "Libras", "loja virtual"): pesa mais que o resto do texto
    addKeys(keys, tokens(allLangs(p.desc)), 1.1);
    const projectActions = (): ChatAction[] => [
      { kind: 'project', label: t('act_details'), value: p.id },
      ...(p.code ? [{ kind: 'link' as const, label: t('act_code'), value: p.code }] : []),
      ...(p.demo ? [{ kind: 'link' as const, label: t('act_demo'), value: p.demo }] : []),
    ];
    intents.push({
      id: 'project:' + p.id,
      kind: 'project',
      label: p.title,
      keys,
      groups: [],
      entity: { type: 'project', id: p.id },
      brief: `${p.title} — ${tr(p.desc)}`,
      reply: () =>
        reply(t('ans_project', { title: p.title, cat: p.cat, desc: tr(p.desc), tags: p.tags.join(', ') }), projectActions(), [t('fu_code'), t('fu_projects')]),
    });
  }

  // ---------- tecnologias (skills + tags dos projetos) ----------
  const groupOf = new Map<string, string>();
  for (const g of data.skills) for (const it of g.items) groupOf.set(it, tr(g.t));
  const techNames = [...new Set([...data.skills.flatMap((g) => g.items), ...data.projects.flatMap((p) => p.tags)])];
  for (const name of techNames) {
    const used = data.projects.filter((p) => p.tags.includes(name));
    const keys = new Map<string, number>();
    addName(keys, name, 3);
    const group = groupOf.get(name);
    intents.push({
      id: 'tech:' + name,
      kind: 'tech',
      label: name,
      keys,
      groups: [],
      entity: { type: 'tech', id: name },
      brief: group ? t('ans_tech_skill', { name, group }) : t('ans_tech_only', { name, projects: used.map((p) => p.title).join(', ') }),
      reply: () => {
        const names = used.map((p) => p.title).join(', ');
        const text = group
          ? t('ans_tech_skill', { name, group }) + (used.length ? '\n' + t('ans_tech_used', { projects: names }) : '')
          : t('ans_tech_only', { name, projects: names });
        const actions: ChatAction[] = used.slice(0, 3).map((p) => ({ kind: 'project', label: p.title, value: p.id }));
        if (!used.length) actions.push({ kind: 'section', label: t('act_section'), value: 'skills' });
        return reply(text, actions, [t('fu_projects'), t('fu_work')]);
      },
    });
  }

  // ---------- trajetória ----------
  for (const k of ['work', 'edu'] as const) {
    data.timeline[k].forEach((item, idx) => {
      const keys = new Map<string, number>();
      addKeys(keys, tokens(item.org), 3);
      addKeys(keys, tokens(allLangs(item.t)), 2);
      addKeys(keys, tokens(allLangs(item.d) + ' ' + allLangs(item.hl)), 0.5);
      const when = tr(item.when);
      const text =
        k === 'work'
          ? t('ans_job', { role: tr(item.t), org: item.org, when, d: tr(item.d) })
          : t('ans_edu_item', { course: tr(item.t), org: item.org, when, d: tr(item.d) }) + (item.hl ? `\n★ ${tr(item.hl)}` : '');
      intents.push({
        id: `${k}:${idx}`,
        kind: k === 'work' ? 'job' : 'edu',
        label: `${tr(item.t)} — ${item.org}`,
        keys,
        groups: [],
        entity: { type: k === 'work' ? 'job' : 'edu', id: `${k}:${idx}` },
        brief: `${tr(item.t)} — ${item.org} (${when})`,
        reply: () => reply(text, [{ kind: 'section', label: t('act_section'), value: 'journey' }], [t('fu_projects'), t('fu_contact')]),
      });
    });
  }

  // ---------- badges e certificados ----------
  for (const c of [...data.badges.map((b) => ({ t: b.t, org: b.org, date: b.date, url: b.url, ab: b.ab })), ...data.certs.map((c) => ({ ...c, ab: '' }))]) {
    const keys = new Map<string, number>();
    addKeys(keys, tokens(c.t), 3);
    addKeys(keys, tokens(c.org + ' ' + c.ab), 2.5);
    intents.push({
      id: 'cert:' + c.t,
      kind: 'cert',
      label: c.t,
      keys,
      groups: [],
      entity: { type: 'cert', id: c.t },
      brief: t('ans_cert', { title: c.t, org: c.org, date: c.date }),
      reply: () =>
        reply(
          t('ans_cert', { title: c.t, org: c.org, date: c.date }),
          [...(c.url ? [{ kind: 'link' as const, label: t('cert_view'), value: c.url }] : []), { kind: 'section', label: t('act_section'), value: 'certs' }],
          [t('fu_projects')],
        ),
    });
  }

  // ---------- hobbies ----------
  for (const h of data.hobbies) {
    const keys = new Map<string, number>();
    addKeys(keys, tokens(allLangs(h.t)), 3);
    addKeys(keys, tokens(allLangs(h.d)), 0.6);
    intents.push({
      id: 'hobby:' + h.t.pt,
      kind: 'topic',
      label: tr(h.t),
      keys,
      groups: [],
      brief: t('ans_hobby', { t: tr(h.t), d: tr(h.d) }),
      reply: () => reply(t('ans_hobby', { t: tr(h.t), d: tr(h.d) }), [{ kind: 'section', label: t('act_section'), value: 'about' }]),
    });
  }

  // ---------- assuntos gerais (puxados pelos grupos de sinônimos) ----------
  const topic = (id: string, label: string, groups: string[], text: () => string, actions: () => ChatAction[] = () => [], follow: () => string[] = () => []) =>
    intents.push({ id, kind: 'topic', label, keys: new Map(), groups, brief: text().split('\n')[0], reply: () => reply(text(), actions(), follow()) });

  topic('topic:projects', t('nav_projects'), ['@project'],
    () => t('ans_projects', { n: data.projects.length, list: list(data.projects.map((p) => `${p.title} — ${tr(p.desc)}`)) }),
    () => data.projects.slice(0, 4).map((p) => ({ kind: 'project', label: p.title, value: p.id })));
  topic('topic:skills', t('nav_skills'), ['@skill'],
    () => t('ans_skills', { list: list(data.skills.map((g) => `${tr(g.t)}: ${g.items.join(', ')}`)) }),
    () => [{ kind: 'section', label: t('act_section'), value: 'skills' }], () => [t('fu_projects')]);
  topic('topic:work', t('tl_work'), ['@work'],
    () => t('ans_work', { list: list(data.timeline.work.map((i) => `${tr(i.t)} — ${i.org} (${tr(i.when)})`)) }),
    () => [{ kind: 'section', label: t('act_section'), value: 'journey' }], () => [t('fu_projects'), t('fu_contact')]);
  topic('topic:edu', t('tl_edu'), ['@edu'],
    () => t('ans_edu', { list: list(data.timeline.edu.map((i) => `${tr(i.t)} — ${i.org} (${tr(i.when)})`)) }),
    () => [{ kind: 'section', label: t('act_section'), value: 'journey' }]);
  topic('topic:certs', t('nav_certs'), ['@cert'],
    () => t('ans_certs', { badges: data.badges.map((b) => b.t).join(', '), certs: data.certs.map((c) => c.t).join(', ') }),
    () => [{ kind: 'section', label: t('act_section'), value: 'certs' }]);
  topic('topic:langs', t('langs_t'), ['@lang'], () => t('ans_langs', { list: data.languages.map(tr).join('; ') }));
  topic('topic:hobbies', t('about_hobby_t'), ['@hobby'],
    () => t('ans_hobbies', { list: data.hobbies.map((h) => tr(h.t)).join(', ') }),
    () => [{ kind: 'section', label: t('act_section'), value: 'about' }]);
  topic('topic:services', t('nav_services'), ['@service'],
    () => t('ans_services', { list: list(data.services.map((s) => `${tr(s.t)} — ${tr(s.d)}`)) }),
    () => [contactAction()]);
  topic('topic:location', t('topic_location'), ['@location'], () => t('ans_location'));
  topic('topic:avail', t('topic_avail'), ['@avail'], () => t('ans_avail'), () => [contactAction()]);
  topic('topic:contact', t('topic_contact'), ['@contact'], () => t('ans_contact'),
    () => [...data.contacts.filter((c) => !c.url.includes('seu')).map((c) => ({ kind: 'link' as const, label: c.n, value: c.url })), contactAction()]);
  topic('topic:cv', 'CV', ['@cv'], () => t('ans_cv'), () => [{ kind: 'cv', label: t('act_cv'), value: ctx.cvHref }]);
  topic('small:greet', '', ['@greet'], () => t('ans_greet'), () => [], () => [t('fu_projects'), t('fu_work')]);
  topic('small:thanks', '', ['@thanks'], () => t('ans_thanks'), () => [contactAction()]);
  topic('small:who', '', ['@who'], () => t('ans_who'), () => [], () => [t('fu_projects')]);
  topic('small:help', '', ['@help'], () => t('ans_help'), () => [], () => [t('fu_projects'), t('fu_work'), t('fu_contact')]);
  for (const i of intents) if (i.id.startsWith('small:')) i.kind = 'small';

  // ---------- FAQ escrito à mão ----------
  data.faq.forEach((f, idx) => {
    const keys = new Map<string, number>();
    for (const k of f.k) addKeys(keys, tokens(k, true), 2);
    const text = tr(f.a as Localized);
    intents.push({ id: 'faq:' + idx, kind: 'faq', label: f.k[0], keys, groups: [], brief: text, reply: () => reply(text, [contactAction()]) });
  });

  // ---------- trechos de texto do site (busca no texto inteiro) ----------
  const passages: [string, Text][] = [
    ['about', data.i18n.pt['about_pro'] ? { pt: data.i18n.pt['about_pro'], en: data.i18n.en['about_pro'], es: data.i18n.es['about_pro'] } : ''],
    ['hero', { pt: data.i18n.pt['tagline'], en: data.i18n.en['tagline'], es: data.i18n.es['tagline'] }],
    ...data.services.map((s): [string, Text] => ['services', { pt: `${s.t.pt} — ${s.d.pt}`, en: `${s.t.en} — ${s.d.en}`, es: `${s.t.es} — ${s.d.es}` }]),
  ];
  passages.forEach(([section, txt], idx) => {
    const keys = new Map<string, number>();
    addKeys(keys, tokens(allLangs(txt)), 0.45);
    intents.push({
      id: `passage:${idx}`,
      kind: 'passage',
      label: tr(txt).slice(0, 40),
      keys,
      groups: [],
      brief: tr(txt),
      reply: () => reply(`${t('ans_passage')}\n“${tr(txt)}”`, [{ kind: 'section', label: t('act_section'), value: section }]),
    });
  });

  return intents;
}
