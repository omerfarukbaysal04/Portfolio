import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('lang');
  if (saved === 'en' || saved === 'tr') return saved;
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
};

// Pick the localized value from a field that may be a string or an { en, tr } object.
export const localize = (value, lang) => {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('en' in value || 'tr' in value)) {
    return value[lang] ?? value.en;
  }
  return value;
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const value = useMemo(() => {
    const t = translations[lang];
    return {
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'tr' : 'en')),
      t,                                   // UI string dictionary for current language
      tr: (field) => localize(field, lang), // localize a { en, tr } content field
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
