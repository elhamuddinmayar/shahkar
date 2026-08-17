import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import StatGrid from '../components/StatGrid'
import CTASection from '../components/CTASection'
import { galleryItems } from '../data/content'

const stats = [{ value: 120, suffix: '+', label: 'Projects Completed' }]
const filters = ['All', ...new Set(galleryItems.map((g) => g.category))]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)),
    [active]
  )

  return (
    <>
      <PageHero
        eyebrow="Our Creative Portfolio"
        title="Showcasing Our"
        highlight="Digital Masterpieces"
        description="A look at the interfaces, dashboards and brand systems we've designed and shipped for clients across industries."
      >
        <div className="mt-8">
          <StatGrid stats={stats} dark />
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-shahkar">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === f
                    ? 'bg-brand-600 text-white'
                    : 'border border-ink-900/10 bg-white text-ink-900/65 hover:border-brand-500/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((g, i) => (
              <div key={g.title} className="card group overflow-hidden">
                <div
                  className="relative flex h-48 items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, #0a1128, ${i % 2 ? '#1e3a8a' : '#132453'}, #2f7fed)`,
                  }}
                >
                  <div className="pixel-field opacity-40 transition group-hover:opacity-60" />
                  <span className="relative font-display text-lg font-semibold text-white/90">{g.title}</span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <p className="text-sm font-medium text-ink-900">{g.title}</p>
                  <span className="rounded-full bg-mist-100 px-2.5 py-1 text-[11px] font-medium text-ink-900/55">
                    {g.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        description="Let's collaborate to create something extraordinary. Our team is ready to bring your vision to life."
        primary={{ label: 'Start Your Project', to: '/contact' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  )
}
