export function RozvrhLegend() {
  return (
    <div className="mt-8 rounded-2xl border border-clay-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 font-semibold text-clay-700">Legenda</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-clay-50 border"></div>
          <span>Normální hodina</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-yellow-100 border border-yellow-300"></div>
          <span>Náhrada (mock)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-red-100 border border-red-300"></div>
          <span>Zrušeno (mock)</span>
        </div>
      </div>
    </div>
  );
}