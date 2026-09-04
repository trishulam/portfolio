import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="shell mt-16 border-t border-rule py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="label">{site.fullName} · {site.location}</p>
        <p className="label">Next.js on Vercel. No trackers.</p>
      </div>
    </footer>
  );
}
