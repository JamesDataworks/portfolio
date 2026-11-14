import { ArrowUpRight, Check, Star } from './Icons'

const LINK_LABELS = {
  live: 'Live site',
  repo: 'Source code',
  report: 'Open report',
  video: 'Walkthrough',
  writeup: 'Write-up',
}

function Metrics({ metrics, accent, stacked }) {
  if (!metrics?.length) return null
  return (
    <dl className={stacked ? 'grid gap-3' : 'grid grid-cols-2 gap-3 sm:grid-cols-3'}>
      {metrics.map((m) => (
        <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <dd className="font-display text-[1.3rem] font-bold leading-tight" style={{ color: accent }}>
            {m.value}
          </dd>
          <dt className="mt-1 text-[0.76rem] leading-snug text-muted">{m.label}</dt>
        </div>
      ))}
    </dl>
  )
}

function Work({ work, accent }) {
  if (!work?.length) return null
  return (
    <ul className="mt-6 space-y-2.5">
      {work.map((item) => (
        <li key={item} className="flex gap-3 text-[0.92rem] leading-relaxed text-muted">
          <span
            aria-hidden="true"
            className="mt-[0.2em] grid h-5 w-5 shrink-0 place-items-center rounded-full"
            style={{ backgroundColor: `${accent}22`, color: accent }}
          >
            <Check width={12} height={12} strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Tools({ tools, accent }) {
  if (!tools?.length) return null
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {tools.map((t) => (
        <li
          key={t}
          className="rounded-full px-2.5 py-1 text-[0.76rem] font-medium leading-none"
          style={{
            backgroundColor: `${accent}14`,
            border: `1px solid ${accent}40`,
            color: `color-mix(in oklab, ${accent} 60%, white)`,
          }}
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

function Links({ links, accent }) {
  const entries = Object.entries(links || {}).filter(([, href]) => href)
  if (!entries.length) return null
  return (
    <div className="mt-6 flex flex-wrap gap-2.5 border-t border-white/10 pt-5">
      {entries.map(([key, href], i) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[0.84rem] font-medium transition-colors"
          style={
            i === 0
              ? { backgroundColor: accent, borderColor: accent, color: '#0a0e17' }
              : { borderColor: 'rgb(255 255 255 / 0.14)', color: 'var(--color-ink)' }
          }
        >
          {LINK_LABELS[key] || key}
          <ArrowUpRight
            width={14}
            height={14}
            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      ))}
    </div>
  )
}

export default function ProjectTile({ project, accent }) {
  const featured = Boolean(project.featured)

  return (
    <article
      className="tile group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/70 backdrop-blur"
      style={{ '--a': accent }}
    >
      <div
        aria-hidden="true"
        className="h-1 w-full shrink-0"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />
      {/* accent glow that fades in on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: accent }}
      />

      <div
        className={`relative flex-1 p-6 sm:p-8 ${featured ? 'lg:grid lg:grid-cols-[1.6fr_1fr] lg:gap-10' : ''}`}
      >
        <div>
          {featured && (
            <p
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-wider"
              style={{ backgroundColor: `${accent}1f`, color: accent }}
            >
              <Star width={12} height={12} /> Featured
            </p>
          )}

          <h3 className="font-display text-[1.3rem] font-semibold leading-snug text-ink sm:text-[1.4rem]">
            {project.title}
          </h3>

          <p className="mt-3 max-w-[64ch] text-[0.95rem] leading-[1.7] text-muted">{project.summary}</p>

          {!featured && (
            <div className="mt-6">
              <Metrics metrics={project.metrics} accent={accent} />
            </div>
          )}

          <Work work={project.work} accent={accent} />
          <Tools tools={project.tools} accent={accent} />
          {!featured && <Links links={project.links} accent={accent} />}
        </div>

        {featured && (
          <div className="mt-8 lg:mt-12">
            <Metrics metrics={project.metrics} accent={accent} stacked />
            <Links links={project.links} accent={accent} />
          </div>
        )}
      </div>
    </article>
  )
}
