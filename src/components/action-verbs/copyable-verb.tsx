"use client";

import clsx from "clsx";
import type { JSX } from "react";
import { useState } from "react";

/** One action verb that copies itself to the clipboard on tap, with a brief
 * flash so it is clear the copy happened. Shared by the English and Persian
 * verb lists. */
export function CopyableVerb({ verb }: { verb: string }): JSX.Element {
	const [copied, setCopied] = useState(false);
	return (
		<button
			type="button"
			title="Copy"
			onClick={() => {
				navigator.clipboard
					?.writeText(verb)
					.then(() => {
						setCopied(true);
						setTimeout(() => setCopied(false), 1000);
					})
					.catch(() => {});
			}}
			className={clsx(
				"cursor-pointer rounded px-1 text-start transition",
				copied
					? "bg-green-500/20 text-green-700 dark:text-green-300"
					: "hover:bg-accent-500/10 hover:text-accent-700 dark:hover:text-accent-300",
			)}
		>
			{verb}
		</button>
	);
}
