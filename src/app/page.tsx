// 전체적인 요약 페이지

import styles from './page.module.css';
import HeroSection from '@/containers/home/HeroSection';
import AboutOverview from '@/containers/about/Overview';
import ProjectsOverview from '@/containers/projects/Overview';
import ContactOverview from '@/containers/contact/Overview';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutOverview />
      <ProjectsOverview />
      <ContactOverview />
    </main>
  );
}
