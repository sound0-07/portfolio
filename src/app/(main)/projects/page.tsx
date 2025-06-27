import styles from './page.module.css';
import ko from '@/locales/ko';

export default function Projects() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{ko.projects.title}</h1>
    </main>
  );
}
