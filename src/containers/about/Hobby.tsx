import styles from './Hobby.module.css';
import ko from '@/locales/ko';
const content = ko.about.hobby;

const Hobby = () => {
  return (
    <section>
      <h1>{content.title}</h1>
      <div className={styles.hobbyList}>
        {content.list.map((item, index) => (
          <div key={index} className={styles.hobbyItem}>
            <span>{item.name}</span>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hobby;