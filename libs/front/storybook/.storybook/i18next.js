import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = [
  'common',
  'forms',
  'signupPage',
  'userInfosPage'
];
const supportedLngs = ['en', 'fr'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    react: { 
      useSuspense: false 
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
    ns,
    supportedLngs,
  });

supportedLngs.forEach((lang) => {
  ns.forEach((namespace) => {
    i18n.addResourceBundle(
      lang,
      namespace,
      require(`../../translations/assets/locales//${lang}/${namespace}.json`)
    );
  });
});

export { i18n };
