import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';
import { prefersReducedMotion } from '../core/storage';

/**
 * Revela o elemento quando ele entra na tela.
 * - `appReveal` (ou `appReveal="block"`): blocos com fade + desfoque (classe .rv)
 * - `appReveal="item"` + `[revealIndex]`: itens de lista em cascata (classe .rv-i)
 * Os estilos ficam em styles.css (.rv, .rv-i, .in).
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnDestroy {
  readonly appReveal = input<'block' | 'item' | ''>('block');
  readonly revealIndex = input(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const item = this.appReveal() === 'item';
      if (prefersReducedMotion()) return;
      this.el.classList.add(item ? 'rv-i' : 'rv');
      if (item) this.el.style.setProperty('--d', (this.revealIndex() % 4) * 90 + 'ms');
      else this.el.style.transitionDelay = (this.revealIndex() % 3) * 90 + 'ms';
      this.io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              this.el.classList.add('in');
              this.io?.disconnect();
            }
          }
        },
        { threshold: item ? 0.08 : 0.12, rootMargin: '0px 0px -4% 0px' },
      );
      this.io.observe(this.el);
    });
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
