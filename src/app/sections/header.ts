import { Component, ElementRef, OnDestroy, afterNextRender, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { ThemeService } from '../core/theme.service';

/** Menu fixo no topo: links das seções (com a seção atual destacada), idiomas e painel de tema/cor. */
@Component({
  selector: 'app-header',
  host: { '(document:click)': 'closePop($event)', '(document:keydown.escape)': 'pop.set(false)' },
  template: `
    <header class="nav">
      <div class="wrap nav-in">
        <a href="#hero" class="logo" aria-label="VGP — início"><img src="assets/logo.png" alt="VGP" /></a>
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
          <div class="theme-menu">
            <button type="button" class="icon-btn" [attr.aria-label]="i18n.t('theme_t')" aria-haspopup="true"
                    [attr.aria-expanded]="pop()" (click)="pop.set(!pop())">◐</button>
            @if (pop()) {
              <div class="theme-pop" role="group" [attr.aria-label]="i18n.t('theme_t')">
                <p class="mono">{{ i18n.t('theme_t') }}</p>
                <div class="seg">
                  <button type="button" [class.on]="theme.theme() === 'light'" (click)="theme.theme.set('light')">☀ {{ i18n.t('theme_light') }}</button>
                  <button type="button" [class.on]="theme.theme() === 'dark'" (click)="theme.theme.set('dark')">☾ {{ i18n.t('theme_dark') }}</button>
                </div>
                <p class="mono">{{ i18n.t('accent_t') }}</p>
                <div class="swatches">
                  @for (a of theme.accents; track a.id) {
                    <button type="button" class="sw" [class.on]="theme.accent() === a.id" [style.--sw]="a.swatch"
                            [attr.aria-label]="i18n.t('accent_' + a.id)" [attr.aria-pressed]="theme.accent() === a.id"
                            [title]="i18n.t('accent_' + a.id)" (click)="theme.accent.set(a.id)"></button>
                  }
                </div>
                <span class="sw-name">{{ i18n.t('accent_' + theme.accent()) }}</span>
              </div>
            }
          </div>
          <button type="button" class="icon-btn burger" aria-label="Menu" (click)="open.set(!open())">☰</button>
        </div>
      </div>
    </header>`,
})
export class Header implements OnDestroy {
  protected readonly i18n = inject(I18nService);
  protected readonly theme = inject(ThemeService);
  protected readonly open = signal(false);
  /** painel de tema/cor aberto */
  protected readonly pop = signal(false);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
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

  /** fecha o painel de tema ao clicar fora dele */
  protected closePop(e: Event): void {
    const menu = this.host.querySelector('.theme-menu');
    if (this.pop() && menu && !menu.contains(e.target as Node)) this.pop.set(false);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
