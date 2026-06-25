import './styles.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Site/Navbar'
import Footer from './Site/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

// Scroll to top on route change, unless we're navigating to a specific section.
function ScrollRestoration() {
  const location = useLocation();
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.state]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <ParticleBackground />
      <ScrollRestoration />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
