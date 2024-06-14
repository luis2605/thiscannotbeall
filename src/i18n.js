// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "../src/assets/translations/de/translations.json";
import en from "../src/assets/translations/en/translations.json";
import es from "../src/assets/translations/es/translations.json";

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en", // fallback language if the current language is not available
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
