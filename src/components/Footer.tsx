import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="label">
          {site.fullName} · {site.location}
        </p>
        <p className="label">Built with Next.js. No trackers.</p>
      </div>
    </footer>
  );
}
