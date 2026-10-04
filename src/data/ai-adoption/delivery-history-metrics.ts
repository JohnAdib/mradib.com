import { joiningMonthMarker } from "./chart-annotations";
import type { ITimeSeriesData } from "./chart-types";
import { monthlyPrHistory } from "./monthly-pr-history";

export const deliveryHistoryData: ITimeSeriesData = {
	id: "delivery-history",
	monthMarker: joiningMonthMarker,
	title: "The longer delivery record",
	unit: "Merged pull requests per month, July 2024 to August 2026",
	maximum: 180,
	observations: monthlyPrHistory.map((point) => ({
		...point,
		label: new Intl.DateTimeFormat("en-GB", {
			month: "short",
			year: "2-digit",
			timeZone: "UTC",
		}).format(new Date(`${point.date}T00:00:00Z`)),
	})),
	axisDates: ["2024-07-01", "2025-01-01", "2026-01-01", "2026-08-01"],
	labelDates: ["2024-07-01", "2025-02-01", "2026-01-01", "2026-08-01"],
	caption:
		"The same application has a longer, variable history. The recent four-month comparison sits inside that record, rather than representing all earlier development.",
	methodology:
		"Each point is a calendar month's merged-PR count, positioned at the start of that month. The line connects monthly observations. PR activity does not measure task size, productivity or customer value.",
};
