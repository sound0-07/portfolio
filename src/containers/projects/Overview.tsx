'use client';
import styles from './Overview.module.css';
import ko from '@/locales/ko';
import NavigationButton from '@/components/buttons/NavigationButton';
import routeData from '@/data/route';

const Overview = () => {
  return (
    <div className={styles.container}>
      <h1>{ko.projects.overview.title}</h1>
      <p>{ko.projects.overview.description}</p>
      <NavigationButton text={ko.projects.overview.button} path={routeData.projects} />
    </div>
  )
}

export default Overview;