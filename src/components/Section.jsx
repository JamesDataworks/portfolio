import ProjectTile from './ProjectTile'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

export default function Section({ section, index = 0 }) {
  const { id, title, blurb, accent, projects } = section

  return (
    <section id={id} className="relative py-20 sm:py-24">
      {/* soft accent glow behind the section heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-10 -z-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: accent }}
      />

      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeader
          number={String(index + 1).padStart(2, '0')}
          eyebrow="Projects"
          title={title}
          blurb={blurb}
          accent={accent}
          count={`${projects.length} ${projects.length === 1 ? 'project' : 'projects'}`}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100} className={p.featured ? 'md:col-span-2' : ''}>
              <ProjectTile project={p} accent={accent} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
