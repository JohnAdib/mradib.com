"use client";

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";

/**
 * A small confirm dialog for a destructive action. Escape, backdrop click, and
 * focus trapping come from Headless UI; the panel matches the site's themed
 * overlay and reads correctly in both themes and RTL.
 */
export function ConfirmDialog({
	open,
	title,
	body,
	confirmLabel,
	cancelLabel,
	onConfirm,
	onClose,
}: {
	open: boolean;
	title: string;
	body: string;
	confirmLabel: string;
	cancelLabel: string;
	onConfirm: () => void;
	onClose: () => void;
}) {
	return (
		<Dialog open={open} onClose={onClose} className="relative z-50">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-zinc-900/40 backdrop-blur-xs transition-opacity duration-200 data-closed:opacity-0 dark:bg-black/60"
			/>
			<div className="fixed inset-0 flex items-center justify-center p-4">
				<DialogPanel
					transition
					className="w-full max-w-sm rounded-2xl bg-surface p-5 text-start shadow-xl ring-1 ring-zinc-900/10 transition duration-200 data-closed:scale-95 data-closed:opacity-0 dark:bg-zinc-900 dark:ring-zinc-700/60"
				>
					<DialogTitle className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
						{title}
					</DialogTitle>
					<p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
						{body}
					</p>
					<div className="mt-5 flex justify-end gap-2">
						<button
							type="button"
							onClick={onClose}
							className="rounded-md px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/5 dark:text-zinc-300 dark:hover:bg-zinc-800"
						>
							{cancelLabel}
						</button>
						<button
							type="button"
							onClick={onConfirm}
							className="rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
						>
							{confirmLabel}
						</button>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
}
