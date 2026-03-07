import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { SeoJsonLd } from "@/components/SeoJsonLd";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: "ZŠ Heřmanice",
  description:
    "Komunitní základní škola Heřmanice – moderní výuka, otevřený přístup a propojení s přírodou.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Základní škola Heřmanice",
  "alternateName": "ZŠ Heřmanice",
  "description": "Komunitní základní škola Heřmanice – moderní výuka, otevřený přístup a propojení s přírodou.",
  "url": "https://zs-hermanice.cz",
  "logo": "https://zs-hermanice.cz/logo.png", // assume logo exists
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Heřmanice u Oder 123", // placeholder, need real address
    "addressLocality": "Heřmanice u Oder",
    "postalCode": "00000",
    "addressCountry": "CZ",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.1234", // placeholder
    "longitude": "17.5678",
  },
  "telephone": "+420 123 456 789", // placeholder
  "email": "info@zs-hermanice.cz",
  "sameAs": [
    "https://www.facebook.com/zshermanice", // placeholder
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">
        <SeoJsonLd data={organizationSchema} />
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
