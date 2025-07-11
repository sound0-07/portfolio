import type { Metadata } from 'next';
import styles from './page.module.css';
import ko from '@/locales/ko';
import History from '@/containers/about/History';
import Skill from '@/containers/about/Skill';
import Certificate from '@/containers/about/Certificate';
import Hobby from '@/containers/about/Hobby';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <History />
        <Skill />
        <Certificate />
        <Hobby />
      </div>
    </main>
  );
}
