import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { footerServiceLinks, footerCompanyLinks, siteInfo } from '../data/nav'
import logo from '../assets/logo.png'
import SocialIcon from './SocialIcon'
import { sendNewsletterSignup } from '../lib/emailjsHelpers'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      await sendNewsletterSignup(email)
      setStatus('success')
      setEmail('')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <footer className="border-t border-white/5 bg-ink-950 text-white">
      <div className="container-shahkar grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Shahkar logo" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-bold tracking-tight">{siteInfo.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            {siteInfo.description}
          </p>
          <div className="mt-6 flex gap-3">
            {['linkedin', 'twitter', 'github'].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={`Shahkar on ${name}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition hover:border-brand-400/50 hover:text-brand-300"
              >
                <SocialIcon name={name} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-300">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            {footerServiceLinks.map((s) => (
              <li key={s}>
                <Link to="/services" className="transition hover:text-white">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-300">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            {footerCompanyLinks.slice(0, 6).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-300">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-300" />
              <span>{siteInfo.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-brand-300" />
              <span>{siteInfo.phone} &middot; {siteInfo.phoneAlt}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-brand-300" />
              <span>{siteInfo.email}</span>
            </li>
          </ul>

          <form onSubmit={handleSubscribe} className="mt-6">
            <p className="mb-2 text-sm font-medium text-white/80">Stay Updated</p>
            {status === 'success' ? (
              <p className="text-sm text-brand-300">You're subscribed — thank you.</p>
            ) : (
              <>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-brand-400/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    aria-label="Subscribe"
                    className="flex shrink-0 items-center justify-center rounded-lg bg-brand-600 px-3.5 text-white transition hover:bg-brand-700 disabled:opacity-60"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
                {status === 'error' && (
                  <p className="mt-2 text-xs text-red-300">Something went wrong — please try again.</p>
                )}
              </>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-shahkar flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteInfo.fullName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
