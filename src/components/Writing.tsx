import { posts } from "@/lib/writing";
import { WritingList } from "./WritingList";

export function Writing() {
  if (posts.length === 0) return null;
  return (
    <section id="writing" className="mx-auto w-full max-w-[1200px] px-5 sm:px-10 xl:px-0 scroll-mt-24 pt-14 sm:pt-16" aria-labelledby="writing-label">
      <div className="mb-5 flex items-baseline justify-between">
        <p id="writing-label" className="label">Writing</p>
        <a href="/writing" className="text-[0.9rem] text-ink-3 hover:text-ink">All posts →</a>
      </div>
      <WritingList limit={5} />
    </section>
  );
}
