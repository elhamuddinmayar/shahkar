import { Compass, HeartHandshake, ShieldCheck } from 'lucide-react'
import AnimatedBrand from '../components/AnimatedBrand'
import { SiteCta } from '../components/Sections'
import { useLanguage } from '../i18n/LanguageContext'

const valueIcons = [Compass, ShieldCheck, HeartHandshake]

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return <>
    <section className="page-intro"><div className="container about-layout">
      <div><span className="label-line">{about.label}</span><h1>{about.title}</h1><p>{about.text}</p></div>
      <AnimatedBrand />
    </div></section>
    <section className="section section--tint"><div className="container">
      <h2 className="section-title">{about.valuesTitle}</h2>
      <div className="card-grid">{t.values.map((value, index) => {
        const Icon = valueIcons[index]
        return <article className="card" key={index}><span className="card-icon"><Icon size={24} strokeWidth={1.7} /></span><h3>{value.title}</h3><p>{value.description}</p></article>
      })}</div>
    </div></section>
    <SiteCta />
  </>
}
