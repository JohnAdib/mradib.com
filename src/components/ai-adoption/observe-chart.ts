export function observeChartEntrance(node: HTMLElement): () => void {
	const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
	if (preference.matches || !("IntersectionObserver" in window)) {
		return () => {};
	}
	let entered = false;
	node.dataset.chartMotion = "pending";
	const observer = new window.IntersectionObserver(
		(entries) => {
			if (!entered && entries.some((entry) => entry.isIntersecting)) {
				entered = true;
				node.dataset.chartMotion = "entered";
				observer.disconnect();
			}
		},
		{ rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
	);
	const cancelMotion = () => {
		if (preference.matches) {
			entered = true;
			delete node.dataset.chartMotion;
			observer.disconnect();
		}
	};
	preference.addEventListener("change", cancelMotion);
	observer.observe(node);
	return () => {
		observer.disconnect();
		preference.removeEventListener("change", cancelMotion);
		delete node.dataset.chartMotion;
	};
}
