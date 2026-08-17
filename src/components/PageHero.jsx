export default function PageHero({ eyebrow, title, highlight, description, children }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-16 text-white sm:pb-24 sm:pt-20">
      <div className="pixel-field opacity-70" />
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[100px]" />
      <div className="container-shahkar relative">
        <div className="max-w-2xl">
          {eyebrow && <span className="eyebrow border-white/15 bg-white/5 text-brand-300">{eyebrow}</span>}
          <h1 className="mt-5 font-display text-[2.35rem] font-bold leading-[1.08] tracking-tight sm:text-5xl">
            {title}{' '}
            {highlight && <span className="bg-gradient-to-r from-sky-400 to-brand-300 bg-clip-text text-transparent">{highlight}</span>}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
