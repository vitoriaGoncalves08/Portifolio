import { Component, inject } from '@angular/core';
import { CvService } from '../core/cv.service';
import { I18nService } from '../core/i18n.service';
import { DATA } from '../data/portfolio.data';
import { BrazilMap } from '../shared/brazil-map';
import { RevealDirective } from '../shared/reveal.directive';

const EMAIL = 'vigoncalvesp@gmail.com';

/**
 * Contato: tiles com o logo de cada app (simple-icons via jsDelivr), botão de CV
 * no idioma atual e formulário que abre o e-mail já preenchido (mailto).
 */
@Component({
  selector: 'app-contact',
  imports: [BrazilMap, RevealDirective],
  template: `
    <section id="contact" class="sec">
      <div class="wrap grid-2">
        <div appReveal>
          <h2>{{ i18n.t('nav_contact') }}</h2>
          <p>{{ i18n.t('contact_lead') }}</p>
          <div class="apps">
            @for (c of data.contacts; track c.n; let i = $index) {
              <a class="app" [href]="c.url" target="_blank" rel="noopener" appReveal="item" [revealIndex]="i">
                <span class="lg"><i [style.--i]="iconUrl(c.slug)"></i></span>
                <span><b>{{ c.n }}</b><small>{{ c.h }}</small></span>
              </a>
            }
          </div>
          <div class="contact-foot">
            <a class="btn" [href]="cv.href()" download>{{ i18n.t('cta_cv') }}</a>
            <app-brazil-map />
          </div>
        </div>
        <form class="form" appReveal [revealIndex]="1" (submit)="send($event)">
          <label><span>{{ i18n.t('f_name') }}</span><input name="name" required /></label>
          <label><span>{{ i18n.t('f_email') }}</span><input name="email" type="email" required /></label>
          <label><span>{{ i18n.t('f_msg') }}</span><textarea name="msg" rows="5" required></textarea></label>
          <button class="btn primary" type="submit">{{ i18n.t('f_send') }}</button>
        </form>
      </div>
    </section>`,
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  protected readonly cv = inject(CvService);
  protected readonly data = DATA;

  protected iconUrl(slug: string): string {
    return `url(https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/${slug}.svg)`;
  }

  protected send(e: Event): void {
    e.preventDefault();
    const d = new FormData(e.target as HTMLFormElement);
    location.href =
      `mailto:${EMAIL}?subject=` + encodeURIComponent('Contato via portfólio — ' + d.get('name')) +
      '&body=' + encodeURIComponent(d.get('msg') + '\n\n' + d.get('email'));
  }
}
