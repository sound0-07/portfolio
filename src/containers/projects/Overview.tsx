'use client';

import styles from './Overview.module.css';
import ko from '@/locales/ko';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { useRouter } from 'next/navigation';
import routeData from '@/data/route';

const Overview = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(routeData.projects);
  }

  return (
    <div className={styles.container}>
      <h1>{ko.projects.overview.title}</h1>
      <p>{ko.projects.overview.description}</p>
      <PrimaryButton text={ko.projects.overview.button} onClick={handleClick} />
    </div>
  )
}

export default Overview;