import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { DATA } from '../data/portfolio.data';
import { CountUpDirective } from '../shared/count-up.directive';
import { RevealDirective } from '../shared/reveal.directive';

/** Sobre: texto profissional, números, idiomas e uma frase com os hobbies marcados (como marca-texto). */
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
          <h3>{{ i18n.t('about_hobby_t') }}</h3>
          <p class="hobby-line">
            @for (part of hobbyParts(); track $index) {
              @if (part.h !== undefined) {
                <span class="mk" tabindex="0" [style.--d]="part.h * 0.35 + 's'">
                  <span class="mk-w">{{ i18n.tr(data.hobbies[part.h].w) }}</span>
                  <span class="mk-tip" role="tooltip"><b>{{ i18n.tr(data.hobbies[part.h].t) }}</b>{{ i18n.tr(data.hobbies[part.h].d) }}</span>
                </span>
              } @else {<ng-container>{{ part.text }}</ng-container>}
            }
          </p>
        </div>
      </div>
    </section>`,
})
export class About {
  protected readonly i18n = inject(I18nService);
  protected readonly data = DATA;

  /** divide a frase "about_hobby" nos trechos de texto e nos marcadores {0}, {1}... */
  protected readonly hobbyParts = computed(() =>
    this.i18n
      .t('about_hobby')
      .split(/(\{\d\})/)
      .filter(Boolean)
      .map((s) => {
        const m = s.match(/^\{(\d)\}$/);
        return m ? { h: +m[1], text: '' } : { h: undefined, text: s };
      }),
  );
}
