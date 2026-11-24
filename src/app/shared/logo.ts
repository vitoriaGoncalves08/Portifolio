import { Component, input } from '@angular/core';

/**
 * Logo VGP pintado com as cores do tema.
 * O PNG original foi separado em duas máscaras (public/assets/logo/):
 * - logo-a: parte principal ("vg") → cor de destaque (--logo-a, padrão --ac-t)
 * - logo-b: parte secundária ("p")  → cor neutra (--logo-b, padrão --mut)
 * Para mudar as cores num lugar específico, defina --logo-a/--logo-b no CSS do pai.
 */
@Component({
  selector: 'app-logo',
  host: { class: 'logo-mark', role: 'img', '[attr.aria-label]': 'label() || null', '[attr.aria-hidden]': '!label() || null' },
  template: `
    <i class="la" style="-webkit-mask-image:url(assets/logo/logo-a.png);mask-image:url(assets/logo/logo-a.png)"></i>
    <i class="lb" style="-webkit-mask-image:url(assets/logo/logo-b.png);mask-image:url(assets/logo/logo-b.png)"></i>`,
})
export class Logo {
  /** texto acessível; vazio = decorativo */
  readonly label = input('');
}
