import About from '../Site/About';
import { useScrollReveal } from '../components/AnimatedSVGs';

const AboutPage = () => {
  useScrollReveal();

  return (
    <div className="about-page">
      <About />
    </div>
  );
};

export default AboutPage;
