import { useState } from 'react'
import { Check, Clipboard, Languages, Mail, MapPin, Send } from 'lucide-react'
import { PageIntro } from '../components/Sections'
import { company } from '../data/company'
import { useLanguage } from '../i18n/LanguageContext'
import { languages } from '../i18n/translations'

const initialForm = { name: '', email: '', projectType: '', message: '' }

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
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
    const brief = `${c.briefTitle}\n\n${c.name}: ${form.name}\n${c.email}: ${form.email}\n${c.type}: ${form.projectType || '-'}\n\n${form.message}`

    if (company.email) {
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(c.briefTitle + ' — ' + form.name)}&body=${encodeURIComponent(brief)}`
      setStatus(c.mailOpened)
      return
    }

    try {
      await navigator.clipboard.writeText(brief)
      setCopied(true)
      setStatus(c.copied)
    } catch {
      setStatus(c.failed)
    }
  }

  return <>
    <PageIntro label={c.label} title={c.title} text={c.text} />
    <section className="section section--flush-top"><div className="container contact-layout">
      <aside className="contact-info">
        <div><MapPin size={20} /><span>{c.location}</span></div>
        <div><Languages size={20} /><span>{c.languagesNote}: <bdi dir="ltr">{languages.map((item, index) => <span key={item.code}>{index > 0 && ' · '}<bdi lang={item.htmlLang}>{item.name}</bdi></span>)}</bdi></span></div>
        {company.email && <a href={`mailto:${company.email}`}><Mail size={20} /><span>{company.email}</span></a>}
      </aside>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>{c.name} *<input name="name" value={form.name} onChange={updateField} autoComplete="name" required /></label>
          <label>{c.email} *<input name="email" value={form.email} onChange={updateField} type="email" autoComplete="email" required dir="ltr" /></label>
        </div>
        <label>{c.type}<select name="projectType" value={form.projectType} onChange={updateField}><option value="">{c.typePlaceholder}</option>{c.types.map(type => <option key={type}>{type}</option>)}</select></label>
        <label>{c.message} *<textarea name="message" value={form.message} onChange={updateField} required rows="5" placeholder={c.messagePlaceholder} /></label>
        <button type="submit" className="button button--accent">
          {company.email ? <>{c.submitEmail} <Send size={18} /></> : copied ? <>{c.copiedButton} <Check size={18} /></> : <>{c.submitCopy} <Clipboard size={18} /></>}
        </button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </div></section>
  </>
}
