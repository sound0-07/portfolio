'use client';

import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";
import ChevronUpIcon from "/public/chevron-up.svg";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button className={styles.scrollToTopButton} onClick={scrollToTop}>
      <Image src={ChevronUpIcon} alt="chevron-up" width={24} height={24} />
    </button>
  )
}

export default ScrollToTopButton;