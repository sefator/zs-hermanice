import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { getNewsItems } from "./content";

export type SearchRecord = {
  id: string;
  type: "news" | "page";
  title: string;
  summary: string;
  body: string;
  url: string;
  date?: string;
};

export type SearchResult = SearchRecord & {
  snippet: string;
  score: number;
};

let cachedRecords: SearchRecord[] | null = null;
let cacheTime = 0;
const CACHE_DURATION = 60000; // 1 min

export function clearCache() {
  cachedRecords = null;
  cacheTime = 0;
}

async function getAllRecords(): Promise<SearchRecord[]> {
  if (cachedRecords && Date.now() - cacheTime < CACHE_DURATION) return cachedRecords;
  const [news, pages] = await Promise.all([loadNewsRecords(), loadPageRecords()]);
  cachedRecords = [...news, ...pages];
  cacheTime = Date.now();
  return cachedRecords;
}

async function loadNewsRecords(): Promise<SearchRecord[]> {
  const news = await getNewsItems();
  return news.map((item) => ({
    id: item.slug,
    type: "news",
    title: item.title,
    summary: item.summary,
    body: item.body || "",
    url: `/aktuality/${item.slug}`,
    date: item.date,
  }));
}

async function loadPageRecords(): Promise<SearchRecord[]> {
  const contentDir = path.join(process.cwd(), "content", "pages");
  const records: SearchRecord[] = [];

  async function walk(dir: string, prefix: string = ""): Promise<void> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath, prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const slug = prefix ? `${prefix}/${path.basename(entry.name, '.md')}` : path.basename(entry.name, '.md');
        try {
          const raw = await fs.readFile(fullPath, "utf8");
          const parsed = matter(raw);
          const url = buildUrlForPage(slug);
          records.push({
            id: slug,
            type: "page",
            title: parsed.data.title || slug,
            summary: parsed.data.summary || "",
            body: parsed.content,
            url,
            date: parsed.data.date,
          });
        } catch (e) {
          console.error(`Error loading ${fullPath}:`, e);
        }
      }
    }
  }

  await walk(contentDir);
  return records;
}

function buildUrlForPage(slug: string): string {
  if (slug.startsWith("school/")) return `/skola/${slug.slice(7)}`;
  if (slug.startsWith("druzina/")) return `/druzina/${slug.slice(8)}`;
  if (slug.startsWith("contact/")) return `/kontakt/${slug.slice(8)}`;
  if (slug.startsWith("official/")) return `/uredni-deska/${slug.slice(9)}`;
  if (slug.startsWith("gallery/")) return `/fotogalerie/${slug.slice(8)}`;
  return `/skola/${slug}`;
}

export async function searchContent(query: string, limit = 20): Promise<SearchResult[]> {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const tokens = q.split(/\s+/);
  const records = await getAllRecords();
  const results: SearchResult[] = [];
  for (const record of records) {
    const score = calculateScore(record, tokens);
    if (score > 0) {
      const snippet = extractSnippet(record, q);
      results.push({
        ...record,
        score,
        snippet,
      });
    }
  }
  results.sort((a, b) => b.score - a.score || (a.date && b.date ? new Date(b.date).getTime() - new Date(a.date).getTime() : a.title.localeCompare(b.title)));
  return results.slice(0, limit);
}

function calculateScore(record: SearchRecord, tokens: string[]): number {
  let score = 0;
  const titleLower = record.title.toLowerCase();
  const summaryLower = record.summary.toLowerCase();
  const bodyLower = record.body.toLowerCase();
  for (const token of tokens) {
    if (titleLower.includes(token)) score += 3;
    if (summaryLower.includes(token)) score += 2;
    if (bodyLower.includes(token)) score += 1;
  }
  return score;
}

function extractSnippet(record: SearchRecord, query: string): string {
  let text = record.body;
  if (!text || !text.toLowerCase().includes(query)) {
    text = record.summary;
  }
  if (!text) return "...";
  const lowerText = text.toLowerCase();
  const idx = lowerText.indexOf(query);
  if (idx === -1) return text.slice(0, 100) + "...";
  const start = Math.max(0, idx - 50);
  const end = Math.min(text.length, idx + 50 + query.length);
  return "..." + text.slice(start, end) + "...";
}