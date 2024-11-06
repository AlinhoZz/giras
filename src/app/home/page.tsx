import React from 'react';
import styles from './home.module.css';
import AuthGuard from '../autenticação/AuthGuard';

console.log('token')
const Home: React.FC = () => {
  return (
    <AuthGuard>
      <div className={styles.container}>
        <h1 className={styles.title}>Bem-vindo à Home</h1>
      </div>
    </AuthGuard>
  );
};

export default Home;
