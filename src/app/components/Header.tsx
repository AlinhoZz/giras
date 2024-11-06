import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logotipo */}
        <Image src="/icons/GIRAS (2).svg" alt="Logo do Giras" width={88} height={44} />

        {/* Navegação */}
        <nav className={styles.navLinks}>
          <Link href="/help" className={styles.navLink}>
            Ajuda
          </Link>
          <Link href="/about" className={styles.navLink}>
            Sobre
          </Link>
        </nav>

        {/* Informações do Usuário */}
        <div className={styles.userInfo}>
          <Image src="/icons/user-pic.png" alt="Imagem do usuário" width={30} height={30} />
          <span>Maria</span>
          <button className={styles.logoutButton} onClick={handleLogout}>Sair</button>
        </div>
      </div>
    </header>
  );
};

const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

export default Header;
