import { Injectable } from '@angular/core';
import { prefersReducedMotion } from './storage';

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];

/**
 * Efeitos ligados ao scroll, num único listener com requestAnimationFrame:
 * - barra de progresso de leitura
 * - logo gigante do hero (parallax + escala) e hero que sobe/esmaece
 * - títulos de seção que deslizam e se preenchem
 * - linha do tempo que se preenche e acende os pontos
 * - mockups dos projetos com parallax
 * - frase da seção Serviços que acende palavra por palavra
 */
@Injectable({ providedIn: 'root' })
export class ScrollFxService {
  private started = false;
  private queued = false;

  start(): void {
    if (this.started || prefersReducedMotion()) return;
    this.started = true;
    const onScroll = () => {
      if (this.queued) return;
      this.queued = true;
      requestAnimationFrame(() => {
        this.queued = false;
        this.update();
      });
    };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    this.update();
  }

  /** Recalcula tudo (útil depois de trocar idioma ou filtrar projetos). */
  refresh(): void {
    if (this.started) requestAnimationFrame(() => this.update());
  }

  private update(): void {
    const h = document.documentElement;
    const y = scrollY;
    const vh = innerHeight;

    const bar = $('.progress');
    if (bar) bar.style.transform = `scaleX(${y / (h.scrollHeight - h.clientHeight || 1)})`;

    const big = $('#bigYear');
    if (big) big.style.transform = `translateY(${y * 0.28}px) scale(${1 + y / 4000})`;

    const heroIn = $('.hero-in');
    if (heroIn && y < vh * 1.3) {
      heroIn.style.transform = `translateY(${y * 0.2}px)`;
      heroIn.style.opacity = String(clamp(1 - y / (vh * 0.8)));
    }

    for (const t of $$('.sec h2')) {
      const r = t.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      t.style.translate = `${((r.top + r.height / 2 - vh / 2) / vh) * -70}px 0`;
      t.style.setProperty('--f', clamp((vh * 0.88 - r.top) / (vh * 0.4)) * 100 + '%');
    }

    const tl = $('#timeline');
    if (tl) {
      const r = tl.getBoundingClientRect();
      const line = vh * 0.55;
      tl.style.setProperty('--p', clamp((line - r.top) / r.height).toFixed(3));
      for (const li of $$('.tl-i', tl)) {
        const node = $('.node', li);
        if (node) li.classList.toggle('act', node.getBoundingClientRect().top + 10 < line);
      }
    }

    for (const m of $$('.proj-card .mock')) {
      const r = m.parentElement!.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      m.style.setProperty('--py', (((r.top + r.height / 2 - vh / 2) / vh) * -26).toFixed(1) + 'px');
    }

    for (const s of $$('.statement')) {
      const words = $$('.w', s);
      const r = s.getBoundingClientRect();
      const p = clamp((vh * 0.88 - r.top) / (vh * 0.48 + r.height));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('lit', i < n));
    }
  }
}
