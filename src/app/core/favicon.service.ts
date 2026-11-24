import { Injectable, effect, inject } from '@angular/core';
import { ThemeService } from './theme.service';

const SIZE = 64;
const load = (src: string) =>
  new Promise<HTMLImageElement>((ok, fail) => {
    const img = new Image();
    img.onload = () => ok(img);
    img.onerror = fail;
    img.src = src;
  });

/**
 * Favicon desenhado na hora com as cores do tema e da cor de destaque:
 * quadrado arredondado na cor de fundo do site + logo nas cores do tema.
 * Se algo falhar, fica o favicon.png estático.
 */
@Injectable({ providedIn: 'root' })
export class FaviconService {
  private readonly theme = inject(ThemeService);
  private masks?: Promise<[HTMLImageElement, HTMLImageElement]>;

  constructor() {
    effect(() => {
      this.theme.theme();
      this.theme.accent();
      // espera o CSS aplicar as novas variáveis
      if (this.masks) setTimeout(() => this.draw().catch(() => undefined));
    });
  }

  /** chamado depois do primeiro render (no navegador) */
  start(): void {
    this.masks = Promise.all([load('assets/logo/logo-a.png'), load('assets/logo/logo-b.png')]);
    setTimeout(() => this.draw().catch(() => undefined));
  }

  private async draw(): Promise<void> {
    const [a, b] = await this.masks!;
    const css = getComputedStyle(document.documentElement);
    const v = (name: string) => css.getPropertyValue(name).trim();

    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = SIZE;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = v('--bg');
    ctx.beginPath();
    ctx.roundRect(0, 0, SIZE, SIZE, 14);
    ctx.fill();

    // logo centralizado com margem
    const pad = 8;
    const scale = Math.min((SIZE - pad * 2) / a.width, (SIZE - pad * 2) / a.height);
    const w = a.width * scale;
    const h = a.height * scale;
    const x = (SIZE - w) / 2;
    const y = (SIZE - h) / 2;
    for (const [img, color] of [[b, v('--mut')], [a, v('--ac-t')]] as const) {
      const layer = document.createElement('canvas');
      layer.width = layer.height = SIZE;
      const lc = layer.getContext('2d')!;
      lc.drawImage(img, x, y, w, h);
      lc.globalCompositeOperation = 'source-in';
      lc.fillStyle = color;
      lc.fillRect(0, 0, SIZE, SIZE);
      ctx.drawImage(layer, 0, 0);
    }

    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = canvas.toDataURL('image/png');
  }
}
