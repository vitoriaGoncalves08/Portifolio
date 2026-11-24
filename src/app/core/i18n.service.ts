import { Injectable, effect, signal } from '@angular/core';
import { DATA } from '../data/portfolio.data';
import { Lang, Text } from '../models/portfolio.models';
import { storage } from './storage';

const LANGS: Lang[] = ['pt', 'en', 'es'];
const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };

/**
 * Tradução em tempo de execução (PT / EN / ES).
 * - `t('chave')` busca textos fixos em DATA.i18n
 * - `tr(campo)` traduz campos { pt, en, es } dos dados
 * O idioma inicial vem do que foi salvo ou do navegador.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly langs = LANGS;
  readonly lang = signal<Lang>(this.initial());

  constructor() {
    effect(() => {
      const l = this.lang();
      document.documentElement.lang = HTML_LANG[l];
      storage.set('lang', l);
    });
  }

  setLang(l: Lang): void {
    this.lang.set(l);
  }

  t(key: string): string {
    const l = this.lang();
    return DATA.i18n[l][key] ?? DATA.i18n.pt[key] ?? key;
  }

  tr(x: Text | undefined): string {
    if (x == null) return '';
    if (typeof x === 'string') return x;
    return x[this.lang()] ?? x.pt;
  }

  private initial(): Lang {
    const saved = storage.get('lang') as Lang | null;
    if (saved && LANGS.includes(saved)) return saved;
    const nav = (navigator.language || 'pt').toLowerCase();
    return nav.startsWith('en') ? 'en' : nav.startsWith('es') ? 'es' : 'pt';
  }
}
