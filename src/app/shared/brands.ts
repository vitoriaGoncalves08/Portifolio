/**
 * Selos das empresas/órgãos com que houve integração (usados em `logos` na trajetória).
 * São monogramas nas cores de cada marca, não os logos oficiais.
 * Para incluir outro: adicione aqui e use o id em `logos` no portfolio.data.ts.
 */
export const BRANDS: Record<string, { name: string; mark: string; bg: string; fg: string }> = {
  itau: { name: 'Itaú', mark: 'itaú', bg: '#ec7000', fg: '#1c2a7c' },
  bb: { name: 'Banco do Brasil', mark: 'BB', bg: '#fcfc30', fg: '#465eff' },
  receita: { name: 'Receita Federal', mark: 'RF', bg: '#0c326f', fg: '#ffcd07' },
};
