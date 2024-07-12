import { formatDateTime } from './format-date-time';
import { Locale } from './locale';

interface IFormatDate {
  date: string;
  time?: string;
  locale?: Locale;
}

export function formatDate({
  date,
  time,
  locale = Locale.enUS,
}: IFormatDate,
) {
  const myTime = time ? time : '00:00:00';
  const datetime = `${date}T${myTime}Z`;

  return formatDateTime({ datetime, locale });
}
