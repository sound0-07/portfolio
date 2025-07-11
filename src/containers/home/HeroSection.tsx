import styles from './HeroSection.module.css';
import ko from '@/locales/ko';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <h1>{ko.home.title}</h1>
    </div>
  )
}

export default HeroSection;