import { site, now } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="pt-16 pb-14 sm:pt-24 sm:pb-20">
      <p className="label mb-6 flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
        {site.status}
      </p>
      <h1 className="display text-[2.6rem] leading-[1.02] sm:text-6xl">
        {site.name}.
        <br />
        <span className="italic text-ink-2">{site.tagline}</span>
      </h1>
      <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-ink-2">{site.intro}</p>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <a href={`mailto:${site.email}`} className="prose-link">
          {site.email}
        </a>
        <a href={site.github} className="prose-link" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={site.linkedin} className="prose-link" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={site.resume} className="prose-link" target="_blank" rel="noopener noreferrer">
          Résumé (PDF)
        </a>
      </div>

      <dl className="mt-14 grid gap-x-8 gap-y-4 border-t border-rule pt-8 sm:grid-cols-2">
        {now.map((n) => (
          <div key={n.label} className="grid grid-cols-[7rem_1fr] gap-3">
            <dt className="label pt-1">{n.label}</dt>
            <dd className="text-sm text-ink-2">{n.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
