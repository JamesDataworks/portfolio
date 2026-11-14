import { skills } from '../data/portfolio'

export default function Skills() {
  if (!skills?.length) return null

  return (
    <section aria-label="Skills" className="border-b border-rule bg-surface">
      <div className="mx-auto grid max-w-[1180px] gap-x-10 gap-y-9 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group} className="border-t-2 border-ink pt-4">
            <h2 className="font-display text-[0.95rem] font-semibold text-ink">{group.group}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-rule px-2.5 py-1 text-[0.8rem] leading-none text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
