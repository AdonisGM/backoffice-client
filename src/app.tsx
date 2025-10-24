import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/hooks/redux-hook.ts';
import Toast from '@/components/toast/toast.tsx';

const App = () => {
  const { i18n } = useTranslation();
  const language = useAppSelector(
    (state: { language: { value: string } }): string => state.language.value
  );
  const [debugTanstackMode, setDebugTanstackMode] = useState(false);

  useEffect((): void => {
    localStorage.setItem('lang', language);
    i18n.changeLanguage(language).then(() => {});
  }, [language]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        setDebugTanstackMode((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Fragment>
      {debugTanstackMode && (
        <ReactQueryDevtools
          buttonPosition={'bottom-right'}
          initialIsOpen={false}
          position={'bottom'}
        />
      )}
      {debugTanstackMode && (
        <TanStackRouterDevtools initialIsOpen={false} position={'bottom-left'} />
      )}
      <Toast />
    </Fragment>
  );
};

export default App;
