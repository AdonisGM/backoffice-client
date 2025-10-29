import { createFileRoute, redirect } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import LoginPage from '@/features/auth/login/login.page.tsx';
export const Route = createFileRoute('/login')({
  component: RouteComponent,
  beforeLoad: () => {
    const user = localStorage.getItem('user');

    if (user) {
      throw redirect({
        to: '/dashboard',
      });
    }
  },
});

function RouteComponent() {
  const { t, i18n } = useTranslation();
  const { redirect } = Route.useSearch() as { redirect?: string };

  useEffect(() => {
    document.title = t('title', { ns: 'login' });
  }, [i18n.language]);

  return (
    <LoginPage
      search={{
        redirect: redirect || undefined,
      }}
    />
  );
}
