import { ArrowUpRight, BookOpen, Lightbulb, PenLine } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SiteCta from '../components/SiteCta'

const topics = [
  { icon: BookOpen, title: 'Building useful software', description: 'Ideas about product decisions, design, and dependable engineering.' },
  { icon: Lightbulb, title: 'Practical intelligence', description: 'How AI and automation can support real workflows.' },
  { icon: PenLine, title: 'Digital transformation', description: 'Lessons on improving the way organizations work.' },
]

export default function Insights() {
  return <><PageIntro number="06" eyebrow="INSIGHTS" title={<>A place for ideas <em>worth sharing.</em></>} description="Perspectives on software, business systems, and technology will live here as they are published." aside="No articles have been published yet. This space is ready for Shahkar's own writing." />
    <section className="section insights-page"><div className="container"><div className="insights-feature"><span className="label-line">COMING SOON</span><h2>Thoughtful writing takes time.</h2><p>We are preparing a space for useful perspectives from our work. Until then, explore the themes we plan to cover.</p><Link className="inline-link" to="/contact">Have a question for us? <ArrowUpRight size={18} /></Link></div><div className="page-section-heading"><span className="label-line">FUTURE TOPICS</span><h2>What we are thinking about.</h2></div><div className="insight-topic-grid">{topics.map(({ icon: Icon, title, description }, index) => <div key={title}><Icon size={26} /><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section><SiteCta title="Your question might start a conversation." /></>
}
