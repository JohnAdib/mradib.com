"use client";

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
			title="Tap to copy this intro"
			className="relative -mx-3 block cursor-pointer rounded-xl px-3 py-2 text-left transition hover:bg-zinc-900/5 dark:hover:bg-zinc-800/40"
		>
			<span className="block text-base text-zinc-600 dark:text-zinc-400">
				{introBio}
			</span>
			<span
				aria-live="polite"
				className={`absolute -top-2 right-2 rounded-full bg-accent-600 px-2.5 py-0.5 text-xs font-semibold text-white transition-opacity duration-300 dark:bg-accent-500 ${copied ? "opacity-100" : "pointer-events-none opacity-0"}`}
			>
				{copied ? "Copied" : ""}
			</span>
		</button>
	);
}
