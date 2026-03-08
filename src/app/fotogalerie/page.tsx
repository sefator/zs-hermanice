import Link from "next/link";
import Image from "next/image";
import { getGalleries } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    title: "Fotogalerie - ZŠ Heřmanice",
    description: "Fotografie z našich školních akcí a každodenního života.",
    canonical: "/fotogalerie",
  });
}

export default async function FotogaleriePage() {
  const galleries = await getGalleries();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold">Fotogalerie</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleries.map((gallery) => (
          <article
            key={gallery.slug}
            className="flex h-full flex-col rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm"
          >
            {gallery.images && gallery.images.length > 0 && (
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={gallery.images[0].src}
                  alt={gallery.images[0].alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h2 className="text-lg font-semibold text-[#1e1b16]">
              {gallery.title}
            </h2>
            <p className="mt-2 text-sm text-[#4c443a]">{gallery.description}</p>
            <div className="mt-auto">
              <Link
                href={`/fotogalerie/${gallery.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-500"
              >
                Zobrazit galerii →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}