import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import { siteInfo } from '../data/nav'
import { EMAILJS_CONFIG } from '../data/emailjs'

const contactCards = [
  { icon: Mail, title: 'Email Us', lines: [siteInfo.email] },
  { icon: Phone, title: 'Call Us', lines: [siteInfo.phone, siteInfo.phoneAlt] },
  { icon: MapPin, title: 'Visit Us', lines: [siteInfo.address] },
]

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      )
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Something"
        highlight="Together"
        description="Tell us about your project and we'll get back to you within one business day — no automated sales funnel."
      />

      <section className="py-20 sm:py-24">
        <div className="container-shahkar grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 size={42} className="text-emerald-500" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-900/55">
                    Thanks for reaching out — a member of the Shahkar team will get back to you shortly.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      Something went wrong sending your message. Please try again, or email us directly at {siteInfo.email}.
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-ink-900">Full Name *</span>
                      <input
                        required
                        value={form.name}
                        onChange={update('name')}
                        type="text"
                        placeholder="Your name"
                        className="mt-2 w-full rounded-lg border border-ink-900/10 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-ink-900">Email Address *</span>
                      <input
                        required
                        value={form.email}
                        onChange={update('email')}
                        type="email"
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-lg border border-ink-900/10 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-ink-900">Phone Number</span>
                      <input
                        value={form.phone}
                        onChange={update('phone')}
                        type="tel"
                        placeholder="+93 ..."
                        className="mt-2 w-full rounded-lg border border-ink-900/10 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-ink-900">Subject *</span>
                      <input
                        required
                        value={form.subject}
                        onChange={update('subject')}
                        type="text"
                        placeholder="What's this about?"
                        className="mt-2 w-full rounded-lg border border-ink-900/10 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-sm font-medium text-ink-900">Message *</span>
                    <textarea
                      required
                      value={form.message}
                      onChange={update('message')}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="mt-2 w-full resize-none rounded-lg border border-ink-900/10 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-5 lg:col-span-5">
            {contactCards.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="card flex items-start gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-900">{title}</h3>
                  {lines.map((l) => (
                    <p key={l} className="mt-1 text-sm text-ink-900/60">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="card overflow-hidden">
              <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-ink-900 via-brand-800 to-brand-600">
                <div className="pixel-field opacity-40" />
                <p className="relative px-6 text-center text-sm text-white/70">
                  Map preview — plug in your embedded map of choice here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
