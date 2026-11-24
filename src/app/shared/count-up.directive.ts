import { Directive, ElementRef, OnDestroy, afterNextRender, effect, inject, input } from '@angular/core';
import { prefersReducedMotion } from '../core/storage';

/** Conta de 0 até o número (ex.: "4+", "20") quando o elemento aparece na tela. */
@Directive({ selector: '[appCountUp]' })
export class CountUpDirective implements OnDestroy {
  readonly appCountUp = input.required<string>();
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;
  private done = false;

  constructor() {
    effect(() => {
      const v = this.appCountUp();
      if (this.done || prefersReducedMotion()) this.el.textContent = v;
    });
    afterNextRender(() => {
      if (prefersReducedMotion()) return;
      const m = this.appCountUp().match(/^(\d+)(.*)$/);
      if (!m) {
        this.el.textContent = this.appCountUp();
        return;
      }
      this.el.textContent = '0' + m[2];
      this.io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          this.io?.disconnect();
          const end = +m[1];
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / 1400, 1);
            this.el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + m[2];
            if (p < 1) requestAnimationFrame(tick);
            else this.done = true;
          };
          requestAnimationFrame(tick);
        },
        { threshold: 0.6 },
      );
      this.io.observe(this.el);
    });
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
