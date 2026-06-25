import './styles.css'
import { useScrollReveal } from './components/AnimatedSVGs'
import Navbar from './Site/Navbar'
import Header from './Site/Header'
import About from './Site/About'
import Skills from './Site/Skills'
import Projects from './Site/Projects'
import Contact from './Site/Contact'
import Footer from './Site/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'

function App() {
  useScrollReveal();

  return (
    <>
      <Preloader />
      <ParticleBackground />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
