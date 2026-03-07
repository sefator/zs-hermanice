import Image from "next/image";
import Link from "next/link";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export type HeroContent = {
  title: string;
  lead: string;
  heroImage?: string;
  cta?: { label: string; link: string };
  quickLinks?: { title: string; link: string }[];
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
  hero: { data: HeroContent; content: string };
  news: NewsItem[];
};

export function HomePage({ hero: { data, content }, news }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white text-brand-900 font-body">
      {/* Hero Section */}
      <section className="relative bg-brand-900 overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 z-0">
           <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[130%] rounded-full bg-brand-800/50 blur-3xl" />
           <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-600/20 blur-3xl rounded-full" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
                {data.title}
              </h1>
              <p className="text-lg sm:text-xl text-brand-100 leading-relaxed font-light">
                {data.lead}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {data.cta && (
                  <Link
                    href={data.cta.link}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-accent-700 hover:shadow-glow hover:-translate-y-0.5"
                  >
                    {data.cta.label}
                  </Link>
                )}
                <Link
                  href="/kontakt/na-skolu"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/20 hover:-translate-y-0.5"
                >
                  Kontakt
                </Link>
              </div>
            </div>
            
            {data.heroImage && (
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={data.heroImage}
                    alt="Školní život"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-brand-700 font-bold uppercase tracking-wider">Kvalitní výuka</p>
                    <p className="text-brand-900 font-bold">Pro moderní život</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links / Vyber si obor */}
      {data.quickLinks && data.quickLinks.length > 0 && (
        <section className="relative -mt-10 z-20 mx-auto max-w-7xl px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {data.quickLinks.map((link) => (
              <Link key={link.title} href={link.link} className="group relative bg-white p-6 rounded-2xl shadow-soft border border-brand-50 flex flex-col items-center justify-center text-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center group-hover:bg-accent-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
                <h3 className="font-bold text-brand-900">{link.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Novinky ze školy */}
      {news && news.length > 0 && (
        <section className="py-16 md:py-24 bg-brand-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 mb-4">Novinky ze školy</h2>
                <p className="text-brand-600 text-lg">Aktuální dění, akce a důležité informace z našeho školního života.</p>
              </div>
              <Link href="/aktuality" className="inline-flex items-center gap-2 font-bold text-accent-700 hover:text-accent-800 transition-colors">
                Všechny aktuality <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((item) => (
                <Link key={item.slug} href={`/aktuality/${item.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-soft border border-brand-100 hover:shadow-xl transition-shadow">
                  {item.coverImage && (
                    <div className="relative aspect-video overflow-hidden bg-brand-100">
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-grow p-6 md:p-8">
                    <time className="text-sm font-bold text-accent-700 uppercase tracking-wider mb-3">
                      {new Date(item.date).toLocaleDateString("cs-CZ", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric"
                      })}
                    </time>
                    <h3 className="text-xl font-display font-bold text-brand-900 mb-4 group-hover:text-accent-700 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-600 line-clamp-3 mb-6">
                      {item.summary}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-bold text-brand-900 group-hover:text-accent-700">
                      Číst více <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Proč si vybrat naši školu (Projects mapped as features) */}
      {data.projects && data.projects.length > 0 && (
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-900 mb-6">Proč si vybrat naši školu?</h2>
              <p className="text-xl text-brand-600">Zakládáme si na hodnotách, které připraví děti nejen na další studium, ale především na život.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.projects.map((project, i) => (
                <div key={project.title} className="bg-white rounded-2xl p-8 shadow-soft border border-brand-50 hover:-translate-y-1 transition-transform relative overflow-hidden group">
                  {/* Decorative number */}
                  <div className="absolute -top-4 -right-4 text-8xl font-display font-black text-brand-50/50 group-hover:text-accent-50 transition-colors z-0">
                    0{i + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-900 mb-4">{project.title}</h3>
                    <p className="text-brand-600 leading-relaxed">{project.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-600/20 blur-3xl rounded-full" />
          
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Prověřeno rodiči a žáky</h2>
              <p className="text-brand-200 text-lg">Co o nás říkají lidé, kterým záleží na budoucnosti svých dětí.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {data.testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col gap-6">
                  <svg className="w-10 h-10 text-accent-500 opacity-50" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>
                  <p className="text-lg leading-relaxed font-light italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/10">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover border-2 border-accent-500"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-brand-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Teasers */}
      {data.galleryTeasers && data.galleryTeasers.length > 0 && (
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 mb-4">Školní život v obrazech</h2>
                <p className="text-brand-600 text-lg">Podívejte se, jak to u nás vypadá.</p>
              </div>
              <Link href="/fotogalerie/2025-2026" className="inline-flex items-center gap-2 font-bold text-accent-700 hover:text-accent-800 transition-colors">
                Přejít do galerie <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {data.galleryTeasers.map((teaser) => (
                <Link
                  key={teaser.title}
                  href={teaser.link}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft"
                >
                  <Image
                    src={teaser.image}
                    alt={teaser.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-bold">{teaser.title}</p>
                    <p className="text-white/80 text-xs mt-1">
                      {new Date(teaser.date).toLocaleDateString("cs-CZ", { year: "numeric", month: "long" })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sponsors */}
      {data.sponsors && data.sponsors.length > 0 && (
        <section className="py-16 bg-white border-t border-brand-50">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-center text-brand-700 font-bold uppercase tracking-widest text-sm mb-10">
              Naši partneři a sponzoři
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {data.sponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex flex-col items-center gap-3">
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-[60px] w-auto"
                    />
                  ) : (
                    <span className="font-display font-bold text-xl text-brand-900">{sponsor.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {content && (
        <section className="py-20 md:py-32 bg-brand-50 border-t border-brand-100">
          <div className="mx-auto max-w-4xl px-6 prose prose-lg prose-brand">
            <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
          </div>
        </section>
      )}
    </div>
  );
}
