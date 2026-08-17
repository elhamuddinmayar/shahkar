import { useMemo, useState } from 'react'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import { blogPosts } from '../data/content'
import { sendNewsletterSignup } from '../lib/emailjsHelpers'

const categories = ['All Posts', ...new Set(blogPosts.map((p) => p.category))]

export default function Blog() {
  const [active, setActive] = useState('All Posts')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      await sendNewsletterSignup(email)
      setStatus('success')
      setEmail('')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const filtered = useMemo(
    () => (active === 'All Posts' ? blogPosts : blogPosts.filter((p) => p.category === active)),
    [active]
  )

  return (
    <>
      <PageHero
        eyebrow="Tech Insights & Updates"
        title="Ideas Worth"
        highlight="Shipping"
        description="Practical writing on software architecture, product design and the decisions behind what we build."
      />

      <section className="py-16 sm:py-20">
        <div className="container-shahkar">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === c
                    ? 'bg-brand-600 text-white'
                    : 'border border-ink-900/10 bg-white text-ink-900/65 hover:border-brand-500/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <article key={post.title} className="card group flex flex-col overflow-hidden">
                <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-ink-900 via-brand-800 to-brand-600">
                  <div className="pixel-field opacity-40" />
                  <span className="eyebrow relative border-white/20 bg-white/10 text-white">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink-900">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-900/55">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-900/6 pt-4 text-xs text-ink-900/45">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-white">
        <div className="container-shahkar text-center">
          <span className="eyebrow border-white/15 bg-white/5 text-brand-300">Stay Updated</span>
          <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Subscribe to our newsletter
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/55">
            Get new articles on software, design and cloud infrastructure — no spam, unsubscribe any time.
          </p>
          {status === 'success' ? (
            <p className="mt-8 text-brand-300">You're subscribed — thank you.</p>
          ) : (
            <>
              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-brand-400/60 focus:outline-none"
                />
                <button type="submit" disabled={status === 'sending'} className="btn-primary shrink-0 disabled:opacity-60">
                  {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
                  <ArrowUpRight size={15} />
                </button>
              </form>
              {status === 'error' && (
                <p className="mt-3 text-xs text-red-300">Something went wrong — please try again.</p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
