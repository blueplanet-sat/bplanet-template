// src/lib/i18n.ts
import en from '../languages/en.json';
import es from '../languages/es.json';
import fr from '../languages/fr.json';

const translations = {
  en,
  es,
  fr,
};

export function getTranslations(lang: string) {
  return translations[lang as keyof typeof translations] || en;
}