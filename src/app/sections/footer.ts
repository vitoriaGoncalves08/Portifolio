import { Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="wrap foot-in">
        <span>© {{ year }} Vitória Gonçalves Passos. {{ i18n.t('rights') }}</span>
        <span class="foot-links">
          <a href="https://github.com/vitoriaGoncalves08" target="_blank" rel="noopener">GitHub</a>
          <a href="https://linkedin.com/in/vitoria-goncalves-passos" target="_blank" rel="noopener">LinkedIn</a>
          <a href="#hero">{{ i18n.t('top') }}</a>
        </span>
      </div>
    </footer>`,
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly year = new Date().getFullYear();
}
