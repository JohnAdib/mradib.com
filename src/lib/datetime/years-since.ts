/**
 * Whole years elapsed since an ISO date, computed at build time.
 * Used for figures like years of experience so they never go stale.
 */
export function yearsSince(isoDate: string, now: Date = new Date()): number {
	const start = new Date(isoDate);
	let years = now.getFullYear() - start.getFullYear();
	const anniversary = new Date(start);
	anniversary.setFullYear(now.getFullYear());
	if (now < anniversary) {
		years -= 1;
	}
	return years;
}
