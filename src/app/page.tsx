'use client';

// 전체적인 요약 페이지
import styles from './page.module.css';
import HeroSection from '@/containers/home/HeroSection';
import AboutOverview from '@/containers/about/Overview';
import ProjectsOverview from '@/containers/projects/Overview';
import ContactOverview from '@/containers/contact/Overview';
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { useEffect } from 'react';

const Overviews = [
  AboutOverview,
  ProjectsOverview,
  ContactOverview,
]

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
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
  useEffect(() => {
    const initScroll = () => {
      window.scrollTo(0, 0);
    }

    initScroll();
  }, []);

  return (
    <main className={styles.main}>
      {/* main hero section */}
      <motion.section
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.section>
      {/* overview sections */}
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
