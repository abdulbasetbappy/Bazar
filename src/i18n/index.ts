// src/i18n/index.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    languages: {
      english: 'English',
      bengali: 'Bengali',
      // Add more English translations as needed
    },
    // Add more English translations as needed
  },
  bn: {
    languages: {
      english: 'ইংরেজি',
      bengali: 'বাংলা',
      // Add more Bengali translations as needed
    },
    // Add more Bengali translations as needed
  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;
