import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/lib/content";

const items = [
  ["Work", "#work"],
  ["Research", "#research"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 sm:px-6" aria-label="Primary">
        <a href="#top" className="hidden font-serif text-lg text-ink sm:block">
          {site.name}
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-4 sm:gap-5">
            {items.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-[0.8rem] text-ink-2 transition-colors hover:text-ink sm:text-sm">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
