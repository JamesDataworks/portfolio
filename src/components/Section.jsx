import ProjectTile from './ProjectTile'

export default function Section({ section }) {
  const { id, title, blurb, accent, projects } = section

  return (
    <section id={id} className="border-b border-rule py-16 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-7">
          <div className="flex gap-5">
            <span
              aria-hidden="true"
              className="mt-1 w-[5px] shrink-0 self-stretch"
              style={{ backgroundColor: accent }}
            />
            <div>
              <h2 className="font-display text-[clamp(1.85rem,4vw,2.5rem)] font-bold leading-tight text-ink">
                {title}
              </h2>
              {blurb && (
                <p className="mt-3 max-w-[56ch] text-[0.98rem] leading-relaxed text-muted">
                  {blurb}
                </p>
              )}
            </div>
          </div>

          <p className="text-[0.85rem] text-muted">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectTile key={p.title} project={p} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  )
}
