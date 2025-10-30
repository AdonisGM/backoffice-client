import { I18nProvider } from '@react-aria/i18n';
import { ReactNode } from 'react';
import { useAppSelector } from '@/hooks/redux-hook.ts';
import { intlLocaleEn, intlLocaleVi } from '@/configs/locale.ts';

type LocaleProviderProps = {
  children: ReactNode;
};

const LocaleProvider = (props: LocaleProviderProps) => {
  const language = useAppSelector((state) => state.language.value);

  return (
    <I18nProvider locale={language === 'en' ? intlLocaleEn : intlLocaleVi}>
      {props.children}
    </I18nProvider>
  );
};

export default LocaleProvider;
