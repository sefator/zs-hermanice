import { getPageContent } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import MarkdownIt from "markdown-it";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const md = new MarkdownIt();

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const page = await getPageContent(`school/${slug}`);
    return createMetadata({
      title: `${page.title} - Škola`,
      description: page.data.summary || page.data.description || "Informace o škole ZŠ Heřmanice.",
      canonical: `/skola/${slug}`,
    });
  } catch {
    return createMetadata({
      title: "Stránka nenalezena - ZŠ Heřmanice",
      canonical: `/skola/${slug}`,
    });
  }
}

export default async function SchoolPage({ params }: { params: Params }) {
  const { slug } = await params;
  try {
    const page = await getPageContent(`school/${slug}`);
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:underline"
        >
          ← Zpět na hlavní stránku
        </Link>
        <article className="space-y-6">
          <header>
            <h1 className="text-4xl font-semibold text-[#1e1b16]">
              {page.title}
            </h1>
          </header>
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: md.render(page.content) }} />
          </div>
          {page.data.downloads && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Soubory ke stažení</h2>
              <ul className="space-y-2">
                {page.data.downloads.map((download: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={download.url}
                      className="inline-flex items-center gap-2 text-black hover:underline"
                    >
                      📄 {download.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    );
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const contentDir = path.join(process.cwd(), "content", "pages", "school");
  const files = await fs.readdir(contentDir);
  const slugs = files.filter(f => f.endsWith('.md')).map(f => path.basename(f, '.md'));
  return slugs.map((slug) => ({ slug }));
}