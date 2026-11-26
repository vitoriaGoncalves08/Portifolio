import { Component, computed, effect, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { ScrollFxService } from '../core/scroll-fx.service';
import { DATA } from '../data/portfolio.data';
import { BRANDS } from '../shared/brands';
import { RevealDirective } from '../shared/reveal.directive';

type Tab = 'all' | 'work' | 'edu';

/** fim do período: "2024 — hoje" vale mais que qualquer ano, para ordenar do mais recente ao mais antigo */
const endOf = (w: string) => {
  const m = w.match(/\d{4}|hoje|hoy|today|now|present/gi);
  const last = m ? m[m.length - 1] : '';
  return /\d/.test(last) ? +last : 9999;
};
const startOf = (w: string) => +(w.match(/\d{4}/)?.[0] ?? 0);

/**
 * Trajetória: linha do tempo vertical que mistura experiência e educação.
 * Cada card mostra o essencial (cargo, empresa, período e uma linha de resumo); "Saiba mais" abre os destaques.
 * A linha se preenche com o scroll e os pontos acendem (ScrollFxService).
 */
@Component({
  selector: 'app-journey',
  imports: [RevealDirective],
  template: `
    <section id="journey" class="sec alt">
      <div class="wrap">
        <h2 appReveal>{{ i18n.t('nav_journey') }}</h2>
        <div class="tabs" appReveal>
          @for (k of tabs; track k) {
            <button type="button" [class.on]="tab() === k" (click)="tab.set(k)">{{ i18n.t('tl_' + k) }}</button>
          }
        </div>
        <ol class="tl" id="timeline">
          @for (i of items(); track i.key; let n = $index) {
            <li class="tl-i" appReveal="item" [revealIndex]="n">
              <span class="yr" aria-hidden="true">{{ i.year }}</span>
              <span class="node"></span>
              <div class="tl-card" [class.featured]="i.featured">
                <div class="tl-top">
                  <span class="tag">{{ i18n.t(i.k === 'work' ? 'tl_work' : 'tl_edu') }}</span>
                  <span class="when">{{ i.when }}</span>
                </div>
                <h3>{{ i.t }}</h3>
                <span class="meta">{{ i.org }}</span>
                <p>{{ i.d }}</p>

                @if (i.logos.length) {
                  <div class="tl-logos" [attr.aria-label]="i.logosTitle">
                    <span class="mono tl-logos-t">{{ i.logosTitle }}</span>
                    @for (b of i.logos; track b.name) {
                      <span class="brand" [title]="b.name">
                        <i [style.background]="b.bg" [style.color]="b.fg">{{ b.mark }}</i>{{ b.name }}
                      </span>
                    }
                  </div>
                }

                @if (i.points.length) {
                  <div class="tl-points" [class.open]="isOpen(i.key)" [id]="'tlp-' + i.key">
                    <div><ul>@for (p of i.points; track $index) {<li>{{ p }}</li>}</ul></div>
                  </div>
                  <button type="button" class="tl-more" [attr.aria-expanded]="isOpen(i.key)" [attr.aria-controls]="'tlp-' + i.key"
                          (click)="toggle(i.key)">
                    {{ i18n.t(isOpen(i.key) ? 'tl_less' : 'tl_more') }} <span aria-hidden="true">{{ isOpen(i.key) ? '−' : '+' }}</span>
                  </button>
                }
                @if (i.hl) {<span class="tl-hl">★ {{ i.hl }}</span>}
              </div>
            </li>
          }
        </ol>
      </div>
    </section>`,
})
export class Journey {
  protected readonly i18n = inject(I18nService);
  private readonly fx = inject(ScrollFxService);
  protected readonly tabs: Tab[] = ['all', 'work', 'edu'];
  protected readonly tab = signal<Tab>('all');
  /** cards abertos em "Saiba mais" (todos começam fechados) */
  private readonly opened = signal<Set<string>>(new Set());

  protected readonly items = computed(() => {
    const tab = this.tab();
    return (['work', 'edu'] as const)
      .filter((k) => tab === 'all' || tab === k)
      .flatMap((k) =>
        DATA.timeline[k].map((i, idx) => {
          const when = this.i18n.tr(i.when);
          return {
            key: `${k}-${idx}`,
            k,
            when,
            year: (when.match(/\d{4}/) ?? [''])[0],
            t: this.i18n.tr(i.t),
            org: i.org,
            d: this.i18n.tr(i.d),
            hl: i.hl ? this.i18n.tr(i.hl) : '',
            points: (i.points ?? []).slice(0, 4).map((p) => this.i18n.tr(p)),
            logos: (i.logos ?? []).map((id) => BRANDS[id]).filter(Boolean),
            logosTitle: i.logosTitle ? this.i18n.tr(i.logosTitle) : this.i18n.t('tl_worked'),
            featured: !!i.featured,
          };
        }),
      )
      // mais recente primeiro; empate (ex.: duas "até hoje") → a que começou mais recentemente
      .sort((a, b) => endOf(b.when) - endOf(a.when) || +b.featured - +a.featured || startOf(b.when) - startOf(a.when));
  });

  constructor() {
    effect(() => {
      this.items();
      this.opened();
      this.fx.refresh();
    });
  }

  protected isOpen(key: string): boolean {
    return this.opened().has(key);
  }

  protected toggle(key: string): void {
    const next = new Set(this.opened());
    next.has(key) ? next.delete(key) : next.add(key);
    this.opened.set(next);
  }
}
