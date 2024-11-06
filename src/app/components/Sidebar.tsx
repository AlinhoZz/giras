import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <Link href="/home" className={styles.navLink}>
          <Image src="/icons/icon_home.png" alt="Início" width={24} height={24} />
          <span>Home</span>
        </Link>
        <Link href="/projetos" className={styles.navLink}>
          <Image src="/icons/icon_projetos.png" alt="Projetos" width={24} height={24} />
          <span>Projetos</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
