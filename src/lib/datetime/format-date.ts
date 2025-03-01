import type { LanguageLocale } from "../languages/locale";
import { formatDateTime } from "./format-date-time";

interface IFormatDate {
	date: string;
	time?: string;
	locale?: LanguageLocale;
}

export function formatDate({ date, time, locale = "en-US" }: IFormatDate) {
	const myTime = time ? time : "00:00:00";
	const datetime = `${date}T${myTime}Z`;

	return formatDateTime({ datetime, locale });
}
