import ShahkarLogo from './ShahkarLogo'

export default function AnimatedBrand() {
  return <div className="brand-art" role="img" aria-label="Shahkar Software Solution logo">
    <div className="brand-art-grid" />
    <div className="brand-art-orbit" />
    <div className="brand-art-orbit brand-art-orbit--two" />
    <div className="brand-art-card"><ShahkarLogo size={null} className="brand-art-logo" /></div>
  </div>
}
