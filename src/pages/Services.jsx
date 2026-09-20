import { ArrowUpRight, Blocks, BrainCircuit, CloudCog, PanelsTopLeft, PenTool, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SiteCta from '../components/SiteCta'
import { services } from '../data/content'

const icons = { PanelsTopLeft, Smartphone, Blocks, BrainCircuit, PenTool, CloudCog }

export default function Services() {
  return <><PageIntro number="01" eyebrow="OUR SERVICES" title={<>Good software starts with <em>the right question.</em></>} description="Design, development, and technology services shaped around the outcomes your business needs." aside="Each engagement begins with understanding the people, processes, and priorities behind the brief." />
    <section className="section services-page"><div className="container"><div className="page-section-heading"><span className="label-line">CAPABILITIES</span><h2>How we can help.</h2></div><div className="services-page-grid">{services.map((service, index) => { const Icon = icons[service.icon]; return <article className="service-detail" key={service.title}><div className="service-detail-top"><span>0{index + 1} / {service.category}</span><Icon size={27} strokeWidth={1.5} /></div><h3>{service.title}</h3><p>{service.description}</p><Link to="/contact">Discuss this service <ArrowUpRight size={17} /></Link></article> })}</div></div></section>
    <section className="service-outcome"><div className="container service-outcome-inner"><div><span className="label-line label-line--light">ONE CONNECTED APPROACH</span><h2>From idea to useful product.</h2></div><p>We connect research, design, engineering, and delivery so that the finished system makes sense as a whole.</p><div><span>DISCOVER</span><span>DESIGN</span><span>BUILD</span><span>IMPROVE</span></div></div></section><SiteCta title="Tell us where the challenge starts." /></>
}
