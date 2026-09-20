import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Check, Compass, Layers3, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedBrand from '../components/AnimatedBrand'
import ProductMockup from '../components/ProductMockup'
import SiteCta from '../components/SiteCta'
import { industries, process, projects, services, solutions, technology } from '../data/content'

function SectionLead({ label, title, description, to, linkText }) {
  return <div className="section-lead"><div><span className="label-line">{label}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>{to && <Link className="inline-link" to={to}>{linkText} <ArrowUpRight size={18} /></Link>}</div>
}

function Hero() {
  return <section className="home-hero"><div className="container home-hero-inner"><div className="hero-content"><span className="hero-badge"><span /> SOFTWARE, SYSTEMS & DIGITAL PROGRESS</span><h1>Software for the <em>way forward.</em></h1><p>We design and build applications, connected business systems, and intelligent tools that make work simpler and possibilities bigger.</p><div className="hero-actions"><Link className="button button--accent" to="/contact">Start a project <ArrowUpRight size={18} /></Link><Link className="button button--line" to="/projects">See our thinking <ArrowRight size={18} /></Link></div><div className="hero-signoff"><span>01 / 07</span><a href="#approach">DISCOVER SHAHKAR <ArrowDown size={16} /></a></div></div><AnimatedBrand /></div></section>
}

function Approach() {
  return <section className="approach-strip" id="approach"><div className="container approach-inner"><div className="approach-title"><span>THE SHAHKAR APPROACH</span><strong>Clarity at every step.</strong></div><div><Compass size={22} /><span><strong>Understand first</strong><small>Start with the real challenge.</small></span></div><div><Layers3 size={22} /><span><strong>Build with intent</strong><small>Make each part useful.</small></span></div><div><ShieldCheck size={22} /><span><strong>Think beyond launch</strong><small>Leave room to grow.</small></span></div></div></section>
}

function Services() {
  return <section className="section home-services"><div className="container"><SectionLead label="01 / WHAT WE DO" title={<>Technology with a <em>clear purpose.</em></>} description="From the experience people see to the systems that keep business moving, our work connects every layer." to="/services" linkText="All services" /><div className="service-list">{services.slice(0, 4).map((service, index) => <Link to="/services" className="service-row" key={service.title}><span className="service-row-number">0{index + 1}</span><div><strong>{service.title}</strong><p>{service.description}</p></div><span className="service-row-category">{service.category}</span><span className="service-row-arrow"><ArrowUpRight size={23} /></span></Link>)}</div></div></section>
}

function Solutions() {
  return <section className="section home-solutions"><div className="container solutions-composition"><div className="solutions-copy"><span className="label-line label-line--light">02 / BUSINESS SOLUTIONS</span><h2>Better systems.<br /><em>Better work.</em></h2><p>Useful software should fit your operations, connect your teams, and make the next decision easier.</p><div className="solution-points">{solutions.map((solution, index) => <div key={solution.name}><span>0{index + 1}</span><strong>{solution.name}</strong><ArrowUpRight size={16} /></div>)}</div><Link className="button button--white" to="/solutions">Explore solutions <ArrowUpRight size={18} /></Link></div><div className="solutions-image"><div className="solutions-image-top"><span>SHAHKAR / SYSTEMS</span><span>CONCEPT 001</span></div><ProductMockup compact /><div className="solutions-image-bottom"><span>One clear view of what matters.</span><span>◉ &nbsp; WORKFLOWS CONNECTED</span></div></div></div></section>
}

function ProjectPreview() {
  return <section className="section home-projects"><div className="container"><SectionLead label="03 / CONCEPT STUDIES" title={<>A look at <em>what is possible.</em></>} description="Original interface studies that show our approach. These are illustrative concepts, not completed client projects." to="/projects" linkText="Explore concepts" /><div className="home-project-grid">{projects.slice(0, 2).map((project, index) => <Link to="/projects" className={`home-project home-project--${index}`} key={project.title}><div className="home-project-art"><ProductMockup variant={project.type} compact /><span>CONCEPT 0{index + 1}</span></div><div className="home-project-info"><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div><ArrowUpRight size={30} strokeWidth={1.4} /></div></Link>)}</div></div></section>
}

function Technology() {
  return <section className="section home-tech"><div className="container tech-home-layout"><div><span className="label-line">04 / OUR TOOLKIT</span><h2>The tools change. <em>The thinking stays sharp.</em></h2><p>We select technology for your context and the people who will use and maintain it.</p><Link className="inline-link" to="/technology">How we build <ArrowUpRight size={18} /></Link></div><div className="tech-home-list">{technology.slice(0, 4).map((group, index) => <div key={group.category}><span>0{index + 1}</span><strong>{group.category}</strong><p>{group.items.join(' / ')}</p></div>)}</div></div></section>
}

function Process() {
  return <section className="section home-process"><div className="container"><SectionLead label="05 / OUR PROCESS" title={<>From first conversation <em>to what comes next.</em></>} description="A steady process makes complex work easier to see, discuss, and improve." /><div className="process-grid">{process.map(([number, name, detail]) => <div className="process-card" key={number}><span>{number}</span><strong>{name}</strong><p>{detail}</p></div>)}</div></div></section>
}

function About() {
  return <section className="section home-about"><div className="container about-home-layout"><div className="about-home-visual"><span className="about-home-index">SHAHKAR / AFGHANISTAN</span><div className="about-home-quote">Ideas become useful when people and engineering work together<span>.</span></div><span className="about-home-bottom">SOFTWARE SOLUTION &nbsp; ↗</span></div><div><span className="label-line">06 / ABOUT US</span><h2>A thoughtful partner for <em>what comes next.</em></h2><p>Shahkar Software Solution brings product thinking, design, and engineering together. We focus on the real needs behind a brief, then build systems that are clear, reliable, and ready to evolve.</p><ul><li><Check size={17} /> Business-minded decisions</li><li><Check size={17} /> Purposeful digital experiences</li><li><Check size={17} /> Reliable foundations</li></ul><Link className="inline-link" to="/about">Meet Shahkar <ArrowUpRight size={18} /></Link></div></div></section>
}

function Industries() {
  return <section className="section home-industries"><div className="container"><SectionLead label="07 / WHERE WE WORK" title={<>Built for different <em>ways of working.</em></>} /><div className="industry-list">{industries.map((industry, index) => <Link to="/solutions" key={industry}><span>0{index + 1}</span>{industry}<ArrowUpRight size={17} /></Link>)}</div></div></section>
}

export default function Home() {
  return <><Hero /><Approach /><Services /><Solutions /><ProjectPreview /><Technology /><Process /><About /><Industries /><SiteCta /></>
}
