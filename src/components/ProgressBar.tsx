"use client"

import { motion, useScroll } from "motion/react"
import styles from "./ProgressBar.module.css"
import { useEffect } from "react";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const initScroll = () => {
      window.scrollTo(0, 0);
    }

    initScroll();
  }, []);

  return (
    <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
  )
}

export default ProgressBar;