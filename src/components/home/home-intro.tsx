"use client";

import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { introBio, introBioClipboard } from "@/data/intro-bio";

export function HomeIntro() {
	const [copied, setCopied] = useState(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(introBioClipboard);
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
			title="Copy this intro"
			className="group -mx-3 mt-3 block rounded-xl px-3 py-3 text-left transition hover:bg-zinc-900/5 dark:hover:bg-zinc-800/40"
		>
			<span className="block text-base text-zinc-600 dark:text-zinc-400">
				{introBio}
			</span>
			<span
				aria-live="polite"
				className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-300"
			>
				{copied ? (
					<CheckIcon className="h-4 w-4 text-accent-600 dark:text-accent-400" />
				) : (
					<ClipboardDocumentIcon className="h-4 w-4" />
				)}
				{copied ? "Copied, share it anywhere" : "Copy this intro"}
			</span>
		</button>
	);
}
