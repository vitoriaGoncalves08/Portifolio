import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Marca como confiável o SVG das ilustrações de hobbies.
 * Use somente com conteúdo vindo de portfolio.data.ts (nunca com texto do usuário).
 */
@Pipe({ name: 'trustedSvg' })
export class TrustedSvgPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);
  transform(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
