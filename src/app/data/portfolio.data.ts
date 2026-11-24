import { PortfolioData } from '../models/portfolio.models';

/**
 * Todo o conteúdo do portfólio (dados do CV de Vitória Gonçalves Passos).
 * Campos { pt, en, es } são traduzidos; o resto é comum aos três idiomas.
 * Para editar textos, projetos, certificações etc., altere apenas este arquivo.
 */
export const DATA: PortfolioData = {
  i18n: {
    pt: {
      welcome: '// bem-vindo à minha jornada como desenvolvedora.',
      hero_role: 'Dev Full Stack',
      search_ph: 'Buscar por nome, descrição ou tag…', f_cat: 'Categoria', f_tech: 'Tecnologia', clear: 'Limpar filtros',
      no_results: 'Nenhum projeto encontrado. Tente outro termo.', found: 'projetos',
      statement: 'Transformo ideias complexas em sistemas simples, rápidos e prontos para crescer.',
      skip: 'Ir para o conteúdo', nav_about: 'Sobre', nav_skills: 'Skills', nav_projects: 'Projetos',
      nav_journey: 'Trajetória', nav_services: 'Serviços', nav_certs: 'Certificações', nav_testi: 'Depoimentos',
      nav_contact: 'Contato',
      theme_t: 'Tema', theme_light: 'Claro', theme_dark: 'Escuro', accent_t: 'Cor dos detalhes',
      accent_neutral: 'Grafite', accent_wine: 'Bordô', accent_brown: 'Marrom', accent_denim: 'Azul jeans',
      role: 'Java · Spring Boot · React · Microsserviços',
      tagline: 'Construo microsserviços em Java e Spring Boot e interfaces em React, com arquitetura limpa e foco em qualidade.',
      cta_projects: 'Ver projetos', cta_cv: 'Baixar CV',
      about_pro_t: 'Profissional', about_hobby_t: 'Fora do código',
      about_pro: 'Sou desenvolvedora fullstack em São Paulo. Na Muralis Tecnologia comecei como estagiária em 2022 e hoje desenvolvo microsserviços em Java e Spring Boot com arquitetura hexagonal, APIs REST e interfaces em React, participando das decisões técnicas e do dia a dia ágil do time. Também atuo como freelancer, criando landing pages, protótipos no Figma e identidades visuais.',
      about_hobby: 'O que me recarrega quando fecho o editor.', hobby_hint: 'Passe o mouse (ou toque) nos livros da estante.',
      langs_t: 'Idiomas',
      tl_work: 'Experiência', tl_edu: 'Educação', tl_all: 'Tudo', more: 'Ver detalhes →', all: 'Todos',
      certs_badges: 'Badges', certs_courses: 'Certificados e cursos', badge_soon: 'Próxima badge',
      contact_lead: 'Tem um projeto, vaga ou dúvida? Me escreva.',
      f_name: 'Nome', f_email: 'E-mail', f_msg: 'Mensagem', f_send: 'Enviar',
      rights: 'Todos os direitos reservados.', top: 'Voltar ao topo ↑',
      chat_fab: 'Dúvidas?', chat_title: 'Assistente do portfólio', chat_ph: 'Digite sua dúvida…',
      // assistente "Dúvidas?" (respostas montadas a partir dos dados; {chaves} são preenchidas pelo motor)
      chat_typing: 'digitando…',
      ans_greet: 'Oi! 👋 Sou o assistente do portfólio da Vitória. Pergunte sobre projetos, experiência, tecnologias, certificações ou contato.',
      ans_thanks: 'Por nada! Se quiser falar direto com ela, os contatos estão no fim da página.',
      ans_who: 'Sou um assistente simples: respondo com base nas informações deste portfólio, direto no seu navegador, sem IA paga e sem guardar suas perguntas.',
      ans_help: 'Posso falar sobre projetos, experiência, formação, tecnologias, certificações, idiomas, hobbies, serviços e contato. Tente, por exemplo: "trabalha com Spring Boot?"',
      ans_project: '{title} ({cat}) — {desc}\nTecnologias: {tags}.',
      ans_projects: 'Ela tem {n} projetos no portfólio:\n{list}\nQuer saber de algum?',
      ans_tech_skill: 'Sim! {name} faz parte da stack dela, em {group}.',
      ans_tech_used: 'Aparece nos projetos: {projects}.',
      ans_tech_only: 'Ela usou {name} em: {projects}.',
      ans_skills: 'A stack dela:\n{list}',
      ans_unknown_tech: '{name} não aparece no portfólio dela. A stack principal é {stack}. Se for importante para você, vale perguntar direto.',
      ans_job: '{role} — {org} ({when}).\n{d}',
      ans_work: 'Experiência profissional:\n{list}',
      ans_edu_item: '{course} — {org} ({when}).\n{d}',
      ans_edu: 'Formação:\n{list}',
      ans_cert: '{title} — {org}, {date}.',
      ans_certs: 'Badges: {badges}.\nCertificados e cursos: {certs}.',
      ans_langs: 'Idiomas: {list}.',
      ans_hobbies: 'Fora do código: {list}.',
      ans_hobby: '{t}: {d}',
      ans_services: 'Serviços que ela oferece:\n{list}',
      ans_location: 'Ela mora em São Paulo, Brasil, e também trabalha de forma remota.',
      ans_avail: 'Ela atua como freelancer e está aberta a conversas sobre oportunidades. O melhor caminho é o contato:',
      ans_contact: 'Você pode falar com ela pelo LinkedIn, GitHub ou WhatsApp, ou pelo formulário de contato.',
      ans_cv: 'Aqui está o CV dela:',
      ans_guess: 'Acho que você quer saber sobre {label}:',
      ans_tie: 'Encontrei mais de um assunto parecido:',
      ans_closest: 'Não achei exatamente isso, mas estes assuntos parecem próximos:',
      ans_passage: 'Encontrei isto no portfólio:',
      ans_code: 'O código de {title} está no GitHub.',
      ans_no_code: '{title} ainda não tem link de código publicado.',
      ans_demo: 'A demo de {title} está online.',
      ans_no_demo: '{title} ainda não tem demo online.',
      ans_when: '{title}: {when}.',
      act_details: 'Ver detalhes', act_code: 'Ver código', act_demo: 'Abrir demo', act_cv: 'Baixar CV', act_contact: 'Ir para contato', act_section: 'Ver seção',
      fu_tech: 'Quais tecnologias?', fu_code: 'Tem o código?', fu_when: 'Quando foi?', fu_projects: 'Quais projetos ela tem?', fu_work: 'Onde ela trabalha?', fu_contact: 'Como falo com ela?',
      topic_location: 'localização', topic_avail: 'disponibilidade', topic_contact: 'contato',
      chat_hi: 'Oi! Posso responder sobre experiência, projetos e formação da Vitória.',
      chat_fallback: 'Não tenho certeza sobre isso. Use o formulário de contato e ela responderá pessoalmente.',
      m_problem: 'Problema', m_solution: 'Solução', m_arch: 'Arquitetura', m_challenges: 'Desafios', m_result: 'Resultado',
      m_demo: 'Ver demo', m_code: 'Código', cert_view: 'Ver credencial →'
    },
    en: {
      welcome: '// welcome to my journey as a developer.',
      hero_role: 'Full Stack Dev',
      search_ph: 'Search by name, description or tag…', f_cat: 'Category', f_tech: 'Technology', clear: 'Clear filters',
      no_results: 'No projects found. Try another term.', found: 'projects',
      statement: 'I turn complex ideas into simple, fast systems that are ready to grow.',
      skip: 'Skip to content', nav_about: 'About', nav_skills: 'Skills', nav_projects: 'Projects',
      nav_journey: 'Journey', nav_services: 'Services', nav_certs: 'Certifications', nav_testi: 'Testimonials',
      nav_contact: 'Contact',
      theme_t: 'Theme', theme_light: 'Light', theme_dark: 'Dark', accent_t: 'Accent color',
      accent_neutral: 'Graphite', accent_wine: 'Burgundy', accent_brown: 'Brown', accent_denim: 'Denim blue',
      role: 'Java · Spring Boot · React · Microservices',
      tagline: 'I build Java and Spring Boot microservices and React interfaces, with clean architecture and a focus on quality.',
      cta_projects: 'View projects', cta_cv: 'Download CV',
      about_pro_t: 'Professional', about_hobby_t: 'Beyond code',
      about_pro: "I'm a full stack developer based in São Paulo. I joined Muralis Tecnologia as an intern in 2022 and today I build Java and Spring Boot microservices with hexagonal architecture, REST APIs and React interfaces, taking part in technical decisions and the team's agile routine. I also freelance, creating landing pages, Figma prototypes and visual identities.",
      about_hobby: 'What recharges me when I close the editor.', hobby_hint: 'Hover (or tap) the books on the shelf.',
      langs_t: 'Languages',
      tl_work: 'Experience', tl_edu: 'Education', tl_all: 'All', more: 'See details →', all: 'All',
      certs_badges: 'Badges', certs_courses: 'Certificates & courses', badge_soon: 'Next badge',
      contact_lead: 'Got a project, a role or a question? Get in touch.',
      f_name: 'Name', f_email: 'E-mail', f_msg: 'Message', f_send: 'Send',
      rights: 'All rights reserved.', top: 'Back to top ↑',
      chat_fab: 'Questions?', chat_title: 'Portfolio assistant', chat_ph: 'Type your question…',
      // "Questions?" assistant (answers built from the data; {keys} are filled in by the engine)
      chat_typing: 'typing…',
      ans_greet: "Hi! 👋 I'm the assistant of Vitória's portfolio. Ask about projects, experience, technologies, certifications or contact.",
      ans_thanks: "You're welcome! If you want to talk to her directly, the contacts are at the end of the page.",
      ans_who: "I'm a simple assistant: I answer from the information in this portfolio, right in your browser, with no paid AI and without storing your questions.",
      ans_help: 'I can talk about projects, experience, education, technologies, certifications, languages, hobbies, services and contact. Try, for example: "does she work with Spring Boot?"',
      ans_project: '{title} ({cat}) — {desc}\nTechnologies: {tags}.',
      ans_projects: 'She has {n} projects in the portfolio:\n{list}\nWant to know about one of them?',
      ans_tech_skill: 'Yes! {name} is part of her stack, under {group}.',
      ans_tech_used: 'It shows up in: {projects}.',
      ans_tech_only: 'She used {name} in: {projects}.',
      ans_skills: 'Her stack:\n{list}',
      ans_unknown_tech: "{name} doesn't appear in her portfolio. Her main stack is {stack}. If it matters to you, it's worth asking her directly.",
      ans_job: '{role} — {org} ({when}).\n{d}',
      ans_work: 'Work experience:\n{list}',
      ans_edu_item: '{course} — {org} ({when}).\n{d}',
      ans_edu: 'Education:\n{list}',
      ans_cert: '{title} — {org}, {date}.',
      ans_certs: 'Badges: {badges}.\nCertificates and courses: {certs}.',
      ans_langs: 'Languages: {list}.',
      ans_hobbies: 'Beyond code: {list}.',
      ans_hobby: '{t}: {d}',
      ans_services: 'Services she offers:\n{list}',
      ans_location: 'She lives in São Paulo, Brazil, and also works remotely.',
      ans_avail: 'She freelances and is open to conversations about opportunities. The best way is the contact section:',
      ans_contact: 'You can reach her on LinkedIn, GitHub or WhatsApp, or through the contact form.',
      ans_cv: 'Here is her CV:',
      ans_guess: 'I think you want to know about {label}:',
      ans_tie: 'I found more than one similar topic:',
      ans_closest: "I couldn't find exactly that, but these topics look close:",
      ans_passage: 'I found this in the portfolio:',
      ans_code: 'The code for {title} is on GitHub.',
      ans_no_code: "{title} doesn't have a published code link yet.",
      ans_demo: 'The {title} demo is online.',
      ans_no_demo: "{title} doesn't have an online demo yet.",
      ans_when: '{title}: {when}.',
      act_details: 'See details', act_code: 'See code', act_demo: 'Open demo', act_cv: 'Download CV', act_contact: 'Go to contact', act_section: 'Go to section',
      fu_tech: 'Which technologies?', fu_code: 'Is there code?', fu_when: 'When was it?', fu_projects: 'What projects does she have?', fu_work: 'Where does she work?', fu_contact: 'How do I reach her?',
      topic_location: 'location', topic_avail: 'availability', topic_contact: 'contact',
      chat_hi: "Hi! I can answer about Vitória's experience, projects and education.",
      chat_fallback: "I'm not sure about that. Please use the contact form and she'll reply personally.",
      m_problem: 'Problem', m_solution: 'Solution', m_arch: 'Architecture', m_challenges: 'Challenges', m_result: 'Result',
      m_demo: 'Live demo', m_code: 'Source code', cert_view: 'View credential →'
    },
    es: {
      welcome: '// bienvenido a mi trayectoria como desarrolladora.',
      hero_role: 'Dev Full Stack',
      search_ph: 'Buscar por nombre, descripción o etiqueta…', f_cat: 'Categoría', f_tech: 'Tecnología', clear: 'Limpiar filtros',
      no_results: 'No se encontraron proyectos. Prueba con otro término.', found: 'proyectos',
      statement: 'Convierto ideas complejas en sistemas simples, rápidos y listos para crecer.',
      skip: 'Ir al contenido', nav_about: 'Sobre mí', nav_skills: 'Skills', nav_projects: 'Proyectos',
      nav_journey: 'Trayectoria', nav_services: 'Servicios', nav_certs: 'Certificaciones', nav_testi: 'Testimonios',
      nav_contact: 'Contacto',
      theme_t: 'Tema', theme_light: 'Claro', theme_dark: 'Oscuro', accent_t: 'Color de detalles',
      accent_neutral: 'Grafito', accent_wine: 'Burdeos', accent_brown: 'Marrón', accent_denim: 'Azul vaquero',
      role: 'Java · Spring Boot · React · Microservicios',
      tagline: 'Construyo microservicios en Java y Spring Boot e interfaces en React, con arquitectura limpia y foco en la calidad.',
      cta_projects: 'Ver proyectos', cta_cv: 'Descargar CV',
      about_pro_t: 'Profesional', about_hobby_t: 'Fuera del código',
      about_pro: 'Soy desarrolladora fullstack en São Paulo. Entré a Muralis Tecnologia como pasante en 2022 y hoy desarrollo microservicios en Java y Spring Boot con arquitectura hexagonal, APIs REST e interfaces en React, participando en las decisiones técnicas y en el día a día ágil del equipo. También trabajo como freelancer, creando landing pages, prototipos en Figma e identidades visuales.',
      about_hobby: 'Lo que me recarga cuando cierro el editor.', hobby_hint: 'Pasa el mouse (o toca) los libros del estante.',
      langs_t: 'Idiomas',
      tl_work: 'Experiencia', tl_edu: 'Educación', tl_all: 'Todo', more: 'Ver detalles →', all: 'Todos',
      certs_badges: 'Insignias', certs_courses: 'Certificados y cursos', badge_soon: 'Próxima insignia',
      contact_lead: '¿Tienes un proyecto, una vacante o una duda? Escríbeme.',
      f_name: 'Nombre', f_email: 'Correo', f_msg: 'Mensaje', f_send: 'Enviar',
      rights: 'Todos los derechos reservados.', top: 'Volver arriba ↑',
      chat_fab: '¿Dudas?', chat_title: 'Asistente del portafolio', chat_ph: 'Escribe tu duda…',
      // asistente "¿Dudas?" (respuestas armadas a partir de los datos; el motor completa las {claves})
      chat_typing: 'escribiendo…',
      ans_greet: '¡Hola! 👋 Soy el asistente del portafolio de Vitória. Pregunta sobre proyectos, experiencia, tecnologías, certificaciones o contacto.',
      ans_thanks: '¡De nada! Si quieres hablar directamente con ella, los contactos están al final de la página.',
      ans_who: 'Soy un asistente simple: respondo con la información de este portafolio, en tu navegador, sin IA de pago y sin guardar tus preguntas.',
      ans_help: 'Puedo hablar de proyectos, experiencia, formación, tecnologías, certificaciones, idiomas, hobbies, servicios y contacto. Prueba, por ejemplo: "¿trabaja con Spring Boot?"',
      ans_project: '{title} ({cat}) — {desc}\nTecnologías: {tags}.',
      ans_projects: 'Tiene {n} proyectos en el portafolio:\n{list}\n¿Quieres saber de alguno?',
      ans_tech_skill: '¡Sí! {name} es parte de su stack, en {group}.',
      ans_tech_used: 'Aparece en los proyectos: {projects}.',
      ans_tech_only: 'Usó {name} en: {projects}.',
      ans_skills: 'Su stack:\n{list}',
      ans_unknown_tech: '{name} no aparece en su portafolio. Su stack principal es {stack}. Si es importante para ti, vale la pena preguntarle directamente.',
      ans_job: '{role} — {org} ({when}).\n{d}',
      ans_work: 'Experiencia profesional:\n{list}',
      ans_edu_item: '{course} — {org} ({when}).\n{d}',
      ans_edu: 'Formación:\n{list}',
      ans_cert: '{title} — {org}, {date}.',
      ans_certs: 'Insignias: {badges}.\nCertificados y cursos: {certs}.',
      ans_langs: 'Idiomas: {list}.',
      ans_hobbies: 'Fuera del código: {list}.',
      ans_hobby: '{t}: {d}',
      ans_services: 'Servicios que ofrece:\n{list}',
      ans_location: 'Vive en São Paulo, Brasil, y también trabaja de forma remota.',
      ans_avail: 'Trabaja como freelancer y está abierta a conversar sobre oportunidades. El mejor camino es el contacto:',
      ans_contact: 'Puedes hablar con ella por LinkedIn, GitHub o WhatsApp, o por el formulario de contacto.',
      ans_cv: 'Aquí está su CV:',
      ans_guess: 'Creo que quieres saber sobre {label}:',
      ans_tie: 'Encontré más de un tema parecido:',
      ans_closest: 'No encontré exactamente eso, pero estos temas parecen cercanos:',
      ans_passage: 'Encontré esto en el portafolio:',
      ans_code: 'El código de {title} está en GitHub.',
      ans_no_code: '{title} todavía no tiene un enlace de código publicado.',
      ans_demo: 'La demo de {title} está online.',
      ans_no_demo: '{title} todavía no tiene demo online.',
      ans_when: '{title}: {when}.',
      act_details: 'Ver detalles', act_code: 'Ver código', act_demo: 'Abrir demo', act_cv: 'Descargar CV', act_contact: 'Ir a contacto', act_section: 'Ver sección',
      fu_tech: '¿Qué tecnologías?', fu_code: '¿Tiene el código?', fu_when: '¿Cuándo fue?', fu_projects: '¿Qué proyectos tiene?', fu_work: '¿Dónde trabaja?', fu_contact: '¿Cómo hablo con ella?',
      topic_location: 'ubicación', topic_avail: 'disponibilidad', topic_contact: 'contacto',
      chat_hi: '¡Hola! Puedo responder sobre la experiencia, los proyectos y la formación de Vitória.',
      chat_fallback: 'No estoy segura de eso. Usa el formulario de contacto y ella te responderá personalmente.',
      m_problem: 'Problema', m_solution: 'Solución', m_arch: 'Arquitectura', m_challenges: 'Desafíos', m_result: 'Resultado',
      m_demo: 'Ver demo', m_code: 'Código', cert_view: 'Ver credencial →'
    }
  },

  /* CV para download conforme o idioma. Se o arquivo de um idioma não existir, baixa o em português. */
  cv: { pt: 'assets/cv-pt.pdf', en: 'assets/cv-en.pdf', es: 'assets/cv-es.pdf' },

  stats: [
    { n: '4+', l: { pt: 'anos de experiência', en: 'years of experience', es: 'años de experiencia' } },
    { n: '2', l: { pt: 'bolsas de intercâmbio (EUA)', en: 'exchange scholarships (USA)', es: 'becas de intercambio (EE. UU.)' } },
    { n: '5', l: { pt: 'certificações', en: 'certifications', es: 'certificaciones' } }
  ],
  languages: [
    { pt: 'Português — nativo', en: 'Portuguese — native', es: 'Portugués — nativo' },
    { pt: 'Inglês — B2 (New York Institute of Technology · ELS)', en: 'English — B2 (New York Institute of Technology · ELS)', es: 'Inglés — B2 (New York Institute of Technology · ELS)' },
    { pt: 'Espanhol — básico', en: 'Spanish — basic', es: 'Español — básico' }
  ],

  /* Hobbies: cada um vira um livro na estante do Sobre.
     t = título na lombada · d = frase mostrada ao passar o mouse ou tocar */
  hobbies: [
    {
      t: { pt: 'Academia', en: 'Gym', es: 'Gimnasio' },
      d: { pt: 'Treino para manter corpo e cabeça em dia.', en: 'Training to keep body and mind in shape.', es: 'Entreno para mantener cuerpo y mente en forma.' }
    },
    {
      t: { pt: 'Jogos', en: 'Games', es: 'Videojuegos' },
      d: { pt: 'Jogos com boa história e bons desafios.', en: 'Games with a good story and good challenges.', es: 'Juegos con buena historia y buenos desafíos.' }
    },
    {
      t: { pt: 'Cerâmica', en: 'Ceramics', es: 'Cerámica' },
      d: { pt: 'Modelar no torno ensina paciência e detalhe.', en: 'Throwing on the wheel teaches patience and detail.', es: 'Modelar en el torno enseña paciencia y detalle.' }
    },
    {
      t: { pt: 'Livros', en: 'Books', es: 'Libros' },
      d: { pt: 'Ficção, tecnologia e tudo que abre a cabeça.', en: 'Fiction, tech and anything that opens the mind.', es: 'Ficción, tecnología y todo lo que abre la mente.' }
    }
  ],

  skills: [
    { t: { pt: 'Linguagens', en: 'Languages', es: 'Lenguajes' }, items: ['Java', 'JavaScript', 'Node.js'] },
    { t: 'Front-end', items: ['React.js', 'HTML/CSS', 'SASS', 'Material UI'] },
    { t: 'Back-end', items: ['Spring Boot', 'Hibernate', 'REST', 'CI/CD'] },
    { t: { pt: 'Banco de dados', en: 'Databases', es: 'Bases de datos' }, items: ['MySQL', 'SQL Server', 'PostgreSQL'] },
    { t: { pt: 'Ferramentas', en: 'Tools', es: 'Herramientas' }, items: ['Git', 'Figma'] }
  ],

  projects: [
    {
      id: 'bewear', title: 'E-commerce Bewear', img: 'assets/projects/bewear.svg',
      tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM', 'Stripe'],
      cat: 'Full Stack', emoji: '🛒',
      desc: {
        pt: 'Loja virtual completa em Next.js: catálogo, busca e filtros, carrinho, checkout com Stripe e tema claro/escuro.',
        en: 'Full-featured online store in Next.js: catalog, search and filters, cart, Stripe checkout and light/dark mode.',
        es: 'Tienda online completa en Next.js: catálogo, búsqueda y filtros, carrito, checkout con Stripe y modo claro/oscuro.'
      },
      problem: {
        pt: 'Construir uma loja virtual de ponta a ponta, da vitrine de produtos ao pagamento, rápida e funcionando bem em qualquer dispositivo.',
        en: 'Build an end-to-end online store, from the product showcase to payment, fast and working well on any device.',
        es: 'Construir una tienda online de punta a punta, desde la vitrina de productos hasta el pago, rápida y que funcione bien en cualquier dispositivo.'
      },
      solution: {
        pt: 'Next.js 13+ com App Router e React 19, listagem e detalhes de produtos, busca e filtros, carrinho de compras, checkout seguro com Stripe, autenticação com Better Auth e formulários validados com React Hook Form + Zod.',
        en: 'Next.js 13+ with the App Router and React 19, product listing and details, search and filters, shopping cart, secure Stripe checkout, Better Auth authentication and forms validated with React Hook Form + Zod.',
        es: 'Next.js 13+ con App Router y React 19, listado y detalle de productos, búsqueda y filtros, carrito de compras, checkout seguro con Stripe, autenticación con Better Auth y formularios validados con React Hook Form + Zod.'
      },
      arch: {
        pt: 'Front-end em Next.js (App Router), Tailwind CSS e componentes Radix UI; dados com TanStack Query; back-end com API Routes do Next.js, Drizzle ORM e PostgreSQL; pagamentos pelo Stripe.',
        en: 'Next.js (App Router) front-end with Tailwind CSS and Radix UI components; data with TanStack Query; back-end with Next.js API Routes, Drizzle ORM and PostgreSQL; payments through Stripe.',
        es: 'Front-end en Next.js (App Router), Tailwind CSS y componentes Radix UI; datos con TanStack Query; back-end con API Routes de Next.js, Drizzle ORM y PostgreSQL; pagos con Stripe.'
      },
      challenges: {
        pt: 'Integrar o pagamento com o Stripe de forma segura, manter o carrinho e os dados sincronizados em tempo real e validar os formulários do checkout.',
        en: 'Integrating Stripe payments securely, keeping the cart and data in sync in real time and validating the checkout forms.',
        es: 'Integrar el pago con Stripe de forma segura, mantener el carrito y los datos sincronizados en tiempo real y validar los formularios del checkout.'
      },
      result: {
        pt: 'Uma loja completa e responsiva, com carregamento rápido, tema claro/escuro e código organizado com ESLint, Prettier e Husky.',
        en: 'A complete, responsive store with fast page loads, light/dark mode and code kept tidy with ESLint, Prettier and Husky.',
        es: 'Una tienda completa y responsiva, con carga rápida, modo claro/oscuro y código organizado con ESLint, Prettier y Husky.'
      },
      code: 'https://github.com/vitoriaGoncalves08/E-commerce-Bewear', demo: ''
    },
    {
      id: 'saga', title: 'Microservice SAGA Orquestrado', tags: ['Java', 'Spring Boot', 'Kafka', 'Docker'],
      cat: 'Back-end', emoji: '🧩',
      desc: { pt: 'Sistema de microsserviços com padrão SAGA orquestrado.', en: 'Microservices system using the orchestrated SAGA pattern.', es: 'Sistema de microservicios con el patrón SAGA orquestado.' },
      problem: { pt: 'Garantir consistência entre serviços sem transação distribuída.', en: 'Ensure consistency across services without distributed transactions.', es: 'Garantizar la consistencia entre servicios sin transacciones distribuidas.' },
      solution: { pt: 'Orquestrador central com eventos no Kafka e compensações.', en: 'Central orchestrator with Kafka events and compensating actions.', es: 'Orquestador central con eventos en Kafka y compensaciones.' },
      arch: { pt: 'Order → Orchestrator → Product/Payment/Inventory via Kafka.', en: 'Order → Orchestrator → Product/Payment/Inventory via Kafka.', es: 'Order → Orchestrator → Product/Payment/Inventory vía Kafka.' },
      challenges: { pt: 'Idempotência, ordenação de eventos e rollback.', en: 'Idempotency, event ordering and rollback.', es: 'Idempotencia, orden de eventos y rollback.' },
      result: { pt: 'Fluxo resiliente com rastreabilidade ponta a ponta.', en: 'Resilient flow with end-to-end traceability.', es: 'Flujo resiliente con trazabilidad de punta a punta.' },
      code: 'https://github.com/vitoriaGoncalves08/microservice-saga-orquestrado', demo: ''
    },
    {
      id: 'passeios', title: 'Passeios App', tags: ['Angular', 'TypeScript'],
      cat: 'Front-end', emoji: '🗺️',
      desc: { pt: 'Aplicação Angular para gestão de passeios.', en: 'Angular app for managing tours.', es: 'Aplicación Angular para la gestión de paseos.' },
      problem: { pt: 'Descreva o problema.', en: 'Describe the problem.', es: 'Describe el problema.' },
      solution: { pt: 'Descreva a solução.', en: 'Describe the solution.', es: 'Describe la solución.' },
      arch: { pt: 'Descreva a arquitetura.', en: 'Describe the architecture.', es: 'Describe la arquitectura.' },
      challenges: { pt: 'Descreva os desafios.', en: 'Describe the challenges.', es: 'Describe los desafíos.' },
      result: { pt: 'Descreva o resultado.', en: 'Describe the result.', es: 'Describe el resultado.' },
      code: 'https://github.com/vitoriaGoncalves08/Passeios-App', demo: ''
    },
    {
      id: 'mfe', title: 'Micro-frontends Vendas', tags: ['Angular', 'Module Federation', 'Micro-frontends'],
      cat: 'Front-end', emoji: '🧱',
      desc: { pt: 'Front-end modular com micro-frontends.', en: 'Modular front-end using micro-frontends.', es: 'Front-end modular con micro-frontends.' },
      problem: { pt: 'Descreva o problema.', en: 'Describe the problem.', es: 'Describe el problema.' },
      solution: { pt: 'Descreva a solução.', en: 'Describe the solution.', es: 'Describe la solución.' },
      arch: { pt: 'Descreva a arquitetura.', en: 'Describe the architecture.', es: 'Describe la arquitectura.' },
      challenges: { pt: 'Descreva os desafios.', en: 'Describe the challenges.', es: 'Describe los desafíos.' },
      result: { pt: 'Descreva o resultado.', en: 'Describe the result.', es: 'Describe el resultado.' },
      code: 'https://github.com/vitoriaGoncalves08/micro-frontends-vendas', demo: ''
    },
    {
      id: 'patterns', title: 'Java Patterns', tags: ['Java', 'Design Patterns'],
      cat: 'Estudo', emoji: '📐',
      desc: { pt: 'Exemplos práticos de padrões de projeto em Java.', en: 'Practical Java design pattern examples.', es: 'Ejemplos prácticos de patrones de diseño en Java.' },
      problem: { pt: 'Descreva o problema.', en: 'Describe the problem.', es: 'Describe el problema.' },
      solution: { pt: 'Descreva a solução.', en: 'Describe the solution.', es: 'Describe la solución.' },
      arch: { pt: 'Descreva a arquitetura.', en: 'Describe the architecture.', es: 'Describe la arquitectura.' },
      challenges: { pt: 'Descreva os desafios.', en: 'Describe the challenges.', es: 'Describe los desafíos.' },
      result: { pt: 'Descreva o resultado.', en: 'Describe the result.', es: 'Describe el resultado.' },
      code: 'https://github.com/vitoriaGoncalves08/Java-Patterns', demo: ''
    }
  ],

  timeline: {
    work: [
      {
        when: { pt: '2025 — hoje', en: '2025 — present', es: '2025 — hoy' }, t: { pt: 'Desenvolvedora Web e Designer', en: 'Web Developer & Designer', es: 'Desarrolladora Web y Diseñadora' }, org: 'Freelancer · Remoto',
        d: { pt: 'Landing pages com integração de formulários e automação de e-mails; protótipos UX/UI no Figma com design systems e boas práticas de usabilidade; identidades visuais e logotipos vetorizados.', en: 'Landing pages with form integration and e-mail automation; UX/UI prototypes in Figma using design systems and usability best practices; visual identities and vector logos.', es: 'Landing pages con integración de formularios y automatización de correos; prototipos UX/UI en Figma con design systems y buenas prácticas de usabilidad; identidades visuales y logotipos vectorizados.' }
      },
      {
        when: { pt: '2024 — hoje', en: '2024 — present', es: '2024 — hoy' }, t: { pt: 'Desenvolvedora de Software Fullstack', en: 'Full Stack Software Developer', es: 'Desarrolladora de Software Fullstack' }, org: 'Muralis Tecnologia · São Paulo, SP',
        d: { pt: 'Microsserviços em Java e Spring Boot com arquitetura hexagonal; criação e integração de APIs REST, novas funcionalidades e correção de bugs; interfaces em React.js com componentes reutilizáveis e foco em performance; decisões técnicas, melhoria contínua, planejamento de sprints e estimativas em ambiente ágil.', en: 'Java and Spring Boot microservices with hexagonal architecture; REST API design and integration, new features and bug fixing; React.js interfaces with reusable components and a focus on performance; technical decisions, continuous improvement, sprint planning and estimates in an agile environment.', es: 'Microservicios en Java y Spring Boot con arquitectura hexagonal; creación e integración de APIs REST, nuevas funcionalidades y corrección de bugs; interfaces en React.js con componentes reutilizables y foco en el rendimiento; decisiones técnicas, mejora continua, planificación de sprints y estimaciones en un entorno ágil.' }
      },
      {
        when: { pt: '2022 — 2023', en: '2022 — 2023', es: '2022 — 2023' }, t: { pt: 'Desenvolvedora de Software (Estágio)', en: 'Software Developer (Intern)', es: 'Desarrolladora de Software (Pasantía)' }, org: 'Muralis Tecnologia · São Paulo, SP',
        d: { pt: 'Suporte ao desenvolvimento de aplicações web e mobile, com correção de bugs e novas funcionalidades; apoio na análise e manutenção de banco de dados; documentação técnica e funcional a partir das necessidades do negócio.', en: 'Support for web and mobile application development, including bug fixes and new features; help with database analysis and maintenance; technical and functional documentation based on business needs.', es: 'Apoyo en el desarrollo de aplicaciones web y móviles, con corrección de bugs y nuevas funcionalidades; apoyo en el análisis y mantenimiento de bases de datos; documentación técnica y funcional a partir de las necesidades del negocio.' }
      }
    ],
    edu: [
      {
        when: { pt: '2021 — 2024', en: '2021 — 2024', es: '2021 — 2024' }, t: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development', es: 'Análisis y Desarrollo de Sistemas' }, org: 'FATEC Ferraz de Vasconcelos · São Paulo, SP',
        d: { pt: 'Aplicações web e mobile fullstack com metodologias ágeis (Scrum); foco em análise de requisitos, modelagem de sistemas e desenvolvimento de software.', en: 'Full stack web and mobile applications using agile methods (Scrum); focus on requirements analysis, systems modeling and software development.', es: 'Aplicaciones web y móviles fullstack con metodologías ágiles (Scrum); foco en análisis de requisitos, modelado de sistemas y desarrollo de software.' },
        hl: { pt: 'Destaque acadêmico 2x com bolsa de intercâmbio internacional (EUA)', en: 'Two-time academic highlight with an international exchange scholarship (USA)', es: 'Destacada académicamente 2 veces con beca de intercambio internacional (EE. UU.)' }
      },
      {
        when: { pt: '2019 — 2021', en: '2019 — 2021', es: '2019 — 2021' }, t: { pt: 'Técnico em Desenvolvimento de Sistemas', en: 'Systems Development Technician', es: 'Técnico en Desarrollo de Sistemas' }, org: 'ETEC Guaianases · São Paulo, SP',
        d: { pt: 'Aplicações web e mobile e modelagem de banco de dados.', en: 'Web and mobile applications and database modeling.', es: 'Aplicaciones web y móviles y modelado de bases de datos.' }
      }
    ]
  },

  services: [
    { t: { pt: 'Landing pages e sites', en: 'Landing pages & websites', es: 'Landing pages y sitios web' }, d: { pt: 'Páginas rápidas, com formulários integrados e automação de e-mails.', en: 'Fast pages with integrated forms and e-mail automation.', es: 'Páginas rápidas, con formularios integrados y automatización de correos.' } },
    { t: { pt: 'APIs e microsserviços', en: 'APIs & microservices', es: 'APIs y microservicios' }, d: { pt: 'Back-ends em Java e Spring Boot com arquitetura hexagonal.', en: 'Java and Spring Boot back-ends with hexagonal architecture.', es: 'Back-ends en Java y Spring Boot con arquitectura hexagonal.' } },
    { t: { pt: 'UX/UI e protótipos', en: 'UX/UI & prototypes', es: 'UX/UI y prototipos' }, d: { pt: 'Protótipos no Figma com design system e foco em usabilidade.', en: 'Figma prototypes with a design system and a focus on usability.', es: 'Prototipos en Figma con design system y foco en la usabilidad.' } }
  ],

  /* Badges digitais (ex.: Credly). img: imagem da badge (png/svg) · url: link de verificação.
     Para adicionar uma nova, é só incluir mais um item aqui. */
  badges: [
    { t: 'AWS Partner: Technical Accreditation', ab: 'AWS', org: 'Amazon Web Services · 5h', date: 'Mar/2025', img: 'assets/badges/aws-technical-accredited.jpg', url: '' },
    { t: 'Get Connected', ab: 'CISCO', org: 'Cisco Networking Academy · 30h', date: 'Mar/2022', img: '', url: '' }
  ],
  badgeSlots: 2, // espaços "próxima badge" exibidos depois das badges atuais

  /* Certificados e cursos. img: imagem do certificado em assets/certs/ · url: link de verificação (opcional) */
  certs: [
    { t: 'Clean Code e Clean Architecture', org: 'Rodrigo Branas · 24h', date: 'Jan/2026', img: 'assets/certs/placeholder.svg', url: '' },
    { t: 'Acelerando Projetos de Sucesso', org: 'MBA USP/Esalq', date: 'Nov/2025', img: 'assets/certs/placeholder.svg', url: '' },
    { t: 'App Development', org: 'Madcode (from Facebook) · 32h', date: 'Out/2019', img: 'assets/certs/placeholder.svg', url: '' }
  ],

  testimonials: [
    { q: { pt: 'Depoimento de um colega ou líder (copie do LinkedIn, com permissão).', en: 'Testimonial from a colleague or lead (copy from LinkedIn, with permission).', es: 'Testimonio de un colega o líder (cópialo de LinkedIn, con permiso).' }, who: 'Nome Sobrenome', role: 'Tech Lead, Muralis Tecnologia' },
    { q: { pt: 'Outro depoimento.', en: 'Another testimonial.', es: 'Otro testimonio.' }, who: 'Nome Sobrenome', role: 'Cliente freelancer' }
  ],

  contacts: [
    { n: 'LinkedIn', slug: 'linkedin', h: '/in/vitoria-goncalves-passos', url: 'https://linkedin.com/in/vitoria-goncalves-passos' },
    { n: 'GitHub', slug: 'github', h: '@vitoriaGoncalves08', url: 'https://github.com/vitoriaGoncalves08' },
    { n: 'WhatsApp', slug: 'whatsapp', h: '+55 11 94365-8985', url: 'https://wa.me/5511943658985' },
    { n: 'Instagram', slug: 'instagram', h: '@seu.usuario', url: 'https://instagram.com/seu.usuario' }
  ],

  /* Base do assistente "Dúvidas?" (modo offline, por palavras-chave). Para IA real, defina CHAT_ENDPOINT em main.js. */
  faq: [
    { k: ['microsserviço', 'microservice', 'microservicio', 'saga', 'kafka', 'hexagonal'], a: { pt: 'Vitória desenvolve microsserviços em Java e Spring Boot com arquitetura hexagonal na Muralis Tecnologia, além de projetos próprios com Kafka e o padrão SAGA.', en: 'Vitória builds Java and Spring Boot microservices with hexagonal architecture at Muralis Tecnologia, plus personal projects with Kafka and the SAGA pattern.', es: 'Vitória desarrolla microservicios en Java y Spring Boot con arquitectura hexagonal en Muralis Tecnologia, además de proyectos propios con Kafka y el patrón SAGA.' } },
    { k: ['disponível', 'disponivel', 'disponible', 'available', 'vaga', 'vacante', 'freela', 'hire', 'contrat'], a: { pt: 'Ela atua como freelancer e está aberta a conversas. Fale pelo formulário de contato.', en: 'She freelances and is open to conversations. Reach out via the contact form.', es: 'Trabaja como freelancer y está abierta a conversar. Escríbele por el formulario de contacto.' } },
    { k: ['react', 'front', 'angular'], a: { pt: 'No front-end ela usa React.js, HTML, CSS/SASS e Material UI, com foco em componentes reutilizáveis e performance.', en: 'On the front-end she uses React.js, HTML, CSS/SASS and Material UI, focusing on reusable components and performance.', es: 'En el front-end usa React.js, HTML, CSS/SASS y Material UI, con foco en componentes reutilizables y rendimiento.' } },
    { k: ['stack', 'tecnologia', 'tecnología', 'skill', 'technolog'], a: { pt: 'Java, Spring Boot, Hibernate, React.js, JavaScript, Node.js, MySQL, SQL Server, PostgreSQL, Git e CI/CD, entre outras.', en: 'Java, Spring Boot, Hibernate, React.js, JavaScript, Node.js, MySQL, SQL Server, PostgreSQL, Git and CI/CD, among others.', es: 'Java, Spring Boot, Hibernate, React.js, JavaScript, Node.js, MySQL, SQL Server, PostgreSQL, Git y CI/CD, entre otras.' } },
    { k: ['formação', 'formacao', 'formación', 'faculdade', 'universidad', 'fatec', 'education', 'study', 'estud'], a: { pt: 'Tecnóloga em Análise e Desenvolvimento de Sistemas pela FATEC Ferraz de Vasconcelos e técnica em Desenvolvimento de Sistemas pela ETEC Guaianases.', en: 'Systems Analysis and Development degree from FATEC Ferraz de Vasconcelos and a Systems Development technical diploma from ETEC Guaianases.', es: 'Tecnóloga en Análisis y Desarrollo de Sistemas por FATEC Ferraz de Vasconcelos y técnica en Desarrollo de Sistemas por ETEC Guaianases.' } },
    { k: ['inglês', 'ingles', 'inglés', 'english', 'idioma', 'language', 'espanhol', 'español'], a: { pt: 'Inglês B2 (New York Institute of Technology · ELS) e espanhol básico.', en: 'English B2 (New York Institute of Technology · ELS) and basic Spanish.', es: 'Inglés B2 (New York Institute of Technology · ELS) y español básico.' } },
    { k: ['design', 'figma', 'ux', 'logo'], a: { pt: 'Ela também cria protótipos UX/UI no Figma e identidades visuais com logotipos vetorizados.', en: 'She also creates UX/UI prototypes in Figma and visual identities with vector logos.', es: 'También crea prototipos UX/UI en Figma e identidades visuales con logotipos vectorizados.' } },
    { k: ['hobby', 'hobbies', 'pasatiempo', 'academia', 'gym', 'gimnasio', 'jogo', 'game', 'juego', 'cerâmica', 'ceramic', 'cerámica', 'livro', 'book', 'libro'], a: { pt: 'Fora do código: academia, jogos, cerâmica e livros.', en: 'Beyond code: the gym, games, ceramics and books.', es: 'Fuera del código: gimnasio, videojuegos, cerámica y libros.' } }
  ],
  suggestions: {
    pt: ['Qual a experiência com microsserviços?', 'Trabalha como freelancer?', 'Qual a stack principal?'],
    en: ['Experience with microservices?', 'Does she freelance?', 'What is her main stack?'],
    es: ['¿Experiencia con microservicios?', '¿Trabaja como freelancer?', '¿Cuál es su stack principal?']
  }
};
