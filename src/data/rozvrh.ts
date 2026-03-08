import type { ScheduleWeek } from '@/types/rozvrh';

// Mock data for demonstration
// In production, this will be replaced with API calls to Bakaláři

const mockRozvrhData: ScheduleWeek[] = [
  {
    weekStart: '2024-03-11', // Monday
    weekEnd: '2024-03-17', // Sunday
    className: '1.A',
    days: [
      {
        day: 'Monday',
        date: '2024-03-11',
        entries: [
          { period: 1, startTime: '08:00', endTime: '08:45', subject: 'Český jazyk', teacher: 'Mgr. Nováková', classroom: '101' },
          { period: 2, startTime: '08:50', endTime: '09:35', subject: 'Matematika', teacher: 'Mgr. Svoboda', classroom: '102' },
          { period: 3, startTime: '09:50', endTime: '10:35', subject: 'Přírodověda', teacher: 'Mgr. Dvořák', classroom: '103' },
          { period: 4, startTime: '10:50', endTime: '11:35', subject: 'Hudební výchova', teacher: 'Mgr. Černý', classroom: 'Hudební sál' },
          { period: 5, startTime: '11:50', endTime: '12:35', subject: 'Výtvarná výchova', teacher: 'Mgr. Procházka', classroom: 'Výtvarná dílna' },
        ],
      },
      {
        day: 'Tuesday',
        date: '2024-03-12',
        entries: [
          { period: 1, startTime: '08:00', endTime: '08:45', subject: 'Angličtina', teacher: 'Mgr. Brown', classroom: '104' },
          { period: 2, startTime: '08:50', endTime: '09:35', subject: 'Tělesná výchova', teacher: 'Mgr. Sportovec', classroom: 'Tělocvična' },
          { period: 3, startTime: '09:50', endTime: '10:35', subject: 'Dějepis', teacher: 'Mgr. Historik', classroom: '105' },
          { period: 4, startTime: '10:50', endTime: '11:35', subject: 'Zeměpis', teacher: 'Mgr. Geograf', classroom: '106' },
          { period: 5, startTime: '11:50', endTime: '12:35', subject: 'Informatika', teacher: 'Mgr. Kodér', classroom: 'Počítačová učebna' },
        ],
      },
      {
        day: 'Wednesday',
        date: '2024-03-13',
        entries: [
          { period: 1, startTime: '08:00', endTime: '08:45', subject: 'Český jazyk', teacher: 'Mgr. Nováková', classroom: '101' },
          { period: 2, startTime: '08:50', endTime: '09:35', subject: 'Matematika', teacher: 'Mgr. Svoboda', classroom: '102' },
          { period: 3, startTime: '09:50', endTime: '10:35', subject: 'Výtvarná výchova', teacher: 'Mgr. Procházka', classroom: 'Výtvarná dílna' },
          { period: 4, startTime: '10:50', endTime: '11:35', subject: 'Hudební výchova', teacher: 'Mgr. Černý', classroom: 'Hudební sál' },
          { period: 5, startTime: '11:50', endTime: '12:35', subject: 'Tělesná výchova', teacher: 'Mgr. Sportovec', classroom: 'Tělocvična' },
        ],
      },
      {
        day: 'Thursday',
        date: '2024-03-14',
        entries: [
          { period: 1, startTime: '08:00', endTime: '08:45', subject: 'Angličtina', teacher: 'Mgr. Brown', classroom: '104' },
          { period: 2, startTime: '08:50', endTime: '09:35', subject: 'Přírodověda', teacher: 'Mgr. Dvořák', classroom: '103' },
          { period: 3, startTime: '09:50', endTime: '10:35', subject: 'Matematika', teacher: 'Mgr. Svoboda', classroom: '102' },
          { period: 4, startTime: '10:50', endTime: '11:35', subject: 'Dějepis', teacher: 'Mgr. Historik', classroom: '105' },
          { period: 5, startTime: '11:50', endTime: '12:35', subject: 'Zeměpis', teacher: 'Mgr. Geograf', classroom: '106' },
        ],
      },
      {
        day: 'Friday',
        date: '2024-03-15',
        entries: [
          { period: 1, startTime: '08:00', endTime: '08:45', subject: 'Český jazyk', teacher: 'Mgr. Nováková', classroom: '101' },
          { period: 2, startTime: '08:50', endTime: '09:35', subject: 'Informatika', teacher: 'Mgr. Kodér', classroom: 'Počítačová učebna' },
          { period: 3, startTime: '09:50', endTime: '10:35', subject: 'Výtvarná výchova', teacher: 'Mgr. Procházka', classroom: 'Výtvarná dílna' },
          { period: 4, startTime: '10:50', endTime: '11:35', subject: 'Hudební výchova', teacher: 'Mgr. Černý', classroom: 'Hudební sál' },
          { period: 5, startTime: '11:50', endTime: '12:35', subject: 'Tělesná výchova', teacher: 'Mgr. Sportovec', classroom: 'Tělocvična' },
        ],
      },
    ],
  },
  // Add more classes here if needed
];

export default mockRozvrhData;

// Helper function to get data for a specific class (for now, return the first one)
export function getMockRozvrh(className: string = '1.A'): ScheduleWeek | undefined {
  return mockRozvrhData.find((week) => week.className === className);
}

// List of available classes
export const availableClasses = mockRozvrhData.map((week) => week.className);