import { PageIntro, ServiceGrid, SiteCta } from '../components/Sections'
import { useLanguage } from '../i18n/LanguageContext'

export default function Services() {
  const { t } = useLanguage()
  const page = t.servicesPage

  return <>
    <PageIntro label={page.label} title={page.title} text={page.text} />
    <section className="section section--flush-top"><div className="container"><ServiceGrid /></div></section>
    <section className="section section--tint"><div className="container">
      <h2 className="section-title">{page.processTitle}</h2>
      <ol className="steps">{t.process.map((step, index) => <li key={index}><span>0{index + 1}</span><strong>{step.title}</strong><p>{step.description}</p></li>)}</ol>
    </div></section>
    <SiteCta />
  </>
}
