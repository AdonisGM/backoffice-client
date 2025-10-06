import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nextPlugin } from 'translation-check';

import en_login from './en/login.json';
import vi_login from './vi/login.json';
import en_setting from './en/setting.json';
import vi_setting from './vi/setting.json';

export const defaultNS = 'home';

i18next
  .use(initReactI18next)
  .use(i18nextPlugin)
  .init({
    lng: localStorage.getItem('lang') || 'vi',
    debug: true,
    resources: {
      en: {
        login: en_login,
        setting: en_setting,
      },
      vi: {
        login: vi_login,
        setting: vi_setting,
      },
    },
    defaultNS,
  });

export default i18next;
