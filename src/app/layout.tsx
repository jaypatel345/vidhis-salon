import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { StructuredData } from "@/components/StructuredData";
import { site, contactInfo } from "@/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.shortDescription,
  keywords: [
    "Vidhi's Salon",
    "Vidhi Beauty Parlour Bardoli",
    "salon in Bardoli",
    "beauty parlour in Bardoli",
    "best salon in Bardoli Gujarat",
    "bridal makeup artist Bardoli",
    "keratin treatment Bardoli",
    "hair spa Bardoli",
    "O3+ facials Bardoli",
    "Lal Bahadur Shastri Road salon",
    "Gopal Nagar Bardoli salon",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen bg-ivory text-espresso antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-espresso focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <StructuredData />
        <AnnouncementBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />

        {/* Floating Quick Contact Pill for mobile and desktop */}
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-105"
          >
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            WhatsApp
          </a>
          <a
            href={`tel:${contactInfo.phoneHref}`}
            aria-label="Call salon directly"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso text-ivory shadow-lg transition-transform hover:scale-105 sm:hidden"
          >
            📞
          </a>
        </div>
      </body>
    </html>
  );
}
