import About from '../Site/About';
import Skills from '../Site/Skills';
import SocialMedia from '../Site/SocialMedia';
import { useScrollReveal } from '../components/AnimatedSVGs';

const AboutPage = () => {
  useScrollReveal();

  return (
    <div className="about-page">
      <About />
      <Skills />
      <SocialMedia />
    </div>
  );
};

export default AboutPage;
