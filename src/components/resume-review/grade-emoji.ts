/** The emoji for each grade: unset (choose), good, needs work, problem. */
export function gradeEmoji(code: number): string {
	if (code === 1) {
		return "🙂";
	}
	if (code === 2) {
		return "😐";
	}
	if (code === 3) {
		return "🙁";
	}
	return "➖";
}
