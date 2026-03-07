import { HomePage } from "@/components/HomePage";
import { getHomeContent, getNewsItems } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { SeoJsonLd } from "@/components/SeoJsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getHomeContent();
  return createMetadata({
    title: data.title || "ZŠ Heřmanice",
    description: data.lead,
    image: data.heroImage,
    canonical: "/",
  });
}

const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Základní škola Heřmanice",
  "description": "Komunitní základní škola Heřmanice – moderní výuka, otevřený přístup a propojení s přírodou.",
  "url": "https://zs-hermanice.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Heřmanice u Oder 123",
    "addressLocality": "Heřmanice u Oder",
    "postalCode": "00000",
    "addressCountry": "CZ",
  },
};

export default async function Home() {
  const { data, content } = await getHomeContent();
  const news = await getNewsItems(3);

  return (
    <>
      <SeoJsonLd data={schoolSchema} />
      <HomePage hero={{ data, content }} news={news} />
    </>
  );
}
