import { describe, it, expect, vi, beforeEach } from "vitest";
import { searchContent, clearCache } from "./search";

vi.mock("node:fs/promises");
vi.mock("./content");

import fs from "node:fs/promises";
import { getNewsItems } from "./content";

describe("searchContent", () => {
  beforeEach(() => {
    clearCache();
    vi.clearAllMocks();
  });

  it("returns empty for short query", async () => {
    const results = await searchContent("a");
    expect(results).toEqual([]);
  });

  it("scores title matches higher than body", async () => {
    const mockNews = [
      {
        slug: "test-news",
        title: "Test Title",
        summary: "summary",
        body: "body content",
        date: "2023-01-01",
      },
    ];
    const mockPages: any[] = [];

    (getNewsItems as any).mockResolvedValue(mockNews);
    (fs.readdir as any).mockResolvedValue([]);

    const results = await searchContent("test");
    expect(results.length).toBe(1);
    expect(results[0].score).toBeGreaterThan(0);
  });

  it("returns results with correct URLs", async () => {
    const mockNews = [
      {
        slug: "news-slug",
        title: "News Title",
        summary: "summary",
        body: "body",
        date: "2023-01-01",
      },
    ];
    (getNewsItems as any).mockResolvedValue(mockNews);
    (fs.readdir as any).mockResolvedValue([]);

    const results = await searchContent("news");
    expect(results[0].url).toBe("/aktuality/news-slug");
  });

  it("extracts snippet with query", async () => {
    const mockNews = [
      {
        slug: "test",
        title: "Title",
        summary: "summary with test word",
        body: "body",
        date: "2023-01-01",
      },
    ];
    (getNewsItems as any).mockResolvedValue(mockNews);
    (fs.readdir as any).mockResolvedValue([]);

    const results = await searchContent("test");
    expect(results[0].snippet).toContain("test");
  });
});