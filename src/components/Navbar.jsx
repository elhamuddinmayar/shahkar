import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/shahkar-mark.png'
import { navigation } from '../data/content'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setIsOpen(false), [location.pathname])

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 16)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
    <div className="container nav-inner">
      <Link to="/" className="brand" aria-label="Shahkar Software Solution home">
        <img src={logo} alt="" width="42" height="42" />
        <span>SHAHKAR<small>SOFTWARE SOLUTION</small></span>
      </Link>
      <nav id="site-navigation" className={`nav-links ${isOpen ? 'nav-links--open' : ''}`} aria-label="Main navigation">
        {navigation.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}
        <Link className="nav-mobile-cta" to="/contact">Let's talk <ArrowUpRight size={17} /></Link>
      </nav>
      <Link className="nav-cta" to="/contact">Let's talk <ArrowUpRight size={17} /></Link>
      <button className="menu-button" type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="site-navigation" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
    </div>
  </header>
}
