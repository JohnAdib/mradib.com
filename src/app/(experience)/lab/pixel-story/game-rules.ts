export const POINTS_PER_LEVEL = 15;

export function levelForScore(score: number) {
	return 1 + Math.floor(score / POINTS_PER_LEVEL);
}
