import type { ComponentType } from "react";

export interface ILinkChip {
	icon: ComponentType<{ className?: string }>;
	label: string;
	/** Opens in a new tab. Provide this or onClick, not both. */
	url?: string;
	/** For in-page interactions, e.g. opening a lightbox. */
	onClick?: () => void;
}

const chipClassName =
	"group flex items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-zinc-100 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-900/5 dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70";

function ChipContent({ chip }: { chip: ILinkChip }) {
	const Icon = chip.icon;
	return (
		<>
			<span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent-50 ring-1 ring-accent-100 dark:bg-accent-400/10 dark:ring-accent-400/20">
				<Icon className="h-5 w-5 text-accent-700 dark:text-accent-400" />
			</span>
			<span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
				{chip.label}
			</span>
		</>
	);
}

export function LinkChipGrid({ chips }: { chips: ILinkChip[] }) {
	if (chips.length === 0) {
		return null;
	}

	return (
		<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
			{chips.map((chip) =>
				chip.url ? (
					<a
						key={chip.label}
						href={chip.url}
						target="_blank"
						rel="noopener noreferrer"
						className={chipClassName}
					>
						<ChipContent chip={chip} />
					</a>
				) : (
					<button
						key={chip.label}
						type="button"
						onClick={chip.onClick}
						className={chipClassName}
					>
						<ChipContent chip={chip} />
					</button>
				),
			)}
		</div>
	);
}
