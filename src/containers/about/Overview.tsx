'use client';
import styles from './Overview.module.css';
import ko from '@/locales/ko';
import NavigationButton from '@/components/buttons/NavigationButton';
import routeData from '@/data/route';

const Overview = () => {
  return (
    <div className={styles.container}>
      <h1>{ko.about.overview.title}</h1>
      <p>{ko.about.overview.description}</p>
      <NavigationButton text={ko.about.overview.button} path={routeData.about} />
    </div>
  )
}

export default Overview;