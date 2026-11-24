# Prompt: portfólio web de desenvolvedora (conteúdo, funcionalidades e animações de scroll)

> Use este texto como prompt. O **estilo visual é livre**: escolha um estilo novo, diferente do usado na primeira versão (fundo grafite com grão e destaque bordô). Está tudo descrito em termos de **conteúdo, componentes e comportamento**, não de aparência.

---

## 1. Objetivo

Crie um portfólio pessoal de uma desenvolvedora de software fullstack, em **site estático** (HTML + CSS + JavaScript puro, sem build), com o conteúdo todo em um único arquivo de dados (`js/data.js`) para eu editar sem mexer no layout. Deve ser **bilíngue (PT-BR / EN)**, ter **tema claro e escuro**, ser **responsivo** (celular, tablet, desktop) e **acessível** (navegação por teclado, foco visível, `aria-label`, contraste, `prefers-reduced-motion` desligando as animações).

**Estilo visual:** `[DESCREVA AQUI o novo estilo, paleta e tipografia que você quer]`. Evite o visual genérico de portfólio dev (gradiente roxo/azul neon). Mantenha a mesma estrutura e os mesmos dados.

## 2. Estrutura e seções (nesta ordem)

1. **Navegação fixa** com logo (iniciais **VGP**, arquivo `assets/logo.png`), links de âncora para cada seção, botão de idioma (PT/EN), botão de tema (claro/escuro) e menu hambúrguer no celular. Barra de progresso de leitura da página.
2. **Hero:** mensagem de boas-vindas, nome em destaque, cargo, frase curta, dois botões (**Ver projetos** e **Baixar CV**), foto (placeholder com iniciais "VP" até eu enviar a foto) e indicação de rolar.
3. **Faixa em loop** logo abaixo do hero, com as skills passando (ou valores/serviços). Ela acelera e inverte de direção conforme a velocidade do scroll e pausa no hover.
4. **Sobre:** texto profissional, texto "Fora do código" (hobbies), 3 números de destaque com contagem animada, idiomas e destaques.
5. **Skills:** grupos de tecnologias, cada tecnologia com **ícone da tecnologia** (devicon via jsDelivr; sem ícone, um ponto). Distribuídas de forma espalhada e variada, não em uma grade rígida.
6. **Projetos:** ver seção 4 (busca, filtros, tags, modal de detalhes).
7. **Trajetória (linha do tempo):** ver seção 5.
8. **Serviços:** lista numerada (01, 02, 03, 04). Seção com fundo de cor forte e transição ondulada nas bordas, e uma frase grande que acende palavra por palavra ao rolar.
9. **Certificados e certificações:** cards com **imagem do certificado**; ao clicar, abre ampliado (lightbox) com emissor, data e link de verificação opcional.
10. **Depoimentos:** cards com citação, nome, cargo e avatar de inicial. Esta seção usa o esquema de cores invertido em relação ao resto da página (clara no tema escuro, escura no tema claro).
11. **Contato:** ver seção 6.
12. **Rodapé:** direitos, links (GitHub, LinkedIn) e "voltar ao topo".
13. **Botão flutuante de IA** (canto inferior): abre um chat para tirar dúvidas (ver seção 7).

**Não incluir blog.**

## 3. Dados reais (extraídos do CV)

**Nome:** Vitória Gonçalves Passos (exibir como "Vitória Passos" no hero)
**Cargo:** Desenvolvedora de Software Fullstack — Java & React
**Local:** São Paulo, SP, Brasil
**E-mail:** vigoncalvesp@gmail.com
**Telefone / WhatsApp:** +55 11 94365-8985
**GitHub:** github.com/vitoriaGoncalves08
**LinkedIn:** linkedin.com/in/vitoria-goncalves-passos
**Instagram / Telegram:** ainda não definidos (usar placeholders `@seu.usuario`, `@seu_usuario`)

**Sobre (profissional):** Desenvolvedora fullstack em São Paulo. Na Muralis Tecnologia começou como estagiária em 2022 e hoje desenvolve microsserviços em Java e Spring Boot com arquitetura hexagonal, APIs REST e interfaces em React, participando das decisões técnicas e do dia a dia ágil do time. Também atua como freelancer, criando landing pages, protótipos no Figma e identidades visuais.
**Sobre (fora do código):** `[placeholder: hobbies, esportes, jogos, música, viagens]`

**Números de destaque:** 4+ anos de experiência · 2 bolsas de intercâmbio (EUA) · 5 certificações

**Idiomas:** Português (nativo) · Inglês B2 (New York Institute of Technology — ELS) · Espanhol básico
**Destaques:** destaque acadêmico 2x com bolsa de intercâmbio internacional (EUA) · projetos de robótica com Arduino (ETEC) · design de interfaces e identidades visuais

**Skills (por grupo):**
- Linguagens: Java, JavaScript, Node.js
- Front-end: React.js, HTML/CSS, SASS, Material UI, Figma
- Back-end: Spring Boot, Hibernate, REST, CI/CD
- Banco de dados: MySQL, SQL Server, PostgreSQL
- Conceitos: Microsserviços, Arquitetura Hexagonal, DDD, Design Patterns
- Ferramentas: Git, Scrum, DevOps

**Experiência profissional:**
- **2025 — hoje · Desenvolvedora Web e Designer · Freelancer (remoto):** landing pages com integração de formulários e automação de e-mails; protótipos UX/UI no Figma aplicando design systems e boas práticas de usabilidade; identidades visuais e logotipos vetorizados.
- **2024 — hoje · Desenvolvedora de Software Fullstack · Muralis Tecnologia (São Paulo, SP):** microsserviços backend em Java e Spring Boot com arquitetura hexagonal; criação e integração de APIs REST, novas funcionalidades e correção de bugs; contribuição em decisões técnicas e melhoria contínua em ambiente ágil; interfaces em React.js com componentes reutilizáveis e foco em performance; participação em planejamento de sprints, estimativas e alinhamentos diários.
- **2022 — 2023 · Desenvolvedora de Software (Estágio) · Muralis Tecnologia:** suporte ao desenvolvimento de aplicações web e mobile, com correção de bugs e novas funcionalidades; apoio na análise e manutenção de banco de dados; documentação técnica e funcional conforme as necessidades do negócio.

**Formação:**
- **2021 — 2024 · Análise e Desenvolvimento de Sistemas · FATEC Ferraz de Vasconcelos:** aplicações web e mobile fullstack com Scrum; análise de requisitos, modelagem de sistemas e desenvolvimento; destaque acadêmico 2 vezes com bolsa de intercâmbio internacional (EUA).
- **2019 — 2021 · Técnico em Desenvolvimento de Sistemas · ETEC Guaianases:** aplicações web e mobile, modelagem de banco de dados; projetos de robótica com Arduino.

**Certificações** (cada uma com imagem do certificado, a enviar):
- Clean Code e Clean Architecture — Rodrigo Branas, 24h, Jan/2026
- Acelerando Projetos de Sucesso — MBA USP/Esalq, Nov/2025
- Acreditação Técnica — Amazon Web Services (AWS), 5h, Mar/2025
- Get Connected — Cisco Networking Academy, 30h, Mar/2022
- App Development — Madcode (from Facebook), 32h, Out/2019

**Serviços:**
1. Landing pages e sites — páginas rápidas, com formulários integrados e automação de e-mails
2. APIs e microsserviços — back-ends em Java e Spring Boot com arquitetura hexagonal
3. UX/UI e protótipos — protótipos no Figma com design system e foco em usabilidade
4. Identidade visual — logotipos vetorizados e identidades visuais

**Projetos** (repositórios no GitHub `vitoriaGoncalves08`):
- **Microservice SAGA Orquestrado** — Back-end · Java, Spring Boot, Kafka, Docker. Microsserviços com padrão SAGA orquestrado; orquestrador central com eventos no Kafka e compensações; idempotência, ordenação de eventos e rollback.
- **Passeios App** — Front-end · Angular, TypeScript. Aplicação para gestão de passeios.
- **Micro-frontends Vendas** — Front-end · Angular, Module Federation, Micro-frontends. Front-end modular.
- **Java Patterns** — Estudo · Java, Design Patterns. Exemplos práticos de padrões de projeto.

Cada projeto tem: imagem/screenshot (placeholder até eu enviar), título, descrição curta, categoria, tags, e no detalhe: problema, solução, arquitetura, desafios, resultado, link do código e link da demo (opcionais).

**Depoimentos:** 2 placeholders (citação, nome, cargo); eu preencho depois.

## 4. Projetos: busca, filtros e detalhes

- Campo de **busca digitável** que filtra em tempo real por **nome, descrição, categoria e tag**, ignorando maiúsculas e acentos, com várias palavras combinadas (E).
- Ao lado (coluna lateral fixa ao rolar), **filtros de seleção**: categoria (Todos / Back-end / Front-end / Estudo) e **tecnologia** (multisseleção; escolher várias mostra só projetos que têm todas). Botão **Limpar filtros**.
- Contador "X / Y projetos" e mensagem amigável quando não há resultado.
- Os cards têm **imagem grande e chamativa** (o primeiro projeto em destaque, em largura total), tags com ícone da tecnologia e chamada "Ver detalhes".
- Ao clicar, abre um **modal** com imagem grande, tags, problema, solução, arquitetura, desafios, resultado e botões **Ver demo** / **Código**. Fecha com X, tecla Esc ou clique fora.
- As tags têm aparência de pílula translúcida com o ícone da tecnologia.

## 5. Trajetória em linha do tempo animada

- Uma única **linha do tempo vertical** que mistura experiência e educação em ordem cronológica decrescente, com **abas** (Tudo / Experiência / Educação).
- Cada etapa: período, selo do tipo, cargo/curso, instituição/empresa e descrição, mais o **ano em tipografia gigante** ao lado oposto.
- Animações ligadas ao scroll: a linha central **se preenche conforme a pessoa rola**, os pontos **acendem** (com pulso) quando a linha chega neles, os cards **entram alternando esquerda/direita** e o ano gigante acende junto. No celular, vira uma coluna única.

## 6. Contato

- Texto de chamada, **tiles de contato com o logo de cada app**: E-mail, LinkedIn, GitHub, WhatsApp, Instagram e Telegram (logos do pacote `simple-icons` via jsDelivr, com versão fixada), cada um com nome e @/handle e link correto (`mailto:`, `wa.me`, etc.).
- Botão **Baixar CV** (`assets/cv.pdf`, o arquivo do CV).
- **Formulário** (nome, e-mail, mensagem) que abre o cliente de e-mail com `mailto:` preenchido (ou, opcionalmente, envia a um serviço como Formspree).

## 7. Assistente de IA (botão fixo)

- Botão flutuante "Pergunte à IA" que abre um painel de chat com saudação, **sugestões de perguntas clicáveis** e campo de texto.
- Modo **offline por padrão**: responde por palavras-chave com base em uma lista de perguntas e respostas (microsserviços, disponibilidade/freela, front-end/React, stack, formação, idiomas, design/Figma) e mostra uma mensagem de fallback orientando a usar o formulário.
- Deixar uma constante `CHAT_ENDPOINT` para, depois, plugar uma IA de verdade via backend (`POST {message, lang}` → `{reply}`); **nunca colocar chave de API no navegador**.

## 8. Animações ligadas ao scroll (comportamento, não visual)

Quero bastante movimento ao descer a página, e não só efeitos de mouse. Implemente com `IntersectionObserver` e um único listener de scroll com `requestAnimationFrame`:

1. **Revelação de seções:** blocos entram com fade + deslocamento + leve desfoque; itens de grades/listas entram **em cascata** (atraso escalonado), inclusive quando a lista é refiltrada.
2. **Títulos de seção** começam só com contorno e **se preenchem da esquerda para a direita** conforme entram na tela, com leve deslocamento horizontal (parallax).
3. **Hero com parallax:** o conteúdo sobe mais devagar e esmaece ao rolar; a foto se move em velocidade diferente; um texto gigante de fundo (as iniciais "VGP") se desloca e muda de escala.
4. **Faixa em loop** cuja velocidade e sentido acompanham a velocidade do scroll.
5. **Frase grande que acende palavra por palavra** conforme a pessoa rola.
6. **Seção de cor forte com bordas onduladas** animadas (ondas se movendo continuamente).
7. **Linha do tempo** que se preenche e acende os pontos (seção 5).
8. **Imagens dos projetos** com parallax interno (a janela/mockup se desloca levemente com o scroll) e brilho passando no hover.
9. **Números do "Sobre"** contando de 0 até o valor quando entram na tela.
10. **Troca de esquema de cor** em uma seção (depoimentos), invertendo claro/escuro em relação ao restante.
11. **Lista de serviços numerada** com número vazado que preenche no hover e seta que gira.
12. **Barra de progresso** de leitura no topo.
13. Efeitos de ponteiro (só em dispositivos com mouse): cursor customizado que cresce sobre links/cards, brilho que segue o mouse e leve inclinação 3D dos cards.
14. Texto do título do hero entrando **letra por letra** (de desfocado para nítido).

Tudo deve respeitar `prefers-reduced-motion` (sem animação, conteúdo visível).

## 9. Requisitos técnicos

- Arquivos: `index.html`, `css/`, `js/data.js` (todo o conteúdo e os textos PT/EN), `js/main.js` (renderização, filtros, modal, chat, idioma, tema), `js/fx.js` (animações), `assets/` (logo, favicon, `cv.pdf`, `certs/`, imagens dos projetos, `og-image.png`).
- Campos traduzíveis como `{ pt: '…', en: '…' }`; atributos `data-i18n` para textos estáticos. O idioma inicial vem do navegador e a escolha é salva em `localStorage` (sempre dentro de `try/catch`). O tema também.
- Ícones por CDN (jsDelivr, versão fixada) com fallback quando falhar; fontes via Google Fonts.
- SEO básico: `<title>`, `meta description`, Open Graph/Twitter card, favicon, `lang` do `<html>` atualizado ao trocar idioma.
- Performance: imagens com `loading="lazy"`, animações com `transform/opacity`, listeners passivos.
- Sem dependências pesadas; vanilla JS. Funcionar abrindo por servidor estático simples (`python -m http.server`).
- Deixar claro, no código, onde trocar: foto, imagens dos projetos, imagens dos certificados, textos "Fora do código", depoimentos, Instagram/Telegram e o `CHAT_ENDPOINT`.

## 10. Entrega

Gere o site completo funcionando, em um estilo visual novo e coeso, aplicando todos os dados acima e todas as animações de scroll da seção 8. No final, liste o que preciso substituir (foto, imagens de projetos e certificados, hobbies, depoimentos, redes sociais).
