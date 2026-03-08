import type { ScheduleWeek } from "@/types/rozvrh";

interface RozvrhGridProps {
  timetable: ScheduleWeek;
}

export function RozvrhGrid({ timetable }: RozvrhGridProps) {
  const { days } = timetable;
  const periods = Array.from({ length: 5 }, (_, i) => i + 1); // Assume 5 periods

  return (
    <div className="rounded-2xl border border-clay-200 bg-white p-6 shadow-sm">
      {/* Desktop view */}
      <div className="hidden md:block">
        <table className="w-full table-fixed border-collapse" role="table" aria-label={`Rozvrh hodin pro třídu ${timetable.className}`}>
          <caption className="sr-only">
            Rozvrh hodin pro třídu {timetable.className} v týdnu od {new Date(timetable.weekStart).toLocaleDateString('cs-CZ')} do {new Date(timetable.weekEnd).toLocaleDateString('cs-CZ')}
          </caption>
          <thead>
            <tr>
              <th className="p-2 text-left font-semibold text-clay-700">Hodina</th>
              {days.map((day) => (
                <th key={day.day} className="p-2 text-center font-semibold text-clay-700">
                  {day.day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {periods.map((period) => {
              const timeEntry = days[0].entries.find((e) => e.period === period);
              return (
                <tr key={period} className="border-t border-clay-200">
                  <td className="p-2 text-sm text-clay-600">
                    {timeEntry ? `${timeEntry.startTime} - ${timeEntry.endTime}` : ''}
                  </td>
                  {days.map((day) => {
                    const entry = day.entries.find((e) => e.period === period);
                    return (
                      <td key={`${day.day}-${period}`} className="p-2 align-top">
                        {entry ? (
                          <div className="rounded-lg bg-clay-50 p-3 text-center min-h-[100px]">
                            <div className="font-medium text-clay-800">{entry.subject}</div>
                            <div className="text-sm text-clay-600">{entry.teacher}</div>
                            <div className="text-xs text-clay-900">{entry.classroom}</div>
                          </div>
                        ) : (
                          <div className="min-h-[100px] rounded-lg border-2 border-dashed border-clay-200"></div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-6">
        {days.map((day) => (
          <div key={day.day} className="border-b border-clay-200 pb-4 last:border-b-0">
            <h3 className="mb-3 font-semibold text-clay-700">{day.day}</h3>
            <div className="space-y-2">
              {day.entries.map((entry) => (
                <div key={entry.period} className="rounded-lg bg-clay-50 p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-clay-800">{entry.subject}</div>
                      <div className="text-sm text-clay-600">{entry.teacher}</div>
                      <div className="text-xs text-clay-900">{entry.classroom}</div>
                    </div>
                    <div className="text-xs text-clay-600">
                      {entry.startTime}-{entry.endTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}