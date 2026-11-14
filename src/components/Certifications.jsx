import { certifications } from '../data/portfolio'

/* Certificates are records, so they're laid out as a ledger
   rather than as cards — easier to scan, easier to verify. */
export default function Certifications() {
  if (!certifications?.length) return null

  return (
    <section id="certifications" className="border-b border-rule py-16 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-7">
          <div className="flex gap-5">
            <span aria-hidden="true" className="mt-1 w-[5px] shrink-0 self-stretch bg-ink" />
            <div>
              <h2 className="font-display text-[clamp(1.85rem,4vw,2.5rem)] font-bold leading-tight text-ink">
                Certifications
              </h2>
              <p className="mt-3 max-w-[56ch] text-[0.98rem] leading-relaxed text-muted">
                Every credential below links to its issuer for verification.
              </p>
            </div>
          </div>
          <p className="text-[0.85rem] text-muted">{certifications.length} earned</p>
        </div>

        <div className="mt-8 overflow-x-auto border border-rule bg-surface">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-ink">
                <th scope="col" className="px-6 py-4 font-display text-[0.85rem] font-semibold">
                  Credential
                </th>
                <th scope="col" className="px-6 py-4 font-display text-[0.85rem] font-semibold">
                  Issuer
                </th>
                <th scope="col" className="px-6 py-4 font-display text-[0.85rem] font-semibold">
                  Issued
                </th>
                <th scope="col" className="px-6 py-4 font-display text-[0.85rem] font-semibold">
                  Verify
                </th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((c) => (
                <tr key={c.name + c.issued} className="border-b border-rule last:border-b-0">
                  <td className="px-6 py-5 align-top">
                    <span className="block max-w-[38ch] font-medium leading-snug text-ink">
                      {c.name}
                    </span>
                    {c.code && (
                      <span className="mt-1 block text-[0.82rem] text-muted">Exam {c.code}</span>
                    )}
                  </td>
                  <td className="px-6 py-5 align-top text-[0.92rem] text-muted">{c.issuer}</td>
                  <td className="px-6 py-5 align-top whitespace-nowrap text-[0.92rem] text-muted">
                    {c.issued}
                  </td>
                  <td className="px-6 py-5 align-top">
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[0.9rem] font-medium text-ink underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
                      >
                        Verify
                      </a>
                    ) : (
                      <span className="text-[0.9rem] text-muted">On request</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
