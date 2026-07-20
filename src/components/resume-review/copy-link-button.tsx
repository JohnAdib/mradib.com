"use client";

import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

/** Primary accent CTA that copies the share link, with a brief copied state. */
export function CopyLinkButton({
	text,
	label,
	copiedLabel,
	className,
}: {
	text: string;
	label: string;
	copiedLabel: string;
	className?: string;
}) {
	const [copied, setCopied] = useState(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			// Clipboard can be blocked (permissions, insecure context). Fail quietly.
		}
	}

	return (
		<button
			type="button"
			onClick={() => void copy()}
			className={clsx(
				"inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition",
				"bg-accent-600 text-white hover:bg-accent-700",
				"dark:bg-accent-500 dark:text-zinc-950 dark:hover:bg-accent-400",
				className,
			)}
		>
			{copied ? (
				<CheckIcon className="h-4 w-4" />
			) : (
				<ClipboardDocumentIcon className="h-4 w-4" />
			)}
			{copied ? copiedLabel : label}
		</button>
	);
}
