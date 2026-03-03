import { getPageContent } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

type Params = Promise<{ slug: string }>;

export default async function ContactPage({ params }: { params: Params }) {
  const { slug } = await params;
  try {
    const page = await getPageContent(`contact/${slug}`);
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
  const contentDir = path.join(process.cwd(), "content", "pages", "contact");
  const files = await fs.readdir(contentDir);
  const slugs = files.filter(f => f.endsWith('.md')).map(f => path.basename(f, '.md'));
  return slugs.map((slug) => ({ slug }));
}