/** The emoji for each grade: unset (choose), good, needs work, problem. Good and
 * problem are thumbs; needs work is an amber caution, the traffic-light middle. */
export function gradeEmoji(code: number): string {
	if (code === 1) {
		return "👍";
	}
	if (code === 2) {
		return "⚠️";
	}
	if (code === 3) {
		return "👎";
	}
	return "➖";
}
