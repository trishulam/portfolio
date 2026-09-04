import { site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="shell scroll-mt-24 pt-16 sm:pt-24" aria-labelledby="contact-label">
      <div className="grid gap-6 border-t border-rule pt-12 sm:grid-cols-[360px_1fr] sm:gap-12">
        <p id="contact-label" className="label">Contact</p>
        <div>
          <h2 className="display text-3xl sm:text-4xl">Say hello.</h2>
          <p className="mt-4 max-w-xl text-ink-2">Email is best. I reply to anything with a real question in it.</p>
          <p className="mt-6">
            <a href={`mailto:${site.email}`} className="font-serif text-2xl text-ink underline decoration-rule underline-offset-4 hover:decoration-accent sm:text-3xl">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
