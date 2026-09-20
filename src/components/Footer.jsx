import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/shahkar-mark.png'
import { company } from '../data/company'

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-about">
        <Link to="/" className="brand brand--footer"><img src={logo} alt="" width="48" height="48" /><span>SHAHKAR<small>SOFTWARE SOLUTION</small></span></Link>
        <p>Practical software, considered design, and dependable engineering for businesses ready to move forward.</p>
        <span className="footer-origin">Made in Afghanistan. Built for possibility.</span>
      </div>
      <div className="footer-column"><h3>Explore</h3><Link to="/services">Services</Link><Link to="/solutions">Solutions</Link><Link to="/projects">Concept studies</Link><Link to="/technology">Technology</Link></div>
      <div className="footer-column"><h3>Company</h3><Link to="/about">About us</Link><Link to="/insights">Insights</Link><Link to="/contact">Contact</Link></div>
      <div className="footer-next"><span>YOUR NEXT STEP</span><h3>Tell us what you have in mind.</h3><Link to="/contact">Start a conversation <ArrowUpRight size={19} /></Link>{company.email && <a href={`mailto:${company.email}`}>{company.email}</a>}</div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Shahkar Software Solution</span><span>Built with purpose.</span></div>
  </footer>
}
