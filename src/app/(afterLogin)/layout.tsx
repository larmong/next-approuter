import { ReactNode } from 'react';

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main>로그인 후 레이아웃 ||| {children}</main>;
}
