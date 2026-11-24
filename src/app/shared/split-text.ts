import { Component, computed, input } from '@angular/core';

/** Quebra o texto em letras para a animação "desfocado → nítido" do título do hero. */
@Component({
  selector: 'app-split-text',
  host: { style: 'display:contents', 'aria-hidden': 'true' },
  template: `@for (c of chars(); track $index) {<span class="ch" [style.--i]="$index + offset()">{{ c === ' ' ? ' ' : c }}</span>}`,
})
export class SplitText {
  readonly text = input.required<string>();
  /** atraso extra (em letras) para encadear linhas */
  readonly offset = input(0);
  protected readonly chars = computed(() => [...this.text()]);
}
