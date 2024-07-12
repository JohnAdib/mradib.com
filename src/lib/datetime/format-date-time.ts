import { Locale } from './locale';

interface IFormatDateTime {
  datetime: string;
  locale?: Locale;
}

export function formatDateTime({
  datetime,
  locale = Locale.enUS,
}: IFormatDateTime,
) {
  return new Date(datetime).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
