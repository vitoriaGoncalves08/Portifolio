import { tokens } from './text';

/**
 * Grupos de palavras que querem dizer a mesma coisa (PT / EN / ES, inclusive gírias).
 * O primeiro item (com @) é o nome do assunto usado pelo motor.
 * Para ensinar uma palavra nova ao assistente, é só incluí-la no grupo certo.
 */
export const SYNONYMS: Record<string, string> = {
  '@work':
    'trabalho trabalha trabalhou trabalhando emprego empregada empresa experiencia profissional carreira cargo atua atuacao ' +
    'trampo trampa job work worked working company career experience employer emprego empleo trabajo trabaja trabajado carrera puesto',
  '@edu':
    'estudo estuda estudou formacao formada faculdade graduacao universidade escola tecnico tecnologo curso superior ' +
    'college university degree education study studied school graduated estudio estudios universidad formacion titulo escuela',
  '@project':
    'projeto portfolio aplicacao aplicativo sistema exemplo case feitos construiu desenvolveu ' +
    'project portfolio built made app application proyecto proyectos aplicacion hizo',
  '@skill':
    'stack tecnologia skill habilidade ferramenta linguagem framework sabe domina conhece usa programa ' +
    'technology tech tool language know knows use uses tecnologia herramienta lenguaje conoce domina',
  '@cert':
    'certificado certificacao badge curso credencial acreditacao insignia certificate certification course credential certificacion',
  '@contact':
    'contato contatar falar falo conversar mensagem email whatsapp zap telefone celular numero linkedin instagram ' +
    'contact reach message phone call talk contacto hablar mensaje correo telefono',
  '@cv': 'cv curriculo curriculum resume baixar download pdf descargar hoja vida',
  '@lang': 'idioma lingua ingles espanhol portugues english spanish portuguese languages speak idiomas espanol hablas',
  '@hobby':
    'hobby lazer tempo livre diversao gosta passatempo divertir fun free time interest pasatiempo ocio gusta',
  '@service':
    'servico freela freelancer contratar orcamento preco valor landing page site ux ui design prototipo ' +
    'service hire freelance pricing quote servicio contratar presupuesto',
  '@location': 'mora cidade localizacao sao paulo brasil remoto location live based city lives vive ciudad',
  '@avail': 'disponivel disponibilidade vaga oportunidade aberta procurando available opportunity open hiring disponible oportunidad',
  '@greet': 'oi ola eae opa salve bom dia boa tarde noite hello hey hola buenas saludos',
  '@thanks': 'obrigado obrigada valeu brigado agradeco thank thanks gracias agradezco',
  '@who': 'quem robo assistente chatbot who quien',
  '@help': 'ajuda ajudar perguntar responder oque help ask answer ayuda puedes preguntar',
  // atributos (para perguntas de continuação sobre o último assunto)
  '@code': 'codigo github repositorio repo fonte source code link codigo',
  '@demo': 'demo online deploy publicado rodando funcionando live',
  '@when': 'quando periodo ano duracao data inicio quanto when how long year cuando periodo',
  '@techs': 'tecnologia stack usou usado feito ferramenta technologies tools built tecnologias herramientas',
  '@details': 'detalhe mais resumo details more explain tell detalles explica cuenta',
};

/** Grupos já quebrados em palavras normalizadas. */
export const SYN_GROUPS: [string, string[]][] = Object.entries(SYNONYMS).map(([g, words]) => [g, [...new Set(tokens(words, true))]]);

/** Tecnologias conhecidas que NÃO estão no portfólio (para responder com sinceridade "não aparece"). */
export const OTHER_TECHS = [
  'django', 'flask', 'php', 'laravel', 'ruby', 'rails', 'golang', 'csharp', 'dotnet', 'kotlin', 'swift',
  'flutter', 'dart', 'vue', 'vuejs', 'svelte', 'nuxt', 'rust', 'scala', 'elixir', 'azure', 'gcp',
  'kubernetes', 'k8s', 'terraform', 'graphql', 'oracle', 'cobol', 'unity', 'android', 'ios',
];
