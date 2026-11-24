import { Injectable, effect, signal } from '@angular/core';
import { storage } from './storage';

export type Theme = 'light' | 'dark';
export type Accent = 'neutral' | 'wine' | 'brown' | 'denim';

/** Cores de destaque disponíveis. `swatch` é só a amostra do menu; as cores reais ficam em styles.css. */
export const ACCENTS: { id: Accent; swatch: string }[] = [
  { id: 'neutral', swatch: '#2a2a27' },
  { id: 'wine', swatch: '#6a1220' },
  { id: 'brown', swatch: '#5b3a22' },
  { id: 'denim', swatch: '#2f4a6b' },
];

/**
 * Tema claro (off-white, padrão) ou escuro + cor dos detalhes (botões, filtros, linha do tempo...).
 * Os valores são salvos e aplicados em <html data-theme="..." data-accent="...">.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly accents = ACCENTS;
  readonly theme = signal<Theme>((storage.get('theme') as Theme) || 'light');
  readonly accent = signal<Accent>(
    ACCENTS.some((a) => a.id === storage.get('accent')) ? (storage.get('accent') as Accent) : 'neutral',
  );

  constructor() {
    effect(() => {
      document.documentElement.dataset['theme'] = this.theme();
      storage.set('theme', this.theme());
    });
    effect(() => {
      document.documentElement.dataset['accent'] = this.accent();
      storage.set('accent', this.accent());
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
}
