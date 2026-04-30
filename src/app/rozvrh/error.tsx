"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold text-clay-800 mb-4">Chyba při načítání rozvrhu</h1>
      <p className="text-clay-600 mb-8">
        Omlouváme se, ale došlo k chybě při načítání rozvrhu. Zkuste to prosím znovu.
      </p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-clay-600 text-white rounded-lg hover:bg-clay-700 transition-colors"
      >
        Zkusit znovu
      </button>
    </div>
  );
}
