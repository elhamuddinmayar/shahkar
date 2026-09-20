import { ArrowUpRight, Code2, Layers3, Sparkles } from 'lucide-react'
import logo from '../assets/shahkar-mark.png'

export default function AnimatedBrand({ compact = false }) {
  return <div className={`brand-art ${compact ? 'brand-art--compact' : ''}`} role="img" aria-label="Animated Shahkar Software Solution logo surrounded by connected digital services">
    <div className="brand-art-grid" />
    <div className="brand-art-orbit brand-art-orbit--one" />
    <div className="brand-art-orbit brand-art-orbit--two" />
    <span className="brand-art-cross brand-art-cross--one">+</span>
    <span className="brand-art-cross brand-art-cross--two">+</span>
    <div className="brand-art-card"><div className="brand-art-card-top"><span>SHAHKAR / 001</span><ArrowUpRight size={16} /></div><img src={logo} alt="" /><div className="brand-art-card-bottom"><span>SOFTWARE SOLUTION</span><span className="brand-art-pulse" /></div></div>
    <div className="brand-art-tag brand-art-tag--one"><Code2 size={18} /><span>BUILD<small>Digital products</small></span></div>
    <div className="brand-art-tag brand-art-tag--two"><Layers3 size={18} /><span>CONNECT<small>Business systems</small></span></div>
    <div className="brand-art-tag brand-art-tag--three"><Sparkles size={18} /><span>ADVANCE<small>Useful intelligence</small></span></div>
    <span className="brand-art-coordinate">34°31′ N &nbsp; 69°10′ E</span>
  </div>
}
