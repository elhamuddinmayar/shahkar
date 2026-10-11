import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedBrand from '../components/AnimatedBrand'
import { ProjectGrid, SectionHead, ServiceGrid, SiteCta } from '../components/Sections'
import { useLanguage } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  const { home } = t

  return <>
    <section className="home-hero"><div className="container home-hero-inner">
      <div className="hero-content">
        <span className="hero-badge"><span /> {home.badge}</span>
        <h1>{home.titleStart}<em>{home.titleEm}</em></h1>
        <p>{home.text}</p>
        <div className="hero-actions">
          <Link className="button button--accent" to="/contact">{home.primary} <ArrowUpRight className="flip-rtl" size={18} /></Link>
          <Link className="button button--line" to="/projects">{home.secondary} <ArrowRight className="flip-rtl" size={18} /></Link>
        </div>
      </div>
      <AnimatedBrand />
    </div></section>

    <section className="section"><div className="container">
      <SectionHead label={home.servicesLabel} title={home.servicesTitle} to="/services" linkText={t.nav.services} />
      <ServiceGrid />
    </div></section>

    <section className="section section--tint"><div className="container">
      <SectionHead label={home.projectsLabel} title={home.projectsTitle} to="/projects" linkText={home.viewAll} />
      <ProjectGrid limit={3} />
    </div></section>

    <SiteCta />
  </>
}
