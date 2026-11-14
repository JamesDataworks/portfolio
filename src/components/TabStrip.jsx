import { useEffect, useState } from 'react'
import { profile, sections } from '../data/portfolio'

const CERT_ACCENT = '#f472b6'

/* Sticky glass navigation. The active pill is worked out from
   what's currently on screen. Nothing to edit. */
export default function TabStrip() {
  const tabs = [
    ...sections.map((s) => ({ id: s.id, label: s.tab, accent: s.accent })),
    { id: 'certifications', label: 'Certifications', accent: CERT_ACCENT },
  ]

  const initials = profile.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -55% 0px', threshold: 0 },
    )

    tabs.forEach((t) => {
      const el = document.getElementById(t.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav
      aria-label="Portfolio sections"
      className="sticky top-0 z-50 border-b border-white/[0.06] bg-canvas/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1180px] items-center gap-2 overflow-x-auto px-6 py-2.5 [scrollbar-width:none]">
        <a href="#top" className="mr-4 hidden shrink-0 items-center gap-2.5 md:flex">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#5b8cff] to-[#a77bff] font-display text-[0.78rem] font-bold text-white">
            {initials}
          </span>
          <span className="font-display text-[0.95rem] font-semibold text-ink">{profile.name}</span>
        </a>

        <div className="flex items-center gap-1 md:ml-auto">
          {tabs.map((t) => {
            const isActive = active === t.id
            return (
              <a
                key={t.id}
                href={`#${t.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.85rem] transition-colors duration-200 ${
                  isActive ? 'bg-white/10 font-medium text-ink' : 'text-muted hover:bg-white/5 hover:text-ink'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full transition-opacity"
                  style={{ backgroundColor: t.accent, opacity: isActive ? 1 : 0.5 }}
                />
                {t.label}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
