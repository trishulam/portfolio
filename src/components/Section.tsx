import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  intro,
  wide,
  children,
}: {
  id: string;
  label: string;
  title?: string;
  intro?: ReactNode;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-rule py-14 sm:py-20" aria-labelledby={`${id}-label`}>
      <div className="grid gap-6 sm:grid-cols-[9rem_1fr] sm:gap-10">
        <div>
          <p id={`${id}-label`} className="label sm:sticky sm:top-24">
            {label}
          </p>
        </div>
        <div className="min-w-0">
          {title && <h2 className="display mb-6 text-3xl sm:text-4xl">{title}</h2>}
          {intro && <div className="mb-10 max-w-xl text-ink-2">{intro}</div>}
          {!wide && children}
        </div>
      </div>
      {wide && <div className="mt-2">{children}</div>}
    </section>
  );
}
