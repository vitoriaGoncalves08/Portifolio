import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { CHAT_ENDPOINT } from '../core/chat.config';
import { I18nService } from '../core/i18n.service';
import { DATA } from '../data/portfolio.data';
import { Logo } from '../shared/logo';

interface Msg { text: string; me: boolean; }

/**
 * Botão "Dúvidas?" + painel de chat.
 * Offline: procura palavras-chave da pergunta em DATA.faq e responde com o texto pronto;
 * se nada bater, sugere o formulário de contato. Com CHAT_ENDPOINT, envia para o seu backend.
 */
@Component({
  selector: 'app-chat',
  imports: [Logo],
  template: `
    <button type="button" class="fab" [attr.aria-label]="i18n.t('chat_fab')" (click)="toggle()">
      <span>{{ i18n.t('chat_fab') }}</span><app-logo />
    </button>
    @if (open()) {
      <section class="chat" [attr.aria-label]="i18n.t('chat_title')">
        <header>
          <strong>{{ i18n.t('chat_title') }}</strong>
          <button type="button" class="icon-btn" aria-label="Fechar" (click)="open.set(false)">✕</button>
        </header>
        <div class="log" aria-live="polite" #log>
          <div class="msg">{{ i18n.t('chat_hi') }}</div>
          @for (m of msgs(); track $index) {<div class="msg" [class.me]="m.me">{{ m.text }}</div>}
        </div>
        <div class="sug">
          @for (s of suggestions(); track s) {<button type="button" (click)="ask(s)">{{ s }}</button>}
        </div>
        <form (submit)="$event.preventDefault(); ask(q.value); q.value = ''">
          <input #q autocomplete="off" [placeholder]="i18n.t('chat_ph')" />
          <button class="btn primary" type="submit">{{ i18n.t('f_send') }}</button>
        </form>
      </section>
    }`,
})
export class Chat {
  protected readonly i18n = inject(I18nService);
  protected readonly open = signal(false);
  protected readonly msgs = signal<Msg[]>([]);
  protected readonly suggestions = computed(() => DATA.suggestions[this.i18n.lang()]);
  private readonly log = viewChild<ElementRef<HTMLElement>>('log');
  private readonly input = viewChild<ElementRef<HTMLInputElement>>('q');

  constructor() {
    // rola o histórico para a última mensagem
    effect(() => {
      this.msgs();
      const el = this.log()?.nativeElement;
      if (el) requestAnimationFrame(() => (el.scrollTop = el.scrollHeight));
    });
    effect(() => {
      if (this.open()) requestAnimationFrame(() => this.input()?.nativeElement.focus());
    });
  }

  protected toggle(): void {
    this.open.update((v) => !v);
  }

  protected async ask(q: string): Promise<void> {
    if (!q.trim()) return;
    this.msgs.update((m) => [...m, { text: q, me: true }]);
    let reply: string;
    if (CHAT_ENDPOINT) {
      try {
        const res = await fetch(CHAT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: q, lang: this.i18n.lang() }),
        });
        reply = (await res.json()).reply;
      } catch {
        reply = this.i18n.t('chat_fallback');
      }
    } else {
      reply = this.localAnswer(q);
    }
    this.msgs.update((m) => [...m, { text: reply, me: false }]);
  }

  private localAnswer(q: string): string {
    const text = q.toLowerCase();
    const hit = DATA.faq.find((f) => f.k.some((k) => text.includes(k)));
    return hit ? this.i18n.tr(hit.a) : this.i18n.t('chat_fallback');
  }
}
