type DataLayerWindow = Window & { dataLayer?: unknown[] };

export type AnalyticsParams = Record<string, string | number | boolean>;

export function trackEvent(event: string, params: AnalyticsParams = {}): void {
	if (typeof window === "undefined") {
		return;
	}
	const w = window as DataLayerWindow;
	// Pushes queue on dataLayer and gtag.js drains them once it lazy-loads on
	// first interaction, so events fired before then are not lost.
	w.dataLayer = w.dataLayer ?? [];
	w.dataLayer.push({ event, ...params });
}
