import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

const PrimaryButton = ({ text, onClick }: PrimaryButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  )
}

export default PrimaryButton;