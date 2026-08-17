import { Target, Eye, Sparkles, Users2, Trophy } from 'lucide-react'
import PageHero from '../components/PageHero'
import StatGrid from '../components/StatGrid'
import CTASection from '../components/CTASection'

const stats = [
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 350, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Expert Developers' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

const values = [
  { icon: Trophy, title: 'Excellence', description: 'We strive for excellence in every project, delivering solutions that exceed expectations.' },
  { icon: Users2, title: 'Collaboration', description: 'We believe in the power of teamwork and close collaboration with our clients.' },
  { icon: Sparkles, title: 'Innovation', description: 'We embrace new technologies and innovative approaches to solve complex challenges.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Shahkar"
        title="Transforming Ideas Into"
        highlight="Digital Reality"
        description="We are a software development company dedicated to delivering innovative technology solutions that drive business growth and digital transformation."
      />

      <section className="py-20 sm:py-24">
        <div className="container-shahkar">
          <StatGrid stats={stats} />
        </div>
      </section>

      <section className="bg-mist-100 py-20 sm:py-24">
        <div className="container-shahkar grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Target size={20} strokeWidth={1.8} />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-ink-900">Our Mission</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-900/60">
              To empower businesses with cutting-edge technology solutions that streamline
              operations, enhance productivity, and drive sustainable growth in the digital age.
            </p>
          </div>
          <div className="card p-8 sm:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Eye size={20} strokeWidth={1.8} />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-ink-900">Our Vision</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-900/60">
              To be a recognized leader in innovative software development, building solutions
              that transform industries and improve how people work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-shahkar text-center">
          <span className="eyebrow">Our Values</span>
          <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            The principles that guide everything we do
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-8 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Let's discuss how we can help transform your business with software built around it, not the other way around."
        primary={{ label: 'Get Started Today', to: '/contact' }}
        secondary={{ label: 'Meet the Team', to: '/team' }}
      />
    </>
  )
}
