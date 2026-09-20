import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SiteCta({ title = 'Good ideas deserve a clear next step.', description = 'Tell us what you are working toward. We will start with the right questions.' }) {
  return <section className="site-cta"><div className="container site-cta-inner"><div><span className="label-line label-line--light">START A CONVERSATION</span><h2>{title}</h2><p>{description}</p></div><Link to="/contact" className="button button--accent">Start a project <ArrowUpRight size={18} /></Link></div></section>
}
