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
      about_hobby: 'O que me recarrega quando fecho o editor.', hobby_hint: 'Passe o mouse (ou toque) nos livros para ver o que cada hobby traz para o meu trabalho.', hobby_gains: 'O que isso traz para o meu trabalho:',
      tl_more: 'Saiba mais', tl_less: 'Ver menos', tl_featured: 'Experiência principal', tl_worked: 'Integrações em produção', skill_level: 'nível',
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
      about_hobby: 'What recharges me when I close the editor.', hobby_hint: 'Hover (or tap) the books to see what each hobby brings to my work.', hobby_gains: 'What it brings to my work:',
      tl_more: 'Learn more', tl_less: 'Show less', tl_featured: 'Main experience', tl_worked: 'Production integrations', skill_level: 'level',
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
      about_hobby: 'Lo que me recarga cuando cierro el editor.', hobby_hint: 'Pasa el mouse (o toca) los libros para ver lo que cada hobby aporta a mi trabajo.', hobby_gains: 'Lo que aporta a mi trabajo:',
      tl_more: 'Saber más', tl_less: 'Ver menos', tl_featured: 'Experiencia principal', tl_worked: 'Integraciones en producción', skill_level: 'nivel',
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
      d: { pt: 'Treinar me ensina disciplina e constância, inclusive nas semanas difíceis.', en: 'Training teaches me discipline and consistency, even in tough weeks.', es: 'Entrenar me enseña disciplina y constancia, incluso en las semanas difíciles.' },
      gains: [
        { pt: 'Disciplina', en: 'Discipline', es: 'Disciplina' },
        { pt: 'Constância', en: 'Consistency', es: 'Constancia' },
        { pt: 'Foco em metas', en: 'Goal focus', es: 'Enfoque en metas' }
      ]
    },
    {
      t: { pt: 'Jogos', en: 'Games', es: 'Videojuegos' },
      d: { pt: 'Jogar exercita estratégia, resolução de problemas e trabalho em equipe.', en: 'Gaming trains strategy, problem solving and teamwork.', es: 'Jugar ejercita estrategia, resolución de problemas y trabajo en equipo.' },
      gains: [
        { pt: 'Resolução de problemas', en: 'Problem solving', es: 'Resolución de problemas' },
        { pt: 'Pensamento estratégico', en: 'Strategic thinking', es: 'Pensamiento estratégico' },
        { pt: 'Trabalho em equipe', en: 'Teamwork', es: 'Trabajo en equipo' }
      ]
    },
    {
      t: { pt: 'Cerâmica', en: 'Ceramics', es: 'Cerámica' },
      d: { pt: 'Modelar no torno ensina paciência, atenção aos detalhes e a refazer até ficar bom.', en: 'Throwing on the wheel teaches patience, attention to detail and redoing until it is right.', es: 'Modelar en el torno enseña paciencia, atención al detalle y a rehacer hasta que quede bien.' },
      gains: [
        { pt: 'Paciência', en: 'Patience', es: 'Paciencia' },
        { pt: 'Atenção aos detalhes', en: 'Attention to detail', es: 'Atención al detalle' },
        { pt: 'Melhorar a cada versão', en: 'Improving with each iteration', es: 'Mejorar en cada versión' }
      ]
    },
    {
      t: { pt: 'Livros', en: 'Books', es: 'Libros' },
      d: { pt: 'Ler mantém o aprendizado contínuo e melhora a forma como me comunico.', en: 'Reading keeps me learning and improves the way I communicate.', es: 'Leer mantiene el aprendizaje continuo y mejora mi forma de comunicarme.' },
      gains: [
        { pt: 'Aprendizado contínuo', en: 'Continuous learning', es: 'Aprendizaje continuo' },
        { pt: 'Comunicação', en: 'Communication', es: 'Comunicación' },
        { pt: 'Criatividade', en: 'Creativity', es: 'Creatividad' }
      ]
    }
  ],

  /* Títulos dos grupos ficam iguais nos três idiomas (não são traduzidos). */
  skills: [
    { t: 'Linguagens', items: ['Java', 'JavaScript', 'Node.js'] },
    { t: 'Front-end', items: ['React.js', 'HTML/CSS', 'SASS', 'Material UI'] },
    { t: 'Back-end', items: ['Spring Boot', 'Hibernate', 'REST', 'CI/CD'] },
    { t: 'Banco de dados', items: ['MySQL', 'SQL Server', 'PostgreSQL'] },
    { t: 'Ferramentas', items: ['Git', 'Figma'] }
  ],

  /* Nível de cada skill, de 0 a 10: pinta essa fração da tag com o tom mais escuro da cor escolhida.
     Ex.: 5 = metade da tag. Skill sem número fica sem preenchimento. */
  skillLevels: {
    'Java': 9, 'JavaScript': 8, 'Node.js': 6,
    'React.js': 8, 'HTML/CSS': 8, 'SASS': 6, 'Material UI': 7,
    'Spring Boot': 9, 'Hibernate': 7, 'REST': 9, 'CI/CD': 6,
    'MySQL': 8, 'SQL Server': 7, 'PostgreSQL': 7,
    'Git': 8, 'Figma': 8
  },

  /* Tecnologias que aparecem no filtro de projetos (as demais continuam nos cards). */
  projectFilterTags: ['Java', 'Spring Boot', 'React.js', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Python', 'PostgreSQL', 'MySQL', 'Figma'],

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
      id: 'sorria-acene', title: 'Sorria e Acene', img: 'assets/projects/sorria-acene-capa.webp',
      imgs: ['assets/projects/sorria-acene.webp'],
      tags: ['JavaScript', 'Python', 'MediaPipe', 'scikit-learn', 'Chrome Extension'],
      cat: 'IA', emoji: '🐧',
      desc: {
        pt: 'Extensão do Chrome que reconhece o alfabeto de Libras pela webcam, em tempo real e 100% no navegador. Você faz a letra com a mão e sorri para confirmar.',
        en: 'Chrome extension that recognizes the Brazilian Sign Language (Libras) alphabet through the webcam, in real time and 100% in the browser. You sign the letter and smile to confirm.',
        es: 'Extensión de Chrome que reconoce el alfabeto de Libras (lengua de señas brasileña) por la webcam, en tiempo real y 100% en el navegador. Haces la letra con la mano y sonríes para confirmar.'
      },
      problem: {
        pt: 'Reconhecer as letras de Libras em tempo real sem enviar nenhum quadro de vídeo para servidor, incluindo as 5 letras que têm movimento (H, J, K, X e Z), e confirmar a letra sem tirar a mão da posição.',
        en: 'Recognize Libras letters in real time without sending any video frame to a server, including the 5 letters that involve movement (H, J, K, X and Z), and confirm the letter without moving the hand.',
        es: 'Reconocer las letras de Libras en tiempo real sin enviar ningún cuadro de video a un servidor, incluidas las 5 letras con movimiento (H, J, K, X y Z), y confirmar la letra sin mover la mano.'
      },
      solution: {
        pt: 'O MediaPipe extrai os 21 pontos da mão; dois classificadores (redes MLP) decidem a letra, um para poses paradas e outro para gestos com movimento. A confirmação é pelo sorriso, lido dos blendshapes do rosto, e a letra é falada em voz alta e entra na palavra soletrada.',
        en: 'MediaPipe extracts the 21 hand landmarks; two classifiers (MLP networks) decide the letter, one for static poses and another for movement gestures. Confirmation comes from a smile, read from the face blendshapes, and the letter is spoken aloud and added to the spelled word.',
        es: 'MediaPipe extrae los 21 puntos de la mano; dos clasificadores (redes MLP) deciden la letra, uno para poses estáticas y otro para gestos con movimiento. La confirmación es con una sonrisa, leída de los blendshapes del rostro, y la letra se dice en voz alta y entra en la palabra deletreada.'
      },
      arch: {
        pt: 'Extensão Manifest V3 com MediaPipe Tasks Vision rodando em WASM local; modelos treinados em Python com scikit-learn e exportados como JSON; inferência em JavaScript puro, sem backend e sem telemetria.',
        en: 'Manifest V3 extension with MediaPipe Tasks Vision running locally in WASM; models trained in Python with scikit-learn and exported as JSON; inference in plain JavaScript, with no backend and no telemetry.',
        es: 'Extensión Manifest V3 con MediaPipe Tasks Vision ejecutándose en WASM local; modelos entrenados en Python con scikit-learn y exportados como JSON; inferencia en JavaScript puro, sin backend y sin telemetría.'
      },
      challenges: {
        pt: 'Separar pose de gesto medindo pulso e dedos em "tamanhos de mão por segundo", impedir que o fim de um gesto vire outra letra, manter idênticas as 60 características do gesto em Python e JavaScript (com teste de paridade) e normalizar a taxa de quadros da câmera.',
        en: 'Telling poses from gestures by measuring wrist and fingers in "hand sizes per second", stopping the end of a gesture from turning into another letter, keeping the 60 gesture features identical in Python and JavaScript (with a parity test) and normalizing the camera frame rate.',
        es: 'Separar pose de gesto midiendo muñeca y dedos en "tamaños de mano por segundo", evitar que el final de un gesto se convierta en otra letra, mantener idénticas las 60 características del gesto en Python y JavaScript (con prueba de paridad) y normalizar la tasa de cuadros de la cámara.'
      },
      result: {
        pt: 'Alfabeto completo mapeado, com cerca de 99% de acurácia nas letras paradas e 87% nas de movimento (medidas na mesma sessão de gravação), soletração de palavras, fala em pt-BR e testes automatizados. Nenhuma imagem sai da máquina.',
        en: 'Full alphabet mapped, with about 99% accuracy on static letters and 87% on movement letters (measured on the same recording session), word spelling, pt-BR speech and automated tests. No image ever leaves the machine.',
        es: 'Alfabeto completo mapeado, con cerca de 99% de precisión en las letras estáticas y 87% en las de movimiento (medidas en la misma sesión de grabación), deletreo de palabras, voz en pt-BR y pruebas automatizadas. Ninguna imagen sale de la máquina.'
      },
      code: 'https://github.com/vitoriaGoncalves08/Sorria-Acene', demo: 'https://lnkd.in/p/dejXym6R'
    },
    {
      id: 'futurize', title: 'Futurize', img: 'assets/projects/futurize-home.webp',
      imgs: ['assets/projects/futurize.webp', 'assets/projects/futurize-trabalhos.webp', 'assets/projects/futurize-casos-de-uso.webp', 'assets/projects/futurize-classes.webp', 'assets/projects/futurize-logico.webp'],
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Material UI', 'JWT'],
      cat: 'Full Stack', emoji: '📋',
      desc: {
        pt: 'Plataforma de gestão de trabalhos em equipe com quadro Kanban, alocação de integrantes, cronômetro das atividades e dashboards de desempenho.',
        en: 'Team project management platform with a Kanban board, member allocation, activity timers and performance dashboards.',
        es: 'Plataforma de gestión de trabajos en equipo con tablero Kanban, asignación de integrantes, cronómetro de actividades y dashboards de rendimiento.'
      },
      problem: {
        pt: 'Grupos de trabalho acadêmico precisavam organizar tarefas, responsáveis e prazos num só lugar e enxergar o andamento de cada integrante.',
        en: 'Academic project groups needed to organize tasks, owners and deadlines in one place and see how each member was doing.',
        es: 'Los grupos de trabajos académicos necesitaban organizar tareas, responsables y plazos en un solo lugar y ver el avance de cada integrante.'
      },
      solution: {
        pt: 'Quem cria o trabalho vira o gestor e aloca os integrantes; as atividades têm prioridade, dificuldade, responsável, comentários e cronômetro, e andam por um Kanban (Backlog → Sprint → Development → Test). Dashboards pessoais e do projeto mostram o desempenho.',
        en: 'Whoever creates the project becomes its manager and allocates members; activities have priority, difficulty, owner, comments and a timer, and move across a Kanban (Backlog → Sprint → Development → Test). Personal and project dashboards show performance.',
        es: 'Quien crea el trabajo se convierte en el gestor y asigna a los integrantes; las actividades tienen prioridad, dificultad, responsable, comentarios y cronómetro, y avanzan por un Kanban (Backlog → Sprint → Development → Test). Dashboards personales y del proyecto muestran el rendimiento.'
      },
      arch: {
        pt: 'API REST em Java 17 com Spring Boot 3, Spring Data JPA, Spring Security com JWT e MySQL versionado pelo Flyway; front-end em React com Vite, Material UI, gráficos com Recharts e arrastar e soltar no Kanban.',
        en: 'REST API in Java 17 with Spring Boot 3, Spring Data JPA, Spring Security with JWT and MySQL versioned with Flyway; React front-end with Vite, Material UI, Recharts charts and drag and drop on the Kanban.',
        es: 'API REST en Java 17 con Spring Boot 3, Spring Data JPA, Spring Security con JWT y MySQL versionado con Flyway; front-end en React con Vite, Material UI, gráficos con Recharts y arrastrar y soltar en el Kanban.'
      },
      challenges: {
        pt: 'Garantir que só os integrantes vejam os dados do trabalho e só o gestor o altere, calcular as métricas dos dashboards (atividades refeitas, não iniciadas, concluídas por integrante) e manter o Kanban sincronizado.',
        en: 'Ensuring only members see a project\'s data and only the manager can change it, computing dashboard metrics (reworked, not started and completed activities per member) and keeping the Kanban in sync.',
        es: 'Garantizar que solo los integrantes vean los datos del trabajo y solo el gestor lo modifique, calcular las métricas de los dashboards (actividades rehechas, no iniciadas, completadas por integrante) y mantener el Kanban sincronizado.'
      },
      result: {
        pt: 'Sistema completo desenvolvido em equipe, com modelagem documentada (casos de uso, classes, lógico e sequência) e requisitos funcionais e não funcionais para web e mobile.',
        en: 'Complete system built as a team, with documented modeling (use cases, classes, logical and sequence diagrams) and functional and non-functional requirements for web and mobile.',
        es: 'Sistema completo desarrollado en equipo, con modelado documentado (casos de uso, clases, lógico y secuencia) y requisitos funcionales y no funcionales para web y móvil.'
      },
      code: 'https://github.com/vitoriaGoncalves08/Futurize', demo: ''
    },
    {
      id: 'fatima-bolos', title: 'Fátima Bolos', img: 'assets/projects/fatima-bolos-home.webp',
      imgs: ['assets/projects/fatima-bolos.webp'],
      tags: ['React.js', 'TypeScript', 'Vite', 'Material UI', 'Framer Motion'],
      cat: 'Front-end', emoji: '🎂',
      desc: {
        pt: 'Site de uma confeitaria com catálogo de bolos, salgados e tortas, carrinho e encomenda enviada direto pelo WhatsApp.',
        en: 'Website for a bakery with a catalog of cakes, savory snacks and pies, a cart and orders sent straight to WhatsApp.',
        es: 'Sitio de una pastelería con catálogo de pasteles, bocadillos y tartas, carrito y pedidos enviados directo por WhatsApp.'
      },
      problem: {
        pt: 'A confeitaria recebia pedidos só por conversa no WhatsApp, sem um lugar para mostrar os produtos, tamanhos e sabores.',
        en: 'The bakery took orders only through WhatsApp chats, with no place to show its products, sizes and flavors.',
        es: 'La pastelería recibía pedidos solo por WhatsApp, sin un lugar para mostrar sus productos, tamaños y sabores.'
      },
      solution: {
        pt: 'Site com seções Sobre nós, Produtos (com categorias como Festa, Salgados e Tortas), formulário de encomenda, dúvidas frequentes e contato. Os itens vão para um carrinho e o pedido é montado e enviado como mensagem no WhatsApp.',
        en: 'Website with About, Products (with categories such as Party, Savory and Pies), an order form, FAQ and contact sections. Items go to a cart and the order is built and sent as a WhatsApp message.',
        es: 'Sitio con secciones Sobre nosotros, Productos (con categorías como Fiesta, Salados y Tartas), formulario de pedido, preguntas frecuentes y contacto. Los productos van a un carrito y el pedido se arma y se envía como mensaje de WhatsApp.'
      },
      arch: {
        pt: 'React 19 com TypeScript e Vite, componentes organizados em Atomic Design (átomos, moléculas, organismos e templates), Material UI e animações com Framer Motion e animate.css.',
        en: 'React 19 with TypeScript and Vite, components organized with Atomic Design (atoms, molecules, organisms and templates), Material UI and animations with Framer Motion and animate.css.',
        es: 'React 19 con TypeScript y Vite, componentes organizados con Atomic Design (átomos, moléculas, organismos y plantillas), Material UI y animaciones con Framer Motion y animate.css.'
      },
      challenges: {
        pt: 'Montar a mensagem do pedido com os itens do carrinho e os dados da encomenda de forma legível no WhatsApp, e deixar o catálogo bonito e leve em qualquer tela.',
        en: 'Building the order message from the cart items and order details in a readable way on WhatsApp, and keeping the catalog beautiful and light on any screen.',
        es: 'Armar el mensaje del pedido con los productos del carrito y los datos del pedido de forma legible en WhatsApp, y mantener el catálogo bonito y liviano en cualquier pantalla.'
      },
      result: {
        pt: 'Uma vitrine online com a identidade da marca, que facilita o pedido para o cliente e organiza as encomendas para a confeitaria.',
        en: 'An online showcase with the brand identity that makes ordering easier for customers and organizes orders for the bakery.',
        es: 'Una vitrina online con la identidad de la marca, que facilita el pedido al cliente y organiza los encargos de la pastelería.'
      },
      code: 'https://github.com/vitoriaGoncalves08/FatimaBolos', demo: ''
    },
    {
      id: 'farma-co', title: 'Farma.co', img: 'assets/projects/farma-co-splash.webp',
      imgs: ['assets/projects/farma-co.webp', 'assets/projects/farma-co-cadastros.webp', 'assets/projects/farma-co-catalogo.webp'],
      tags: ['Figma', 'UX/UI', 'Mobile'],
      cat: 'UX/UI', emoji: '💊',
      desc: {
        pt: 'Protótipo de aplicativo de farmácia: catálogo, carrinho, pagamento, envio de receita e acompanhamento da entrega.',
        en: 'Pharmacy app prototype: catalog, cart, payment, prescription upload and delivery tracking.',
        es: 'Prototipo de aplicación de farmacia: catálogo, carrito, pago, envío de receta y seguimiento de la entrega.'
      },
      problem: {
        pt: 'Comprar medicamentos pelo celular, incluindo os que exigem receita, e saber em que etapa está a entrega.',
        en: 'Buying medicines on the phone, including prescription ones, and knowing which stage the delivery is in.',
        es: 'Comprar medicamentos por el celular, incluidos los que requieren receta, y saber en qué etapa está la entrega.'
      },
      solution: {
        pt: 'Fluxo completo desenhado no Figma: splash, cadastro e login; catálogo com busca e categorias; página do produto; carrinho; pagamento (cartão, Pix ou boleto); envio da receita pelo WhatsApp; endereço; rota e status da entrega; e histórico de pedidos.',
        en: 'Complete flow designed in Figma: splash, sign-up and login; catalog with search and categories; product page; cart; payment (card, Pix or bank slip); prescription upload via WhatsApp; address; delivery route and status; and order history.',
        es: 'Flujo completo diseñado en Figma: splash, registro e inicio de sesión; catálogo con búsqueda y categorías; página del producto; carrito; pago (tarjeta, Pix o boleto); envío de la receta por WhatsApp; dirección; ruta y estado de la entrega; e historial de pedidos.'
      },
      arch: {
        pt: 'Protótipo navegável no Figma, dividido em Cadastros (incluindo a área do administrador, que adiciona produtos e valida pedidos) e Catálogo, com barra de navegação inferior fixa.',
        en: 'Clickable Figma prototype, split into Sign-up (including the admin area, which adds products and validates orders) and Catalog, with a fixed bottom navigation bar.',
        es: 'Prototipo navegable en Figma, dividido en Registro (incluida el área del administrador, que agrega productos y valida pedidos) y Catálogo, con barra de navegación inferior fija.'
      },
      challenges: {
        pt: 'Tratar a compra de remédios com receita sem travar o fluxo e mostrar o andamento da entrega de forma clara, da receita enviada ao pedido entregue.',
        en: 'Handling prescription purchases without blocking the flow and showing delivery progress clearly, from prescription sent to order delivered.',
        es: 'Manejar la compra de medicamentos con receta sin trabar el flujo y mostrar el avance de la entrega con claridad, desde la receta enviada hasta el pedido entregado.'
      },
      result: {
        pt: 'Um protótipo completo, com identidade visual em verde-petróleo, pronto para guiar o desenvolvimento do aplicativo.',
        en: 'A complete prototype with a teal visual identity, ready to guide the app development.',
        es: 'Un prototipo completo, con identidad visual en verde petróleo, listo para guiar el desarrollo de la aplicación.'
      },
      code: '', demo: ''
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
      id: 'patterns', title: 'Java Patterns', tags: ['Java', 'Design Patterns', 'Maven'],
      cat: 'Estudo', emoji: '📐',
      desc: {
        pt: 'Os 23 padrões de projeto do GoF implementados em Java puro, cada um com um exemplo concreto do problema antes e depois do padrão.',
        en: 'The 23 GoF design patterns implemented in plain Java, each with a concrete example of the problem before and after the pattern.',
        es: 'Los 23 patrones de diseño del GoF implementados en Java puro, cada uno con un ejemplo concreto del problema antes y después del patrón.'
      },
      problem: {
        pt: 'Entender não só como cada padrão é escrito, mas por que ele existe: que acoplamento ou repetição ele resolve.',
        en: 'Understanding not only how each pattern is written, but why it exists: which coupling or repetition it solves.',
        es: 'Entender no solo cómo se escribe cada patrón, sino por qué existe: qué acoplamiento o repetición resuelve.'
      },
      solution: {
        pt: 'Cada padrão tem um domínio concreto (caixa eletrônico, iPhone, Alexa, PacMan, cafeteria…) com as versões "antes" e "depois", além de variações como Builder fluente e funcional, Singleton monostate e Adapter na arquitetura hexagonal.',
        en: 'Each pattern has a concrete domain (ATM, iPhone, Alexa, PacMan, coffee shop…) with "before" and "after" versions, plus variations such as fluent and functional Builder, monostate Singleton and Adapter in hexagonal architecture.',
        es: 'Cada patrón tiene un dominio concreto (cajero automático, iPhone, Alexa, PacMan, cafetería…) con las versiones "antes" y "después", además de variaciones como Builder fluido y funcional, Singleton monostate y Adapter en arquitectura hexagonal.'
      },
      arch: {
        pt: '6 projetos Maven independentes, separados em padrões criacionais, estruturais e comportamentais (referência do curso e reprodução própria). Java 8, sem frameworks; cada exemplo roda por uma classe Client.',
        en: '6 independent Maven projects, split into creational, structural and behavioral patterns (course reference and my own reproduction). Java 8, no frameworks; each example runs from a Client class.',
        es: '6 proyectos Maven independientes, divididos en patrones creacionales, estructurales y de comportamiento (referencia del curso y reproducción propia). Java 8, sin frameworks; cada ejemplo se ejecuta desde una clase Client.'
      },
      challenges: {
        pt: 'Escolher, para cada padrão, um exemplo em que o problema fique evidente e comparar as variações sem misturar conceitos.',
        en: 'Choosing, for each pattern, an example where the problem is obvious, and comparing variations without mixing concepts.',
        es: 'Elegir, para cada patrón, un ejemplo donde el problema sea evidente y comparar las variaciones sin mezclar conceptos.'
      },
      result: {
        pt: 'Um repositório de consulta com os 23 padrões documentados em catálogo, que uso como referência no dia a dia.',
        en: 'A reference repository with all 23 patterns documented in a catalog, which I use day to day.',
        es: 'Un repositorio de consulta con los 23 patrones documentados en un catálogo, que uso como referencia en el día a día.'
      },
      code: 'https://github.com/vitoriaGoncalves08/Java-Patterns', demo: ''
    }
  ],

  /* Trajetória: "d" é o resumo de uma linha; "points" são os destaques (até 4), abertos em "Saiba mais".
     "logos" mostra selos de empresas/órgãos com que houve integração; "featured" fixa no topo com destaque. */
  timeline: {
    work: [
      {
        when: { pt: '2024 — hoje', en: '2024 — present', es: '2024 — hoy' }, featured: true,
        t: { pt: 'Desenvolvedora de Software Fullstack', en: 'Full Stack Software Developer', es: 'Desarrolladora de Software Fullstack' }, org: 'Muralis Tecnologia · São Paulo, SP',
        d: { pt: 'Desenvolvimento fullstack de sistemas em produção: microsserviços em Java/Spring Boot e interfaces em React.', en: 'Full stack development of production systems: Java/Spring Boot microservices and React interfaces.', es: 'Desarrollo fullstack de sistemas en producción: microservicios en Java/Spring Boot e interfaces en React.' },
        logos: ['itau', 'bb', 'receita'],
        points: [
          { pt: 'Integrações bancárias em produção com Itaú e Banco do Brasil.', en: 'Production banking integrations with Itaú and Banco do Brasil.', es: 'Integraciones bancarias en producción con Itaú y Banco do Brasil.' },
          { pt: 'Alterações em APIs integradas à Receita Federal.', en: 'Changes to APIs integrated with the Brazilian Federal Revenue Service (Receita Federal).', es: 'Cambios en APIs integradas a la Receita Federal (hacienda de Brasil).' },
          { pt: 'Microsserviços em Java e Spring Boot com arquitetura hexagonal e APIs REST: novas funcionalidades e correção de bugs.', en: 'Java and Spring Boot microservices with hexagonal architecture and REST APIs: new features and bug fixes.', es: 'Microservicios en Java y Spring Boot con arquitectura hexagonal y APIs REST: nuevas funcionalidades y corrección de bugs.' },
          { pt: 'Interfaces em React.js com componentes reutilizáveis, decisões técnicas e rotina ágil (sprints e estimativas).', en: 'React.js interfaces with reusable components, technical decisions and an agile routine (sprints and estimates).', es: 'Interfaces en React.js con componentes reutilizables, decisiones técnicas y rutina ágil (sprints y estimaciones).' }
        ]
      },
      {
        when: { pt: '2025 — hoje', en: '2025 — present', es: '2025 — hoy' },
        t: { pt: 'Desenvolvedora Web e Designer', en: 'Web Developer & Designer', es: 'Desarrolladora Web y Diseñadora' }, org: 'Freelancer · Remoto',
        d: { pt: 'Projetos para clientes: sites, protótipos e identidade visual.', en: 'Client projects: websites, prototypes and visual identity.', es: 'Proyectos para clientes: sitios, prototipos e identidad visual.' },
        points: [
          { pt: 'Landing pages com integração de formulários e automação de e-mails.', en: 'Landing pages with form integration and e-mail automation.', es: 'Landing pages con integración de formularios y automatización de correos.' },
          { pt: 'Protótipos UX/UI no Figma com design systems e boas práticas de usabilidade.', en: 'UX/UI prototypes in Figma using design systems and usability best practices.', es: 'Prototipos UX/UI en Figma con design systems y buenas prácticas de usabilidad.' },
          { pt: 'Identidades visuais e logotipos vetorizados.', en: 'Visual identities and vector logos.', es: 'Identidades visuales y logotipos vectorizados.' }
        ]
      },
      {
        when: { pt: '2022 — 2023', en: '2022 — 2023', es: '2022 — 2023' },
        t: { pt: 'Desenvolvedora de Software (Estágio)', en: 'Software Developer (Intern)', es: 'Desarrolladora de Software (Pasantía)' }, org: 'Muralis Tecnologia · São Paulo, SP',
        d: { pt: 'Primeiro contato com projetos reais: aplicações web e mobile, banco de dados e documentação.', en: 'First contact with real projects: web and mobile apps, databases and documentation.', es: 'Primer contacto con proyectos reales: aplicaciones web y móviles, bases de datos y documentación.' },
        points: [
          { pt: 'Suporte ao desenvolvimento de aplicações web e mobile, com correção de bugs e novas funcionalidades.', en: 'Support for web and mobile app development, with bug fixes and new features.', es: 'Apoyo en el desarrollo de aplicaciones web y móviles, con corrección de bugs y nuevas funcionalidades.' },
          { pt: 'Análise e manutenção de banco de dados.', en: 'Database analysis and maintenance.', es: 'Análisis y mantenimiento de bases de datos.' },
          { pt: 'Documentação técnica e funcional a partir das necessidades do negócio.', en: 'Technical and functional documentation based on business needs.', es: 'Documentación técnica y funcional a partir de las necesidades del negocio.' }
        ]
      }
    ],
    edu: [
      {
        when: { pt: '2021 — 2024', en: '2021 — 2024', es: '2021 — 2024' }, t: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development', es: 'Análisis y Desarrollo de Sistemas' }, org: 'FATEC Ferraz de Vasconcelos · São Paulo, SP',
        d: { pt: 'Graduação tecnológica com foco em desenvolvimento de software.', en: 'Technology degree focused on software development.', es: 'Carrera tecnológica enfocada en desarrollo de software.' },
        hl: { pt: 'Destaque acadêmico 2x com bolsa de intercâmbio internacional (EUA)', en: 'Two-time academic highlight with an international exchange scholarship (USA)', es: 'Destacada académicamente 2 veces con beca de intercambio internacional (EE. UU.)' },
        points: [
          { pt: 'Aplicações web e mobile fullstack com metodologias ágeis (Scrum).', en: 'Full stack web and mobile applications using agile methods (Scrum).', es: 'Aplicaciones web y móviles fullstack con metodologías ágiles (Scrum).' },
          { pt: 'Análise de requisitos, modelagem de sistemas e desenvolvimento de software.', en: 'Requirements analysis, systems modeling and software development.', es: 'Análisis de requisitos, modelado de sistemas y desarrollo de software.' }
        ]
      },
      {
        when: { pt: '2019 — 2021', en: '2019 — 2021', es: '2019 — 2021' }, t: { pt: 'Técnico em Desenvolvimento de Sistemas', en: 'Systems Development Technician', es: 'Técnico en Desarrollo de Sistemas' }, org: 'ETEC Guaianases · São Paulo, SP',
        d: { pt: 'Curso técnico com aplicações web e mobile e modelagem de banco de dados.', en: 'Technical course with web and mobile apps and database modeling.', es: 'Curso técnico con aplicaciones web y móviles y modelado de bases de datos.' }
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
