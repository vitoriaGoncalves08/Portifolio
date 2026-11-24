import { Component, inject } from '@angular/core';
import { CvService } from '../core/cv.service';
import { I18nService } from '../core/i18n.service';
import { SplitText } from '../shared/split-text';

/** Abertura: nome em letra cursiva, cargo em destaque, chamada, CTAs e foto em arco. */
@Component({
  selector: 'app-hero',
  imports: [SplitText],
  template: `
    <section id="hero" class="hero">
      <div class="hero-bg" aria-hidden="true">
        <img class="big-year big-logo" id="bigYear" src="assets/logo.png" alt="" />
        <i class="vl v1"></i><i class="vl v2"></i><i class="hl h1"></i><i class="hl h2"></i>
      </div>
      <div class="wrap hero-in">
        <p class="welcome mono">{{ i18n.t('welcome') }}</p>
        <h1 class="hero-title" [attr.aria-label]="'Vitória Passos — ' + i18n.t('hero_role')">
          <span class="serif"><app-split-text text="Vitória Passos" /></span>
          <span class="name"><app-split-text [text]="i18n.t('hero_role')" [offset]="6" /></span>
        </h1>
        <p class="role">{{ i18n.t('role') }}</p>
        <p class="lead">{{ i18n.t('tagline') }}</p>
        <div class="cta">
          <a class="btn primary" href="#projects">{{ i18n.t('cta_projects') }}</a>
          <a class="btn" [href]="cv.href()" download>{{ i18n.t('cta_cv') }}</a>
        </div>
        <figure class="photo">
          <img src="assets/photo.jpg" alt="Retrato de Vitória Passos" />
          <figcaption class="mono">São Paulo, SP — Brasil</figcaption>
        </figure>
      </div>
      <a class="scroll-hint mono" href="#about" aria-label="Scroll">scroll ↓</a>
    </section>`,
})
export class Hero {
  protected readonly i18n = inject(I18nService);
  protected readonly cv = inject(CvService);
}
