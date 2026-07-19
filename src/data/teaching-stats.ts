/*
  John-stated teaching reach, logged in docs/advisor/decisions.md
  (About rounds 2 and 3, 2026-07-19). videoViews is the one-platform
  figure for the free Persian video courses.
*/
interface ITeachingStats {
	studentsTaught: number;
	videoViews: number;
}

export const teachingStats: ITeachingStats = {
	studentsTaught: 2000,
	videoViews: 1_200_000,
};

export const videoViewsCompact = new Intl.NumberFormat("en", {
	notation: "compact",
	maximumFractionDigits: 1,
}).format(teachingStats.videoViews);
