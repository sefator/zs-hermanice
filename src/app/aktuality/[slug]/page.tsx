import { getNewsItems } from "@/lib/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

type Params = Promise<{ slug: string }>;

export default async function NewsDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const items = await getNewsItems();
  const item = items.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/aktuality"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-clay-500 hover:underline"
      >
        ← Zpět na aktuality
      </Link>
      <article className="space-y-6">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-clay-500">
            {new Date(item.date).toLocaleDateString("cs-CZ", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-[#1e1b16]">
            {item.title}
          </h1>
        </header>
        {item.coverImage && (
          <Image
            src={item.coverImage}
            alt={item.title}
            width={800}
            height={400}
            className="w-full rounded-2xl object-cover"
          />
        )}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[#4c443a]">{item.summary}</p>
          {item.body && <div dangerouslySetInnerHTML={{ __html: md.render(item.body) }} />}
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const items = await getNewsItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}