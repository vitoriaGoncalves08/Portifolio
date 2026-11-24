import { Component, OnDestroy, afterNextRender, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { Logo } from '../shared/logo';

/** Menu fixo no topo: links das seções (com a seção atual destacada) e idiomas. */
@Component({
  selector: 'app-header',
  imports: [Logo],
  template: `
    <header class="nav">
      <div class="wrap nav-in">
        <a href="#hero" class="logo" aria-label="VGP — início"><app-logo /></a>
        <nav id="menu" [class.open]="open()" [attr.aria-label]="'Menu'">
          @for (l of links; track l.id) {
            <a [href]="'#' + l.id" [class.act]="active() === l.id" (click)="open.set(false)">{{ i18n.t(l.key) }}</a>
          }
        </nav>
        <div class="nav-tools">
          <div class="langs" role="group" aria-label="Idioma">
            @for (l of i18n.langs; track l) {
              <button type="button" [class.on]="i18n.lang() === l" [attr.aria-pressed]="i18n.lang() === l"
                      (click)="i18n.setLang(l)">{{ l.toUpperCase() }}</button>
            }
          </div>
          <button type="button" class="icon-btn burger" aria-label="Menu" (click)="open.set(!open())">☰</button>
        </div>
      </div>
    </header>`,
})
export class Header implements OnDestroy {
  protected readonly i18n = inject(I18nService);
  protected readonly open = signal(false);
  protected readonly active = signal('');
  protected readonly links = [
    { id: 'about', key: 'nav_about' },
    { id: 'skills', key: 'nav_skills' },
    { id: 'projects', key: 'nav_projects' },
    { id: 'journey', key: 'nav_journey' },
    { id: 'services', key: 'nav_services' },
    { id: 'certs', key: 'nav_certs' },
    { id: 'contact', key: 'nav_contact' },
  ];
  private io?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      this.io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const l of this.links) {
        const s = document.getElementById(l.id);
        if (s) this.io.observe(s);
      }
    });
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
