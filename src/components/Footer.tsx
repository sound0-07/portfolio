import styles from './Footer.module.css';
import ko from "@/locales/ko";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <p>{ko.info.name}</p>
        <p>{ko.footer.email}: <a href={`mailto:${ko.info.email}`}>{ko.info.email}</a></p>
        <p>{ko.footer.phone}: <a href={`tel:${ko.info.phone}`}>{ko.info.phone}</a></p>
        <p>{ko.footer.address}: {ko.info.address}</p>
      </div>
      <div className={styles.divider} />
      <p>{ko.footer.copyright}</p>
    </footer>
  )
}

export default Footer;