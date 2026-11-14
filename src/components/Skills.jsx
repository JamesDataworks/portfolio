import { skills } from '../data/portfolio'
import Reveal from './Reveal'
import { Chart, Database, Code, Server } from './Icons'

const LOOKS = [
  { icon: Chart, accent: '#f2b134' },
  { icon: Database, accent: '#2ec4b6' },
  { icon: Code, accent: '#5b8cff' },
  { icon: Server, accent: '#a77bff' },
]

export default function Skills() {
  if (!skills?.length) return null

  return (
    <section aria-label="Skills" className="relative">
      <div className="mx-auto grid max-w-[1180px] gap-5 px-6 pb-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => {
          const { icon: Icon, accent } = LOOKS[i % LOOKS.length]
          return (
            <Reveal
              key={group.group}
              delay={i * 90}
              className="rounded-2xl border border-white/10 bg-surface/60 p-5 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-9 w-9 place-items-center rounded-xl"
                  style={{ backgroundColor: `${accent}1f`, color: accent }}
                >
                  <Icon />
                </span>
                <h2 className="font-display text-[0.98rem] font-semibold text-ink">{group.group}</h2>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.78rem] leading-none text-muted transition-colors hover:border-white/25 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
