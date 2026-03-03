import { getPageContent } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

type Params = Promise<{ slug: string[] }>;

export default async function OfficialPage({ params }: { params: Params }) {
  const { slug } = await params;
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug;
  try {
    const page = await getPageContent(`official/${slugPath}`);
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
  const slugs = [
    { slug: ["gdpr"] },
    { slug: ["preventivni-programy"] },
    { slug: ["rady-a-smernice", "vnitrni-rad-skolni-jidelny-vydejny"] },
    { slug: ["rady-a-smernice", "vnitrni-rad-skolni-druziny"] },
    { slug: ["rady-a-smernice", "klasifikacni-rad"] },
    { slug: ["rady-a-smernice", "skolni-rad"] },
    { slug: ["rady-a-smernice"] },
    { slug: ["skolni-vzdelavaci-program"] }
  ];
  return slugs;
}