"use client";

import {
	CheckCircleIcon,
	ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import type { JSX } from "react";
import { useChecklistStore } from "@/lib/checklist/use-checklist-store";
import type { ITodo } from "./interface";
import { TodoList } from "./todo-list";

export function SectionChecklist({
	storageKey,
	items,
	title = "چک لیست این بخش",
}: {
	storageKey: string;
	items: ITodo[];
	title?: string;
}): JSX.Element | null {
	const store = useChecklistStore(storageKey);

	if (items.length === 0) {
		return null;
	}

	const total = items.length;
	const checkedCount = store.countChecked(items.map((item) => item.id));
	const isAllDone = checkedCount === total;

	return (
		<div className="not-prose mt-8 rounded-2xl border border-accent-500/30 bg-accent-50/50 p-4 shadow-sm md:p-6 dark:bg-accent-400/5">
			<div className="flex items-center gap-3">
				<ClipboardDocumentCheckIcon className="h-6 w-6 shrink-0 text-accent-600 dark:text-accent-400" />
				<h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-100">
					{title}
				</h3>
				{isAllDone ? (
					<CheckCircleIcon className="ms-auto h-6 w-6 shrink-0 text-green-500" />
				) : (
					<span className="ms-auto inline-flex shrink-0 items-center rounded-full bg-accent-500/10 px-2.5 py-1 text-xs font-bold tabular-nums text-accent-700 dark:text-accent-300">
						{`${checkedCount.toLocaleString("fa-IR")}/${total.toLocaleString("fa-IR")}`}
					</span>
				)}
			</div>
			<div className="mt-3">
				<TodoList
					items={items}
					checked={store.checked}
					onToggle={store.toggle}
				/>
			</div>
		</div>
	);
}
