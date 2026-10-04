/** Scale an observation against the chart's shared zero-based axis. */
export function barPercent(value: number, maximum: number): number {
	if (
		!Number.isFinite(value) ||
		!Number.isFinite(maximum) ||
		maximum <= 0 ||
		value < 0 ||
		value > maximum
	) {
		throw new RangeError(
			"Chart values must fit within a finite positive axis.",
		);
	}
	return (value / maximum) * 100;
}
