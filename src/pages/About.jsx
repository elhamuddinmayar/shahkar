import { Compass, GraduationCap, HeartHandshake, ShieldCheck, Star } from 'lucide-react'
import AnimatedBrand from '../components/AnimatedBrand'
import { SiteCta } from '../components/Sections'
import { projectMeta, teamMeta } from '../data/content'
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
    <section className="section"><div className="container">
      <span className="label-line">{about.teamLabel}</span>
      <h2 className="section-title">{about.teamTitle}</h2>
      <div className="team-list">{t.team.map((person, index) => {
        const { photo, skills, showProjectCount } = teamMeta[index]
        return <article className="team-card" key={index}>
          <img className="team-photo" src={photo} alt={person.name} loading="lazy" />
          <div className="team-info">
            <h3>{person.name}</h3>
            <span className="team-role">{person.role}</span>
            {person.education && <p className="team-education"><GraduationCap size={19} />{person.education}</p>}
            <p>{person.bio}</p>
            {showProjectCount && <div className="team-stat"><strong dir="ltr">{projectMeta.length}+</strong><span>{about.projectsDone}</span></div>}
            {person.keyProject && <p className="team-education"><Star size={19} />{person.keyProject}</p>}
            <div className="tags" dir="ltr">{skills.map(skill => <small key={skill}>{skill}</small>)}</div>
          </div>
        </article>
      })}</div>
    </div></section>
    <SiteCta />
  </>
}
