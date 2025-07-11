import styles from './Footer.module.css';
import ko from '@/locales/ko';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <span>{ko.info.name}</span>
        <span>{ko.footer.email}: <a href={`mailto:${ko.info.email}`}>{ko.info.email}</a></span>
        <span>{ko.footer.phone}: <a href={`tel:${ko.info.phone}`}>{ko.info.phone}</a></span>
        <span>{ko.footer.address}: {ko.info.address}</span>
      </div>
      <div className={styles.divider} />
      <span>{ko.footer.copyright}</span>
    </footer>
  )
}

export default Footer;