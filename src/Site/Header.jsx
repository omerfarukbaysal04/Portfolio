import { HeroDecoRings } from '../components/AnimatedSVGs';
import HeroStage from '../components/HeroStage';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="hero" id="hero">
      <div className="hero-bg">
        <HeroDecoRings />
      </div>

      <div className="container">
        <HeroStage />

        {/* Name and short intro under the slides, right before the projects */}
        <div className="hero-intro">
          <h1 className="hero-name">
            Ömer Faruk <span className="gradient-text">Baysal</span>
          </h1>
          <p className="hero-description">{t.hero.description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
