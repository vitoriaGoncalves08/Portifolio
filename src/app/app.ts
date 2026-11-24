import { Component, afterNextRender, inject } from '@angular/core';
import { FaviconService } from './core/favicon.service';
import { I18nService } from './core/i18n.service';
import { PointerFxService } from './core/pointer-fx.service';
import { ScrollFxService } from './core/scroll-fx.service';
import { ThemeService } from './core/theme.service';
import { About } from './sections/about';
import { Certs } from './sections/certs';
import { Chat } from './sections/chat';
import { Contact } from './sections/contact';
import { Footer } from './sections/footer';
import { Header } from './sections/header';
import { Hero } from './sections/hero';
import { Journey } from './sections/journey';
import { Projects } from './sections/projects';
import { Services } from './sections/services';
import { Skills } from './sections/skills';
import { Testimonials } from './sections/testimonials';
import { ThemeSwitcher } from './sections/theme-switcher';

/** Página única do portfólio: monta as seções e liga os efeitos globais. */
@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Skills, Projects, Journey, Services, Certs, Testimonials, Contact, Footer, Chat, ThemeSwitcher],
  templateUrl: './app.html',
})
export class App {
  private readonly i18n = inject(I18nService);

  constructor() {
    inject(ThemeService); // aplica o tema salvo
    const scroll = inject(ScrollFxService);
    const pointer = inject(PointerFxService);
    const favicon = inject(FaviconService);
    afterNextRender(() => {
      scroll.start();
      pointer.start();
      favicon.start();
    });
  }

  protected t(key: string): string {
    return this.i18n.t(key);
  }
}
