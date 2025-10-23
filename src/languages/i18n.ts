import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nextPlugin } from 'translation-check';

import en_login from './en/login.json';
import vi_login from './vi/login.json';
import en_setting from './en/setting.json';
import vi_setting from './vi/setting.json';
import en_table from './en/table.json';
import vi_table from './vi/table.json';
import en_sidebar from './en/sidebar.json';
import vi_sidebar from './vi/sidebar.json';

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
        table: en_table,
        sidebar: en_sidebar,
      },
      vi: {
        login: vi_login,
        setting: vi_setting,
        table: vi_table,
        sidebar: vi_sidebar,
      },
    },
    defaultNS,
  })
  .then();

export default i18next;
