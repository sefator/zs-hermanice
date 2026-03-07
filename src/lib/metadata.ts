import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zs-hermanice.cz";

export function createMetadata({
  title,
  description,
  image,
  canonical,
  type = "website",
  publishedTime,
}: {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const fullTitle = title.length > 60 ? `${title.slice(0, 57)}...` : title;
  const metaDescription = description || "Komunitní základní škola Heřmanice – moderní výuka, otevřený přístup a propojení s přírodou.";

  const metadata: Metadata = {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical: canonical || SITE_URL,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical || SITE_URL,
      siteName: "ZŠ Heřmanice",
      type,
      images: image ? [{ url: image, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: image ? [image] : undefined,
    },
  };

  if (type === "article" && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
    };
  }

  return metadata;
}