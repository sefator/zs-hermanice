import Image from "next/image";
import Link from "next/link";

export type HeroContent = {
  title: string;
  lead: string;
  heroImage?: string;
  cta?: { label: string; link: string };
  sections?: { heading: string; body: string }[];
  galleryTeasers?: { title: string; date: string; image: string; link: string }[];
  projects?: { title: string; summary: string; image: string }[];
  testimonials?: { name: string; role: string; quote: string; photo: string }[];
  schoolImages?: { image: string; alt: string }[];
  recentNews?: { title: string; date: string; summary: string; image: string; link: string }[];
  sponsors?: { name: string; logo?: string; link?: string }[];
};

export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  slug: string;
  coverImage?: string;
  tags?: string[];
  body?: string;
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
                className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/30 transition hover:-translate-y-0.5"
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

        {hero.galleryTeasers && (
          <section aria-labelledby="gallery-heading" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-clay-500">
                  Fotogalerie
                </p>
                <h2 id="gallery-heading" className="text-3xl font-semibold">Školní život v obrazech</h2>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-5">
              {hero.galleryTeasers.map((teaser) => (
                <Link
                  key={teaser.title}
                  href={teaser.link}
                  className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-sm"
                >
                  <Image
                    src={teaser.image}
                    alt={teaser.title}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-semibold">{teaser.title}</p>
                    <p className="text-xs">
                      {new Date(teaser.date).toLocaleDateString("cs-CZ", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {hero.projects && (
          <section aria-labelledby="projects-heading" className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-clay-500">
                Školní projekty
              </p>
              <h2 id="projects-heading" className="text-3xl font-semibold">Naše hodnoty a aktivity</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {hero.projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-white/80 bg-white/80 p-6 shadow-sm"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={150}
                    className="w-full rounded-lg object-cover"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-clay-500">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4c443a]">
                    {project.summary}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {hero.testimonials && (
          <section aria-labelledby="testimonials-heading" className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-clay-500">
                Reference
              </p>
              <h2 id="testimonials-heading" className="text-3xl font-semibold">Co říkají rodiče</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {hero.testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-2xl border border-white/80 bg-white/80 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-clay-500">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-[#4c443a]">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-sm italic text-[#4c443a]">
                    "{testimonial.quote}"
                  </blockquote>
                </article>
              ))}
            </div>
          </section>
        )}

        {hero.schoolImages && (
          <section aria-labelledby="school-images-heading" className="space-y-6">
            <div>
              <h2 id="school-images-heading" className="text-3xl font-semibold">Škola v obrazech</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-7">
              {hero.schoolImages.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg border border-white/60 bg-white shadow-sm"
                >
                  <Image
                    src={img.image}
                    alt={img.alt}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {hero.recentNews && (
          <section aria-labelledby="recent-news-heading" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-clay-500">
                  Aktuality
                </p>
                <h2 id="recent-news-heading" className="text-3xl font-semibold">Život ve škole</h2>
              </div>
              <Link
                href="/aktuality"
                className="text-sm font-semibold text-clay-500 underline-offset-4 hover:underline"
              >
                Všechny novinky
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {hero.recentNews.map((item) => (
                <article
                  key={item.title}
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
                      href={item.link}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-500"
                    >
                      Číst více →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {hero.sponsors && (
          <section aria-labelledby="sponsors-heading" className="space-y-6">
            <div>
              <h2 id="sponsors-heading" className="text-3xl font-semibold">Naši sponzoři</h2>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              {hero.sponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex flex-col items-center gap-2">
                  {sponsor.logo && (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={100}
                      height={60}
                      className="object-contain"
                    />
                  )}
                  <p className="text-sm font-semibold text-clay-500">
                    {sponsor.link ? (
                      <Link href={sponsor.link} className="text-clay-500 hover:underline">
                        {sponsor.name}
                      </Link>
                    ) : (
                      sponsor.name
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
