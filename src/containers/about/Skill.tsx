import styles from './Skill.module.css';
import ko from '@/locales/ko';
const content = ko.about.skill;

const Skill = () => {
  return (
    <section>
      <h1>{content.title}</h1>
      <div className={styles.skillList}>
        {content.list.map((item, index) => (
          <div key={index} className={styles.skillItem}>
            <span>{item.skill}</span>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill;