import { research, education, awards } from "@/lib/content";

function Col({ id, label, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="label mb-4">{label}</p>
      <div className="flex flex-col gap-3.5 text-[0.95rem] leading-snug">{children}</div>
    </div>
  );
}

export function Background() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 sm:px-10 xl:px-0 grid gap-12 pt-14 sm:grid-cols-3 sm:gap-10 sm:pt-16" aria-label="Papers, education, and awards">
      <Col id="papers" label="Papers">
        {research.map((p) => (
          <div key={p.title} className="reveal">
            {p.url ? (
              <a href={p.url} className="prose-link font-serif text-[1.1rem]" target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
            ) : (
              <span className="font-serif text-[1.1rem]">{p.title}</span>
            )}
            <br />
            <span className="text-ink-3">
              {p.venue}
              {p.status === "Under review" && " · under review"}
            </span>
          </div>
        ))}
      </Col>
      <Col label="Education">
        {education.map((e) => (
          <div key={e.school} className="reveal">
            <span className="font-serif text-[1.1rem]">{e.school}</span>
            <br />
            <span className="text-ink-3">
              {e.degree} · {e.period}
              {e.note && ` · ${e.note}`}
            </span>
          </div>
        ))}
      </Col>
      <Col label="Awards">
        {awards.map((a) => (
          <div key={a.what} className="reveal">
            {a.url ? (
              <a href={a.url} className="prose-link" target="_blank" rel="noopener noreferrer">
                {a.what}
              </a>
            ) : (
              a.what
            )}
            <span className="text-ink-3"> · {a.when}</span>
          </div>
        ))}
      </Col>
    </section>
  );
}
