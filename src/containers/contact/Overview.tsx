'use client';
import styles from './Overview.module.css';
import ko from '@/locales/ko';
import NavigationButton from '@/components/buttons/NavigationButton';
import routeData from '@/data/route';

const Overview = () => {
  return (
    <div className={styles.container}>
      <h1>{ko.contact.overview.title}</h1>
      <p>{ko.contact.overview.description}</p>
      <NavigationButton text={ko.contact.overview.button} path={routeData.contact} />
    </div>
  )
}

export default Overview;