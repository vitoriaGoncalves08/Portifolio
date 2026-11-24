import { Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { DATA } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

/** Depoimentos em uma faixa com as cores invertidas em relação ao resto da página. */
@Component({
  selector: 'app-testimonials',
  imports: [RevealDirective],
  template: `
    <section id="testimonials" class="sec flip">
      <div class="wrap">
        <h2 appReveal>{{ i18n.t('nav_testi') }}</h2>
        <div class="cards three">
          @for (t of data.testimonials; track $index; let i = $index) {
            <div class="card testi" appReveal="item" [revealIndex]="i">
              <div class="body">
                <p class="quote">“{{ i18n.tr(t.q) }}”</p>
                <div class="who">
                  <span class="av">{{ t.who[0] }}</span>
                  <div><strong>{{ t.who }}</strong><span class="meta" style="display:block">{{ t.role }}</span></div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>`,
})
export class Testimonials {
  protected readonly i18n = inject(I18nService);
  protected readonly data = DATA;
}
