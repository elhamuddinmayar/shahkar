import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/shahkar-mark.png'
import { navigation } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { languages } from '../i18n/translations'

function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()
  return <div className="lang-switch" role="group" aria-label={t.nav.language}>
    {languages.map(item => <button type="button" key={item.code} lang={item.htmlLang} className={lang === item.code ? 'active' : ''} aria-pressed={lang === item.code} onClick={() => setLang(item.code)}>{item.label}</button>)}
  </div>
}

export default function Navbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setIsOpen(false) }, [location.pathname])

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 16)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
    <div className="container nav-inner">
      <Link to="/" className="brand" aria-label="Shahkar Software Solution home" dir="ltr">
        <img src={logo} alt="" width="42" height="42" />
        <span>SHAHKAR<small>SOFTWARE SOLUTION</small></span>
      </Link>
      <nav id="site-navigation" className={`nav-links ${isOpen ? 'nav-links--open' : ''}`} aria-label="Main navigation">
        {navigation.map(([key, path]) => <NavLink key={path} to={path} end={path === '/'}>{t.nav[key]}</NavLink>)}
      </nav>
      <div className="nav-actions">
        <LanguageSwitcher />
        <Link className="nav-cta" to="/contact">{t.nav.cta} <ArrowUpRight className="flip-rtl" size={17} /></Link>
        <button className="menu-button" type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="site-navigation" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
    </div>
  </header>
}
