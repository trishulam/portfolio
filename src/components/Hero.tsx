import { site, stats } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-[1200px] px-5 sm:px-10 xl:px-0 grid gap-12 pt-16 pb-14 sm:pt-24 sm:pb-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
      <div className="flex flex-col gap-7">
        <p className="label flex items-center gap-2 !text-live">
          <span className="inline-block h-[7px] w-[7px] rounded-full bg-live" aria-hidden="true" />
          Open to 2027 new grad roles
        </p>
        <h1 className="display text-[2.9rem] sm:text-6xl lg:text-[5.25rem]">
          {site.name}.
          <br />
          <span className="italic text-ink-2">ML systems &amp; agents.</span>
        </h1>
        <p className="max-w-[620px] text-[1.1rem] leading-relaxed text-ink-2 sm:text-[1.2rem]">{site.intro}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.95rem]">
          <a href={`mailto:${site.email}`} className="prose-link">{site.email}</a>
          <a href={site.github} className="prose-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={site.linkedin} className="prose-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={site.resume} className="prose-link" target="_blank" rel="noopener noreferrer">Résumé</a>
        </div>
      </div>

      <dl className="grid gap-px border border-rule bg-rule [&>*]:bg-paper grid-cols-2">
        {stats.map((s) => (
          <div key={s.label} className="px-5 py-6">
            <dd className="font-serif text-[2rem] leading-none whitespace-nowrap sm:text-[2.4rem] text-ink">{s.value}</dd>
            <dt className="label mt-3">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
