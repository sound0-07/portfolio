// 전체적인 요약 페이지
import styles from './page.module.css';
import HeroSection from '@/containers/home/HeroSection';
import AboutOverview from '@/containers/about/Overview';
import ProjectsOverview from '@/containers/projects/Overview';
import ContactOverview from '@/containers/contact/Overview';
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

const Overviews = [
  HeroSection,
  AboutOverview,
  ProjectsOverview,
  ContactOverview,
]

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export default function Home() {
  return (
    <main className={styles.main}>
      {Overviews.map((Overview, index) => (
        <motion.section
          key={index}
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8, once: true }}
        >
          <Overview key={index} />
        </motion.section>
      ))}
    </main>
  );
}
