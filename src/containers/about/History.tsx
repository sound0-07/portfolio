import styles from './History.module.css';
import ko from '@/locales/ko';
const content = ko.about.history;

const History = () => {
  return (
    <section className={styles.history}>
      <h1>{content.title}</h1>
      <div className={styles.timeline}>
        {content.timeline.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <h2>{item.date.year}</h2>
            <p className={styles.timelineContent}>
              <span className={styles.timelineMonth}>{item.date.month}</span>
              <span>{item.title}</span>
              <span>{item.description}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default History;