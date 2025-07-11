'use client';
import styles from "./ScrollToTopButton.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useScroll } from "motion/react";
import ChevronUpIcon from "/public/chevron-up.svg";

const ScrollToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(scrollYProgress.get() > 0.9);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    isVisible && <button className={styles.scrollToTopButton} onClick={scrollToTop}>
      <div className={styles.icon}>
        <Image src={ChevronUpIcon} alt="chevron-up" fill style={{ position: 'absolute' }} />
      </div>
    </button>
  )
}

export default ScrollToTopButton;