'use client';

import React, { useState } from 'react';
import styles from './criar.module.css';
import api from '../../services/api';
import { useRouter } from 'next/navigation';

const CriarProjetoPage: React.FC = () => {
  const [nome, setNome] = useState('');
  const [banner, setBanner] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome);
    if (banner) {
      formData.append('banner', banner);
    }

    try {
      await api.post('/projetos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Projeto criado com sucesso!');
      router.push('/projetos');
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
      alert('Erro ao criar projeto. Tente novamente.');
    }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Botão de voltar */}
      <button className={styles.backButton} onClick={() => router.back()}>
        &larr; Voltar
      </button>

      <div className={styles.container}>
        <h1 className={styles.title}>Criar Projeto</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nome" className={styles.label}>Nome do Projeto:</label>
            <input
              type="text"
              id="nome"
              className={styles.inputField}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="banner" className={styles.label}>Banner do Projeto:</label>
            <input
              type="file"
              id="banner"
              className={styles.inputField}
              onChange={(e) => setBanner(e.target.files ? e.target.files[0] : null)}
            />
          </div>
          <button type="submit" className={styles.submitButton}>Criar</button>
        </form>
      </div>
    </div>
  );
};

export default CriarProjetoPage;
