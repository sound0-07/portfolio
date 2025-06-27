// 전체적인 요약 페이지

import styles from "./page.module.css";
import HeroSection from "@/containers/home/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  );
}
