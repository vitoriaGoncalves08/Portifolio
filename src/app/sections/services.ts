import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { DATA } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

/** Serviços: faixa escura com ondas, frase que acende palavra por palavra e lista numerada. */
@Component({
  selector: 'app-services',
  imports: [RevealDirective],
  template: `
    <section id="services" class="sec wine">
      <div class="wave top" aria-hidden="true"><svg viewBox="0 0 2880 90" preserveAspectRatio="none"><path d="M0 45 Q360 -5 720 45 T1440 45 T2160 45 T2880 45 L2880 0 L0 0 Z" /></svg></div>
      <div class="wave bot" aria-hidden="true"><svg viewBox="0 0 2880 90" preserveAspectRatio="none"><path d="M0 45 Q360 -5 720 45 T1440 45 T2160 45 T2880 45 L2880 0 L0 0 Z" /></svg></div>
      <div class="wrap">
        <p class="statement" [attr.aria-label]="i18n.t('statement')">
          @for (w of words(); track $index) {<span class="w" aria-hidden="true">{{ w }}</span>{{ ' ' }}}
        </p>
        <h2 appReveal>{{ i18n.t('nav_services') }}</h2>
        <div class="svc-list">
          @for (s of data.services; track $index; let i = $index) {
            <div class="svc" appReveal="item" [revealIndex]="i">
              <span class="n">0{{ i + 1 }}</span>
              <h3>{{ i18n.tr(s.t) }}</h3>
              <p>{{ i18n.tr(s.d) }}</p>
              <span class="go">→</span>
            </div>
          }
        </div>
      </div>
    </section>`,
})
export class Services {
  protected readonly i18n = inject(I18nService);
  protected readonly data = DATA;
  protected readonly words = computed(() => this.i18n.t('statement').split(' '));
}
