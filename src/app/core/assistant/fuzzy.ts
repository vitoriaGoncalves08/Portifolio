/** Distância de edição (inserir, apagar, trocar uma letra). */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev2: number[] = [];
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      // troca de duas letras vizinhas conta como um erro só ("angluar" × "angular")
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur.push(v);
    }
    prev2 = prev;
    prev = cur;
  }
  return prev[b.length];
}

const gramCache = new Map<string, Set<string>>();
function grams(w: string): Set<string> {
  let g = gramCache.get(w);
  if (!g) {
    g = new Set<string>();
    const p = `  ${w} `;
    for (let i = 0; i < p.length - 2; i++) g.add(p.slice(i, i + 3));
    gramCache.set(w, g);
  }
  return g;
}

/** Semelhança por pedaços de 3 letras (coeficiente de Dice). */
function trigram(a: string, b: string): number {
  const ga = grams(a);
  const gb = grams(b);
  let common = 0;
  for (const g of ga) if (gb.has(g)) common++;
  return (2 * common) / (ga.size + gb.size);
}

/**
 * Quão parecidas são duas palavras já normalizadas, de 0 a 1. Tolerante de propósito:
 * aceita erro de digitação, começo da palavra, palavra dentro de outra e palavras coladas.
 */
export function similarity(q: string, k: string): number {
  if (q === k) return 1;
  // palavras muito curtas ("js", "ia") só valem se forem iguais
  if (q.length < 3 || k.length < 3) return 0;
  let best = 0;
  // começo da palavra: "micro" → "microsservico", "cert" → "certificacao"
  if (k.startsWith(q)) best = Math.max(best, 0.72 + 0.25 * (q.length / k.length));
  if (k.length >= 4 && q.startsWith(k)) best = Math.max(best, 0.45 + 0.4 * (k.length / q.length));
  // palavra dentro da outra: "springboot" contém "spring", "boot" está em "springboot"
  if (q.length >= 5 && k.includes(q)) best = Math.max(best, 0.6);
  if (k.length >= 5 && q.includes(k)) best = Math.max(best, 0.6);
  // erro de digitação proporcional ao tamanho
  const len = Math.max(q.length, k.length);
  if (len >= 4) best = Math.max(best, 1 - levenshtein(q, k) / len);
  best = Math.max(best, trigram(q, k));
  return best >= 0.55 ? best : 0;
}
