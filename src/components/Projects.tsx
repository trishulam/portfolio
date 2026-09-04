import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="shell scroll-mt-24 pt-14 sm:pt-16" aria-labelledby="projects-label">
      <div className="mb-6 flex items-baseline justify-between">
        <p id="projects-label" className="label">Projects</p>
        <p className="text-[0.9rem] text-ink-3">Hackathons, coursework, weekends</p>
      </div>
      <ul className="cells sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.name} className="reveal flex min-h-[210px] flex-col gap-2.5 p-6">
            <p className="label">{p.kindOverride ?? `${p.kind} · ${p.when}`}</p>
            <h3 className="font-serif text-[1.5rem] leading-tight text-ink">{p.name}</h3>
            <p className="text-[0.95rem] leading-relaxed text-ink-2">{p.blurb}</p>
            {p.details && (
              <details className="group text-[0.9rem]">
                <summary className="text-ink-3 hover:text-ink">
                  <span className="group-open:hidden">More ↓</span>
                  <span className="hidden group-open:inline">Less ↑</span>
                </summary>
                <ul className="mt-2 flex flex-col gap-1.5 text-ink-2">
                  {p.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </details>
            )}
            {p.links && (
              <p className="mt-auto flex gap-4 pt-3 text-[0.9rem]">
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} className="prose-link" target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
