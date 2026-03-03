import { getPageContent } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

type Params = Promise<{ slug: string }>;

export default async function GalleryPage({ params }: { params: Params }) {
  const { slug } = await params;
  try {
    const page = await getPageContent(`gallery/${slug}`);
    return (
      <div className="mx-auto max-w-6xl px-6 py-16">
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
          {page.data.images && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.data.images.map((img: { src: string; alt: string }, index: number) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg border">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
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
  const contentDir = path.join(process.cwd(), "content", "pages", "gallery");
  const files = await fs.readdir(contentDir);
  const slugs = files.filter(f => f.endsWith('.md')).map(f => path.basename(f, '.md'));
  return slugs.map((slug) => ({ slug }));
}