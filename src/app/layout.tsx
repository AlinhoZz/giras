import './globals.css';
import LayoutWrapper from './components/LayoutWrapper';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Giras',
  description: 'Sistama de cadastro da ONG Giral.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
