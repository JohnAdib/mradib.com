import { barPercent } from "./comparison-scale";

interface IPoint {
	date: string;
	value: number;
}

export function timelinePositions(
	points: IPoint[],
	maximum: number,
): { x: number; y: number }[] {
	if (points.length < 2) {
		throw new RangeError("A timeline needs at least two observations.");
	}
	const dates = points.map(({ date }) => {
		const time = Date.parse(`${date}T00:00:00Z`);
		if (
			!/^\d{4}-\d{2}-\d{2}$/.test(date) ||
			!Number.isFinite(time) ||
			new Date(time).toISOString().slice(0, 10) !== date
		) {
			throw new RangeError("Timeline observations need valid calendar dates.");
		}
		return time;
	});
	if (dates.some((time, index) => index > 0 && time <= dates[index - 1])) {
		throw new RangeError("Timeline dates must be distinct and chronological.");
	}
	const start = dates[0];
	const duration = dates[dates.length - 1] - start;
	return points.map((point, index) => ({
		x: ((dates[index] - start) / duration) * 100,
		y: 100 - barPercent(point.value, maximum),
	}));
}
