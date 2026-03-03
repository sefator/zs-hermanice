import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { HeroContent, NewsItem } from "@/components/HomePage";

const contentDir = path.join(process.cwd(), "content");

export async function getHomeContent(): Promise<{ data: HeroContent; content: string }> {
  const file = path.join(contentDir, "pages", "home.md");
  const raw = await fs.readFile(file, "utf8");
  const parsed = matter(raw);
  return { data: parsed.data as HeroContent, content: parsed.content };
}

export async function getNewsItems(limit?: number): Promise<NewsItem[]> {
  const newsDir = path.join(contentDir, "news");
  const files = await fs.readdir(newsDir);
  const newsItems: NewsItem[] = [];

  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(newsDir, file);
      const raw = await fs.readFile(filePath, "utf8");
      const parsed = matter(raw);
      const slug = path.basename(file, '.md');
      newsItems.push({
        ...parsed.data as Omit<NewsItem, 'slug'>,
        slug,
        body: parsed.content,
      });
    }
  }

  const sorted = newsItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit ? sorted.slice(0, limit) : sorted;
}

export async function getPageContent(slug: string): Promise<{ title: string; content: string; data: any }> {
  const pagesDir = path.join(contentDir, "pages");
  const file = path.join(pagesDir, `${slug}.md`);
  try {
    const raw = await fs.readFile(file, "utf8");
    const parsed = matter(raw);
    return {
      title: parsed.data.title || slug,
      content: parsed.content,
      data: parsed.data,
    };
  } catch {
    throw new Error(`Page not found: ${slug}`);
  }
}
