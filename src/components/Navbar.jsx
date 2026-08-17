import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Languages } from 'lucide-react'
import { navLinks } from '../data/nav'
import logo from '../assets/logo.png'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t, languages } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-ink-900/8 bg-white/90 backdrop-blur-xl'
          : 'border-transparent bg-white/70 backdrop-blur-xl'
      }`}
    >
      <nav className="container-shahkar flex h-[72px] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Shahkar logo" className="h-9 w-9 object-contain" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[17px] font-bold tracking-tight text-ink-900">
              {t('brand.name')}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-600">
              {t('brand.tagline')}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3.5 py-2 text-[14px] font-medium transition-colors ${
                    isActive
                      ? 'text-brand-700'
                      : 'text-ink-900/70 hover:text-brand-700'
                  }`
                }
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <label className="relative flex items-center text-ink-900/65">
            <Languages size={16} className="pointer-events-none absolute start-2.5" />
            <span className="sr-only">{t('language.label')}</span>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label={t('language.label')} className="h-10 cursor-pointer rounded-md border border-ink-900/10 bg-white py-2 pe-2 ps-8 text-[13px] font-medium outline-none focus:border-brand-500">
              {Object.entries(languages).map(([code, item]) => <option key={code} value={code}>{item.nativeName}</option>)}
            </select>
          </label>
          <Link to="/contact" className="rounded-md px-3.5 py-2 text-[14px] font-medium text-ink-900/70 transition-colors hover:text-brand-700">
            {t('nav.contact')}
          </Link>
          <Link to="/contact" className="btn-primary !px-4 !py-2.5 text-[13px]">
            {t('nav.quote')}
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-900/10 text-ink-900 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-900/8 bg-white lg:hidden">
          <ul className="container-shahkar flex flex-col gap-1 py-3">
            {navLinks.concat([{ key: 'contact', to: '/contact' }]).map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2.5 text-[15px] font-medium ${
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-900/75'
                    }`
                  }
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 border-t border-ink-900/8 pt-3">
              <label className="flex items-center gap-2 px-3 text-sm font-medium text-ink-900/70">
                <Languages size={17} />
                <span>{t('language.label')}</span>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="ms-auto rounded-md border border-ink-900/10 bg-white px-3 py-2 outline-none focus:border-brand-500">
                  {Object.entries(languages).map(([code, item]) => <option key={code} value={code}>{item.nativeName}</option>)}
                </select>
              </label>
            </li>
            <li className="pt-2">
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                {t('nav.quote')}
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
