import { LanguageLocale } from "../languages/locale";

interface IFormatDateTime {
	datetime: string;
	locale?: LanguageLocale;
}

export function formatDateTime({
	datetime,
	locale = "en-US",
}: IFormatDateTime) {
	return new Date(datetime).toLocaleDateString(locale, {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});
}
