import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { norm } from '../core/assistant/text';
import { I18nService } from '../core/i18n.service';
import { ScrollFxService } from '../core/scroll-fx.service';
import { UiBusService } from '../core/ui-bus.service';
import { DATA } from '../data/portfolio.data';
import { Project } from '../models/portfolio.models';
import { RevealDirective } from '../shared/reveal.directive';
import { TechChip, techIconUrl } from '../shared/tech-chip';

/** gradientes de fundo das vitrines (um por projeto, em ciclo) */
const GRADIENTS: [string, string][] = [['#55524a', '#171715'], ['#8a7d63', '#1d1a14'], ['#3f4857', '#0f1217'], ['#6a5d52', '#181512']];

/**
 * Projetos: filtros na lateral (fixos ao rolar) — busca digitável (nome, descrição, categoria, tag — sem acento), filtros por
 * categoria e por tecnologia (combinados), cards grandes e modal com o estudo de caso.
 */
@Component({
  selector: 'app-projects',
  imports: [NgTemplateOutlet, RevealDirective, TechChip],
  template: `
    <section id="projects" class="sec">
      <div class="wrap">
        <h2 appReveal>{{ i18n.t('nav_projects') }}</h2>

        <div class="proj-layout">
        <aside class="proj-side" appReveal>
          <label class="search"><span class="sr-only">{{ i18n.t('search_ph') }}</span>
            <input type="search" autocomplete="off" [placeholder]="i18n.t('search_ph')"
                   [value]="query()" (input)="query.set($any($event.target).value)" /></label>
          <div class="fgroup">
            <h4 class="mono">{{ i18n.t('f_cat') }}</h4>
            <div class="filters" role="group">
              @for (c of categories; track c) {
                <button type="button" [class.on]="cat() === c" [attr.aria-pressed]="cat() === c" (click)="cat.set(c)">
                  {{ c === 'all' ? i18n.t('all') : c }}</button>
              }
            </div>
          </div>
          <div class="fgroup">
            <h4 class="mono">{{ i18n.t('f_tech') }}</h4>
            <div class="filters" role="group">
              @for (t of tags; track t) {
                <button type="button" [class.on]="tagSel().has(t)" [attr.aria-pressed]="tagSel().has(t)" (click)="toggleTag(t)">
                  @if (icon(t)) {<img [src]="icon(t)" alt="" loading="lazy" />}{{ t }}</button>
              }
            </div>
          </div>
          <button type="button" class="btn small" (click)="clear()">{{ i18n.t('clear') }}</button>
        </aside>

        <div>
        <p class="count mono" aria-live="polite">{{ list().length }} / {{ all.length }} {{ i18n.t('found') }}</p>
        <div class="cards proj-grid">
          @for (p of list(); track p.id; let i = $index) {
            <button type="button" class="card click proj-card" appReveal="item" [revealIndex]="i" (click)="open(p)">
              <ng-container *ngTemplateOutlet="shot; context: { $implicit: p }" />
              <div class="body">
                <h3>{{ p.title }}</h3>
                <p>{{ i18n.tr(p.desc) }}</p>
                <div class="chips">@for (t of p.tags; track t) {<app-tech-chip [name]="t" />}</div>
                <span class="more">{{ i18n.t('more') }}</span>
              </div>
            </button>
          } @empty {
            <p class="empty" style="grid-column:1/-1">{{ i18n.t('no_results') }}</p>
          }
        </div>
        </div>
        </div>
      </div>
    </section>

    <!-- vitrine (fundo colorido + janela de navegador com a imagem do projeto) -->
    <ng-template #shot let-p>
      <div class="shot" [style.--g1]="grad(p)[0]" [style.--g2]="grad(p)[1]">
        <i class="blob b1"></i><i class="blob b2"></i>
        <span class="num">0{{ all.indexOf(p) + 1 }}</span><span class="cat">{{ p.cat }}</span>
        <div class="mock">
          <div class="bar"><b></b><b></b><b></b><em>{{ p.id }}.dev</em></div>
          <div class="scr">
            @if (p.img) {<img [src]="p.img" alt="" loading="lazy" />} @else {<span class="emo">{{ p.emoji }}</span>}
          </div>
        </div>
      </div>
    </ng-template>

    <dialog #dlg class="modal" (click)="$event.target === dlg && dlg.close()">
      <button type="button" class="close" aria-label="Fechar" (click)="dlg.close()">✕</button>
      @if (selected(); as p) {
        <div class="m-shot"><ng-container *ngTemplateOutlet="shot; context: { $implicit: p }" /></div>
        <div class="m-in">
          <h3 style="margin-top:0">{{ p.title }}</h3>
          <div class="chips">@for (t of p.tags; track t) {<app-tech-chip [name]="t" />}</div>
          <h4>{{ i18n.t('m_problem') }}</h4><p>{{ i18n.tr(p.problem) }}</p>
          <h4>{{ i18n.t('m_solution') }}</h4><p>{{ i18n.tr(p.solution) }}</p>
          <h4>{{ i18n.t('m_arch') }}</h4><p>{{ i18n.tr(p.arch) }}</p>
          <h4>{{ i18n.t('m_challenges') }}</h4><p>{{ i18n.tr(p.challenges) }}</p>
          <h4>{{ i18n.t('m_result') }}</h4><p>{{ i18n.tr(p.result) }}</p>
          <div class="links">
            @if (p.demo) {<a class="btn primary" [href]="p.demo" target="_blank" rel="noopener">{{ i18n.t('m_demo') }}</a>}
            @if (p.code) {<a class="btn" [href]="p.code" target="_blank" rel="noopener">{{ i18n.t('m_code') }}</a>}
          </div>
        </div>
      }
    </dialog>`,
})
export class Projects {
  protected readonly i18n = inject(I18nService);
  private readonly fx = inject(ScrollFxService);
  private readonly bus = inject(UiBusService);
  protected readonly all = DATA.projects;
  protected readonly categories = ['all', ...new Set(DATA.projects.map((p) => p.cat))];
  protected readonly tags = [...new Set(DATA.projects.flatMap((p) => p.tags))].sort();

  protected readonly query = signal('');
  protected readonly cat = signal('all');
  protected readonly tagSel = signal(new Set<string>());
  protected readonly selected = signal<Project | null>(null);
  protected readonly modal = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');

  protected readonly list = computed(() => {
    const words = norm(this.query()).split(/\s+/).filter(Boolean);
    const cat = this.cat();
    const sel = this.tagSel();
    return this.all.filter((p) => {
      if (cat !== 'all' && p.cat !== cat) return false;
      for (const t of sel) if (!p.tags.includes(t)) return false;
      const hay = norm([p.title, this.i18n.tr(p.desc), p.cat, p.tags.join(' ')].join(' '));
      return words.every((w) => hay.includes(w));
    });
  });

  constructor() {
    // o chat "Dúvidas?" pode pedir para abrir um projeto
    effect(() => {
      const id = this.bus.openProject();
      const p = id && this.all.find((x) => x.id === id);
      if (p) {
        this.open(p);
        this.bus.openProject.set(null);
      }
    });
    // depois de filtrar, recalcula o parallax das vitrines
    effect(() => {
      this.list();
      this.fx.refresh();
    });
  }

  protected icon = techIconUrl;
  protected grad = (p: Project) => GRADIENTS[this.all.indexOf(p) % GRADIENTS.length];

  protected toggleTag(t: string): void {
    const next = new Set(this.tagSel());
    next.has(t) ? next.delete(t) : next.add(t);
    this.tagSel.set(next);
  }

  protected clear(): void {
    this.query.set('');
    this.cat.set('all');
    this.tagSel.set(new Set());
  }

  protected open(p: Project): void {
    this.selected.set(p);
    this.modal().nativeElement.showModal();
  }
}
