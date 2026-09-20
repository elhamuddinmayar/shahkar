import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Projects from './pages/Projects'
import About from './pages/About'
import Technology from './pages/Technology'
import Insights from './pages/Insights'
import Contact from './pages/Contact'

function PageReset() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const titles = { '/': 'Software for the way forward', '/services': 'Services', '/solutions': 'Solutions', '/projects': 'Concept studies', '/about': 'About', '/technology': 'Technology', '/insights': 'Insights', '/contact': 'Contact' }
    document.title = `${titles[pathname] || 'Page not found'} | Shahkar Software Solution`
  }, [pathname])

  return null
}

export default function App() {
  return <><PageReset /><Navbar /><main id="main-content"><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/technology" element={<Technology />} />
    <Route path="/insights" element={<Insights />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<section className="not-found"><div className="container"><span>404 / PAGE NOT FOUND</span><h1>This page is out of view.</h1><a href="/">Return home →</a></div></section>} />
  </Routes></main><Footer /></>
}
