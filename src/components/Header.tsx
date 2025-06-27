import Link from 'next/link';
import styles from './Header.module.css';
import ko from '@/locales/ko';
import routeData from '@/data/route';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${styles.container} ${className}`}>
      <div className={styles.nav}>
        <Link href={routeData.home}>{ko.header.home}</Link>
        <Link href={routeData.about}>{ko.header.about}</Link>
        <Link href={routeData.projects}>{ko.header.projects}</Link>
        <Link href={routeData.contact}>{ko.header.contact}</Link>
      </div>
    </header>
  )
}

export default Header;