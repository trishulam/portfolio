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

export const metadata: Metadata = {
  metadataBase: new URL('https://vamsi.dev'), // Update with your actual domain
  title: "Vamsi - AI & Full-Stack Engineer | Portfolio",
  description: "Founder-minded AI & full-stack engineer who ships production-grade agentic/RAG products. Open to AI Engineer, Software Engineer, Product, and Founding Engineer roles.",
  keywords: ["AI Engineer", "Full-Stack Developer", "Software Engineer", "RAG", "Agentic AI", "Next.js", "Python", "Machine Learning"],
  authors: [{ name: "Vamsi" }],
  creator: "Vamsi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vamsi.dev", // Update with your actual domain
    title: "Vamsi - AI & Full-Stack Engineer",
    description: "Founder-minded AI & full-stack engineer who ships production-grade agentic/RAG products—ready to deliver impact on day one.",
    siteName: "Vamsi Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this
        width: 1200,
        height: 630,
        alt: "Vamsi - AI & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamsi - AI & Full-Stack Engineer",
    description: "Founder-minded AI & full-stack engineer who ships production-grade agentic/RAG products—ready to deliver impact on day one.",
    images: ["/og-image.jpg"],
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
        <link rel="canonical" href="https://vamsi.dev" />
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
