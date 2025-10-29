import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { TanStackDevtools } from '@tanstack/react-devtools';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { FormDevtoolsPlugin } from '@tanstack/react-form-devtools';
import { useAppSelector } from '@/hooks/redux-hook.ts';
import Toast from '@/components/toast/toast.tsx';

const App = () => {
  const { i18n } = useTranslation();
  const language = useAppSelector(
    (state: { language: { value: string } }): string => state.language.value
  );

  useEffect((): void => {
    localStorage.setItem('lang', language);
    i18n.changeLanguage(language).then(() => {});
  }, [language]);

  return (
    <Fragment>
      <TanStackDevtools
        plugins={[
          {
            name: 'TanStack Query',
            render: <ReactQueryDevtoolsPanel />,
          },
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          FormDevtoolsPlugin(),
        ]}
      />
      <Toast />
    </Fragment>
  );
};

export default App;
