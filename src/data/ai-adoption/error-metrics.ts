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
	title: "Daily recorded errors, July to October 2026",
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
	axisDates: ["2026-07-07", "2026-08-01", "2026-09-01", "2026-10-03"],
	labelDates: ["2026-07-07", "2026-08-01", "2026-09-01", "2026-10-03"],
	caption:
		"Complete days from 7 July to 3 October. The history shows the fall and the daily variation that a two-total comparison would hide.",
	methodology:
		"All environments are included. Fixes, filters and sampling affect recorded volume. Counts are not adjusted for sessions or usage and are not a crash rate or proof that AI caused the change. The incomplete 6 July and 4 October days are excluded from the line.",
};

export const errorWindowSummary = [
	{
		from: "2026-07-06",
		through: "2026-08-04",
		label: "6 July to 4 August",
		completePeriod: false,
		note: "30 dates; first hour missing",
	},
	{
		from: "2026-09-04",
		through: "2026-10-03",
		label: "4 September to 3 October",
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
