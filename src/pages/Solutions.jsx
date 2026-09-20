import { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import ProductMockup from '../components/ProductMockup'
import SiteCta from '../components/SiteCta'
import { industries, solutions } from '../data/content'

export default function Solutions() {
  const [active, setActive] = useState(0)
  const solution = solutions[active]

  return <><PageIntro number="02" eyebrow="BUSINESS SOLUTIONS" title={<>Technology that fits <em>your operation.</em></>} description="Connected tools can turn scattered work into a clearer, more confident way of running your business." aside="Solutions describe the problems we can help solve. Each system is shaped for the organization using it." />
    <section className="section solutions-page"><div className="container"><div className="page-section-heading"><span className="label-line">SOLUTION AREAS</span><h2>Start with the work that matters.</h2></div><div className="solution-selector"><div className="solution-selector-tabs" role="tablist" aria-label="Solution areas">{solutions.map((item, index) => <button type="button" role="tab" aria-selected={active === index} className={active === index ? 'active' : ''} onClick={() => setActive(index)} key={item.name}><span>0{index + 1}</span><strong>{item.name}</strong><ArrowUpRight size={18} /></button>)}</div><div className="solution-selector-detail" role="tabpanel"><div className="solution-selector-copy"><span>0{active + 1} / BUSINESS SOLUTION</span><h3>{solution.name}</h3><p>{solution.description}</p><ul>{solution.items.map(item => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul><Link to="/contact">Discuss a solution <ArrowUpRight size={18} /></Link></div><div className="solution-selector-art"><ProductMockup variant={active === 1 ? 'commerce' : active === 2 ? 'insights' : 'operations'} compact /><span>ILLUSTRATIVE INTERFACE CONCEPT</span></div></div></div></div></section>
    <section className="section sectors-page"><div className="container"><div className="page-section-heading"><span className="label-line">POSSIBLE APPLICATIONS</span><h2>Every sector has its own rhythm.</h2><p>We adapt the system to its users, responsibilities, and everyday workflows.</p></div><div className="sector-grid">{industries.map((industry, index) => <div key={industry}><span>0{index + 1}</span><strong>{industry}</strong></div>)}</div></div></section><SiteCta title="Let's make your work flow better." /></>
}
