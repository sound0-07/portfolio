import styles from './NavigationButton.module.css';
import Link from 'next/link';

interface NavigationButtonProps {
  text: string;
  path: string;
}

const NavigationButton = ({ text, path }: NavigationButtonProps) => {
  return (
    <Link href={path} className={styles.button}>
      <span className={styles.text}>{text}</span>
    </Link>
  )
}

export default NavigationButton;