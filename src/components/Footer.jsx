import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    profile.email && { label: profile.email, href: `mailto:${profile.email}` },
    profile.github && { label: 'GitHub', href: profile.github },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin },
    profile.resume && { label: 'CV', href: profile.resume },
  ].filter(Boolean)

  return (
    <footer className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <h2 className="max-w-[20ch] font-display text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.05] text-ink">
          Have a reporting problem worth solving?
        </h2>

        <p className="mt-5 max-w-[46ch] text-[1rem] leading-relaxed text-muted">
          Tell me what decision the data needs to support and I'll tell you whether it needs a
          dashboard, a pipeline, or neither.
        </p>

        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center bg-ink px-5 py-3 font-medium text-canvas transition-opacity duration-150 hover:opacity-85"
          >
            Start a conversation
          </a>
        )}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-rule pt-6 text-[0.85rem] text-muted">
          <p>
            © {year} {profile.name}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                  {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
