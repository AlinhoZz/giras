// src/app/components/LayoutWrapper.tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import MainLayout from './MainLayout';
import Header from './Header';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  // Rotas onde Header e Sidebar NÃO devem ser exibidos
  const noLayoutPaths = ['/login', '/login/esqueci-senha'];

  // Rotas onde SOMENTE o Header deve ser exibido
  const headerOnlyPaths = ['/projetos/criar']; 

  if (noLayoutPaths.includes(pathname)) {
    return <>{children}</>;
  } else if (headerOnlyPaths.includes(pathname)) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  } else {
    return <MainLayout>{children}</MainLayout>;
  }
};

export default LayoutWrapper;
