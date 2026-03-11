import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import ca from './locales/ca.json';
import es from './locales/es.json';
import en from './locales/en.json';

const resources = {
  ca: {
    translation: ca
  },
  es: {
    translation: es
  },
  en: {
    translation: en
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ca',
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ['localStorage', 'htmlTag'],
      caches: ['localStorage'],
    }
  });

export default i18n;