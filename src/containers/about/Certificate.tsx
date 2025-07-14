import styles from './Certificate.module.css';
import ko from '@/locales/ko';
const content = ko.about.certificate;

const Certificate = () => {
  return (
    <section>
      <h1>{content.title}</h1>
      <div className={styles.certificateList}>
        {content.list.map((item, index) => (
          <div key={index} className={styles.certificateItem}>
            <span>{item.date}</span>
            <span>{item.title}</span>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificate;