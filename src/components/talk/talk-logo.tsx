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
		"flex flex-none items-center justify-center overflow-hidden rounded-xl",
		className,
	);

	if (talk.logo) {
		return (
			<span className={base}>
				<Image
					src={talk.logo}
					alt={`${talk.organizer} logo`}
					width={128}
					height={128}
					className="h-full w-full object-cover"
				/>
			</span>
		);
	}

	return (
		<span
			aria-hidden="true"
			className={clsx(base, "bg-accent-50 dark:bg-accent-400/10")}
		>
			<span className="text-sm font-bold tracking-tight text-accent-700 dark:text-accent-400">
				{monogram(talk.organizer)}
			</span>
		</span>
	);
}
