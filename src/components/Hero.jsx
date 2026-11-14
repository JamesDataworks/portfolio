import { profile, sections, certifications } from '../data/portfolio'

/* The chart is built from the portfolio's own data, so it stays
   correct when you add or remove a project. Nothing to edit here. */
function GlanceChart() {
  const counts = sections.map((s) => ({
    key: s.id,
    label: s.tab.replace('Microsoft ', ''),
    value: s.projects.length,
    accent: s.accent,
  }))
  const max = Math.max(...counts.map((c) => c.value), 1)
  const total = counts.reduce((sum, c) => sum + c.value, 0)

  return (
    <figure className="border border-rule bg-surface">
      <div className="h-1.5 w-full bg-ink" aria-hidden="true" />

      <div className="p-6 sm:p-7">
        <figcaption className="font-display text-[0.95rem] font-semibold text-ink">
          Projects by discipline
        </figcaption>

        <div className="mt-7 flex h-44 items-end gap-3 sm:gap-5">
          {counts.map((c, i) => (
            <div key={c.key} className="flex h-full flex-1 flex-col justify-end">
              <span className="mb-2 font-display text-lg font-semibold leading-none text-ink">
                {c.value}
              </span>
              <div
                className="bar-grow w-full"
                style={{
                  height: `${(c.value / max) * 100}%`,
                  backgroundColor: c.accent,
                  minHeight: '6px',
                  animationDelay: `${160 + i * 110}ms`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-3 border-t border-ink pt-2 sm:gap-5">
          {counts.map((c) => (
            <div key={c.key} className="flex-1 text-[0.72rem] leading-tight text-muted">
              {c.label}
            </div>
          ))}
        </div>

        <dl className="mt-6 flex gap-10 border-t border-rule pt-5">
          <div>
            <dt className="text-[0.8rem] text-muted">Projects documented</dt>
            <dd className="font-display text-2xl font-semibold text-ink">{total}</dd>
          </div>
          <div>
            <dt className="text-[0.8rem] text-muted">Certifications</dt>
            <dd className="font-display text-2xl font-semibold text-ink">
              {certifications.length}
            </dd>
          </div>
        </dl>
      </div>
    </figure>
  )
}

function Action({ href, children, primary = false, download = false }) {
  if (!href) return null

  const isExternal = href.startsWith('http') || href.startsWith('mailto:')
  const look = primary
    ? 'bg-ink text-canvas hover:opacity-85'
    : 'border border-rule bg-surface text-ink hover:border-ink'

  return (
    <a
      href={href}
      className={`inline-flex items-center px-4 py-2.5 text-[0.9rem] font-medium transition-colors duration-150 ${look}`}
      {...(download ? { download: '' } : {})}
      {...(isExternal && !href.startsWith('mailto:')
        ? { target: '_blank', rel: 'noreferrer' }
        : {})}
    >
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <header id="top" className="border-b border-rule">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
        <div className="max-w-[34rem]">
          <h1 className="font-display text-[clamp(2.6rem,7vw,4.25rem)] font-bold leading-[0.95] text-ink">
            {profile.name}
          </h1>

          <p className="mt-4 font-display text-xl font-medium text-ink sm:text-2xl">
            {profile.role}
          </p>

          <p className="mt-6 max-w-[44ch] text-[1.02rem] leading-[1.65] text-muted">
            {profile.intro}
          </p>

          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.88rem] text-muted">
            {profile.location && <span>{profile.location}</span>}
            {profile.location && profile.availability && (
              <span aria-hidden="true" className="hidden h-3 w-px bg-rule sm:block" />
            )}
            {profile.availability && <span>{profile.availability}</span>}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Action href={profile.email ? `mailto:${profile.email}` : null} primary>
              Email me
            </Action>
            <Action href={profile.github}>GitHub</Action>
            <Action href={profile.linkedin}>LinkedIn</Action>
            <Action href={profile.resume} download>
              Download CV
            </Action>
          </div>
        </div>

        <div className="lg:pt-2">
          <GlanceChart />
        </div>
      </div>
    </header>
  )
}
