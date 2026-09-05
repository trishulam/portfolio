// One entry per post. The post itself lives at src/app/writing/<slug>/page.mdx.
// Add the entry here and the post appears on the home page and at /writing.
export interface Post {
  slug: string;
  title: string;
  date: string; // ISO, e.g. "2026-10-01"
  topic: string;
  summary?: string;
}

export const posts: Post[] = [];

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
