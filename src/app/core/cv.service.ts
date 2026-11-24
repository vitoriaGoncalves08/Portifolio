import { Injectable, effect, inject, signal } from '@angular/core';
import { DATA } from '../data/portfolio.data';
import { Lang } from '../models/portfolio.models';
import { I18nService } from './i18n.service';

/**
 * Link do botão "Baixar CV" conforme o idioma do site.
 * Se o PDF do idioma não existir em public/assets, usa o CV em português.
 */
@Injectable({ providedIn: 'root' })
export class CvService {
  private readonly i18n = inject(I18nService);
  private readonly exists = new Map<Lang, boolean>();
  readonly href = signal(DATA.cv.pt);

  constructor() {
    effect(() => {
      const l = this.i18n.lang();
      this.resolve(l).then((h) => {
        if (this.i18n.lang() === l) this.href.set(h);
      });
    });
  }

  private async resolve(l: Lang): Promise<string> {
    if (!this.exists.has(l)) {
      try {
        this.exists.set(l, (await fetch(DATA.cv[l], { method: 'HEAD' })).ok);
      } catch {
        this.exists.set(l, false);
      }
    }
    return this.exists.get(l) ? DATA.cv[l] : DATA.cv.pt;
  }
}
