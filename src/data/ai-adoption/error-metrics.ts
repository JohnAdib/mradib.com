import type { ITimeSeriesData } from "./chart-types";
import { augustErrors } from "./error-days-august";
import { julyErrors } from "./error-days-july";
import { octoberErrors } from "./error-days-october";
import { septemberErrors } from "./error-days-september";

export const recordedErrorDays = [
	...julyErrors,
	...augustErrors,
	...septemberErrors,
	...octoberErrors,
].map((point) => ({ ...point, completePeriod: point.date !== "2026-07-06" }));

export const errorHistoryData: ITimeSeriesData = {
	id: "error-volume",
	title: "Daily recorded errors, July to 21 October 2026",
	unit: "Events per day, all environments",
	maximum: 25000,
	observations: recordedErrorDays
		.filter((point) => point.completePeriod)
		.map((point) => ({
			...point,
			label: new Intl.DateTimeFormat("en-GB", {
				day: "numeric",
				month: "short",
				timeZone: "UTC",
			}).format(new Date(`${point.date}T00:00:00Z`)),
		})),
	axisDates: ["2026-07-07", "2026-08-01", "2026-09-01", "2026-10-21"],
	labelDates: ["2026-07-07", "2026-08-01", "2026-09-01", "2026-10-21"],
	caption:
		"Complete days from 7 July to 21 October. The history shows the fall and the daily variation that a two-total comparison would hide.",
	methodology:
		"All environments are included. Fixes, filters and sampling affect recorded volume. Counts are not adjusted for sessions or usage and are not a crash rate or proof that AI caused the change. The incomplete 6 July observation is excluded. The incomplete 22 October day is excluded.",
};

export const errorWindowSummary = [
	{
		from: "2026-07-07",
		through: "2026-08-05",
		label: "7 July to 5 August",
		completePeriod: true,
		note: "30 complete days",
	},
	{
		from: "2026-09-22",
		through: "2026-10-21",
		label: "22 September to 21 October",
		completePeriod: true,
		note: "30 complete days",
	},
].map((window) => ({
	...window,
	value: recordedErrorDays
		.filter(
			(point) => point.date >= window.from && point.date <= window.through,
		)
		.reduce((sum, point) => sum + point.value, 0),
}));
