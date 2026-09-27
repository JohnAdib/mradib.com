/** Two-digit slide number for a zero-based index: "01" to "12". */
export function slideNumber(index: number): string {
	return String(index + 1).padStart(2, "0");
}
