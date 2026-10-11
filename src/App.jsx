import { useEffect } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { navigation } from './data/content'
import { useLanguage } from './i18n/LanguageContext'

function PageReset() {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    const page = navigation.find(([, path]) => path === pathname)
    document.title = `${page ? t.nav[page[0]] : t.notFound.title} | Shahkar Software Solution`
  }, [pathname, t])

  return null
}

function NotFound() {
  const { t } = useLanguage()
  return <section className="not-found"><div className="container"><span>404</span><h1>{t.notFound.title}</h1><Link className="button button--accent" to="/">{t.notFound.back}</Link></div></section>
}

export default function App() {
  return <><PageReset /><Navbar /><main id="main-content"><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    {/* Pages removed in the simplified site */}
    <Route path="/solutions" element={<Navigate to="/services" replace />} />
    <Route path="/technology" element={<Navigate to="/services" replace />} />
    <Route path="/insights" element={<Navigate to="/about" replace />} />
    <Route path="*" element={<NotFound />} />
  </Routes></main><Footer /></>
}
