import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { DATA } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { TechChip } from '../shared/tech-chip';

/** Skills em linhas por grupo, com pílulas grandes e levemente espalhadas. */
@Component({
  selector: 'app-skills',
  imports: [RevealDirective, TechChip],
  template: `
    <section id="skills" class="sec alt">
      <div class="wrap">
        <h2 appReveal>{{ i18n.t('nav_skills') }}</h2>
        <div class="skills">
          @for (g of groups(); track $index; let gi = $index) {
            <div class="sk-row" appReveal="item" [revealIndex]="gi">
              <h3><small>0{{ gi + 1 }}</small>{{ i18n.tr(g.t) }}</h3>
              <div class="chips">
                @for (it of g.items; track it.name) {<app-tech-chip [name]="it.name" [big]="true" [index]="it.k" [level]="levels[it.name]" />}
              </div>
            </div>
          }
        </div>
      </div>
    </section>`,
})
export class Skills {
  protected readonly i18n = inject(I18nService);
  protected readonly levels = DATA.skillLevels;
  /** índice contínuo entre grupos, para variar a posição de cada pílula */
  protected readonly groups = computed(() => {
    let k = 0;
    return DATA.skills.map((g) => ({ t: g.t, items: g.items.map((name) => ({ name, k: k++ })) }));
  });
}
