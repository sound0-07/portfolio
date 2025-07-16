import type { Metadata } from 'next';
import styles from './page.module.css';
import ko from '@/locales/ko';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{ko.projects.title}</h1>
      {ko.projects.list.map((project) => (
        <div key={project.id} className={styles.project}>
          <p>{project.date.year}.{project.date.month}</p>
          <h2>{project.company}</h2>
          <p>{project.name} {project.subName}</p>
          <p>{project.tag.join(', ')}</p>
          <ul>
            {project.works.map((work) => (
              <li key={work}>{work}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
