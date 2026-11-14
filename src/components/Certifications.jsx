import { certifications } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { Award, ArrowUpRight } from './Icons'

const ACCENT = '#f472b6'

/* Badge colour by issuer, so Microsoft / Google certs are easy to spot. */
function issuerColor(issuer = '') {
  const i = issuer.toLowerCase()
  if (i.includes('microsoft')) return '#5b8cff'
  if (i.includes('google')) return '#f2b134'
  if (i.includes('aws') || i.includes('amazon')) return '#ff9f43'
  return '#a77bff'
}

export default function Certifications() {
  if (!certifications?.length) return null

  return (
    <section id="certifications" className="relative py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-10 -z-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications"
          blurb="Every credential below links to its issuer for verification."
          accent={ACCENT}
          count={`${certifications.length} earned`}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const color = issuerColor(c.issuer)
            return (
              <Reveal key={c.name + c.issued} delay={(i % 3) * 90}>
                <article
                  className="tile flex h-full flex-col rounded-2xl border border-white/10 bg-surface/70 p-6 backdrop-blur"
                  style={{ '--a': color }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                      style={{ backgroundColor: `${color}1f`, color }}
                    >
                      <Award width={22} height={22} />
                    </span>
                    {c.code && (
                      <span
                        className="rounded-full px-2.5 py-1 font-display text-[0.75rem] font-semibold"
                        style={{ backgroundColor: `${color}1a`, color }}
                      >
                        {c.code}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-[1.02rem] font-semibold leading-snug text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-[0.85rem] text-muted">
                    {c.issuer} · {c.issued}
                  </p>

                  <div className="mt-auto pt-5">
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium transition-opacity hover:opacity-80"
                        style={{ color }}
                      >
                        Verify credential <ArrowUpRight width={14} height={14} />
                      </a>
                    ) : (
                      <span className="text-[0.85rem] text-muted">Available on request</span>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
