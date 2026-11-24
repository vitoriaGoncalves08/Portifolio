import { Injectable, effect, signal } from '@angular/core';
import { storage } from './storage';

export type Theme = 'light' | 'dark';

/** Tema claro (off-white, padrão) ou escuro. O valor é salvo e aplicado em <html data-theme>. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>((storage.get('theme') as Theme) || 'light');

  constructor() {
    effect(() => {
      document.documentElement.dataset['theme'] = this.theme();
      storage.set('theme', this.theme());
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
}
