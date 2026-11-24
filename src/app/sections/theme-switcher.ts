import { Component, ElementRef, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { ThemeService } from '../core/theme.service';

/** Botão fixo no canto inferior esquerdo: abre o painel de tema (claro/escuro) e cor dos detalhes. */
@Component({
  selector: 'app-theme-switcher',
  host: { class: 'theme-fab', '(document:click)': 'closeOutside($event)', '(document:keydown.escape)': 'open.set(false)' },
  template: `
    <button type="button" class="icon-btn" [attr.aria-label]="i18n.t('theme_t')" aria-haspopup="true"
            [attr.aria-expanded]="open()" (click)="open.set(!open())">◐</button>
    @if (open()) {
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
    }`,
})
export class ThemeSwitcher {
  protected readonly i18n = inject(I18nService);
  protected readonly theme = inject(ThemeService);
  protected readonly open = signal(false);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  /** fecha o painel ao clicar fora dele */
  protected closeOutside(e: Event): void {
    if (this.open() && !this.host.contains(e.target as Node)) this.open.set(false);
  }
}
