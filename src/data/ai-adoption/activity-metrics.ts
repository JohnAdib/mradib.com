import { joiningMonthMarker } from "./chart-annotations";
import type { ITimeSeriesData } from "./chart-types";
import { monthlyPrHistory } from "./monthly-pr-history";
import { monthlyTickets } from "./monthly-tickets";

export const monthlyActivityData: ITimeSeriesData = {
	id: "monthly-activity",
	monthMarker: joiningMonthMarker,
	title: "Merged pull requests",
	unit: "Pull requests per month, 2026",
	maximum: 180,
	observations: monthlyPrHistory.filter(
		(point) => point.date >= "2026-01-01" && point.date <= "2026-08-01",
	),
	caption:
		"January to August 2026, one mobile application in the same repository.",
	methodology:
		"Merged PRs measure activity, not distinct features, effort or quality. September is excluded because the application moved and the later repository has a broader scope.",
};

export const monthlyTicketData: ITimeSeriesData = {
	id: "monthly-tickets",
	monthMarker: joiningMonthMarker,
	title: "Tracked work",
	unit: "Distinct tickets per month, 2026",
	maximum: 180,
	observations: monthlyTickets,
	caption:
		"January to August 2026, the same application. Tickets provide another view of work moving through the development process.",
	methodology:
		"A ticket can cover a fix, maintenance or feature work, and can appear in more than one month. Monthly counts are not features shipped or a cross-period distinct total.",
};
