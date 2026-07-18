"use client";

import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

interface ICopyButtonProps {
	/** The exact text placed on the clipboard. */
	text: string;
	label: string;
	copiedLabel?: string;
	className?: string;
}

export function CopyButton({
	text,
	label,
	copiedLabel = "Copied",
	className,
}: ICopyButtonProps) {
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
			aria-live="polite"
			className={clsx(
				"inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
				"bg-zinc-50 text-zinc-700 hover:bg-zinc-100",
				"dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800",
				className,
			)}
		>
			{copied ? (
				<CheckIcon className="h-4 w-4 text-accent-600 dark:text-accent-400" />
			) : (
				<ClipboardDocumentIcon className="h-4 w-4" />
			)}
			{copied ? copiedLabel : label}
		</button>
	);
}
