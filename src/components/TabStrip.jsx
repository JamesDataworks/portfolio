import { useEffect, useState } from 'react'
import { profile, sections } from '../data/portfolio'

/* A sticky strip of report-style page tabs. The active tab is
   worked out from what's currently on screen. Nothing to edit. */
export default function TabStrip() {
  const tabs = [
    ...sections.map((s) => ({ id: s.id, label: s.tab, accent: s.accent })),
    { id: 'certifications', label: 'Certifications', accent: '#1a2027' },
  ]

  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-88px 0px -55% 0px', threshold: 0 },
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
      className="sticky top-0 z-50 border-b border-rule bg-surface/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1180px] items-stretch gap-1 overflow-x-auto px-6">
        <a
          href="#top"
          className="hidden shrink-0 items-center pr-6 font-display text-[0.92rem] font-semibold text-ink md:flex"
        >
          {profile.name}
        </a>

        {tabs.map((t) => {
          const isActive = active === t.id
          return (
            <a
              key={t.id}
              href={`#${t.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`shrink-0 whitespace-nowrap border-b-[3px] px-3 py-3.5 text-[0.88rem] transition-colors duration-150 ${
                isActive ? 'font-medium text-ink' : 'text-muted hover:text-ink'
              }`}
              style={{ borderBottomColor: isActive ? t.accent : 'transparent' }}
            >
              {t.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
