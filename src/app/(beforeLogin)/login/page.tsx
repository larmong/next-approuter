'use client';

import { useRouter } from 'next/navigation';
import Main from '@/app/(beforeLogin)/_component/main/main.page';

export default function Login() {
  const router = useRouter();

  router.replace('/i/flow/login');
  return <Main />;
}
