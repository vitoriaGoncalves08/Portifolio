import { Component, computed, input, signal } from '@angular/core';

/** Ícones das tecnologias (devicon via jsDelivr). Sem ícone → bolinha. */
const ICONS: Record<string, string> = {
  Java: 'java', 'Spring Boot': 'spring', Kafka: 'apachekafka', 'JPA/Hibernate': 'hibernate', Hibernate: 'hibernate',
  Angular: 'angular', TypeScript: 'typescript', RxJS: 'rxjs', 'HTML/CSS': 'html5',
  PostgreSQL: 'postgresql', MongoDB: 'mongodb', Redis: 'redis', Docker: 'docker', Git: 'git',
  'CI/CD': 'githubactions', 'React.js': 'react', JavaScript: 'javascript', 'Node.js': 'nodejs', SASS: 'sass',
  'Material UI': 'materialui', Figma: 'figma', MySQL: 'mysql', 'SQL Server': 'microsoftsqlserver',
  'Module Federation': 'webpack', 'Micro-frontends': 'angularjs',
  'Next.js': 'nextjs', 'Tailwind CSS': 'tailwindcss', Python: 'python', 'scikit-learn': 'scikitlearn', 'Chrome Extension': 'chrome',
  Vite: 'vitejs', 'Framer Motion': 'framermotion', Maven: 'maven',
};

export const techIconUrl = (name: string): string => {
  const slug = ICONS[name];
  return slug ? `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${slug}/${slug}-original.svg` : '';
};

/** Pílula de tecnologia com ícone. `big` = versão grande e "espalhada" da seção Skills. */
@Component({
  selector: 'app-tech-chip',
  host: { style: 'display:contents' },
  template: `
    <span class="chip" [class.big]="big()" [class.lvl]="level() != null" [style.--o]="big() ? offset() + 'px' : null"
          [style.--r]="big() ? rot() + 'deg' : null" [style.--dl]="big() ? -(index() % 6) + 's' : null"
          [style.--lvl]="level() != null ? level()! * 10 + '%' : null"
          [attr.title]="level() != null ? name() + ' · ' + level() + '/10' : null">
      @if (url() && !broken()) {
        <img [src]="url()" alt="" loading="lazy" (error)="broken.set(true)" />
      } @else if (!url()) {
        <i class="d"></i>
      }
      {{ name() }}
      @if (level() != null) {<b class="lv" aria-hidden="true">{{ level() }}</b><span class="sr-only">{{ level() }}/10</span>}
    </span>`,
})
export class TechChip {
  readonly name = input.required<string>();
  readonly big = input(false);
  /** posição na lista, usada para variar deslocamento/rotação */
  readonly index = input(0);
  /** nível de 0 a 10: pinta essa fração da tag com o tom mais escuro da cor de destaque */
  readonly level = input<number | undefined>(undefined);
  protected readonly broken = signal(false);
  protected readonly url = computed(() => techIconUrl(this.name()));
  protected readonly offset = computed(() => (((this.index() * 37) % 5) - 2) * 7);
  protected readonly rot = computed(() => ((this.index() * 53) % 7) - 3);
}
