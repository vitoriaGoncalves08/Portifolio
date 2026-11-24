import { Component, computed, effect, input, signal } from '@angular/core';

/**
 * Carrossel de imagens do modal de projeto.
 * Setas, bolinhas, contador, teclado (← →) e arrastar com o dedo/mouse.
 */
@Component({
  selector: 'app-gallery',
  host: {
    class: 'gallery',
    tabindex: '0',
    role: 'region',
    'aria-roledescription': 'carrossel',
    '[attr.aria-label]': 'title()',
    '(keydown.arrowleft)': 'go(-1)',
    '(keydown.arrowright)': 'go(1)',
  },
  template: `
    <div class="g-track" [style.transform]="'translateX(' + (-index() * 100) + '%)'"
         (pointerdown)="down($event)" (pointerup)="up($event)" (pointercancel)="startX = null">
      @for (src of images(); track src; let i = $index) {
        <figure class="g-slide" [attr.aria-hidden]="i !== index()">
          <img [src]="src" [alt]="title() + ' — ' + (i + 1) + '/' + images().length" draggable="false"
               [attr.loading]="i === 0 ? 'eager' : 'lazy'" />
        </figure>
      }
    </div>
    <button type="button" class="g-nav prev" aria-label="Imagem anterior" (click)="go(-1)">‹</button>
    <button type="button" class="g-nav next" aria-label="Próxima imagem" (click)="go(1)">›</button>
    <div class="g-dots">
      @for (src of images(); track src; let i = $index) {
        <button type="button" [class.on]="i === index()" [attr.aria-label]="'Imagem ' + (i + 1)"
                [attr.aria-current]="i === index()" (click)="index.set(i)"></button>
      }
    </div>
    <span class="g-count mono" aria-live="polite">{{ index() + 1 }} / {{ images().length }}</span>`,
})
export class Gallery {
  readonly images = input.required<string[]>();
  readonly title = input('');
  protected readonly index = signal(0);
  /** identidade da lista (texto), para só voltar ao início quando as imagens realmente mudarem */
  private readonly key = computed(() => this.images().join('|'));
  protected startX: number | null = null;

  constructor() {
    // volta para a primeira imagem quando o projeto muda
    effect(() => {
      this.key();
      this.index.set(0);
    });
  }

  protected go(step: number): void {
    const n = this.images().length;
    this.index.update((i) => (i + step + n) % n);
  }

  protected down(e: PointerEvent): void {
    this.startX = e.clientX;
  }

  protected up(e: PointerEvent): void {
    if (this.startX == null) return;
    const dx = e.clientX - this.startX;
    this.startX = null;
    if (Math.abs(dx) > 40) this.go(dx < 0 ? 1 : -1);
  }
}
