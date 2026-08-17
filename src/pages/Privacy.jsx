import PageHero from '../components/PageHero'
import { siteInfo } from '../data/nav'

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We collect information you provide directly — such as your name, email, phone number and project details submitted through our contact form — along with basic usage data like pages visited and browser type.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use the information we collect to respond to inquiries, deliver requested services, improve our website, and — where you have opted in — send occasional product and industry updates.',
  },
  {
    title: '3. Data Sharing',
    body: 'We do not sell your personal information. We may share data with service providers who help us operate our business (such as hosting or email delivery), bound by confidentiality obligations.',
  },
  {
    title: '4. Data Security',
    body: 'We apply reasonable technical and organizational safeguards to protect the information we hold, including encryption in transit and restricted access to production systems.',
  },
  {
    title: '5. Cookies',
    body: 'We use essential cookies to keep the site working correctly, and optional analytics cookies to understand how visitors use our site. You can disable non-essential cookies in your browser settings.',
  },
  {
    title: '6. Your Rights',
    body: `You can request access to, correction of, or deletion of your personal data at any time by emailing ${siteInfo.email}.`,
  },
  {
    title: '7. Changes to This Policy',
    body: 'We may update this policy from time to time. Material changes will be reflected with a new effective date at the top of this page.',
  },
]

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        highlight="Policy"
        description="How Shahkar collects, uses and protects your personal information."
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
