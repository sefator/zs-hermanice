import { searchContent } from "@/lib/search";
import Link from "next/link";

type SearchParams = Promise<{ q?: string }>;

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const { q } = await searchParams;
  const results = q ? await searchContent(q, 20) : [];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold">Vyhledávání</h1>
      <form method="GET" className="mb-8 flex gap-2">
        <input
          type="text"
          name="q"
          defaultValue={q || ""}
          placeholder="Zadejte vyhledávaný výraz..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-clay-500 focus:outline-none"
        />
        <button type="submit" className="rounded-lg bg-clay-500 px-6 py-2 text-white hover:bg-clay-600">
          Hledat
        </button>
      </form>
      {!q ? (
        <p>Zadejte výraz pro vyhledávání.</p>
      ) : results.length === 0 ? (
        <p>Nic jsme nenašli pro "{q}". Zkuste jiný výraz.</p>
      ) : (
        <div className="space-y-4">
          <p>{results.length} výsledků pro "{q}"</p>
          {results.map((result) => (
            <article key={result.id} className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 text-xs font-semibold uppercase tracking-wide rounded ${result.type === 'news' ? 'bg-clay-100 text-clay-800' : 'bg-slate-100 text-slate-800'}`}>
                  {result.type === 'news' ? 'Aktuality' : 'Stránka'}
                </span>
                {result.date && (
                  <span className="text-xs text-gray-500">
                    {new Date(result.date).toLocaleDateString("cs-CZ")}
                  </span>
                )}
              </div>
              <h2 className="text-lg font-semibold text-[#1e1b16]">
                <Link href={result.url} className="hover:underline">
                  {result.title}
                </Link>
              </h2>
              <p className="text-sm text-[#4c443a] mt-1">{result.snippet}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}