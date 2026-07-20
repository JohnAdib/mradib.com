import clsx from "clsx";

/**
 * The shared item header: a lead icon, the title, and a one-line description.
 * The reviewer row and the result card both render through this, so an item
 * reads the same whether you are grading it or receiving it. The parent owns the
 * flex row (icon sits first), and adds any trailing control or chevron.
 */
export function ItemHeader({
	icon,
	title,
	description,
	muted = false,
}: {
	icon: React.ReactNode;
	title: string;
	description?: string;
	muted?: boolean;
}) {
	return (
		<>
			{icon}
			<span className="min-w-0 flex-1">
				<span
					className={clsx(
						"block text-sm font-semibold",
						muted
							? "text-zinc-400 line-through dark:text-zinc-500"
							: "text-zinc-800 dark:text-zinc-100",
					)}
				>
					{title}
				</span>
				{description && !muted && (
					<span className="mt-0.5 block text-xs text-zinc-600 dark:text-zinc-400">
						{description}
					</span>
				)}
			</span>
		</>
	);
}
