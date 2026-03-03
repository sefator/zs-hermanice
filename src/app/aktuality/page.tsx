import { getNewsItems } from "@/lib/content";

export default async function NewsPage() {
  const items = await getNewsItems();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-semibold text-[#1e1b16]">Aktuality</h1>
      <div className="mt-10 space-y-8">
        {items.map((item) => (
          <article
            key={item.slug}
            className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#c26a32]">
              {new Date(item.date).toLocaleDateString("cs-CZ", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-[#4c443a]">{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
