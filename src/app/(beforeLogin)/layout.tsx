import { ReactNode } from 'react';
import styles from '@/app/page.module.css';

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
