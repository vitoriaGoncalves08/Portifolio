import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { DATA } from '../data/portfolio.data';
import { CountUpDirective } from '../shared/count-up.directive';
import { RevealDirective } from '../shared/reveal.directive';

/** Sobre: texto profissional, números, idiomas e uma estante em que cada livro é um hobby. */
@Component({
  selector: 'app-about',
  imports: [CountUpDirective, RevealDirective],
  template: `
    <section id="about" class="sec">
      <div class="wrap">
        <h2 appReveal>{{ i18n.t('nav_about') }}</h2>
        <div class="grid-2" appReveal [revealIndex]="1">
          <div>
            <h3>{{ i18n.t('about_pro_t') }}</h3>
            <p>{{ i18n.t('about_pro') }}</p>
          </div>
          <div>
            <div class="stats">
              @for (s of data.stats; track $index) {
                <div class="stat"><b [appCountUp]="s.n"></b><span>{{ i18n.tr(s.l) }}</span></div>
              }
            </div>
            <h3>{{ i18n.t('langs_t') }}</h3>
            <ul class="plain">
              @for (l of data.languages; track $index) {<li>{{ i18n.tr(l) }}</li>}
            </ul>
          </div>
        </div>

        <div class="hobby-wrap" appReveal [revealIndex]="2">
          <div class="hobby-text">
            <h3>{{ i18n.t('about_hobby_t') }}</h3>
            <p>{{ i18n.t('about_hobby') }}</p>
            <p class="hobby-note" aria-live="polite">
              @if (sel() !== null) {
                <b>{{ i18n.tr(data.hobbies[sel()!].t) }}</b> — {{ i18n.tr(data.hobbies[sel()!].d) }}
              } @else {
                <span class="mono">{{ i18n.t('hobby_hint') }}</span>
              }
            </p>
          </div>
          <div class="shelf" (mouseleave)="sel.set(null)">
            @for (h of data.hobbies; track $index; let i = $index) {
              <button type="button" class="spine" [class.on]="sel() === i" [style.--h]="SPINES[i % SPINES.length].h"
                      [style.--w]="SPINES[i % SPINES.length].w" [attr.data-tone]="i % SPINES.length"
                      [attr.aria-pressed]="sel() === i" (mouseenter)="sel.set(i)" (focus)="sel.set(i)" (click)="sel.set(i)">
                <span class="sp-n mono">0{{ i + 1 }}</span>
                <span class="sp-t">{{ i18n.tr(h.t) }}</span>
              </button>
            }
            <span class="bookend" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </section>`,
})
export class About {
  protected readonly i18n = inject(I18nService);
  protected readonly data = DATA;

  /** hobby em destaque na estante (null = nenhum) */
  protected readonly sel = signal<number | null>(null);
  /** altura e largura de cada lombada, para a estante não ficar uniforme */
  protected readonly SPINES = [
    { h: '178px', w: '54px' },
    { h: '150px', w: '46px' },
    { h: '192px', w: '60px' },
    { h: '164px', w: '50px' },
  ];
}
