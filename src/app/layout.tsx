import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const heading = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sminkes-minta.vercel.app"),
  title: {
    default: "Makeup by Anna Minta — Sminkes | Város & Környék",
    template: "%s | Makeup by Anna",
  },
  description:
    "Professzionális sminkes Városodban. Menyasszonyi, alkalmi, nappali és fotó smink. Minta Anna — természetes szépség, maradandó élmény.",
  keywords:
    "sminkes város, sminkes környék, menyasszonyi smink város, alkalmi smink város, nappali smink, fotó smink, érettségi smink, Minta Anna, makeup artist város",
  openGraph: {
    title: "Makeup by Anna Minta — Sminkes | Város & Környék",
    description:
      "Professzionális sminkes Városodban. Menyasszonyi, alkalmi, nappali és fotó smink.",
    url: "https://sminkes-minta.vercel.app",
    siteName: "Makeup by Anna Minta",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Makeup by Anna Minta — Sminkes | Város & Környék",
    description:
      "Professzionális sminkes Városodban.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://sminkes-minta.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${heading.variable} ${body.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname);window.scrollTo(0,0)` }} />
        {/* BeautySalon JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "@id": "https://sminkes-minta.vercel.app/#business",
              name: "Makeup by Anna Minta",
              description:
                "Professzionális sminkes Városodban. Menyasszonyi, alkalmi, nappali, fotó és érettségi smink. Minta Anna — természetes, tartós smink minden alkalomra.",
              url: "https://sminkes-minta.vercel.app",
              email: "hello@mintaanna.hu",
              image: "https://sminkes-minta.vercel.app/images/kamilla.webp",
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Város",
                  addressCountry: "HU",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Környék",
                  addressCountry: "HU",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Város" },
                { "@type": "City", name: "Környék" },
              ],
              sameAs: [
                "https://www.instagram.com/mintaanna_sminkes/",
              ],
              priceRange: "$$",
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Menyasszonyi smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alkalmi smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nappali smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fotó smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Érettségi / bál smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Próbasmink" } },
              ],
            }),
          }}
        />
        {/* Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://sminkes-minta.vercel.app/#person",
              name: "Minta Anna",
              jobTitle: "Sminkes / Makeup Artist",
              worksFor: { "@id": "https://sminkes-minta.vercel.app/#business" },
              url: "https://sminkes-minta.vercel.app",
              sameAs: [
                "https://www.instagram.com/mintaanna_sminkes/",
              ],
              address: [
                { "@type": "PostalAddress", addressLocality: "Város", addressCountry: "HU" },
                { "@type": "PostalAddress", addressLocality: "Környék", addressCountry: "HU" },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased bg-surface text-foreground">
        {children}
        <Analytics />
        <SpeedInsights />
        <CookieConsent />
      </body>
    </html>
  );
}
