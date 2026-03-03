import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { HeroContent, NewsItem } from "@/components/HomePage";

const contentDir = path.join(process.cwd(), "content");

export async function getHomeContent(): Promise<HeroContent> {
  const file = path.join(contentDir, "pages", "home.md");
  const raw = await fs.readFile(file, "utf8");
  const parsed = matter(raw);
  return parsed.data as HeroContent;
}

export async function getNewsItems(limit?: number): Promise<NewsItem[]> {
  const newsDir = path.join(contentDir, "news");
  const entries = await fs.readdir(newsDir);

  const items = await Promise.all(
    entries.map(async (filename) => {
      const raw = await fs.readFile(path.join(newsDir, filename), "utf8");
      const parsed = matter(raw);
      const slug = filename.replace(/\.(md|mdx|yml|yaml|txt)$/i, "");
      return {
        ...(parsed.data as Omit<NewsItem, "slug">),
        slug,
      } satisfies NewsItem;
    })
  );

  const sorted = items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}
