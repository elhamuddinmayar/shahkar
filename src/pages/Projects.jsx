import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { projects, services } from '../data/content'

const categories = ['All Categories', ...new Set(projects.map((p) => p.category))]
const statuses = ['All Status', 'Available', 'Beta']

export default function Projects() {
  const [category, setCategory] = useState('All Categories')
  const [status, setStatus] = useState('All Status')

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (category === 'All Categories' || p.category === category) &&
          (status === 'All Status' || p.status === status)
      ),
    [category, status]
  )

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Software We've"
        highlight="Shipped"
        description="A selection of products and platforms we've designed, built, and kept running for clients across finance, retail and logistics."
      />

      <section className="py-16 sm:py-20">
        <div className="container-shahkar">
          <div className="flex flex-wrap gap-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border border-ink-900/10 bg-white px-4 py-2.5 text-sm text-ink-900 focus:border-brand-500 focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-lg border border-ink-900/10 bg-white px-4 py-2.5 text-sm text-ink-900 focus:border-brand-500 focus:outline-none"
            >
              {statuses.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <span className="ml-auto self-center text-sm text-ink-900/45">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div key={p.title} className="card overflow-hidden">
                <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-ink-900 via-brand-800 to-brand-600">
                  <div className="pixel-field opacity-40" />
                  <span className="relative font-display text-2xl font-bold text-white/90">
                    {p.title.split(' ')[0]}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-brand-700">{p.category}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                        p.status === 'Available' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-mist-100 px-2.5 py-1 text-[11px] font-medium text-ink-900/55">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full py-16 text-center text-sm text-ink-900/45">
                No projects match those filters yet — try a different combination.
              </p>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        description={`Don't see what you're looking for? We specialize in building custom software tailored to your specific business — across ${services.length} core service areas.`}
        primary={{ label: 'Request Custom Quote', to: '/contact' }}
        secondary={{ label: 'Schedule Demo', to: '/contact' }}
      />
    </>
  )
}
