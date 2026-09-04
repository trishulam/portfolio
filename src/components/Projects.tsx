import { Section } from "./Section";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Things I built"
      intro={<p>Coursework, hackathons, and weekend builds. Mostly agents and real-time multimodal systems.</p>}
      wide
    >
      <ul className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name} className="reveal flex flex-col bg-paper p-5 sm:p-6">
            <p className="label">
              {p.kind} · {p.when}
            </p>
            <h3 className="mt-2 font-serif text-xl leading-snug text-ink">{p.name}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{p.blurb}</p>
            {p.result && <p className="mt-3 text-sm font-medium text-accent">{p.result}</p>}
            {p.details && (
              <details className="mt-3 group">
                <summary className="text-sm text-ink-3 transition-colors hover:text-ink">
                  <span className="group-open:hidden">More detail ↓</span>
                  <span className="hidden group-open:inline">Less ↑</span>
                </summary>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-ink-2">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-3" aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </details>
            )}
            <div className="mt-auto pt-4">
              <p className="font-mono text-[0.7rem] leading-relaxed text-ink-3">{p.stack.join(" · ")}</p>
              {p.links && (
                <p className="mt-2 flex gap-4 text-sm">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} className="prose-link" target="_blank" rel="noopener noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
