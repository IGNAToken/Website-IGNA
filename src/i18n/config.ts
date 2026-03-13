import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import enTranslations from './locales/en.json'
import huTranslations from './locales/hu.json'
import skTranslations from './locales/sk.json'
import uaeTranslations from './locales/uae.json'
import zhTranslations from './locales/zh.json'

const resources = {
  en: {
    translation: enTranslations,
  },
  hu: {
    translation: huTranslations,
  },
  sk: {
    translation: skTranslations,
  },
  uae: {
    translation: uaeTranslations,
  },
  zh: {
    translation: zhTranslations,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'hu', 'sk', 'uae', 'zh'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      // Language detection from URL path
      order: ['path', 'querystring', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
  })

export default i18n
