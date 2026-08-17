import PageHero from '../components/PageHero'
import StatGrid from '../components/StatGrid'
import CTASection from '../components/CTASection'
import { teamMembers, teamValues } from '../data/content'

const stats = [
  { value: 15, suffix: '+', label: 'Team Members' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('')
}

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Meet Our Team"
        title="The People Behind"
        highlight="Shahkar"
        description="Talented engineers, designers and strategists dedicated to delivering exceptional technology solutions."
      >
        <div className="mt-8">
          <StatGrid stats={stats} dark />
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-shahkar">
          <div className="text-center">
            <span className="eyebrow">Our Expert Team</span>
            <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Get to know the people who make Shahkar work
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((m) => (
              <div key={m.name} className="card p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-400 font-display text-lg font-semibold text-white">
                  {initials(m.name)}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{m.name}</h3>
                <p className="text-xs font-medium text-brand-700">{m.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-ink-900/55">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-100 py-20 sm:py-24">
        <div className="container-shahkar text-center">
          <span className="eyebrow">Our Values</span>
          <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            The principles that shape our culture
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {teamValues.map((v) => (
              <div key={v.title} className="card p-8 text-left">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Team"
        description="Are you passionate about technology and innovation? We're always looking for talented people to join Shahkar."
        primary={{ label: 'View Open Positions', to: '/contact' }}
        secondary={{ label: 'Send Resume', to: '/contact' }}
      />
    </>
  )
}
