import { PageIntro, ProjectGrid, SiteCta } from '../components/Sections'
import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()
  const page = t.projectsPage

  return <>
    <PageIntro label={page.label} title={page.title} text={page.text} />
    <section className="section section--flush-top"><div className="container"><ProjectGrid /></div></section>
    <SiteCta />
  </>
}
