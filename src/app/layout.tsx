import type { Metadata } from "next";
import { Newsreader, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description =
  "ML systems and AI agents. MSE Data Science at Penn; Google (YouTube Trust & Safety GenAI) and Amazon AGI intern; first-author work on continual learning and model merging for safety classifiers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} | ML Systems & AI Agents`,
  description,
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${site.name} | ML Systems & AI Agents`,
    description,
    siteName: site.name,
  },
  twitter: { card: "summary", title: `${site.name} | ML Systems & AI Agents`, description },
  robots: { index: true, follow: true },
};

export function generateViewport() {
  return { width: "device-width", initialScale: 1 };
}

const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${newsreader.variable} ${sourceSans.variable} ${jetbrains.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
