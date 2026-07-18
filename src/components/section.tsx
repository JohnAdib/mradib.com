import Link from "next/link";
import { useId } from "react";

export function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	const id = useId();

	const headingId = title
		.toLowerCase()
		.replace(/[^a-z0-9]/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");

	return (
		<section aria-labelledby={id} data-testid="section" className="md:px-6">
			<div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
				<Link href={`#${headingId}`}>
					<h2
						id={headingId}
						className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
					>
						{title}
					</h2>
				</Link>
				<div className="md:col-span-3">{children}</div>
			</div>
		</section>
	);
}
