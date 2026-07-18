export function awardYear(date: string): string {
	return date.slice(0, 4);
}

export function awardMonthLabel(date: string): string {
	return new Date(`${date}-01`).toLocaleDateString("en-GB", {
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});
}
