import { Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { DATA } from '../data/portfolio.data';
import { CountUpDirective } from '../shared/count-up.directive';
import { RevealDirective } from '../shared/reveal.directive';
import { TrustedSvgPipe } from '../shared/trusted-svg.pipe';

/** Sobre: texto profissional, números, idiomas e hobbies em formato de selos (carimbos). */
@Component({
  selector: 'app-about',
  imports: [CountUpDirective, RevealDirective, TrustedSvgPipe],
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
          <p>{{ i18n.t('about_hobby') }}</p>
          <div class="hobbies">
            @for (h of data.hobbies; track $index; let i = $index) {
              <div class="stamp" tabindex="0" appReveal="item" [revealIndex]="i"
                   [attr.aria-label]="i18n.tr(h.t) + ': ' + i18n.tr(h.d)">
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <defs><path [attr.id]="'hc' + i" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" /></defs>
                  <circle class="o" cx="60" cy="60" r="57" /><circle class="o" cx="60" cy="60" r="33" />
                  <g class="ring"><text><textPath [attr.href]="'#hc' + i" textLength="280" lengthAdjust="spacing">{{ ring(i18n.tr(h.t)) }}</textPath></text></g>
                  <g class="ic" transform="translate(60 60) scale(.42) translate(-60 -60)" [innerHTML]="h.svg | trustedSvg"></g>
                </svg>
                <span class="tip">{{ i18n.tr(h.d) }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>`,
})
export class About {
  protected readonly i18n = inject(I18nService);
  protected readonly data = DATA;

  /** texto do anel do selo: o nome repetido até completar a volta */
  protected ring(label: string): string {
    const up = label.toUpperCase();
    const reps = Math.max(2, Math.round(24 / (up.length + 3)));
    return Array(reps).fill(up + ' • ').join('');
  }
}
