"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Nav() {
  const [query, setQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [subOpen, setSubOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSkolaOpen, setMobileSkolaOpen] = useState(false);
  const [mobileUredniOpen, setMobileUredniOpen] = useState(false);
  const [mobileKontaktOpen, setMobileKontaktOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/vyhledavani?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-black text-white">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            ZŠ Heřmanice
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-6">
              <li className="relative group">
                <button className="text-white hover:underline flex items-center">
                  Škola
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li><Link href="/skola/organizace-skolniho-roku" className="block px-4 py-2 hover:bg-gray-100">Organizace školního roku</Link></li>
                  <li><Link href="/aktuality" className="block px-4 py-2 hover:bg-gray-100">Aktuality</Link></li>
                  <li><Link href="/skola/dokumenty-skoly" className="block px-4 py-2 hover:bg-gray-100">Dokumenty školy</Link></li>
                  <li><Link href="/skola/stravovani" className="block px-4 py-2 hover:bg-gray-100">Stravování</Link></li>
                  <li><Link href="/skola/zapis-do-1-tridy" className="block px-4 py-2 hover:bg-gray-100">Zápis do 1. třídy</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/druzina/druzina" className="text-white hover:underline">
                  Družina ⁄ kroužky
                </Link>
              </li>
              <li className="relative group">
                <button className="text-white hover:underline flex items-center">
                  Úřední deska
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li><Link href="/uredni-deska/skolni-vzdelavaci-program" className="block px-4 py-2 hover:bg-gray-100">Školní vzdělávací program</Link></li>
                  <li className="relative group/sub">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between">
                      Řády a směrnice
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <ul className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <li><Link href="/uredni-deska/rady-a-smernice" className="block px-4 py-2 hover:bg-gray-100">Školní řád</Link></li>
                      <li><Link href="/uredni-deska/rady-a-smernice/klasifikacni-rad" className="block px-4 py-2 hover:bg-gray-100">Klasifikační řád</Link></li>
                      <li><Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-druziny" className="block px-4 py-2 hover:bg-gray-100">Vnitřní řád školní družiny</Link></li>
                      <li><Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-jidelny-vydejny" className="block px-4 py-2 hover:bg-gray-100">Vnitřní řád školní jídelny</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/uredni-deska/preventivni-programy" className="block px-4 py-2 hover:bg-gray-100">Preventivní programy</Link></li>
                  <li><Link href="/uredni-deska/gdpr" className="block px-4 py-2 hover:bg-gray-100">GDPR</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/fotogalerie/2025-2026" className="text-white hover:underline">
                  FOTOGALERIE
                </Link>
              </li>
              <li className="relative group">
                <button className="text-white hover:underline flex items-center">
                  Kontakt
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li><Link href="/kontakt/na-skolu" className="block px-4 py-2 hover:bg-gray-100">Na školu</Link></li>
                  <li><Link href="/kontakt/pedagogicky-tym" className="block px-4 py-2 hover:bg-gray-100">Pedagogický tým</Link></li>
                  <li><Link href="/kontakt/e-podatelna" className="block px-4 py-2 hover:bg-gray-100">E-podatelna</Link></li>
                  <li><Link href="/kontakt/povinne-informace" className="block px-4 py-2 hover:bg-gray-100">Povinné informace</Link></li>
                </ul>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="hidden xl:flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Hledaný výraz"
                className="rounded px-2 py-1 text-black"
              />
              <button type="submit" className="text-white hover:underline">Hledat</button>
            </form>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Otevřít menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white text-black h-full p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <Link href="/" className="text-xl font-bold" onClick={() => setMobileMenuOpen(false)}>
                ZŠ Heřmanice
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-black focus:outline-none"
                aria-label="Zavřít menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setMobileSkolaOpen(!mobileSkolaOpen)}
                  className="flex items-center justify-between w-full text-left font-semibold"
                >
                  Škola
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileSkolaOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSkolaOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li><Link href="/skola/organizace-skolniho-roku" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Organizace školního roku</Link></li>
                    <li><Link href="/aktuality" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Aktuality</Link></li>
                    <li><Link href="/skola/dokumenty-skoly" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Dokumenty školy</Link></li>
                    <li><Link href="/skola/stravovani" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Stravování</Link></li>
                    <li><Link href="/skola/zapis-do-1-tridy" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Zápis do 1. třídy</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/druzina/druzina" className="block font-semibold hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  Družina ⁄ kroužky
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setMobileUredniOpen(!mobileUredniOpen)}
                  className="flex items-center justify-between w-full text-left font-semibold"
                >
                  Úřední deska
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileUredniOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileUredniOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li><Link href="/uredni-deska/skolni-vzdelavaci-program" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Školní vzdělávací program</Link></li>
                    <li>
                      <button
                        onClick={() => setMobileSubOpen(!mobileSubOpen)}
                        className="flex items-center justify-between w-full text-left py-1 hover:underline"
                      >
                        Řády a směrnice
                        <svg
                          className={`w-3 h-3 transition-transform ${mobileSubOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      {mobileSubOpen && (
                        <ul className="ml-4 mt-1 space-y-1">
                          <li><Link href="/uredni-deska/rady-a-smernice" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Školní řád</Link></li>
                          <li><Link href="/uredni-deska/rady-a-smernice/klasifikacni-rad" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Klasifikační řád</Link></li>
                          <li><Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-druziny" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Vnitřní řád školní družiny</Link></li>
                          <li><Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-jidelny-vydejny" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Vnitřní řád školní jídelny</Link></li>
                        </ul>
                      )}
                    </li>
                    <li><Link href="/uredni-deska/preventivni-programy" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Preventivní programy</Link></li>
                    <li><Link href="/uredni-deska/gdpr" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>GDPR</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/fotogalerie/2025-2026" className="block font-semibold hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  FOTOGALERIE
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setMobileKontaktOpen(!mobileKontaktOpen)}
                  className="flex items-center justify-between w-full text-left font-semibold"
                >
                  Kontakt
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileKontaktOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileKontaktOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li><Link href="/kontakt/na-skolu" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Na školu</Link></li>
                    <li><Link href="/kontakt/pedagogicky-tym" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Pedagogický tým</Link></li>
                    <li><Link href="/kontakt/e-podatelna" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>E-podatelna</Link></li>
                    <li><Link href="/kontakt/povinne-informace" className="block py-1 hover:underline" onClick={() => setMobileMenuOpen(false)}>Povinné informace</Link></li>
                  </ul>
                )}
              </li>
            </ul>
            <form onSubmit={(e) => { handleSubmit(e); setMobileMenuOpen(false); }} className="mt-6 flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Hledaný výraz"
                className="flex-1 rounded px-2 py-1 text-black border"
              />
              <button type="submit" className="bg-black text-white px-4 py-1 rounded">Hledat</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <nav className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            ZŠ Heřmanice
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-6">
              <li className="relative group">
                <button className="text-white hover:underline flex items-center">
                  Škola
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li><Link href="/skola/organizace-skolniho-roku" className="block px-4 py-2 hover:bg-gray-100">Organizace školního roku</Link></li>
                  <li><Link href="/aktuality" className="block px-4 py-2 hover:bg-gray-100">Aktuality</Link></li>
                  <li><Link href="/skola/dokumenty-skoly" className="block px-4 py-2 hover:bg-gray-100">Dokumenty školy</Link></li>
                  <li><Link href="/skola/stravovani" className="block px-4 py-2 hover:bg-gray-100">Stravování</Link></li>
                  <li><Link href="/skola/zapis-do-1-tridy" className="block px-4 py-2 hover:bg-gray-100">Zápis do 1. třídy</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/druzina/druzina" className="text-white hover:underline">
                  Družina ⁄ kroužky
                </Link>
              </li>
              <li className="relative group">
                <button className="text-white hover:underline flex items-center">
                  Úřední deska
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li><Link href="/uredni-deska/skolni-vzdelavaci-program" className="block px-4 py-2 hover:bg-gray-100">Školní vzdělávací program</Link></li>
                  <li className="relative group/sub">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between">
                      Řády a směrnice
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <ul className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <li><Link href="/uredni-deska/rady-a-smernice" className="block px-4 py-2 hover:bg-gray-100">Školní řád</Link></li>
                      <li><Link href="/uredni-deska/rady-a-smernice/klasifikacni-rad" className="block px-4 py-2 hover:bg-gray-100">Klasifikační řád</Link></li>
                      <li><Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-druziny" className="block px-4 py-2 hover:bg-gray-100">Vnitřní řád školní družiny</Link></li>
                      <li><Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-jidelny-vydejny" className="block px-4 py-2 hover:bg-gray-100">Vnitřní řád školní jídelny</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/uredni-deska/preventivni-programy" className="block px-4 py-2 hover:bg-gray-100">Preventivní programy</Link></li>
                  <li><Link href="/uredni-deska/gdpr" className="block px-4 py-2 hover:bg-gray-100">GDPR</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/fotogalerie/2025-2026" className="text-white hover:underline">
                  FOTOGALERIE
                </Link>
              </li>
              <li className="relative group">
                <button className="text-white hover:underline flex items-center">
                  Kontakt
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li><Link href="/kontakt/na-skolu" className="block px-4 py-2 hover:bg-gray-100">Na školu</Link></li>
                  <li><Link href="/kontakt/pedagogicky-tym" className="block px-4 py-2 hover:bg-gray-100">Pedagogický tým</Link></li>
                  <li><Link href="/kontakt/e-podatelna" className="block px-4 py-2 hover:bg-gray-100">E-podatelna</Link></li>
                  <li><Link href="/kontakt/povinne-informace" className="block px-4 py-2 hover:bg-gray-100">Povinné informace</Link></li>
                </ul>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Hledaný výraz"
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
                placeholder="Hledaný výraz"
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