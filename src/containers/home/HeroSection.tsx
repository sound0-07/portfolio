import styles from './HeroSection.module.css';
import ko from '@/locales/ko';

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{ko.home.title}</h1>
    </section>
  )
}

export default HeroSection;