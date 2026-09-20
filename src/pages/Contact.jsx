import { useState } from 'react'
import { ArrowUpRight, Check, Clipboard, Mail, MapPin } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { company } from '../data/company'

const initialForm = { name: '', email: '', company: '', phone: '', projectType: '', budget: '', timeline: '', message: '' }
const projectTypes = ['Web application', 'Business system', 'Mobile app', 'AI & automation', 'Something else']

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [copied, setCopied] = useState(false)

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setStatus('')
    setCopied(false)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return

    const brief = `Project inquiry for Shahkar Software Solution\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'Not provided'}\nPhone: ${form.phone || 'Not provided'}\nProject type: ${form.projectType}\nBudget: ${form.budget || 'To be discussed'}\nTimeline: ${form.timeline || 'To be discussed'}\n\nProject details:\n${form.message}`

    if (company.email) {
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Project inquiry from ' + form.name)}&body=${encodeURIComponent(brief)}`
      setStatus('Your email app should open with the brief ready to send. Please send it there to reach Shahkar.')
      return
    }

    try {
      await navigator.clipboard.writeText(brief)
      setCopied(true)
      setStatus('Your brief is copied. It has not been sent to Shahkar. Official contact details will be added here when available.')
    } catch {
      setStatus('We could not copy the brief. Shahkar has not added an official receiving email yet, so this form cannot send it.')
    }
  }

  return <><PageIntro number="07" eyebrow="GET IN TOUCH" title={<>Let's begin with <em>your idea.</em></>} description="Tell us what you want to build, improve, or understand. A clear brief is a strong first step." aside="The form helps you prepare an inquiry. It does not send to a server while an official email is unavailable." />
    <section className="section contact-page"><div className="container contact-page-layout"><aside className="contact-sidebar"><span className="label-line">START HERE</span><h2>Every useful solution begins with a conversation.</h2><p>You do not need a finished specification. Share the challenge, what success looks like, and what you already know.</p><div className="contact-note"><span>01</span><div><strong>Tell us the idea</strong><small>A few details give the conversation direction.</small></div></div><div className="contact-note"><span>02</span><div><strong>Make room for discovery</strong><small>The right questions shape a useful plan.</small></div></div><div className="contact-note"><span>03</span><div><strong>Build the next step</strong><small>Scope and priorities come before implementation.</small></div></div><div className="contact-location"><MapPin size={20} /><span>{company.location}</span></div>{company.email && <a className="contact-email" href={`mailto:${company.email}`}><Mail size={19} />{company.email}</a>}</aside>
      <form className="inquiry-form" onSubmit={handleSubmit}><div className="inquiry-form-head"><span>PROJECT INQUIRY / 01</span><h2>What are you thinking about?</h2><p>Fields marked * are required.</p></div><fieldset className="project-type-field"><legend>What would you like to build? *</legend><div className="project-type-options">{projectTypes.map(type => <label key={type} className={form.projectType === type ? 'selected' : ''}><input type="radio" name="projectType" value={type} checked={form.projectType === type} onChange={updateField} required /><span>{type}</span></label>)}</div></fieldset><div className="form-divider"><span>ABOUT YOU</span></div><div className="form-two-col"><label>Full name *<input name="name" value={form.name} onChange={updateField} autoComplete="name" required placeholder="Your name" /></label><label>Email address *<input name="email" value={form.email} onChange={updateField} type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Company or organization<input name="company" value={form.company} onChange={updateField} autoComplete="organization" placeholder="Optional" /></label><label>Phone number<input name="phone" value={form.phone} onChange={updateField} type="tel" autoComplete="tel" placeholder="Optional" /></label></div><div className="form-divider"><span>YOUR PROJECT</span></div><div className="form-two-col"><label>Estimated budget<select name="budget" value={form.budget} onChange={updateField}><option value="">Let's discuss</option><option>Under $5,000</option><option>$5,000–$20,000</option><option>$20,000+</option></select></label><label>Ideal timeline<select name="timeline" value={form.timeline} onChange={updateField}><option value="">Let's discuss</option><option>As soon as practical</option><option>Within 3 months</option><option>3–6 months</option><option>Exploring for later</option></select></label></div><label>Tell us about the challenge *<textarea name="message" value={form.message} onChange={updateField} required rows="6" placeholder="What is happening today, and what would you like to make possible?" /></label><div className="inquiry-form-footer"><div><strong>{company.email ? 'Ready to prepare your email' : 'Your details stay on this device'}</strong><small>{company.email ? 'Your email app will open with the message. You will send it from there.' : 'This form copies your brief. It does not send information to Shahkar.'}</small></div><button type="submit" className="button button--accent">{company.email ? 'Prepare email' : copied ? 'Copied' : 'Copy my brief'} {copied ? <Check size={18} /> : <Clipboard size={18} />}</button></div>{status && <p className="form-status" role="status">{status}</p>}</form></div></section></>
}
