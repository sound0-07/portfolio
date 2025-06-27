import type { Metadata } from 'next';
import styles from './page.module.css';
import ko from '@/locales/ko';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{ko.about.title}</h1>
    </main>
  );
}
