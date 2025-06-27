'use client';

import styles from './Overview.module.css';
import ko from '@/locales/ko';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { useRouter } from 'next/navigation';
import routeData from '@/data/route';

const Overview = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(routeData.about);
  }

  return (
    <section className={styles.container}>
      <h1>{ko.about.overview.title}</h1>
      <p>{ko.about.overview.description}</p>
      <PrimaryButton text={ko.about.overview.button} onClick={handleClick} />
    </section>
  )
}

export default Overview;