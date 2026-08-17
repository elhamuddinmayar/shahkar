export default function StatGrid({ stats, dark = false }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className={dark ? 'text-white' : 'text-ink-900'}>
          <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {s.value}
            <span className="text-brand-400">{s.suffix}</span>
          </p>
          <p className={`mt-1 text-[13px] ${dark ? 'text-white/50' : 'text-ink-900/50'}`}>{s.label}</p>
        </div>
      ))}
    </div>
  )
}
