import { useLanguage } from '../i18n/LanguageContext';

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={lang === 'en' ? "Türkçe'ye geç" : 'Switch to English'}
      title={lang === 'en' ? 'Türkçe' : 'English'}
    >
      {lang === 'en' ? 'TR' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
