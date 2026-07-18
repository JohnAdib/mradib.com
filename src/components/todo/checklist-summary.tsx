"use client";

import type { JSX } from "react";
import { useChecklistStore } from "@/lib/checklist/use-checklist-store";
import { Msg } from "../msg/msg";
import type { IChecklistGroup } from "./interface";
import { TodoList } from "./todo-list";

export function ChecklistSummary({
	storageKey,
	groups,
	locale = "fa-IR",
	doneMessage = "تبریک! همه کارهایی که لیست کرده بودم رو انجام دادی!",
}: {
	storageKey: string;
	groups: IChecklistGroup[];
	locale?: string;
	doneMessage?: string;
}): JSX.Element {
	const store = useChecklistStore(storageKey);

	const allIds = groups.flatMap((group) => group.items.map((item) => item.id));
	const total = allIds.length;
	const checkedCount = store.countChecked(allIds);
	const isAllDone = total > 0 && checkedCount === total;
	const percentage = total === 0 ? 0 : Math.round((checkedCount / total) * 100);

	return (
		<div className="select-none">
			{isAllDone ? (
				<Msg severity="success">{doneMessage}</Msg>
			) : (
				<div className="my-4">
					<span className="text-sm">
						{`${checkedCount.toLocaleString(locale)}/${total.toLocaleString(locale)}`}
					</span>
					<div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
						<div
							className="h-full rounded-full bg-teal-500 transition-all"
							style={{ width: `${percentage}%` }}
						/>
					</div>
				</div>
			)}

			{groups.map((group) => (
				<div key={group.id} className="mt-4">
					<h3 className="text-sm font-bold">
						{group.href ? (
							<a href={group.href} className="hover:underline">
								{group.title}
							</a>
						) : (
							group.title
						)}
					</h3>
					<TodoList
						items={group.items}
						checked={store.checked}
						onToggle={store.toggle}
						idPrefix="summary"
					/>
				</div>
			))}
		</div>
	);
}
