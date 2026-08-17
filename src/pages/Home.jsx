import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2, Quote } from 'lucide-react'
import StatGrid from '../components/StatGrid'
import CTASection from '../components/CTASection'
import { services, techStack, projects, testimonials } from '../data/content'

const heroStats = [
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 350, suffix: '+', label: 'Projects Done' },
  { value: 99, suffix: '%', label: 'Success Rate' },
]

const highlights = ['Custom development', '24/7 support', 'Agile methodology', 'On-time delivery']

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="pixel-field" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-500/15 blur-[110px]" />

        <div className="container-shahkar relative grid grid-cols-1 gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="eyebrow border-white/15 bg-white/5 text-brand-300">
              Leading Software Solutions
            </span>
            <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.06] tracking-tight sm:text-6xl">
              Engineering{' '}
              <span className="bg-gradient-to-r from-sky-400 via-brand-300 to-brand-400 bg-clip-text text-transparent">
                Tomorrow's
              </span>{' '}
              Software, Today
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-[17px]">
              Shahkar builds custom web, mobile, and enterprise software that drives measurable
              growth and real operational efficiency — not just another vendor deck.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </Link>
              <Link to="/services" className="btn-ghost-light">
                Our Services
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-[13px] text-white/55">
                  <CheckCircle2 size={15} className="shrink-0 text-brand-400" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-300">Live Snapshot</p>
              <div className="mt-5">
                <StatGrid stats={heroStats} dark />
              </div>
              <div className="mt-7 space-y-3">
                {['Web & Mobile Delivery', 'ERP & Cloud Systems', 'Dedicated Support Team'].map((row) => (
                  <div
                    key={row}
                    className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-white/70"
                  >
                    {row}
                    <span className="h-2 w-2 rounded-full bg-brand-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 sm:py-24">
        <div className="container-shahkar">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Our Services</span>
              <h2 className="mt-4 max-w-lg font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Everything you need to ship, run and grow.
              </h2>
            </div>
            <Link to="/services" className="btn-secondary shrink-0">
              View All Services
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map(({ icon: Icon, title, summary }) => (
              <div key={title} className="card group p-6 transition hover:-translate-y-1 hover:shadow-glow">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-mist-100 py-20 sm:py-24">
        <div className="container-shahkar">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Our Projects</span>
              <h2 className="mt-4 max-w-lg font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Featured work from the Shahkar portfolio.
              </h2>
            </div>
            <Link to="/projects" className="btn-secondary shrink-0">
              View All Projects
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 sm:py-24">
        <div className="container-shahkar text-center">
          <span className="eyebrow">Our Tech Stack</span>
          <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Technologies We Use
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink-900/8 bg-white px-4 py-2 text-sm font-medium text-ink-900/70 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-mist-100 py-20 sm:py-24">
        <div className="container-shahkar">
          <div className="text-center">
            <span className="eyebrow">Client Testimonials</span>
            <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <Quote size={22} className="text-brand-300" />
                <p className="mt-4 text-sm leading-relaxed text-ink-900/70">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-900/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Business?"
        description="Join 200+ companies that trust Shahkar for their digital transformation. Let's turn your vision into reality."
        primary={{ label: 'Get Free Consultation', to: '/contact' }}
        secondary={{ label: 'Explore Services', to: '/services' }}
      />
    </>
  )
}
