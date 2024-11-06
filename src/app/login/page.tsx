'use client';

import React, { useState } from 'react';
import styles from './login.module.css';
// import api from '../services/api'; // Comentado até vinda do backend
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [circlePosition, setCirclePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isCircleVisible, setIsCircleVisible] = useState<boolean>(false);
  const router = useRouter();

  // Usuário e senha fixos para autenticação temporária
  const fixedEmail = 'alisson@gmail.com';
  const fixedPassword = 'senha123';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validação simples usando os valores fixos
      if (email === fixedEmail && password === fixedPassword) {
        // Simulação de login bem-sucedido
        localStorage.setItem('token', 'fake-token');
        router.push('/home');
      } else {
        alert('Email ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Falha no login. Verifique suas credenciais.');
    }
  };

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
          <h1 className={styles.title}>Login</h1>
          <p className={styles.description}>Use seu e-mail e senha para entrar:</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                className={styles.inputField}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                className={styles.inputField}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={`${styles.button} ${styles.loginButton}`}>
              Login
            </button>
          </form>
          <button
            className={`${styles.button} ${styles.signInButton}`}
            onClick={() => router.push('/login/esqueci-senha')}
          >
            Esqueci a Senha
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
