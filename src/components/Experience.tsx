import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="work" className="shell scroll-mt-24 pt-12 sm:pt-16" aria-labelledby="work-label">
      <p id="work-label" className="label mb-7 border-t border-rule pt-12">
        Selected work
      </p>
      <ol>
        {experience.map((r) => {
          const isNow = !!r.now;
          return (
            <li
              key={r.org}
              className="reveal grid gap-4 border-t border-rule py-8 last:border-b sm:grid-cols-[minmax(0,300px)_1fr] sm:gap-12 lg:grid-cols-[360px_1fr]"
            >
              <div>
                <h3 className={`font-serif leading-tight text-ink ${r.org === "Google" ? "text-[2.1rem]" : "text-[1.65rem]"}`}>
                  {r.org}
                  {isNow && <span className="label ml-3 align-middle !text-live">Now</span>}
                </h3>
                {r.team && <p className="mt-1 text-[0.95rem] text-ink-2">{r.team}</p>}
                <p className="label mt-3 !tracking-[0.08em]">
                  {r.period} · {r.location}
                </p>
              </div>
              <div className={`flex flex-col gap-3 leading-relaxed text-ink ${r.org === "Google" ? "text-[1.08rem]" : "text-[1rem]"}`}>
                <p className="text-ink-2">{r.title}</p>
                {r.bullets.map((b) => (
                  <p key={b}>{b}</p>
                ))}
                {r.links && (
                  <p className="flex gap-4 text-[0.95rem]">
                    {r.links.map((l) => (
                      <a key={l.url} href={l.url} className="prose-link" target="_blank" rel="noopener noreferrer">
                        {l.label} ↗
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
