import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { AboutSection, IndustriesSection, InnovationSection, ProcessSection, ProjectsSection, ServicesSection, SolutionsSection, TechnologySection, FinalCta } from './Home'

const pageDetails = {
  services: { index: '01', label: 'WHAT WE DO', title: 'Software expertise for the work ahead.', description: 'From product strategy to connected systems, we bring design and engineering together around useful outcomes.' },
  solutions: { index: '02', label: 'SOLUTIONS', title: 'Built around the way business works.', description: 'Explore the operational challenges thoughtful software can make clearer, faster, and easier to manage.' },
  projects: { index: '03', label: 'OUR THINKING', title: 'See the possibilities take shape.', description: 'Illustrative interface concepts show how we think about products. They do not represent delivered client projects.' },
  about: { index: '04', label: 'OUR COMPANY', title: 'Technology is better when it understands people.', description: 'Get to know the thinking, values, and process behind Shahkar Software.' },
  technology: { index: '05', label: 'HOW WE BUILD', title: 'Thoughtful choices. Strong foundations.', description: 'Our toolkit supports dependable applications, connected systems, and practical innovation.' },
  insights: { index: '06', label: 'INSIGHTS', title: 'Ideas worth sharing, soon.', description: 'A space for perspectives on software, AI, business systems, and digital transformation.' },
  notFound: { index: '404', label: 'PAGE NOT FOUND', title: 'This page is off the map.', description: 'The page you requested could not be found.' },
}

export default function InnerPages({ page }) {
  const details = pageDetails[page]
  return <><section className="page-hero"><div className="page-hero-grid" /><div className="container page-hero-inner"><div><span className="eyebrow eyebrow--orange"><span className="eyebrow-line" /> {details.label}</span><h1>{details.title}</h1><p>{details.description}</p>{page === 'notFound' && <Link className="button button--orange" to="/"><ArrowLeft size={18} /> Back home</Link>}</div><span className="page-hero-index">{details.index} / SHAHKAR</span></div></section>
    {page === 'services' && <><ServicesSection full /><ProcessSection /><FinalCta /></>}
    {page === 'solutions' && <><SolutionsSection /><IndustriesSection /><FinalCta /></>}
    {page === 'projects' && <><ProjectsSection full /><FinalCta /></>}
    {page === 'about' && <><AboutSection /><div className="values-section"><div className="container values-grid"><div><span>OUR MISSION</span><h2>Make useful software that helps organizations work with clarity.</h2></div><div><span>OUR VISION</span><h2>A future where thoughtful digital systems create more opportunity.</h2></div><div><span>OUR PRINCIPLES</span><h2>Listen carefully. Build responsibly. Keep improving.</h2></div></div></div><ProcessSection /><FinalCta /></>}
    {page === 'technology' && <><TechnologySection /><InnovationSection /><FinalCta /></>}
    {page === 'insights' && <section className="section insights-empty"><div className="container"><div className="insights-box"><span className="insights-icon"><CheckCircle2 size={25} /></span><div><span>EDITORIAL SPACE</span><h2>Thoughts are taking shape.</h2><p>We will publish practical notes here when they are ready. In the meantime, tell us what you are working on.</p><Link className="text-link" to="/contact">Start a conversation <ArrowUpRight size={18} /></Link></div></div></div></section>}
  </>
}
