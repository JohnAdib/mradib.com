import {
	ArrowDownTrayIcon,
	DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function IconCard({ href }: { href: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex items-center gap-4 rounded-2xl bg-surface p-4 ring-1 ring-zinc-900/10 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-900/5 dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70"
		>
			<span className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-accent-50 dark:bg-accent-400/10">
				<DocumentTextIcon className="h-7 w-7 text-accent-700 dark:text-accent-400" />
			</span>
			<Caption />
		</a>
	);
}

function Caption() {
	return (
		<span className="min-w-0 flex-1">
			<span className="block text-sm font-semibold text-zinc-800 dark:text-zinc-100">
				Slides (PDF)
			</span>
			<span className="mt-1 flex items-center gap-1.5 text-xs font-medium text-accent-700 dark:text-accent-400">
				<ArrowDownTrayIcon className="h-3.5 w-3.5" />
				Download
			</span>
		</span>
	);
}

/** Clickable preview of a talk's slide deck: a large first-slide image when set, else a compact document card. */
export function TalkPdfPreview({
	href,
	previewImage,
}: {
	href: string;
	previewImage?: string;
}) {
	if (!previewImage) {
		return <IconCard href={href} />;
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="group block overflow-hidden rounded-2xl ring-1 ring-zinc-900/10 transition hover:shadow-lg hover:shadow-zinc-900/10 dark:ring-zinc-700/50"
		>
			<span className="relative block aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
				<Image
					src={previewImage}
					alt="Slides preview"
					fill
					className="object-cover"
				/>
			</span>
			<span className="flex items-center justify-between gap-3 bg-surface px-5 py-4 dark:bg-zinc-800/40">
				<span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
					Slides (PDF)
				</span>
				<span className="flex items-center gap-1.5 text-xs font-medium text-accent-700 transition group-hover:text-accent-600 dark:text-accent-400">
					<ArrowDownTrayIcon className="h-3.5 w-3.5" />
					Download
				</span>
			</span>
		</a>
	);
}
