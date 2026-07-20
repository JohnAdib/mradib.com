"use client";

import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import type { IResolvedItem } from "@/data/resume-checklist";
import { severityStyle } from "./severity-styles";

function SeverityIcon({
	severity,
	className,
}: {
	severity: number;
	className: string;
}) {
	if (severity >= 2) {
		return <ExclamationTriangleIcon className={className} />;
	}
	if (severity === 1) {
		return <ExclamationCircleIcon className={className} />;
	}
	return <CheckCircleIcon className={className} />;
}

/**
 * A compact builder row. Tapping cycles the item green (good) to orange (some
 * issue) to red (a problem) and back, so the reviewer grades each topic in place.
 */
export function FlagRow({
	item,
	severity,
	onCycle,
}: {
	item: IResolvedItem;
	severity: number;
	onCycle: () => void;
}) {
	const style = severityStyle(severity);
	return (
		<button
			type="button"
			onClick={onCycle}
			className={clsx(
				"flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-start ring-1 transition",
				style.row,
			)}
		>
			<SeverityIcon
				severity={severity}
				className={clsx("h-5 w-5 shrink-0", style.icon)}
			/>
			<span className="min-w-0 flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">
				{item.title}
			</span>
		</button>
	);
}
