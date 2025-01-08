import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './translations/en.json';
import es from './translations/es.json';
import ko from './translations/ko.json';

i18n
  .use(LanguageDetector)  
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      ko: { translation: ko },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['localStorage', 'navigator'], 
      caches: ['localStorage'],
    },
  });

export default i18n;
