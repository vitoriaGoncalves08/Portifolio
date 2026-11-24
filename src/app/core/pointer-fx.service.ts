import { Injectable } from '@angular/core';
import { prefersReducedMotion } from './storage';

/**
 * Efeitos de mouse (só em dispositivos com ponteiro fino):
 * cursor customizado, brilho que segue o mouse e inclinação 3D dos cards.
 */
@Injectable({ providedIn: 'root' })
export class PointerFxService {
  private started = false;

  start(): void {
    if (this.started || prefersReducedMotion() || !matchMedia('(pointer: fine)').matches) return;
    this.started = true;
    const cur = document.querySelector<HTMLElement>('.cursor');
    const root = document.documentElement;
    document.body.classList.add('has-cursor');

    addEventListener('mousemove', (e) => {
      root.style.setProperty('--mx', e.clientX + 'px');
      root.style.setProperty('--my', e.clientY + 'px');
      if (cur) {
        cur.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        cur.classList.add('on');
      }
      const card = (e.target as Element).closest<HTMLElement>('.card');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--ry', ((e.clientX - r.left) / r.width - 0.5) * 8 + 'deg');
        card.style.setProperty('--rx', (0.5 - (e.clientY - r.top) / r.height) * 8 + 'deg');
      }
    });
    document.addEventListener('mouseover', (e) => {
      cur?.classList.toggle('big', !!(e.target as Element).closest('a,button,.card'));
    });
    document.addEventListener('mouseout', (e) => {
      const card = (e.target as Element).closest<HTMLElement>('.card');
      if (card) {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      }
    });
  }
}
