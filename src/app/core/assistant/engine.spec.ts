import { DATA } from '../../data/portfolio.data';
import { AssistantEngine, Reply } from './engine';

/** atalho: pergunta e devolve o texto + as ações */
function ask(engine: AssistantEngine, q: string, lang: 'pt' | 'en' | 'es' = 'pt'): Reply {
  return engine.answer(q, lang);
}
const hasProject = (r: Reply, id: string) => r.actions.some((a) => a.kind === 'project' && a.value === id);

describe('AssistantEngine (Dúvidas? offline)', () => {
  let engine: AssistantEngine;
  beforeEach(() => (engine = new AssistantEngine(DATA)));

  it('entende erro de digitação em tecnologia', () => {
    expect(ask(engine, 'trabalha com kafika?').text).toMatch(/Kafka/);
    expect(ask(engine, 'sabe angluar?').text).toMatch(/Angular/);
    expect(ask(engine, 'usa sprimg bot?').text).toMatch(/Spring Boot/);
  });

  it('entende palavras coladas e sem acento', () => {
    expect(ask(engine, 'springboot').text).toMatch(/Spring Boot/);
    expect(ask(engine, 'microservisos').text).toMatch(/SAGA|microsservi/i);
    expect(ask(engine, 'ceramica').text).toMatch(/Cerâmica/);
  });

  it('responde sobre um projeto e lembra do assunto', () => {
    const r = ask(engine, 'me fala do projeto de saga');
    expect(r.text).toMatch(/SAGA/);
    expect(hasProject(r, 'saga')).toBe(true);
    const code = ask(engine, 'e o codigo?');
    expect(code.actions.some((a) => a.kind === 'link' && a.value.includes('microservice-saga'))).toBe(true);
  });

  it('responde sobre Fátima Bolos, Farma.co e Java Patterns', () => {
    expect(hasProject(ask(engine, 'site de bolo'), 'fatima-bolos')).toBe(true);
    expect(hasProject(ask(engine, 'app de farmacia'), 'farma-co')).toBe(true);
    expect(hasProject(ask(engine, 'padroes de projeto gof'), 'patterns')).toBe(true);
  });

  it('responde sobre Sorria e Acene e Futurize', () => {
    expect(hasProject(ask(engine, 'reconhece libras?'), 'sorria-acene')).toBe(true);
    expect(hasProject(ask(engine, 'sorria e acene'), 'sorria-acene')).toBe(true);
    expect(ask(engine, 'sabe python?').text).toMatch(/Sorria e Acene/);
    expect(hasProject(ask(engine, 'futurise'), 'futurize')).toBe(true);
  });

  it('responde sobre o e-commerce Bewear', () => {
    expect(hasProject(ask(engine, 'tem algum ecommerce?'), 'bewear')).toBe(true);
    expect(ask(engine, 'sabe nextjs?').text).toMatch(/Next\.js/);
    expect(ask(engine, 'usou stripe?').text).toMatch(/Bewear/);
    expect(ask(engine, 'sabe tailwind?').text).not.toMatch(/não aparece/);
  });

  it('responde sobre o trabalho atual na Capgemini', () => {
    expect(ask(engine, 'trabalha na capgemini?').text).toMatch(/Capgemini/);
    expect(ask(engine, 'onde ela trabalha hoje?').text).toMatch(/Capgemini/);
  });

  it('responde sobre as integrações da Muralis', () => {
    expect(ask(engine, 'fez integração com itau?').text).toMatch(/Muralis/);
    expect(ask(engine, 'trabalhou com receita federal?').text).toMatch(/Receita Federal/);
  });

  it('responde sobre trabalho, inclusive com gíria', () => {
    expect(ask(engine, 'onde ela trabalha?').text).toMatch(/Muralis/);
    expect(ask(engine, 'me fala dos trampos').text).toMatch(/Muralis/);
    expect(ask(engine, 'trabalhou na muralis?').text).toMatch(/Muralis/);
  });

  it('responde sobre formação e certificações', () => {
    expect(ask(engine, 'qual faculdade ela fez?').text).toMatch(/FATEC/);
    expect(ask(engine, 'tem certificado da aws?').text).toMatch(/AWS|Amazon/);
    expect(ask(engine, 'cisco').text).toMatch(/Cisco/);
  });

  it('é sincero com tecnologia que não está no portfólio', () => {
    expect(ask(engine, 'sabe php?').text).toMatch(/Php/i);
    expect(ask(engine, 'sabe php?').text).toMatch(/não aparece/);
    expect(ask(engine, '¿sabe kotlim?', 'es').text).toMatch(/no aparece/);
  });

  it('funciona em inglês e espanhol', () => {
    expect(ask(engine, 'where does she work?', 'en').text).toMatch(/Muralis/);
    expect(ask(engine, 'does she know react?', 'en').text).toMatch(/React/);
    expect(ask(engine, '¿dónde trabaja?', 'es').text).toMatch(/Muralis/);
    expect(ask(engine, 'proyectos', 'es').text).toMatch(/proyectos/);
  });

  it('responde contato, CV, idiomas e hobbies', () => {
    expect(ask(engine, 'como falo com ela?').actions.some((a) => a.kind === 'link')).toBe(true);
    expect(ask(engine, 'quero o curriculo').actions.some((a) => a.kind === 'cv')).toBe(true);
    expect(ask(engine, 'fala ingles?').text).toMatch(/Inglês|B2/);
    expect(ask(engine, 'o que ela faz no tempo livre?').text).toMatch(/Academia|Jogos|Livros|Cerâmica/);
  });

  it('nunca responde vazio: perguntas soltas recebem algo concreto', () => {
    for (const q of ['oi', 'xpto qualquer coisa', 'java', 'design patterns', 'banco de dados', 'docker', 'freela?']) {
      const r = ask(engine, q);
      expect(r.text.length).toBeGreaterThan(10);
    }
  });
});
