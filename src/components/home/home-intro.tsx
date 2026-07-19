"use client";

import { introBio, introBioClipboard } from "@/data/intro-bio";

export function HomeIntro() {
	async function copy() {
		try {
			await navigator.clipboard.writeText(introBioClipboard);
		} catch {
			// Clipboard can be blocked (permissions, insecure context). Fail quietly.
		}
	}

	return (
		<button
			type="button"
			onClick={() => void copy()}
			className="-mx-3 block cursor-pointer rounded-xl px-3 py-2 text-left text-base text-zinc-600 transition hover:bg-zinc-900/5 dark:text-zinc-400 dark:hover:bg-zinc-800/40"
		>
			{introBio}
		</button>
	);
}
