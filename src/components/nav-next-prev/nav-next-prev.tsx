import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import type { INavNextPrev } from "./interface";

function NextLink({ url, title }: { url?: string; title?: string }) {
	if (!url || !title) {
		return null;
	}
	return (
		<Link
			href={url}
			className={clsx(
				"flex items-center gap-0.5 sm:gap-2 transition my-1",
				"text-stone-500 hover:text-stone-700",
				"dark:text-stone-400 dark:hover:text-stone-200",
			)}
		>
			<span>{title}</span>
			<ChevronLeftIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
		</Link>
	);
}

function PrevLink({ url, title }: { url?: string; title?: string }) {
	if (!url || !title) {
		return null;
	}
	return (
		<Link
			href={url}
			className={clsx(
				"flex items-center gap-0.5 sm:gap-2 transition my-1",
				"text-stone-500 hover:text-stone-700",
				"dark:text-stone-400 dark:hover:text-stone-200",
			)}
		>
			<ChevronRightIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
			<span>{title}</span>
		</Link>
	);
}

export function NavNextPrev({ next, prev }: INavNextPrev) {
	if (!next && !prev) {
		return null;
	}

	return (
		<nav
			className={clsx(
				"footerNexPrev",
				"flex items-center justify-between flex-wrap",
				"text-sm sm:text-base",
				"leading-8,",
			)}
		>
			<PrevLink url={prev?.url} title={prev?.title} />
			<NextLink url={next?.url} title={next?.title} />
		</nav>
	);
}
