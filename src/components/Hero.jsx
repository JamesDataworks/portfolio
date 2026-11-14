import { profile, sections, certifications } from '../data/portfolio'
import { Mail, GitHub, LinkedIn, Download, MapPin } from './Icons'

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

  const kpis = [
    { label: 'Projects', value: total },
    { label: 'Certifications', value: certifications.length },
    { label: 'Disciplines', value: sections.length },
  ]

  return (
    <figure className="float relative rounded-2xl border border-white/10 bg-surface/70 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-7">
      {/* soft glow behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-[#5b8cff]/30 via-transparent to-[#a77bff]/30 blur-xl"
      />

      <div className="flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <figcaption className="text-[0.78rem] font-medium text-muted">Portfolio overview</figcaption>
      </div>

      <dl className="mt-6 grid grid-cols-3 gap-3">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
            <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">{k.value}</dd>
            <dt className="mt-0.5 text-[0.72rem] text-muted">{k.label}</dt>
          </div>
        ))}
      </dl>

      <p className="mt-7 text-[0.8rem] font-medium text-muted">Projects by discipline</p>

      <div className="relative mt-4 flex h-40 items-end gap-3 sm:gap-5">
        {/* gridlines */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-px w-full bg-white/[0.06]" />
          ))}
        </div>

        {counts.map((c, i) => (
          <div key={c.key} className="relative flex h-full flex-1 flex-col justify-end">
            <span className="mb-2 text-center font-display text-base font-semibold leading-none text-ink">
              {c.value}
            </span>
            <div
              className="bar-grow w-full rounded-t-lg"
              style={{
                height: `${(c.value / max) * 82}%`,
                background: `linear-gradient(to top, ${c.accent}33, ${c.accent})`,
                boxShadow: `0 0 24px -4px ${c.accent}88`,
                minHeight: '6px',
                animationDelay: `${300 + i * 120}ms`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 border-t border-white/10 pt-2.5 sm:gap-5">
        {counts.map((c) => (
          <div key={c.key} className="flex-1 text-center text-[0.72rem] leading-tight text-muted">
            {c.label}
          </div>
        ))}
      </div>
    </figure>
  )
}

function Action({ href, children, icon: Icon, primary = false, download = false }) {
  if (!href) return null

  const look = primary
    ? 'bg-gradient-to-r from-[#5b8cff] to-[#a77bff] text-white shadow-lg shadow-[#5b8cff]/30 hover:shadow-[#a77bff]/40'
    : 'border border-white/12 bg-white/5 text-ink hover:border-white/25 hover:bg-white/10'

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.9rem] font-medium transition duration-200 hover:-translate-y-0.5 ${look}`}
      {...(download ? { download: '' } : {})}
      {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {Icon && <Icon width={16} height={16} />}
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 px-6 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="max-w-[36rem]">
          {profile.availability && (
            <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-[0.8rem] font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </p>
          )}

          <h1 className="mt-6 font-display text-[clamp(2.8rem,7.5vw,4.75rem)] font-bold leading-[0.95]">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-5 font-display text-xl font-medium text-ink sm:text-2xl">{profile.role}</p>

          <p className="mt-5 max-w-[48ch] text-[1.02rem] leading-[1.7] text-muted">{profile.intro}</p>

          {profile.location && (
            <p className="mt-5 inline-flex items-center gap-1.5 text-[0.88rem] text-muted">
              <MapPin width={15} height={15} />
              {profile.location}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Action href={profile.email ? `mailto:${profile.email}` : null} icon={Mail} primary>
              Email me
            </Action>
            <Action href={profile.github} icon={GitHub}>
              GitHub
            </Action>
            <Action href={profile.linkedin} icon={LinkedIn}>
              LinkedIn
            </Action>
            <Action href={profile.resume} icon={Download} download>
              Download CV
            </Action>
          </div>
        </div>

        <div className="relative">
          <GlanceChart />
        </div>
      </div>
    </header>
  )
}
