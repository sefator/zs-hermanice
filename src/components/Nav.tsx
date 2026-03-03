import Link from "next/link";

export function Nav() {
  return (
    <nav className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            ZŠ Heřmanice
          </Link>
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
        </div>
      </div>
    </nav>
  );
}