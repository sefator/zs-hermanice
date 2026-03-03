import Image from "next/image";
import Link from "next/link";

export type HeroContent = {
  title: string;
  lead: string;
  heroImage?: string;
  cta?: { label: string; link: string };
  sections?: { heading: string; body: string }[];
};

export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  slug: string;
  coverImage?: string;
};

type HomePageProps = {
  hero: HeroContent;
  news: NewsItem[];
};

export function HomePage({ hero, news }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clay-50 via-white to-clay-100 text-[#1e1b16]">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
        <header className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-clay-500">
              ZŠ Heřmanice
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {hero.title}
            </h1>
            <p className="text-lg text-[#5c5145]">{hero.lead}</p>
            {hero.cta && (
              <Link
                href={hero.cta.link}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-clay-500/30 transition hover:-translate-y-0.5"
              >
                {hero.cta.label}
              </Link>
            )}
          </div>
          {hero.heroImage && (
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <Image
                src={hero.heroImage}
                alt="Školní život"
                width={600}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          )}
        </header>

        {hero.sections && (
          <section className="grid gap-6 md:grid-cols-3">
            {hero.sections.map((section) => (
              <article
                key={section.heading}
                className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-clay-500">
                  {section.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4c443a]">
                  {section.body}
                </p>
              </article>
            ))}
          </section>
        )}

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-clay-500">
                Aktuality
              </p>
              <h2 className="text-3xl font-semibold">Život ve škole</h2>
            </div>
            <Link
              href="/aktuality"
              className="text-sm font-semibold text-clay-500 underline-offset-4 hover:underline"
            >
              Všechny novinky
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {news.map((item) => (
              <article
                key={item.slug}
                className="flex h-full flex-col rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-500">
                  {new Date(item.date).toLocaleDateString("cs-CZ", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#1e1b16]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#4c443a]">{item.summary}</p>
                <div className="mt-auto">
                  <Link
                    href={`/aktuality/${item.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-500"
                  >
                    Číst více →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
