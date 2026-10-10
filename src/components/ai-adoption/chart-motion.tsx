"use client";

import { type ReactNode, useEffect, useRef } from "react";
import styles from "./chart.module.css";
import { observeChartEntrance } from "./observe-chart";

export function ChartMotion({ children }: { children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (ref.current) return observeChartEntrance(ref.current);
		return undefined;
	}, []);
	return (
		<div ref={ref} className={styles.motion}>
			{children}
		</div>
	);
}
