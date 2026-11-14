import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import { Mail, GitHub, LinkedIn, Download } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    profile.email && { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
    profile.github && { label: 'GitHub', href: profile.github, icon: GitHub },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin, icon: LinkedIn },
    profile.resume && { label: 'CV', href: profile.resume, icon: Download },
  ].filter(Boolean)

  return (
    <footer className="pb-10 pt-8">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/70 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgb(91_140_255/0.25),transparent_70%),radial-gradient(600px_300px_at_80%_100%,rgb(167_123_255/0.25),transparent_70%)]"
          />
          <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative">
            <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] text-ink">
              Have a reporting problem <span className="text-gradient">worth solving?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[48ch] text-[1rem] leading-relaxed text-muted">
              Tell me what decision the data needs to support and I'll tell you whether it needs a
              dashboard, a pipeline, or neither.
            </p>

            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5b8cff] to-[#a77bff] px-7 py-3.5 font-medium text-white shadow-lg shadow-[#5b8cff]/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-[#a77bff]/40"
              >
                <Mail width={17} height={17} />
                Start a conversation
              </a>
            )}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-[0.85rem] text-muted">
          <p>
            © {year} {profile.name}
          </p>
          <ul className="flex flex-wrap gap-2">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted transition-colors hover:border-white/25 hover:text-ink"
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <Icon width={17} height={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
