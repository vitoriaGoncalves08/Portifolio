/** Minúsculas e sem acento: "Cerâmica" → "ceramica". */
export const norm = (s: string): string =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

/** Palavras que não ajudam a entender a pergunta (PT, EN, ES). */
const STOP = new Set(
  (
    'a o e os as um uma uns umas de do da dos das no na nos nas em por para pra pro com sem que qual quais ' +
    'como e eh ser foi sao tem ter ja mais muito pouco isso isto esse essa ele ela eles elas voce vc seu sua ' +
    'me mim meu minha te ti se ao aos ou mas tambem sobre ate entre pelo pela pelos pelas onde quando quanto ' +
    'the an of to in on at for with by from is are was were be been do does did have has had it its this that ' +
    'these those she her he his you your i me my we our they them can could would should will about what which ' +
    'el la los las un una unos unas del al y en con por para que como es son fue tiene tener su sus ella ' +
    'usted tu te lo le les se sobre muy mas tambien donde cual cuales ' +
    'como quero queria gostaria saber sei pode poderia where does doe did how want would like tell ' +
    'fala fale conta conte explica explique faz fez fazer faco fiz feito'
  ).split(' '),
);

/** Corte simples de plural/flexão: "projetos" → "projeto", "certificacoes" → "certificacao". */
export function stem(w: string): string {
  if (w.length <= 4) return w;
  if (w.endsWith('coes')) return w.slice(0, -4) + 'cao';
  if (w.endsWith('oes')) return w.slice(0, -3) + 'ao';
  if (w.endsWith('ais')) return w.slice(0, -3) + 'al';
  if (w.endsWith('es') && w.length > 5 && /[rzl]es$/.test(w)) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}

/** Normaliza, separa em palavras, tira as vazias e aplica o corte de plural. */
export function tokens(s: string, keepStop = false): string[] {
  return norm(s)
    .replace(/c#/g, 'csharp')
    .replace(/\.net/g, 'dotnet')
    .replace(/node\.js/g, 'nodejs')
    .replace(/react\.js/g, 'reactjs')
    .replace(/[^a-z0-9+]+/g, ' ')
    .split(' ')
    .filter((w) => w.length > 0 && (keepStop || !STOP.has(w)))
    .map(stem);
}
