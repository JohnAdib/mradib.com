import { Squares2X2Icon } from "@heroicons/react/20/solid";

interface IKitPositionProps {
	/** "Fundraising kit, guide 2 of 6" */
	label: string;
	/** The kit section on this page. A plain anchor: a same-page jump. */
	href: string;
}

/** Where this guide sits in the kit, beside the eyebrow. */
export function KitPosition({ label, href }: IKitPositionProps) {
	return (
		<a
			href={href}
			className="reveal-rise inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition hover:text-accent-700 dark:text-zinc-400 dark:hover:text-accent-400"
		>
			<Squares2X2Icon aria-hidden="true" className="h-4 w-4" />
			{label}
		</a>
	);
}
