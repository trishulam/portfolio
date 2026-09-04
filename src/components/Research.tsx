import { Section } from "./Section";
import { research } from "@/lib/content";

export function Research() {
  return (
    <Section
      id="research"
      label="Research"
      title="Papers"
      intro={
        <p>
          I&rsquo;m not aiming for a research career; I use it to get technically deep. The current thread is model
          merging and continual learning for models that have to stay in production.
        </p>
      }
    >
      <ol className="space-y-10">
        {research.map((p) => (
          <li key={p.title} className="reveal grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
            <div className="label pt-1.5">
              <p>{p.year}</p>
              <p
                className={`mt-1 inline-block rounded-sm px-1.5 py-0.5 ${
                  p.status === "Under review" ? "bg-accent-soft text-accent" : "bg-paper-2 text-ink-2"
                }`}
              >
                {p.status}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl leading-snug text-ink">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="prose-link">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="mt-1 text-sm text-ink-3">
                {p.venue} · {p.role}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{p.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
