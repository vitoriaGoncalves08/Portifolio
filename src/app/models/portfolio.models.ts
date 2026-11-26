/** Idiomas suportados pelo site. */
export type Lang = 'pt' | 'en' | 'es';

/** Texto traduzido. `pt` é obrigatório e serve de fallback. */
export interface Localized {
  pt: string;
  en?: string;
  es?: string;
}

/** Texto que pode ser traduzido ou igual em todos os idiomas. */
export type Text = string | Localized;

export interface Stat { n: string; l: Localized; }

/** Hobby: vira um livro na estante do Sobre. `t` vai na lombada; `d` aparece ao passar o mouse ou tocar. */
export interface Hobby { t: Localized; d: Localized; /** o que o hobby traz para o trabalho */ gains: Localized[]; }

export interface SkillGroup { t: Text; items: string[]; }

export interface Project {
  id: string;
  title: string;
  tags: string[];
  cat: string;
  emoji: string;
  /** cores da vitrine: [principal, fundo escuro, brilho] — combine com a imagem do projeto */
  tone?: [string, string, string];
  /** 'wip' = em construção (mostra um selo e listras na vitrine) */
  status?: 'wip';
  /** caminho da imagem/screenshot (opcional), ex.: assets/projects/saga.png */
  img?: string;
  /** imagens extras mostradas no carrossel do modal (a primeira do carrossel é sempre `img`) */
  imgs?: string[];
  desc: Localized;
  problem: Localized;
  solution: Localized;
  arch: Localized;
  challenges: Localized;
  result: Localized;
  code?: string;
  demo?: string;
}

export interface TimelineItem {
  when: Text;
  t: Text;
  org: string;
  d: Localized;
  /** destaque exibido como selo no card */
  hl?: Localized;
  /** destaques (até 4), mostrados em "Saiba mais" */
  points?: Localized[];
  /** selos de empresas/órgãos integrados (ids em sections/journey.ts) */
  logos?: string[];
  /** título acima dos selos (padrão: "Integrações em produção") */
  logosTitle?: Localized;
  /** fixa no topo da trajetória com mais destaque */
  featured?: boolean;
}

export interface Service { t: Localized; d: Localized; }

export interface Badge { t: string; ab: string; org: string; date: string; img?: string; url?: string; }

export interface Cert { kind: 'course' | 'certification'; t: string; org: string; date: string; img: string; url?: string; }

export interface Testimonial { q: Localized; who: string; role: string; }

export interface Contact { n: string; slug: string; h: string; url: string; }

export interface Faq { k: string[]; a: Localized; }

export interface PortfolioData {
  i18n: Record<Lang, Record<string, string>>;
  cv: Record<Lang, string>;
  stats: Stat[];
  languages: Localized[];
  hobbies: Hobby[];
  skills: SkillGroup[];
  /** nível de 0 a 10 por skill */
  skillLevels: Record<string, number>;
  /** tecnologias mostradas no filtro de projetos */
  projectFilterTags: string[];
  projects: Project[];
  timeline: { work: TimelineItem[]; edu: TimelineItem[] };
  services: Service[];
  badges: Badge[];
  badgeSlots: number;
  certs: Cert[];
  testimonials: Testimonial[];
  contacts: Contact[];
  faq: Faq[];
  suggestions: Record<Lang, string[]>;
}
