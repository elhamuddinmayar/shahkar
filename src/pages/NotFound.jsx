import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink-950 text-white">
      <div className="pixel-field opacity-60" />
      <div className="container-shahkar relative text-center">
        <p className="font-mono text-sm text-brand-300">404</p>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">This page doesn't exist</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-white/55">
          The page you're looking for may have moved or never existed. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          Back to Home
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  )
}
