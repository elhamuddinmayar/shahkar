import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projectMeta, serviceIcons } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

export function PageIntro({ label, title, text }) {
  return <section className="page-intro"><div className="container"><span className="label-line">{label}</span><h1>{title}</h1>{text && <p>{text}</p>}</div></section>
}

export function SectionHead({ label, title, to, linkText }) {
  return <div className="section-head"><div><span className="label-line">{label}</span><h2>{title}</h2></div>{to && <Link className="inline-link" to={to}>{linkText} <ArrowUpRight className="flip-rtl" size={18} /></Link>}</div>
}

export function ServiceGrid() {
  const { t } = useLanguage()
  return <div className="card-grid card-grid--services">{t.services.map((service, index) => {
    const Icon = serviceIcons[index]
    return <article className="card" key={index}><span className="card-icon"><Icon size={24} strokeWidth={1.7} /></span><h3>{service.title}</h3><p>{service.description}</p></article>
  })}</div>
}

export function ProjectGrid({ limit }) {
  const { t } = useLanguage()
  const projects = limit ? t.projects.slice(0, limit) : t.projects
  return <div className="card-grid">{projects.map((project, index) => {
    const { icon: Icon, stack, tone = 'orange' } = projectMeta[index]
    return <article className="card project-card" key={index}>
      <div className="project-card-top"><span className={`card-icon card-icon--${tone}`}><Icon size={24} strokeWidth={1.7} /></span><span className="project-category">{project.category}</span></div>
      <h3>{project.title}</h3><p>{project.description}</p>
      {stack.length > 0 && <div className="tags" dir="ltr">{stack.map(item => <small key={item}>{item}</small>)}</div>}
    </article>
  })}</div>
}

export function SiteCta() {
  const { t } = useLanguage()
  return <section className="site-cta"><div className="container site-cta-inner"><div><h2>{t.cta.title}</h2><p>{t.cta.text}</p></div><Link to="/contact" className="button button--white">{t.cta.button} <ArrowUpRight className="flip-rtl" size={18} /></Link></div></section>
}
