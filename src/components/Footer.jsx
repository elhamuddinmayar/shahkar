import { Link } from 'react-router-dom'
import ShahkarLogo from './ShahkarLogo'
import WhatsAppIcon from './WhatsAppIcon'
import { company, formatPhone, phoneLink, whatsappLink } from '../data/company'
import { navigation } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-about">
        <Link to="/" className="brand brand--footer" dir="ltr"><ShahkarLogo size={44} tone="light" /><span>SHAHKAR<small>SOFTWARE SOLUTION</small></span></Link>
        <p>{t.footer.tagline}</p>
        <div className="footer-phones">{company.phones.map(phone => <span key={phone}><a href={phoneLink(phone)} dir="ltr">{formatPhone(phone)}</a><a className="footer-whatsapp" href={whatsappLink(phone, t.contact.whatsappGreeting)} target="_blank" rel="noopener noreferrer" aria-label={`${t.contact.whatsapp} ${formatPhone(phone)}`}><WhatsAppIcon size={17} /></a></span>)}</div>
      </div>
      <nav className="footer-links" aria-label="Footer">
        {navigation.map(([key, path]) => <Link key={path} to={path}>{t.nav[key]}</Link>)}
        {company.email && <a href={`mailto:${company.email}`}>{company.email}</a>}
      </nav>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Shahkar Software Solution. {t.footer.rights}</span></div>
  </footer>
}
