import { sortedPosts, formatDate } from "@/lib/writing";

export function WritingList({ limit }: { limit?: number }) {
  const list = limit ? sortedPosts.slice(0, limit) : sortedPosts;
  if (list.length === 0) return <p className="text-ink-3">Nothing here yet.</p>;
  return (
    <ul className="border-t border-rule">
      {list.map((p) => (
        <li key={p.slug} className="grid items-baseline gap-2 border-b border-rule py-4 sm:grid-cols-[9rem_1fr_auto] sm:gap-8">
          <p className="label">{formatDate(p.date)}</p>
          <a href={`/writing/${p.slug}`} className="prose-link font-serif text-[1.35rem] leading-snug">
            {p.title}
          </a>
          <p className="text-sm text-ink-3 sm:text-right">{p.topic}</p>
        </li>
      ))}
    </ul>
  );
}
