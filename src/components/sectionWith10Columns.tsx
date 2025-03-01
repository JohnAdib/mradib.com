import clsx from "clsx";
import { useId } from "react";

export function SectionWith10Columns({
	title,
	children,
	subContent,
	gap,
}: {
	title: string;
	children: React.ReactNode;
	subContent?: React.ReactNode;
	gap?: boolean;
}) {
	const id = useId();

	return (
		<section
			aria-labelledby={id}
			data-testid="section-with-10-columns"
			className="md:border-l md:border-zinc-100 md:px-6 md:dark:border-zinc-700/40"
		>
			<div
				className={clsx(
					"grid max-w-5xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-12",
					gap && "gap-x-10",
				)}
			>
				<h2
					id={id}
					className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 md:col-span-2"
				>
					{title}
				</h2>
				<div className="md:col-span-8 lg:col-span-7">{children}</div>
				{subContent && <div className="md:col-span-2">{subContent}</div>}
			</div>
		</section>
	);
}
