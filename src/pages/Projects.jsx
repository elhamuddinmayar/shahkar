import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import ProductMockup from '../components/ProductMockup'
import SiteCta from '../components/SiteCta'
import { projects } from '../data/content'

const filters = ['All', 'Web', 'Mobile', 'Management Systems', 'AI', 'Enterprise']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter)

  return <><PageIntro number="03" eyebrow="CONCEPT STUDIES" title={<>An idea looks different <em>when it works.</em></>} description="Explore original interface studies that show how we think about useful digital products." aside="These are illustrative concepts, not delivered client projects or claims about past work." />
    <section className="section projects-page"><div className="container"><div className="filter-bar" role="group" aria-label="Filter concept studies">{filters.map(item => <button type="button" key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div>{visibleProjects.length ? <div className="project-showcase">{visibleProjects.map((project, index) => <article className="project-showcase-item" key={project.title}><div className={`project-showcase-art project-showcase-art--${project.type}`}><ProductMockup variant={project.type} compact /><span>CONCEPT STUDY / 0{index + 1}</span></div><div className="project-showcase-copy"><span>{project.category}</span><h2>{project.title}</h2><p>{project.description}</p><div>{project.stack.map(item => <small key={item}>{item}</small>)}</div><Link to="/contact">Talk about a similar idea <ArrowUpRight size={18} /></Link></div></article>)}</div> : <div className="project-empty"><strong>More to explore soon.</strong><p>We have not added a {filter.toLowerCase()} concept study yet. Tell us what you are imagining.</p><Link to="/contact">Start a conversation <ArrowUpRight size={18} /></Link></div>}</div></section><SiteCta title="Your next idea could start here." /></>
}
