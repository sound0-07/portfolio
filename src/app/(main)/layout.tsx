import styles from './layout.module.css';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}
