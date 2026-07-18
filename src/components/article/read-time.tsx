import type { JSX } from "react";
export function ArticleReadTime({
	minutes,
	lang = "fa",
}: {
	minutes?: number | null;
	lang?: string;
}): JSX.Element | null {
	if (!minutes) {
		return null;
	}

	const isEnglish = lang.startsWith("en");

	if (isEnglish) {
		const readTimeTxt = `${minutes} min read`;
		const readTimeTitle = `We estimate this takes about ${minutes} minutes to read.`;
		return <abbr title={readTimeTitle}>{readTimeTxt}</abbr>;
	}

	const readTimeMinutesFa = minutes.toLocaleString("fa");
	const readTimeTxt = `در ${readTimeMinutesFa} دقیقه بخوانید‍‍‍‍‍‍`;
	const readTimeTitle = `ما تخمین می‌زنیم که شما این نوشته را در ${readTimeMinutesFa} دقیقه بخوانید.`;

	return <abbr title={readTimeTitle}>{readTimeTxt}</abbr>;
}
