"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Nav() {
  const [query, setQuery] = useState("");
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

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white text-brand-900 font-body">
      {/* Utility Bar */}
      <div className="bg-brand-900 text-white py-1.5 px-6 hidden lg:block text-sm">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              skola@hermaniceuoder.cz
            </span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/kontakt/e-podatelna" className="hover:text-accent-300 transition-colors">E-podatelna</Link>
            <Link href="/skola/stravovani" className="hover:text-accent-300 transition-colors">Jídelna</Link>
            <Link href="https://bakalari.cz" target="_blank" className="hover:text-accent-300 transition-colors">Bakaláři</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent-600 flex items-center justify-center text-white font-display font-bold text-xl group-hover:bg-accent-700 transition-colors">
              H
            </div>
            <span className="text-2xl font-display font-bold text-brand-900 tracking-tight">
              ZŠ Heřmanice
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center h-full">
            <ul className="flex h-full font-medium text-brand-900">
              <li className="relative group h-full flex items-center px-4">
                <button className="flex items-center hover:text-accent-700 transition-colors py-2">
                  Škola
                  <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 top-full mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2 overflow-hidden">
                  <Link href="/skola/organizace-skolniho-roku" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Organizace školního roku</Link>
                  <Link href="/aktuality" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Aktuality</Link>
                  <Link href="/skola/dokumenty-skoly" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Dokumenty školy</Link>
                  <Link href="/skola/stravovani" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Stravování</Link>
                  <Link href="/skola/zapis-do-1-tridy" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Zápis do 1. třídy</Link>
                </div>
              </li>
              <li className="h-full flex items-center px-4">
                <Link href="/druzina/druzina" className="hover:text-accent-700 transition-colors py-2">
                  Družina
                </Link>
              </li>
              <li className="relative group h-full flex items-center px-4">
                <button className="flex items-center hover:text-accent-700 transition-colors py-2">
                  Úřední deska
                  <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 top-full mt-0 w-72 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2 overflow-visible">
                  <Link href="/uredni-deska/skolni-vzdelavaci-program" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Školní vzdělávací program</Link>
                  <div className="relative group/sub">
                    <button className="w-full text-left px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm flex items-center justify-between">
                      Řády a směrnice
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute left-[calc(100%-8px)] top-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 flex flex-col py-2">
                      <Link href="/uredni-deska/rady-a-smernice" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Školní řád</Link>
                      <Link href="/uredni-deska/rady-a-smernice/klasifikacni-rad" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Klasifikační řád</Link>
                      <Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-druziny" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Vnitřní řád školní družiny</Link>
                      <Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-jidelny-vydejny" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Vnitřní řád školní jídelny</Link>
                    </div>
                  </div>
                  <Link href="/uredni-deska/preventivni-programy" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Preventivní programy</Link>
                  <Link href="/uredni-deska/gdpr" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">GDPR</Link>
                </div>
              </li>
              <li className="h-full flex items-center px-4">
                <Link href="/fotogalerie/2025-2026" className="hover:text-accent-700 transition-colors py-2">
                  Fotogalerie
                </Link>
              </li>
              <li className="relative group h-full flex items-center px-4">
                <button className="flex items-center hover:text-accent-700 transition-colors py-2">
                  Kontakt
                  <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute right-0 top-full mt-0 w-56 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2">
                  <Link href="/kontakt/na-skolu" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Na školu</Link>
                  <Link href="/kontakt/pedagogicky-tym" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Pedagogický tým</Link>
                  <Link href="/kontakt/e-podatelna" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">E-podatelna</Link>
                  <Link href="/kontakt/povinne-informace" className="px-5 py-2.5 hover:bg-brand-50 hover:text-accent-700 transition-colors text-sm">Povinné informace</Link>
                </div>
              </li>
            </ul>

            <div className="pl-6 ml-2 border-l border-gray-200 flex items-center gap-4">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Hledat..."
                  aria-label="Hledat"
                  className="rounded-full bg-brand-50 border-none px-4 py-2 pl-10 text-sm focus:ring-2 focus:ring-accent-500 w-48 transition-all"
                />
                <button type="submit" className="sr-only">Hledat</button>
                <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </form>
            </div>
          </div>
          
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-900 focus:outline-none p-2 rounded-md hover:bg-brand-50"
              aria-label="Otevřít menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-white z-40 lg:hidden overflow-y-auto border-t border-gray-100">
          <div className="p-6 pb-24">
            <form onSubmit={(e) => { handleSubmit(e); setMobileMenuOpen(false); }} className="relative mb-8">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Hledaný výraz..."
                aria-label="Hledaný výraz"
                className="w-full rounded-xl bg-brand-50 border-none px-4 py-3 pl-11 text-brand-900 focus:ring-2 focus:ring-accent-500"
              />
              <button type="submit" className="sr-only">Hledat</button>
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </form>
            
            <ul className="space-y-2 font-medium text-lg text-brand-900">
              <li>
                <button
                  onClick={() => setMobileSkolaOpen(!mobileSkolaOpen)}
                  className="flex items-center justify-between w-full text-left py-3 border-b border-gray-100"
                >
                  Škola
                  <svg className={`w-5 h-5 text-gray-400 transition-transform ${mobileSkolaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileSkolaOpen && (
                  <ul className="pl-4 mt-2 space-y-1 mb-4 text-base text-gray-600">
                    <li><Link href="/skola/organizace-skolniho-roku" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Organizace školního roku</Link></li>
                    <li><Link href="/aktuality" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Aktuality</Link></li>
                    <li><Link href="/skola/dokumenty-skoly" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Dokumenty školy</Link></li>
                    <li><Link href="/skola/stravovani" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Stravování</Link></li>
                    <li><Link href="/skola/zapis-do-1-tridy" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Zápis do 1. třídy</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/druzina/druzina" className="block py-3 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                  Družina
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setMobileUredniOpen(!mobileUredniOpen)}
                  className="flex items-center justify-between w-full text-left py-3 border-b border-gray-100"
                >
                  Úřední deska
                  <svg className={`w-5 h-5 text-gray-400 transition-transform ${mobileUredniOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileUredniOpen && (
                  <ul className="pl-4 mt-2 space-y-1 mb-4 text-base text-gray-600">
                    <li><Link href="/uredni-deska/skolni-vzdelavaci-program" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Školní vzdělávací program</Link></li>
                    <li>
                      <button
                        onClick={() => setMobileSubOpen(!mobileSubOpen)}
                        className="flex items-center justify-between w-full text-left py-2 text-gray-600"
                      >
                        Řády a směrnice
                        <svg className={`w-4 h-4 text-gray-400 transition-transform ${mobileSubOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </button>
                      {mobileSubOpen && (
                        <ul className="pl-4 mt-1 space-y-1 border-l-2 border-brand-100 text-sm">
                          <li><Link href="/uredni-deska/rady-a-smernice" className="block py-2 pl-2" onClick={() => setMobileMenuOpen(false)}>Školní řád</Link></li>
                          <li><Link href="/uredni-deska/rady-a-smernice/klasifikacni-rad" className="block py-2 pl-2" onClick={() => setMobileMenuOpen(false)}>Klasifikační řád</Link></li>
                          <li><Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-druziny" className="block py-2 pl-2" onClick={() => setMobileMenuOpen(false)}>Vnitřní řád školní družiny</Link></li>
                          <li><Link href="/uredni-deska/rady-a-smernice/vnitrni-rad-skolni-jidelny-vydejny" className="block py-2 pl-2" onClick={() => setMobileMenuOpen(false)}>Vnitřní řád školní jídelny</Link></li>
                        </ul>
                      )}
                    </li>
                    <li><Link href="/uredni-deska/preventivni-programy" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Preventivní programy</Link></li>
                    <li><Link href="/uredni-deska/gdpr" className="block py-2" onClick={() => setMobileMenuOpen(false)}>GDPR</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/fotogalerie/2025-2026" className="block py-3 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                  Fotogalerie
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setMobileKontaktOpen(!mobileKontaktOpen)}
                  className="flex items-center justify-between w-full text-left py-3 border-b border-gray-100"
                >
                  Kontakt
                  <svg className={`w-5 h-5 text-gray-400 transition-transform ${mobileKontaktOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileKontaktOpen && (
                  <ul className="pl-4 mt-2 space-y-1 mb-4 text-base text-gray-600">
                    <li><Link href="/kontakt/na-skolu" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Na školu</Link></li>
                    <li><Link href="/kontakt/pedagogicky-tym" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Pedagogický tým</Link></li>
                    <li><Link href="/kontakt/e-podatelna" className="block py-2" onClick={() => setMobileMenuOpen(false)}>E-podatelna</Link></li>
                    <li><Link href="/kontakt/povinne-informace" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Povinné informace</Link></li>
                  </ul>
                )}
              </li>
            </ul>
            
            <div className="mt-8 bg-brand-50 p-6 rounded-2xl">
               <h3 className="text-sm font-bold text-brand-900 mb-3 uppercase tracking-wider">Rychlé odkazy</h3>
               <div className="flex flex-col gap-3">
                 <Link href="/skola/stravovani" onClick={() => setMobileMenuOpen(false)} className="text-brand-700 hover:text-accent-700">Jídelna</Link>
                 <Link href="https://bakalari.cz" onClick={() => setMobileMenuOpen(false)} className="text-brand-700 hover:text-accent-700">Bakaláři</Link>
               </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
