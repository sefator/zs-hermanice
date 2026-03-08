import { availableClasses } from "@/data/rozvrh";

export function RozvrhControls() {
  // For mock, just show current week and class selector (disabled for now)
  const currentWeek = "11. - 17. března 2024";
  const selectedClass = "1.A";

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <label htmlFor="class-select" className="text-sm font-medium text-clay-700">
          Třída:
        </label>
        <select
          id="class-select"
          value={selectedClass}
          disabled
          className="rounded-lg border border-clay-200 bg-white px-3 py-2 text-sm disabled:opacity-50"
        >
          {availableClasses.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
      </div>
      <div className="text-sm text-clay-600">
        Aktuální týden: <span className="font-medium">{currentWeek}</span>
      </div>
    </div>
  );
}