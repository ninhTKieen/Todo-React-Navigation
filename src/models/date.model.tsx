export interface IDate {
  hours: number;
  minutes: string | number;
  seconds: string | number;
  unit: string;
  day: String;
  date: number;
  month: String;
  year: number;
}

export const DAY_OF_WEEK: String[] = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export const MONTHS: String[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
