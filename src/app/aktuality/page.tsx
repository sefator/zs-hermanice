import Link from "next/link";
import { getNewsItems } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    title: "Aktuality - ZŠ Heřmanice",
    description: "Aktuální dění, akce a důležité informace z našeho školního života.",
    canonical: "/aktuality",
  });
}

export default async function AktualitaPage() {
  const news = await getNewsItems();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold">Aktuality</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="mt-2 text-lg font-semibold text-[#1e1b16]">
              {item.title}
            </h2>
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
    </div>
  );
}