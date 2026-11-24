import { Injectable, signal } from '@angular/core';

/** Pedidos entre seções do site (ex.: o chat pede para abrir o modal de um projeto). */
@Injectable({ providedIn: 'root' })
export class UiBusService {
  /** id do projeto a abrir no modal; a seção Projetos abre e limpa o valor */
  readonly openProject = signal<string | null>(null);
}
