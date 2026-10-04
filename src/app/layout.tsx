import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { business } from "@/config/business";
import { JsonLd } from "@/components/json-ld";
import { MobileQuoteBar } from "@/components/mobile-quote-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const title = "Outdoor Holiday Decorating | Holiday Imaginarium";
const description =
  "Outdoor Halloween and Christmas decorating in McMinnville, Amity, Newberg, Beaverton and surrounding Oregon communities. Text a photo of your home for a quote.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title,
  description,
  applicationName: business.businessName,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: business.businessName,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream font-sans text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileQuoteBar />
      </body>
    </html>
  );
}
