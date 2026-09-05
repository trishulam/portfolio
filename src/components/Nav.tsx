import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/lib/content";
import { posts } from "@/lib/writing";

const items = [
  ["Work", "/#work"],
  ...(posts.length ? [["Writing", "/writing"]] : []),
  ["Projects", "/#projects"],
  ["Papers", "/#papers"],
  ["Contact", "/#contact"],
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto w-full max-w-[1200px] px-5 sm:px-10 xl:px-0 flex items-center justify-between py-4" aria-label="Primary">
        <a href="/" className="hidden font-serif text-xl text-ink sm:block">
          {site.name}
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          <ul className="flex items-center gap-4 sm:gap-6">
            {items.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-[0.85rem] text-ink-2 transition-colors hover:text-ink sm:text-[0.95rem]">
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
