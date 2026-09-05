import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { posts, formatDate } from "@/lib/writing";

export function PostLayout({ slug, children }: { slug: string; children: React.ReactNode }) {
  const post = posts.find((p) => p.slug === slug);
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto w-full max-w-[720px] px-5 sm:px-10 xl:px-0 pt-16 pb-24">
        {post && (
          <p className="label mb-6">
            {formatDate(post.date)} · {post.topic}
          </p>
        )}
        <article>{children}</article>
        <p className="mt-14 border-t border-rule pt-6 text-sm">
          <a href="/writing" className="prose-link">← All writing</a>
        </p>
      </main>
      <Footer />
    </>
  );
}
