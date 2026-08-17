import { CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { products } from '../data/content'

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Software Products Built"
        highlight="For Growth"
        description="Ready-to-deploy software products designed to streamline day-to-day operations, and customizable to fit how your business actually works."
      />

      <section className="py-20 sm:py-24">
        <div className="container-shahkar grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ icon: Icon, name, tagline, features }) => (
            <div key={name} className="card flex flex-col p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{tagline}</p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-ink-900/6 pt-5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-ink-900/65">
                    <CheckCircle2 size={15} className="shrink-0 text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Request a demo
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Product Fits?"
        description="Tell us what you're trying to solve and we'll point you to the right product — or build something custom."
        primary={{ label: 'Talk to Us', to: '/contact' }}
        secondary={{ label: 'See Pricing', to: '/pricing' }}
      />
    </>
  )
}
