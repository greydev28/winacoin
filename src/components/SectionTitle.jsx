export function SectionTitle({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`mx-auto mb-12 max-w-3xl text-center ${className}`}>
      {eyebrow && <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-fuchsia-400">{eyebrow}</p>}
      <div className="flex items-center gap-4">
        <span className="hidden h-px flex-1 bg-fuchsia-500/30 sm:block" />
        <h2 className="font-display text-2xl font-black uppercase tracking-wide text-fuchsia-300 sm:text-3xl">{title}</h2>
        <span className="hidden h-px flex-1 bg-fuchsia-500/30 sm:block" />
      </div>
      {description && <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{description}</p>}
    </div>
  )
}
