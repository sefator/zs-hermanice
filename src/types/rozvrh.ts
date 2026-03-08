export interface ScheduleEntry {
  period: number;
  startTime: string; // e.g., "08:00"
  endTime: string; // e.g., "08:45"
  subject: string;
  teacher: string;
  classroom: string;
  status?: 'normal' | 'substitution' | 'cancelled' | 'special';
  note?: string;
}

export interface ScheduleDay {
  day: string; // e.g., "Monday"
  date: string; // ISO date
  entries: ScheduleEntry[];
}

export interface ScheduleWeek {
  weekStart: string; // ISO date
  weekEnd: string; // ISO date
  className: string;
  days: ScheduleDay[];
}

export interface RozvrhContent {
  title: string;
  lead: string;
  heroImage?: string;
}