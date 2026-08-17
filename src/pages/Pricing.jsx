import { useState } from 'react'
import { Check, X, ChevronDown } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { pricingPlans, addOnServices, pricingFaqs } from '../data/content'

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, Transparent"
        highlight="Pricing"
        description="Choose the plan that fits your business. No hidden fees, no surprises on the invoice."
      />

      <section className="py-20 sm:py-24">
        <div className="container-shahkar grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? 'border-brand-600 bg-ink-950 text-white shadow-glow lg:-translate-y-3'
                  : 'card border-ink-900/5'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className={`font-display text-xl font-semibold ${plan.popular ? 'text-white' : 'text-ink-900'}`}>
                {plan.name}
              </h3>
              <p className={`mt-1.5 text-sm ${plan.popular ? 'text-white/55' : 'text-ink-900/55'}`}>
                {plan.description}
              </p>
              <p className="mt-6">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className={plan.popular ? 'text-white/50' : 'text-ink-900/50'}>{plan.period}</span>
              </p>

              <a
                href="/contact"
                className={`mt-6 rounded-lg px-5 py-3 text-center text-sm font-semibold transition ${
                  plan.popular
                    ? 'bg-brand-600 text-white hover:bg-brand-500'
                    : 'border border-ink-900/10 text-ink-900 hover:border-brand-600/50 hover:text-brand-700'
                }`}
              >
                Get Started
              </a>

              <div className="mt-7 border-t pt-6" style={{ borderColor: plan.popular ? 'rgba(255,255,255,0.1)' : 'rgba(10,17,40,0.06)' }}>
                <p className={`text-xs font-semibold uppercase tracking-wide ${plan.popular ? 'text-white/50' : 'text-ink-900/45'}`}>
                  What's included
                </p>
                <ul className="mt-3 space-y-2.5">
                  {plan.included.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.popular ? 'text-white/75' : 'text-ink-900/70'}`}>
                      <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.excluded.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {plan.excluded.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.popular ? 'text-white/35' : 'text-ink-900/35'}`}>
                        <X size={15} className="mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist-100 py-20 sm:py-24">
        <div className="container-shahkar">
          <div className="text-center">
            <span className="eyebrow">Add-ons</span>
            <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Additional Services
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-900/55">
              Enhance any plan with premium add-on services, billed separately.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {addOnServices.map((a) => (
              <div key={a.name} className="card p-6">
                <h3 className="font-display text-base font-semibold text-ink-900">{a.name}</h3>
                <p className="mt-2">
                  <span className="font-display text-2xl font-bold text-ink-900">{a.price}</span>
                  <span className="text-sm text-ink-900/50">{a.period}</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-900/55">{a.description}</p>
                <a href="/contact" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800">
                  Add to Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-shahkar max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mx-auto mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 divide-y divide-ink-900/8 rounded-2xl border border-ink-900/8 bg-white">
            {pricingFaqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-ink-900">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ink-900/40 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink-900/60">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Have questions about pricing or need a custom solution? We're here to help."
        primary={{ label: 'Contact Sales', to: '/contact' }}
        secondary={{ label: 'Schedule Consultation', to: '/contact' }}
      />
    </>
  )
}
