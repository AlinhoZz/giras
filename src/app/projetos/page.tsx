// app/projetos/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styles from './projetos.module.css';
import Image from 'next/image';
import Link from 'next/link';
import api from '../services/api';

interface Projeto {
  id: number;
  nome: string;
  bannerUrl: string;
}

const ProjetosPage: React.FC = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    // Chamada ao backend para obter os projetos
    api.get('/projetos')
      .then(response => {
        setProjetos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar projetos:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}
      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          <h1 className={styles.mainTitle}>Projetos</h1>
          {/* Botão para criar projeto */}
          <Link href="/projetos/criar" className={styles.createButton}>
            Criar Projeto
          </Link>
        </main>
        <div className={styles.underline}></div>

        <div className={styles.projectContainer}>
          {/* Renderiza os projetos obtidos do backend */}
          {projetos.map(projeto => (
            <div key={projeto.id} className={styles.projectBanner}>
              <div className={styles.projectImage}>
                <Image 
                  src={projeto.bannerUrl} 
                  alt={`Banner do ${projeto.nome}`} 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
              <p className={styles.projectTitle}>{projeto.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjetosPage;
