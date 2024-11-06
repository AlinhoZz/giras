// app/login/esqueci-senha/page.tsx

'use client';

import React, { useState } from 'react';
import styles from './esqueci-senha.module.css';
import { useRouter } from 'next/navigation';

const EsqueciSenhaPage: React.FC = () => {
  const [circlePosition, setCirclePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isCircleVisible, setIsCircleVisible] = useState<boolean>(false);
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCirclePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsCircleVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCircleVisible(false);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.leftSection}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1>Bem-vindo ao Gira</h1>
        <p>O sistema de cadastro e dashboards de alunos</p>
        {/* Bola de luz que segue o mouse */}
        <div
          className={`${styles.glowCircle} ${isCircleVisible ? styles.visible : ''}`}
          style={{ top: circlePosition.y, left: circlePosition.x }}
        />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.formSection}>
          <h1 className={styles.title}>Esqueci a Senha</h1>
          <p className={styles.description}>
            Por favor, entre em contato com o suporte para recuperar sua senha.
          </p>
          <button
            className={`${styles.button} ${styles.backButton}`}
            onClick={() => router.push('/login')}
          >
            Voltar para Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default EsqueciSenhaPage;
