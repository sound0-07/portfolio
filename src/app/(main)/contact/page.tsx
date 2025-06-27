import type { Metadata } from 'next';
import styles from './page.module.css';
import ko from '@/locales/ko';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{ko.contact.title}</h1>
    </main>
  );
}
