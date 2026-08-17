import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection({
  eyebrow = 'Get Started',
  title,
  description,
  primary = { label: 'Get Free Consultation', to: '/contact' },
  secondary,
  note,
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white">
      <div className="pixel-field opacity-60" />
      <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[110px]" />
      <div className="container-shahkar relative text-center">
        <span className="eyebrow border-white/15 bg-white/5 text-brand-300">{eyebrow}</span>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">{description}</p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to={primary.to} className="btn-primary">
            {primary.label}
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </Link>
          {secondary && (
            <Link to={secondary.to} className="btn-ghost-light">
              {secondary.label}
            </Link>
          )}
        </div>
        {note && <p className="mt-5 text-xs text-white/40">{note}</p>}
      </div>
    </section>
  )
}
