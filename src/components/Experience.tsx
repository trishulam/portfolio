import { Section } from "./Section";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section id="work" label="Work" title="Experience">
      <ol className="space-y-12">
        {experience.map((r) => (
          <li key={r.org + r.period} className="reveal grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
            <p className="label pt-1.5 whitespace-nowrap">{r.period}</p>
            <div>
              <h3 className="text-lg font-medium text-ink">
                {r.org}
                {r.team && <span className="font-normal text-ink-3"> · {r.team}</span>}
              </h3>
              <p className="mt-0.5 text-sm text-ink-2">
                {r.title} · {r.location}
              </p>
              <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-ink-2">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-3" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {r.links && (
                <p className="mt-3 flex gap-4 text-sm">
                  {r.links.map((l) => (
                    <a key={l.url} href={l.url} className="prose-link" target="_blank" rel="noopener noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
