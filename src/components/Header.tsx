'use client';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ko from '@/locales/ko';
import routeData from '@/data/route';
const { home, about, projects, contact } = routeData;
const navList = [
  {
    name: ko.header.home,
    href: home,
  },
  {
    name: ko.header.about,
    href: about,
  },
  {
    name: ko.header.projects,
    href: projects,
  },
  {
    name: ko.header.contact,
    href: contact,
  },
];

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className={`${styles.container} ${className}`}>
      <div className={styles.nav}>
        {navList.map((item) => (
          <Link href={item.href} key={item.href} className={pathname === item.href ? styles.active : ''}>{item.name}</Link>
        ))}
      </div>
    </header>
  )
}

export default Header;