"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Nav() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/vyhledavani?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <nav className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            ZŠ Heřmanice
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-white hover:underline">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/skola/organizace-skolniho-roku" className="text-white hover:underline">
                  Škola
                </Link>
              </li>
              <li>
                <Link href="/druzina/druzina" className="text-white hover:underline">
                  Družina ⁄ kroužky
                </Link>
              </li>
              <li>
                <Link href="/kontakt/na-skolu" className="text-white hover:underline">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/aktuality" className="text-white hover:underline">
                  Aktuality
                </Link>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Vyhledat..."
                className="rounded px-2 py-1 text-black"
              />
              <button type="submit" className="text-white hover:underline">Hledat</button>
            </form>
          </div>
          <div className="md:hidden">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Vyhledat..."
                className="rounded px-2 py-1 text-black"
              />
              <button type="submit" className="text-white hover:underline">Hledat</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}