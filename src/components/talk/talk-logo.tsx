import clsx from "clsx";
import Image from "next/image";
import type { ITalk } from "@/data/talks/talk-interface";

function monogram(name: string): string {
	const words = name.trim().split(/\s+/);
	const letters =
		words.length === 1
			? words[0].slice(0, 2)
			: words
					.slice(0, 2)
					.map((word) => word[0])
					.join("");
	return letters.toUpperCase();
}

/** Organizer logo, or an accent monogram chip when no logo is set yet. */
export function TalkLogo({
	talk,
	className,
}: {
	talk: ITalk;
	className?: string;
}) {
	const base = clsx(
		"flex flex-none items-center justify-center overflow-hidden rounded-2xl ring-1",
		className,
	);

	if (talk.logo) {
		return (
			<span
				className={clsx(
					base,
					"bg-white ring-zinc-100 dark:bg-zinc-800 dark:ring-zinc-700/50",
				)}
			>
				<Image
					src={talk.logo}
					alt={`${talk.organizer} logo`}
					width={64}
					height={64}
					className="h-full w-full object-contain p-2"
				/>
			</span>
		);
	}

	return (
		<span
			aria-hidden="true"
			className={clsx(
				base,
				"bg-accent-50 ring-accent-100 dark:bg-accent-400/10 dark:ring-accent-400/20",
			)}
		>
			<span className="text-sm font-bold tracking-tight text-accent-700 dark:text-accent-400">
				{monogram(talk.organizer)}
			</span>
		</span>
	);
}
