"use client";

import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

interface ICopyButtonProps {
	/** The exact text placed on the clipboard. */
	text: string;
	label: string;
	copiedLabel?: string;
	/** Render just the icon; label becomes the tooltip and aria-label. */
	iconOnly?: boolean;
	className?: string;
}

export function CopyButton({
	text,
	label,
	copiedLabel = "Copied",
	iconOnly = false,
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
			aria-label={iconOnly ? (copied ? copiedLabel : label) : undefined}
			title={iconOnly ? label : undefined}
			className={clsx(
				"inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition",
				iconOnly ? "h-9 w-9" : "px-3 py-2",
				"bg-zinc-900/5 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
				"dark:bg-zinc-800/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
				className,
			)}
		>
			{copied ? (
				<CheckIcon className="h-4 w-4 text-accent-600 dark:text-accent-400" />
			) : (
				<ClipboardDocumentIcon className="h-4 w-4" />
			)}
			{!iconOnly && (copied ? copiedLabel : label)}
		</button>
	);
}
