import { Section } from "./Section";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <h2 className="display text-3xl sm:text-4xl">
        Say hello.
      </h2>
      <p className="mt-5 max-w-xl text-ink-2">
        Email is best. I read everything, and I reply to anything with a real question in it.
      </p>
      <p className="mt-6">
        <a href={`mailto:${site.email}`} className="font-serif text-2xl text-ink underline decoration-rule underline-offset-4 hover:decoration-accent">
          {site.email}
        </a>
      </p>
      <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a href={site.github} className="prose-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={site.linkedin} className="prose-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={site.resume} className="prose-link" target="_blank" rel="noopener noreferrer">Résumé</a>
      </p>
    </Section>
  );
}
