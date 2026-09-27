import type { IFrameworkSlide } from "./framework";

/** One slide as text lines, shared by llms.txt and the portable skill. */
export function formatSlide(
	slide: IFrameworkSlide,
	heading: "##" | "###",
): string {
	const lines = [
		`${heading} ${slide.number}. ${slide.title}`,
		`Question: ${slide.question}`,
		`What it is: ${slide.definition}`,
		"Put on it:",
		...slide.include.map((item) => `- ${item}`),
		"Leave off:",
		...slide.avoid.map((item) => `- ${item}`),
		`Pass test: ${slide.test}`,
	];
	if (slide.example) {
		lines.push(`Example: ${slide.example}`);
	}
	if (slide.note) {
		lines.push(`Reorder rule: ${slide.note}`);
	}
	return lines.join("\n");
}
