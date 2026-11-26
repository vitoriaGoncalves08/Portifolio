import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { DATA } from '../data/portfolio.data';
import { Cert } from '../models/portfolio.models';
import { RevealDirective } from '../shared/reveal.directive';

/**
 * Certificações em três partes (grupos vazios não aparecem):
 * - Badges digitais (medalhas)
 * - Certificações (kind: 'certification'), no mesmo estilo de medalha das badges
 * - Certificados de cursos (kind: 'course')
 * Com link, badges e certificações abrem a credencial; cursos abrem a imagem ampliada.
 */
@Component({
  selector: 'app-certs',
  imports: [NgTemplateOutlet, RevealDirective],
  template: `
    <section id="certs" class="sec alt">
      <div class="wrap">
        <h2 appReveal>{{ i18n.t('nav_certs') }}</h2>

        <h3 class="sub mono" appReveal>{{ i18n.t('certs_badges') }}</h3>
        <div class="badges">
          @for (b of data.badges; track b.t; let i = $index) {
            @if (b.url) {
              <a class="badge" [href]="b.url" target="_blank" rel="noopener" appReveal="item" [revealIndex]="i">
                <ng-container *ngTemplateOutlet="medal; context: { $implicit: b }" />
              </a>
            } @else {
              <div class="badge" appReveal="item" [revealIndex]="i">
                <ng-container *ngTemplateOutlet="medal; context: { $implicit: b }" />
              </div>
            }
          }
          @for (s of slots; track $index) {
            <div class="badge soon" appReveal="item" [revealIndex]="data.badges.length + $index">
              <span class="medal">+</span><span class="meta">{{ i18n.t('badge_soon') }}</span>
            </div>
          }
        </div>

        @if (certifications.length) {
          <h3 class="sub mono" appReveal>{{ i18n.t('certs_certifications') }}</h3>
          <!-- mesmo estilo das badges: medalha + nome; com link, abre a credencial -->
          <div class="badges">
            @for (c of certifications; track c.t; let i = $index) {
              @if (c.url) {
                <a class="badge" [href]="c.url" target="_blank" rel="noopener" appReveal="item" [revealIndex]="i">
                  <ng-container *ngTemplateOutlet="medal; context: { $implicit: c }" />
                </a>
              } @else {
                <button type="button" class="badge click" appReveal="item" [revealIndex]="i" (click)="open(c)">
                  <ng-container *ngTemplateOutlet="medal; context: { $implicit: c }" />
                </button>
              }
            }
          </div>
        }

        <h3 class="sub mono" appReveal>{{ i18n.t('certs_courses') }}</h3>
        <div class="cards three">
          @for (c of courses; track c.t; let i = $index) {
            <button type="button" class="card cert click" appReveal="item" [revealIndex]="i" (click)="open(c)">
              <div class="thumb"><img [src]="c.img" [alt]="c.t" loading="lazy" /></div>
              <div class="body"><h3>{{ c.t }}</h3><span class="meta">{{ c.org }} · {{ c.date }}</span></div>
            </button>
          }
        </div>
      </div>
    </section>

    <ng-template #medal let-b>
      <span class="medal">@if (b.img) {<img [src]="b.img" alt="" />} @else {<b>{{ b.ab }}</b>}</span>
      <strong>{{ b.t }}</strong>
      <span class="meta">{{ b.org }} · {{ b.date }}</span>
    </ng-template>

    <dialog #dlg class="modal" (click)="$event.target === dlg ? dlg.close() : null">
      <button type="button" class="close" aria-label="Fechar" (click)="dlg.close()">✕</button>
      @if (selected(); as c) {
        <div class="lightbox"><img [src]="c.img" [alt]="c.t" /></div>
        <div class="m-in">
          <h3 style="margin-top:0">{{ c.t }}</h3>
          <span class="meta">{{ c.org }} · {{ c.date }}</span>
          @if (c.url) {
            <div class="links"><a class="btn primary" [href]="c.url" target="_blank" rel="noopener">{{ i18n.t('cert_view') }}</a></div>
          }
        </div>
      }
    </dialog>`,
})
export class Certs {
  protected readonly i18n = inject(I18nService);
  protected readonly data = DATA;
  protected readonly slots = Array.from({ length: DATA.badgeSlots });
  protected readonly certifications = DATA.certs.filter((c) => c.kind === 'certification');
  protected readonly courses = DATA.certs.filter((c) => c.kind !== 'certification');
  protected readonly selected = signal<Cert | null>(null);
  private readonly dlg = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');

  protected open(c: Cert): void {
    this.selected.set(c);
    this.dlg().nativeElement.showModal();
  }
}
