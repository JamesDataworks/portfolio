import Reveal from './Reveal'

/* Shared heading block for project sections and certifications. */
export default function SectionHeader({ number, eyebrow, title, blurb, accent, count }) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p
          className="flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.2em]"
          style={{ color: accent }}
        >
          <span className="h-px w-8" style={{ backgroundColor: accent }} />
          {number && <span>{number}</span>}
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.05] text-ink">
          {title}
        </h2>
        {blurb && <p className="mt-4 max-w-[58ch] text-[1rem] leading-relaxed text-muted">{blurb}</p>}
      </div>

      {count && (
        <p className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.8rem] text-muted">
          {count}
        </p>
      )}
    </Reveal>
  )
}
