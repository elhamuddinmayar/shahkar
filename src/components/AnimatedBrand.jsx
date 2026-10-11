import logo from '../assets/shahkar-mark.png'

export default function AnimatedBrand() {
  return <div className="brand-art" role="img" aria-label="Shahkar Software Solution logo">
    <div className="brand-art-grid" />
    <div className="brand-art-orbit" />
    <div className="brand-art-orbit brand-art-orbit--two" />
    <div className="brand-art-card"><img src={logo} alt="" /></div>
  </div>
}
