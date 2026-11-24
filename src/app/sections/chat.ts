import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { AssistantEngine, ChatAction, Reply } from '../core/assistant/engine';
import { CHAT_ENDPOINT } from '../core/chat.config';
import { CvService } from '../core/cv.service';
import { I18nService } from '../core/i18n.service';
import { UiBusService } from '../core/ui-bus.service';
import { DATA } from '../data/portfolio.data';
import { Logo } from '../shared/logo';

interface Msg {
  text: string;
  me: boolean;
  actions?: ChatAction[];
}

/**
 * Botão "Dúvidas?" + painel de chat.
 * Responde com o AssistantEngine (core/assistant): entende erros de digitação, falta de acento e PT/EN/ES,
 * liga a pergunta aos dados do portfólio e oferece botões de ação. Roda no navegador, sem custo.
 * Se CHAT_ENDPOINT for configurado (core/chat.config.ts), as perguntas vão para esse backend.
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
          @for (m of msgs(); track $index) {
            <div class="msg" [class.me]="m.me">{{ m.text }}</div>
            @if (m.actions?.length) {
              <div class="msg-actions">
                @for (a of m.actions; track $index) {
                  @switch (a.kind) {
                    @case ('link') {<a class="act" [href]="a.value" target="_blank" rel="noopener">{{ a.label }} ↗</a>}
                    @case ('cv') {<a class="act" [href]="a.value" download>{{ a.label }} ↓</a>}
                    @default {<button type="button" class="act" (click)="run(a)">{{ a.label }}</button>}
                  }
                }
              </div>
            }
          }
          @if (typing()) {<div class="msg typing" [attr.aria-label]="i18n.t('chat_typing')"><i></i><i></i><i></i></div>}
        </div>
        <div class="sug">
          @for (s of suggestions(); track s) {<button type="button" (click)="ask(s)">{{ s }}</button>}
        </div>
        <form (submit)="$event.preventDefault(); ask(q.value); q.value = ''">
          <input #q autocomplete="off" [placeholder]="i18n.t('chat_ph')" />
          <button class="btn primary" type="submit" [disabled]="typing()">{{ i18n.t('f_send') }}</button>
        </form>
      </section>
    }`,
})
export class Chat {
  protected readonly i18n = inject(I18nService);
  private readonly cv = inject(CvService);
  private readonly bus = inject(UiBusService);
  private readonly engine = new AssistantEngine(DATA);

  protected readonly open = signal(false);
  protected readonly typing = signal(false);
  protected readonly msgs = signal<Msg[]>([]);
  /** sugestões do momento: as da última resposta ou as iniciais */
  private readonly follow = signal<string[]>([]);
  protected readonly suggestions = computed(() => (this.follow().length ? this.follow() : DATA.suggestions[this.i18n.lang()]));
  private readonly log = viewChild<ElementRef<HTMLElement>>('log');
  private readonly input = viewChild<ElementRef<HTMLInputElement>>('q');

  constructor() {
    // rola o histórico para a última mensagem
    effect(() => {
      this.msgs();
      this.typing();
      const el = this.log()?.nativeElement;
      if (el) requestAnimationFrame(() => (el.scrollTop = el.scrollHeight));
    });
    effect(() => {
      if (this.open()) requestAnimationFrame(() => this.input()?.nativeElement.focus());
    });
    // ao trocar de idioma, volta às sugestões iniciais
    effect(() => {
      this.i18n.lang();
      this.follow.set([]);
    });
  }

  protected toggle(): void {
    this.open.update((v) => !v);
  }

  protected async ask(q: string): Promise<void> {
    if (!q.trim() || this.typing()) return;
    this.msgs.update((m) => [...m, { text: q, me: true }]);
    this.typing.set(true);
    const reply = await this.reply(q);
    // pequena pausa proporcional ao tamanho da resposta, para parecer uma conversa
    await new Promise((r) => setTimeout(r, Math.min(1100, 280 + reply.text.length * 4)));
    this.typing.set(false);
    this.msgs.update((m) => [...m, { text: reply.text, me: false, actions: reply.actions }]);
    this.follow.set(reply.follow);
  }

  private async reply(q: string): Promise<Reply> {
    if (CHAT_ENDPOINT) {
      try {
        const res = await fetch(CHAT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: q, lang: this.i18n.lang() }),
        });
        return { text: (await res.json()).reply, actions: [], follow: [] };
      } catch {
        /* se o backend falhar, usa o assistente local */
      }
    }
    return this.engine.answer(q, this.i18n.lang(), this.cv.href());
  }

  /** executa um botão de ação de uma resposta */
  protected run(a: ChatAction): void {
    if (a.kind === 'ask') {
      void this.ask(a.value);
    } else if (a.kind === 'project') {
      this.bus.openProject.set(a.value);
    } else if (a.kind === 'section') {
      document.getElementById(a.value)?.scrollIntoView({ behavior: 'smooth' });
      if (matchMedia('(max-width: 860px)').matches) this.open.set(false);
    }
  }
}
