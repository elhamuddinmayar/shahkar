import { useState } from 'react'
import { ArrowUpRight, BrainCircuit, Code2, Database, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SiteCta from '../components/SiteCta'
import { technology } from '../data/content'

export default function Technology() {
  const [active, setActive] = useState(0)

  return <><PageIntro number="05" eyebrow="OUR TECHNOLOGY" title={<>The right tools for <em>lasting work.</em></>} description="We choose technology to fit the problem, the people maintaining it, and where the product needs to go next." aside="Tools support a solution. They are never the reason for building one." />
    <section className="section technology-page"><div className="container technology-page-layout"><div><span className="label-line">OUR STACK</span><h2>Made for the challenge at hand.</h2><p>Browse the disciplines and tools we may bring together for a digital product.</p><div className="technology-category-list" role="tablist" aria-label="Technology categories">{technology.map((group, index) => <button type="button" role="tab" aria-selected={active === index} className={active === index ? 'active' : ''} onClick={() => setActive(index)} key={group.category}><span>0{index + 1}</span>{group.category}<ArrowUpRight size={17} /></button>)}</div></div><div className="technology-feature" role="tabpanel"><div className="technology-feature-head"><Code2 size={28} /><span>SHAHKAR / TOOLKIT</span></div><span>SELECTED DISCIPLINE / 0{active + 1}</span><h3>{technology[active].category}</h3><div className="technology-feature-items">{technology[active].items.map(item => <div key={item}><span />{item}</div>)}</div><p>We combine tools where they create a clearer, stronger result for the product.</p></div></div></section>
    <section className="section technology-thinking"><div className="container"><div className="page-section-heading"><span className="label-line">BEYOND THE TOOLKIT</span><h2>Engineering decisions that matter.</h2></div><div className="thinking-grid"><div><Workflow size={28} /><h3>Connected systems</h3><p>Keep information moving through the workflows that need it.</p></div><div><Database size={28} /><h3>Useful data</h3><p>Structure information so teams can trust and act on it.</p></div><div><BrainCircuit size={28} /><h3>Practical intelligence</h3><p>Apply automation and AI where they solve a real problem.</p></div></div><Link className="inline-link" to="/contact">Discuss your technical challenge <ArrowUpRight size={18} /></Link></div></section><SiteCta title="Let's choose the right path together." /></>
}
