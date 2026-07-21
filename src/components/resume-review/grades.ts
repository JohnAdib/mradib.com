import type { IScorecardCopy } from "./scorecard-copy";

/** Grade codes: 0 unset (default, not scored), 1 good, 2 needs work, 3 problem. */
const CYCLE_LENGTH = 4;

/** Codes shown in the legend key, in order: good, needs work, problem, unset. */
export const LEGEND_CODES = [1, 2, 3, 0];

/** The next grade when the reviewer taps a row: unset to good to needs work to
 * problem and back to unset. */
export function nextGrade(code: number): number {
	return (code + 1) % CYCLE_LENGTH;
}

export function isIssue(code: number): boolean {
	return code === 2 || code === 3;
}

export function gradeLabel(code: number, copy: IScorecardCopy): string {
	if (code === 1) {
		return copy.gradeGood;
	}
	if (code === 2) {
		return copy.gradeNeedsWork;
	}
	if (code === 3) {
		return copy.gradeProblem;
	}
	return copy.gradeNa;
}
