import About from '../Site/About';
import { useScrollReveal } from '../components/AnimatedSVGs';
import { usePageMeta } from '../components/usePageMeta';
import { useLanguage } from '../i18n/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();
  useScrollReveal();
  usePageMeta({ title: t.nav.about, description: t.whoami.summary, path: '/about' });

  return (
    <div className="about-page">
      <About />
    </div>
  );
};

export default AboutPage;
