import { Component, ElementRef, OnDestroy, afterNextRender, viewChild } from '@angular/core';
import { prefersReducedMotion } from '../core/storage';
import { DATA } from '../data/portfolio.data';

/** Faixa em loop com as skills. Acelera e inverte de direção conforme a velocidade do scroll; pausa no hover. */
@Component({
  selector: 'app-marquee',
  template: `
    <div class="marquee" aria-hidden="true" (mouseenter)="hover = true" (mouseleave)="hover = false">
      <div class="track" #track>
        @for (i of items; track $index) {<span>{{ i }}</span>}
      </div>
    </div>`,
})
export class Marquee implements OnDestroy {
  /** itens repetidos 2x para o loop não ter emenda */
  protected readonly items = (() => {
    const all = DATA.skills.flatMap((g) => g.items);
    return [...all, ...all];
  })();
  protected hover = false;
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  private raf = 0;

  constructor() {
    afterNextRender(() => {
      if (prefersReducedMotion()) return;
      const el = this.track().nativeElement;
      let x = 0, last = scrollY, v = 0;
      const loop = () => {
        const d = scrollY - last;
        last = scrollY;
        v += (d - v) * 0.08;
        const half = el.scrollWidth / 2 || 1;
        x += this.hover ? 0 : -0.7 - v * 0.6;
        if (x < -half) x += half;
        if (x > 0) x -= half;
        el.style.transform = `translate3d(${x}px,0,0)`;
        this.raf = requestAnimationFrame(loop);
      };
      loop();
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
  }
}
