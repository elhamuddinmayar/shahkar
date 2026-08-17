import PageHero from '../components/PageHero'
import { siteInfo } from '../data/nav'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing this website or engaging Shahkar for services, you agree to be bound by these Terms of Service and any project-specific agreement signed separately.',
  },
  {
    title: '2. Services',
    body: 'Shahkar provides custom software development, consulting and related technology services as described on this site or in a signed statement of work. Specific deliverables, timelines and pricing are defined per engagement.',
  },
  {
    title: '3. Client Responsibilities',
    body: 'Clients agree to provide timely feedback, necessary access and accurate information required to deliver the agreed scope of work.',
  },
  {
    title: '4. Payment Terms',
    body: 'Fees are outlined in the applicable proposal or invoice. Unless otherwise agreed in writing, invoices are due within 15 days of issue.',
  },
  {
    title: '5. Intellectual Property',
    body: 'Upon full payment, clients receive ownership of the custom deliverables created specifically for their project, excluding any pre-existing Shahkar tools, libraries or frameworks used to build them.',
  },
  {
    title: '6. Limitation of Liability',
    body: 'Shahkar is not liable for indirect, incidental or consequential damages arising from the use of delivered software, to the maximum extent permitted by law.',
  },
  {
    title: '7. Termination',
    body: 'Either party may terminate an active engagement with written notice as specified in the relevant statement of work; fees for work completed to date remain payable.',
  },
  {
    title: '8. Contact',
    body: `Questions about these terms can be sent to ${siteInfo.email}.`,
  },
]

export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        highlight="Service"
        description="The terms and conditions that govern your use of this website and our services."
      />
      <section className="py-16 sm:py-20">
        <div className="container-shahkar max-w-3xl">
          <p className="text-sm text-ink-900/45">Effective date: January 1, 2026</p>
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-lg font-semibold text-ink-900">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/60">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
