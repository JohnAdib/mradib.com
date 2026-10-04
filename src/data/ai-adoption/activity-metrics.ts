import { joiningMonthMarker } from "./chart-annotations";
import type { ITimeSeriesData } from "./chart-types";
import { monthlyPrHistory } from "./monthly-pr-history";
import { monthlyTickets } from "./monthly-tickets";

export const monthlyActivityData: ITimeSeriesData = {
	id: "monthly-activity",
	monthMarker: joiningMonthMarker,
	title: "Merged pull requests",
	unit: "Pull requests per month, 2026",
	maximum: 250,
	observations: monthlyPrHistory.filter(
		(point) => point.date >= "2026-01-01" && point.date <= "2026-09-01",
	),
	caption:
		"January to September 2026. App and design-system PRs across both repositories.",
	methodology:
		"Merged PRs measure activity, not productivity, effort, quality, distinct features or turnaround. From May, the series includes PRs touching the app or its design system in the later repository, alongside the original app repository. Unrelated web and infrastructure PRs are excluded.",
};

export const monthlyTicketData: ITimeSeriesData = {
	id: "monthly-tickets",
	monthMarker: joiningMonthMarker,
	title: "Tracked work",
	unit: "Distinct tickets per month, 2026",
	maximum: 250,
	observations: monthlyTickets,
	caption:
		"January to September 2026, app and design-system work across both repositories. Tickets provide another view of work moving through the development process.",
	methodology:
		"A ticket can cover a fix, maintenance or feature work, and can appear in more than one month. Monthly counts are not features shipped or a cross-period distinct total.",
};
