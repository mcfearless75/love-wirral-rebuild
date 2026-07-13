import type { Metadata } from "next";
import { Bricolage_Grotesque, Work_Sans, Spline_Sans_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const worksans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  display: "swap",
});
const splinemono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-splinemono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Love Wirral Magazine — Wirral's Free Community Magazine | Advertise from £50",
  description:
    "Love Wirral is the Wirral's free monthly community and business magazine. 8,500 copies hand-delivered across the peninsula every month since 2012. Advertise from £50 with no contracts, free artwork and an online interactive edition included.",
  openGraph: {
    title: "Love Wirral Magazine — Wirral's Free Community Magazine",
    description:
      "8,500 copies hand-delivered free across Wirral every month. Advertise from £50 — no contracts, free artwork.",
    locale: "en_GB",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "Love Wirral Magazine",
  alternateName: "Love Wirral",
  url: "https://love-wirral.com",
  telephone: "+441515131279",
  email: "info@love-wirral.com",
  areaServed: { "@type": "AdministrativeArea", name: "Wirral, Merseyside, UK" },
  sameAs: ["https://www.facebook.com/lovewirralandchester"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${bricolage.variable} ${worksans.variable} ${splinemono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
