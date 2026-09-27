import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface ISlideNavLinkProps {
	/** Absent at the first or last slide, which renders a quiet placeholder. */
	href?: string;
	label: string;
	direction: "prev" | "next";
}

const base =
	"inline-flex h-11 w-11 items-center justify-center rounded-full transition";

/** Previous or next arrow, shared by the stage and the bar. Plain anchors. */
export function SlideNavLink({ href, label, direction }: ISlideNavLinkProps) {
	const Icon = direction === "prev" ? ChevronLeftIcon : ChevronRightIcon;
	if (!href) {
		return (
			<span
				aria-hidden="true"
				className={clsx(base, "text-zinc-300 dark:text-zinc-600")}
			>
				<Icon className="h-5 w-5" />
			</span>
		);
	}
	return (
		<a
			href={href}
			aria-label={label}
			title={label}
			className={clsx(
				base,
				"text-zinc-700 hover:bg-zinc-900/5 hover:text-accent-700 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-accent-400",
			)}
		>
			<Icon aria-hidden="true" className="h-5 w-5" />
		</a>
	);
}
