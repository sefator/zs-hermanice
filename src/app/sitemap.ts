import { getNewsItems, getPageContent } from "@/lib/content";
import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zs-hermanice.cz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/aktuality`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/vyhledavani`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Add other static routes like /skola, /kontakt, etc. if they exist
  ];

  // Add news items
  const newsItems = await getNewsItems();
  newsItems.forEach((item) => {
    sitemap.push({
      url: `${SITE_URL}/aktuality/${item.slug}`,
      lastModified: new Date(item.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  // Add school pages
  // Assuming we have a way to get all slugs, but for now, hardcode or fetch
  const schoolSlugs = ["dokumenty-skoly", "zapis-do-1-tridy", "stravovani", "organizace-skolniho-roku"]; // from glob earlier
  for (const slug of schoolSlugs) {
    try {
      const page = await getPageContent(`school/${slug}`);
      sitemap.push({
        url: `${SITE_URL}/skola/${slug}`,
        lastModified: page.data.lastmod ? new Date(page.data.lastmod) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    } catch {
      // skip if not found
    }
  }

  // Similarly for other dynamic routes like galleries, etc.

  return sitemap;
}