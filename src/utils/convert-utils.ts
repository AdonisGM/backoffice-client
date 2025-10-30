import { DateValue } from '@internationalized/date';

/**
 * Convert an internationalized DateValue to string by format
 * @param date
 */
export const internationalizedDateToString = (date: DateValue | null): string | null => {
  if (!date) {
    return null;
  }

  const day = date.day.toString().padStart(2, '0');
  const month = date.month.toString().padStart(2, '0');
  const year = date.year.toString();

  return `${day}/${month}/${year}`;
};
