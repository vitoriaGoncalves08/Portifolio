# Portfólio — Vitória Gonçalves Passos

Portfólio pessoal de desenvolvedora Full Stack (Java · Spring Boot · React), feito em **Angular 22** com
componentes standalone, signals e sem dependências de UI. Tem três idiomas (PT · EN · ES), tema claro/escuro
e várias animações ligadas ao scroll.

> 🚧 Em construção: o conteúdo e o visual ainda estão sendo ajustados. Este README será atualizado junto.

---

## Sumário

- [Seções](#seções)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como rodar](#como-rodar)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como editar o conteúdo](#como-editar-o-conteúdo)
- [Imagens e arquivos](#imagens-e-arquivos)
- [Assistente "Dúvidas?"](#assistente-dúvidas)
- [Animações](#animações)
- [Deploy](#deploy)
- [Pendências](#pendências)

---

## Seções

| Seção | O que tem |
| --- | --- |
| **Hero** | Nome em letra cursiva, cargo em destaque, chamada, botões "Ver projetos" e "Baixar CV", foto em arco e logo gigante desfocado ao fundo |
| **Sobre** | Texto profissional, números com contagem animada, idiomas e uma estante em que cada livro é um hobby (passe o mouse ou toque para ler) |
| **Skills** | Tecnologias agrupadas, com ícone de cada uma |
| **Projetos** | Busca e filtros na lateral (categoria e tecnologia), cards grandes e modal com o estudo de caso |
| **Trajetória** | Linha do tempo (experiência + educação) que se preenche com o scroll |
| **Serviços** | Faixa escura com ondas, frase que acende palavra por palavra e lista numerada |
| **Certificações** | Badges digitais (com espaços para as próximas) e certificados/cursos com imagem ampliável |
| **Depoimentos** | Faixa com cores invertidas |
| **Contato** | Logos dos apps (LinkedIn, GitHub, WhatsApp, Instagram), CV no idioma atual, mapinha do Brasil com São Paulo marcado e formulário |
| **Dúvidas?** | Botão fixo que abre um assistente de perguntas e respostas |

## Funcionalidades

- **3 idiomas em tempo real** (PT/EN/ES), salvos no navegador; o idioma inicial segue o do navegador.
- **Tema claro (off-white) e escuro**, salvo no navegador.
- **Busca de projetos** por nome, descrição, categoria ou tag (ignora acentos), combinada com filtros de categoria e de várias tecnologias.
- **Modal de projeto** com problema, solução, arquitetura, desafios, resultado e links de código/demo.
- **CV por idioma**: `assets/cv-pt.pdf`, `cv-en.pdf`, `cv-es.pdf`; se faltar algum, baixa o em português.
- **Acessível**: navegação por teclado, foco visível, textos alternativos e respeito a `prefers-reduced-motion` (sem animações para quem pede menos movimento).
- **Responsivo**: celular, tablet e desktop.

## Tecnologias

- [Angular 22](https://angular.dev) — componentes standalone, signals, controle de fluxo `@if/@for`, sem zone.js
- TypeScript
- CSS puro (variáveis para tema)
- Ícones: [Devicon](https://devicon.dev) e [Simple Icons](https://simpleicons.org) via jsDelivr
- Fontes: Google Fonts (Barlow Semi Condensed, Pinyon Script, Space Grotesk, JetBrains Mono)

## Como rodar

Pré-requisitos: **Node.js 22+** e npm.

```bash
npm install
npm start          # abre em http://localhost:4200
```

Outros comandos:

```bash
npm run build      # build de produção em dist/portfolio/browser
npm run watch      # build contínuo em modo desenvolvimento
```

## Estrutura do projeto

```
public/
  assets/              imagens, logo, foto, CVs e certificados (servidos como /assets/...)
  favicon.png
src/
  index.html           metadados, fontes e tema inicial
  styles.css           todos os estilos (tokens de cor, seções, animações)
  app/
    app.ts / app.html  página única: monta as seções e liga os efeitos globais
    data/
      portfolio.data.ts    ⭐ TODO o conteúdo do site (textos, projetos, trajetória...)
    models/
      portfolio.models.ts  tipos do conteúdo
    core/
      i18n.service.ts      idiomas (t() para textos fixos, tr() para campos {pt,en,es})
      theme.service.ts     tema claro/escuro
      cv.service.ts        link do CV conforme o idioma
      scroll-fx.service.ts efeitos ligados ao scroll
      pointer-fx.service.ts cursor, brilho e inclinação dos cards (mouse)
      chat.config.ts       endpoint opcional do assistente
      storage.ts           localStorage seguro + prefers-reduced-motion
    shared/
      reveal.directive.ts    revela elementos ao entrar na tela (bloco ou cascata)
      count-up.directive.ts  contagem animada dos números
      split-text.ts          título letra por letra
      tech-chip.ts           pílula de tecnologia com ícone
      brazil-map.ts          mapinha do Brasil com o ponto da cidade
    sections/            um componente por seção (header, hero, about, projects...)
static-version/        primeira versão em HTML/CSS/JS puro (referência)
docs/                  prompt com a especificação do conteúdo
```

## Como editar o conteúdo

Quase tudo fica em **`src/app/data/portfolio.data.ts`**:

| Quero mudar... | Onde |
| --- | --- |
| Textos fixos (menu, botões, títulos) | `i18n.pt`, `i18n.en`, `i18n.es` |
| Números do "Sobre" | `stats` |
| Hobbies | `hobbies` (`t` = título na lombada, `d` = frase ao passar o mouse) |
| Skills | `skills` |
| Projetos | `projects` |
| Experiência e formação | `timeline.work`, `timeline.edu` |
| Serviços | `services` |
| Badges e certificados | `badges`, `badgeSlots`, `certs` |
| Depoimentos | `testimonials` |
| Redes sociais | `contacts` (o `slug` é o nome do ícone no Simple Icons) |
| Respostas do assistente | `faq` e `suggestions` |

Campos traduzidos usam o formato `{ pt: '...', en: '...', es: '...' }`. Se faltar um idioma, aparece o texto em português.

**Adicionar um projeto:** copie um item de `projects`, mude o `id` (único), preencha os textos e, se tiver,
coloque a imagem em `public/assets/projects/` e informe em `img: 'assets/projects/nome.png'`.

**Adicionar uma badge:** inclua um item em `badges` (`img` e `url` são opcionais). Os espaços "Próxima badge"
são controlados por `badgeSlots`.

**Ícone de uma tecnologia nova:** adicione o nome e o slug do [Devicon](https://devicon.dev) no mapa `ICONS`
em `src/app/shared/tech-chip.ts`.

## Imagens e arquivos

Ficam em `public/assets/` e são acessados como `assets/...`:

| Arquivo | Uso |
| --- | --- |
| `logo.png` | logo do menu, do fundo do hero e do botão "Dúvidas?" |
| `photo.jpg` | foto do hero (proporção 3:4) |
| `cv-pt.pdf`, `cv-en.pdf`, `cv-es.pdf` | CV por idioma |
| `certs/*.png` | imagens dos certificados |
| `og-image.png` | imagem de compartilhamento (redes sociais) — *ainda não criada* |

## Assistente "Dúvidas?"

- **Modo atual (offline):** procura palavras-chave da pergunta em `faq` e responde com o texto pronto no idioma do site.
  Se nada bater, sugere o formulário de contato.
- **IA de verdade (opcional):** crie um backend que receba `POST { message, lang }` e devolva `{ reply }`,
  e coloque a URL em `src/app/core/chat.config.ts`. **Nunca coloque chave de API no front-end.**

## Animações

Todas respeitam `prefers-reduced-motion`.

- Título do hero entrando letra por letra (desfocado → nítido)
- Hero sobe e esmaece; logo de fundo com parallax e escala
- Títulos de seção vazados que se preenchem e deslizam de lado
- Blocos e itens de lista revelados em cascata
- Linha do tempo que se preenche e acende os pontos
- Vitrines dos projetos com parallax e brilho no hover
- Frase dos Serviços acendendo palavra por palavra, com ondas animadas
- Números contando, cursor customizado, brilho seguindo o mouse e inclinação 3D dos cards

## Deploy

O build gera um site estático em `dist/portfolio/browser`, que pode ir para **Vercel**, **Netlify**,
**Firebase Hosting** ou **GitHub Pages**.

GitHub Pages (repositório `usuario/Portifolio`):

```bash
npx ng build --base-href /Portifolio/
# publique o conteúdo de dist/portfolio/browser (ex.: com o pacote angular-cli-ghpages)
```

## Pendências

- [ ] Imagens dos projetos e descrições completas (Passeios App, Micro-frontends, Java Patterns)
- [ ] Imagens dos certificados e das badges
- [ ] Link do Instagram
- [ ] Depoimentos reais
- [ ] Imagem `og-image.png`
- [ ] Backend do assistente (opcional)

---

Feito por **Vitória Gonçalves Passos** · [LinkedIn](https://linkedin.com/in/vitoria-goncalves-passos) · [GitHub](https://github.com/vitoriaGoncalves08)
