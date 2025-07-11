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
            <h2>{item.date}</h2>
            <div className={styles.timelineContent}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default History;