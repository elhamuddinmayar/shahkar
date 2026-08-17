import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import StatGrid from '../components/StatGrid'
import CTASection from '../components/CTASection'
import { services } from '../data/content'

const stats = [
  { value: 8, suffix: '', label: 'Service Categories' },
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Technology"
        highlight="Solutions"
        description="From concept to deployment, we provide end-to-end technology services that turn your ideas into powerful, scalable digital products."
      >
        <div className="mt-8">
          <StatGrid stats={stats} dark />
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-shahkar grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, summary, points }) => (
            <div key={title} className="card p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{summary}</p>
              <ul className="mt-5 space-y-2.5 border-t border-ink-900/6 pt-5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-ink-900/65">
                    <CheckCircle2 size={15} className="shrink-0 text-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        description="Let's discuss how our expertise can help you reach your technology goals. Get a free consultation and a custom project estimate."
        primary={{ label: 'Get Free Consultation', to: '/contact' }}
        secondary={{ label: 'View Our Products', to: '/products' }}
        note="Free consultation • No obligation • Response within 24 hours"
      />
    </>
  )
}
