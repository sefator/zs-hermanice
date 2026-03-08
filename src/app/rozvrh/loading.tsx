export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 rounded-3xl bg-gradient-to-br from-clay-50 to-clay-100 p-8 text-center shadow-sm">
        <div className="h-8 bg-clay-200 rounded mb-4 animate-pulse"></div>
        <div className="h-6 bg-clay-200 rounded animate-pulse"></div>
      </div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-4 bg-clay-200 rounded w-12 animate-pulse"></div>
          <div className="h-8 bg-clay-200 rounded w-20 animate-pulse"></div>
        </div>
        <div className="h-4 bg-clay-200 rounded w-32 animate-pulse"></div>
      </div>
      <div className="rounded-2xl border border-clay-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-6 gap-4 mb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-6 bg-clay-200 rounded animate-pulse"></div>
          ))}
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="grid grid-cols-6 gap-4 mb-2">
            {Array.from({ length: 6 }).map((_, j) => (
              <div key={j} className="h-20 bg-clay-200 rounded animate-pulse"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}