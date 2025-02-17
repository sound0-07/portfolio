import styles from "./page.module.css";

export default function Home() {
  const content = "Hi, I'm sound.";
  const name = "sound0-07";

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>{content}</p>
      </main>
      <footer className={styles.footer}>
        <p>{name}</p>
      </footer>
    </div>
  );
}
