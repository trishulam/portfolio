import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-plex-mono", 
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

const siteDescription = "ML systems and AI agents. MSE Data Science at Penn; Google (YouTube Trust & Safety GenAI) and Amazon AGI intern; first-author work on continual learning and model merging for safety classifiers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vamsi Krishna | ML Systems & AI Agents",
  description: siteDescription,
  keywords: ["Vamsi Krishna", "Machine Learning Engineer", "AI Agents", "Model Merging", "Continual Learning", "Safety Classifiers", "JAX", "Python", "UPenn"],
  authors: [{ name: "Vamsi Krishna N K" }],
  creator: "Vamsi Krishna N K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Vamsi Krishna | ML Systems & AI Agents",
    description: siteDescription,
    siteName: "Vamsi Krishna",
  },
  twitter: {
    card: "summary",
    title: "Vamsi Krishna | ML Systems & AI Agents",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0B1020" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
