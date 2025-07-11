"use client"

import { motion, useScroll } from "motion/react"
import styles from "./ProgressBar.module.css"

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
  )
}

export default ProgressBar;