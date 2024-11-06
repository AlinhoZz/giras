import React from 'react';
import styles from './MainLayout.module.css';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.rootContainer}>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
