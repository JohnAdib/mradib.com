import Link from "next/link";

export function SectionHeader({
	title,
	href,
	linkText,
}: {
	title: string;
	href?: string;
	linkText?: string;
}) {
	return (
		<div className="flex flex-wrap items-baseline justify-between gap-2">
			<h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				{title}
			</h2>
			{href && linkText && (
				<Link
					href={href}
					className="text-sm font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
				>
					{linkText} →
				</Link>
			)}
		</div>
	);
}
