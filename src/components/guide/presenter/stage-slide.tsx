import clsx from "clsx";
import type { CSSProperties } from "react";
import type { IGuidePresenterLabels } from "@/data/guides/guide-interface";

export interface IStageSlideProps {
	number: string;
	total: number;
	labels: Pick<IGuidePresenterLabels, "unit" | "of">;
	title: string;
	question: string;
	className?: string;
	style?: CSSProperties;
}

/** One step as it appears on the artifact: numeral, position, title, question. */
export function StageSlide({
	number,
	total,
	labels,
	title,
	question,
	className,
	style,
}: IStageSlideProps) {
	return (
		<div
			className={clsx("flex h-full flex-col justify-between", className)}
			style={style}
		>
			<span className="font-display text-5xl font-semibold leading-none tabular-nums text-white/30">
				{number}
			</span>
			<div>
				<p className="text-xs font-medium tracking-wide text-accent-300 uppercase">
					{labels.unit} {number} {labels.of} {total}
				</p>
				<p className="mt-1 font-display text-2xl font-semibold tracking-tight text-balance">
					{title}
				</p>
				<p className="mt-1 text-sm text-zinc-300">{question}</p>
			</div>
		</div>
	);
}
