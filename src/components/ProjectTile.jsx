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
    <dl
      className={
        stacked
          ? 'flex flex-col gap-5 border-l-2 pl-5'
          : 'flex flex-wrap gap-x-8 gap-y-4 border-l-2 pl-5'
      }
      style={{ borderLeftColor: accent }}
    >
      {metrics.map((m) => (
        <div key={m.label}>
          <dd className="font-display text-[1.35rem] font-semibold leading-tight text-ink">
            {m.value}
          </dd>
          <dt className="mt-0.5 text-[0.8rem] leading-snug text-muted">{m.label}</dt>
        </div>
      ))}
    </dl>
  )
}

function Work({ work }) {
  if (!work?.length) return null
  return (
    <ul className="mt-5 space-y-2">
      {work.map((item) => (
        <li key={item} className="flex gap-3 text-[0.93rem] leading-relaxed text-muted">
          <span aria-hidden="true" className="mt-[0.68em] h-px w-3 shrink-0 bg-rule" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Tools({ tools }) {
  if (!tools?.length) return null
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {tools.map((t) => (
        <li
          key={t}
          className="border border-rule px-2.5 py-1 text-[0.78rem] leading-none text-muted"
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
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-5">
      {entries.map(([key, href]) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-[0.88rem] font-medium text-ink underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:decoration-[color:var(--tile-accent)]"
          style={{ '--tile-accent': accent }}
        >
          {LINK_LABELS[key] || key}
        </a>
      ))}
    </div>
  )
}

export default function ProjectTile({ project, accent }) {
  const featured = Boolean(project.featured)

  return (
    <article
      className={`flex flex-col border border-rule bg-surface ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="h-[3px] w-full shrink-0" style={{ backgroundColor: accent }} aria-hidden="true" />

      <div
        className={`flex-1 p-6 sm:p-7 ${featured ? 'lg:grid lg:grid-cols-[1.6fr_1fr] lg:gap-10' : ''}`}
      >
        <div>
          <h3 className="font-display text-[1.22rem] font-semibold leading-snug text-ink">
            {project.title}
          </h3>

          <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-[1.65] text-muted">
            {project.summary}
          </p>

          {!featured && (
            <div className="mt-6">
              <Metrics metrics={project.metrics} accent={accent} />
            </div>
          )}

          <Work work={project.work} />
          <Tools tools={project.tools} />
          {!featured && <Links links={project.links} accent={accent} />}
        </div>

        {featured && (
          <div className="mt-8 lg:mt-1">
            <Metrics metrics={project.metrics} accent={accent} stacked />
            <Links links={project.links} accent={accent} />
          </div>
        )}
      </div>
    </article>
  )
}
