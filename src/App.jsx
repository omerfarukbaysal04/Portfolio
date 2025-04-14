import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Site/Navbar'
import Header from './Site/Header'
import About from './Site/About'
import Contact from './Site/Contact'
import Footer from './Site/Footer'
import Projects from './Site/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
