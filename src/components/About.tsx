import { Section } from "./Section";
import { education, awards, skills } from "@/lib/content";

export function About() {
  return (
    <Section id="about" label="About" title="Background">
      <div className="space-y-5 text-[1.02rem] leading-relaxed text-ink-2">
        <p>
          I grew up in Chennai and did two undergraduate degrees at once: mechanical engineering at SSN, where I topped
          the department, and the IIT Madras data science program, while working full time for most of it. I like
          problems where the model is only half the answer and the other half is serving cost, drift, and what happens
          at the operating point.
        </p>
        <p>
          Before grad school I founded Vessel Match, a maritime matching startup incubated at IIT Madras. It
          didn&rsquo;t find product-market fit, and I learned more from that than from anything that worked. I still
          think about shipping, and I still build on weekends: three hackathon wins in the last year, mostly real-time
          multimodal agents.
        </p>
      </div>

      <h3 className="label mt-14 mb-5">Education</h3>
      <ul className="divide-y divide-rule border-y border-rule">
        {education.map((e) => (
          <li key={e.school} className="reveal grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
            <p className="label pt-1">{e.period}</p>
            <div>
              <p className="text-ink">
                {e.degree}
                <span className="text-ink-3"> · {e.school}</span>
              </p>
              {e.note && <p className="mt-0.5 text-sm text-ink-2">{e.note}</p>}
            </div>
          </li>
        ))}
      </ul>

      <h3 className="label mt-14 mb-5">Awards</h3>
      <ul className="divide-y divide-rule border-y border-rule">
        {awards.map((a) => (
          <li key={a.what} className="reveal grid gap-1 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
            <p className="label pt-1">{a.when}</p>
            <p className="text-ink">
              {a.what}
              {a.detail && <span className="text-ink-3"> · {a.detail}</span>}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="label mt-14 mb-5">Tools</h3>
      <dl className="space-y-3">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
            <dt className="label pt-1">{s.group}</dt>
            <dd className="font-mono text-[0.8rem] leading-relaxed text-ink-2">{s.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
