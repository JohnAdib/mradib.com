"use client";

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

	return (
		<div className="mt-6">
			<h3 className="text-sm font-bold">{title}</h3>
			<TodoList items={items} checked={store.checked} onToggle={store.toggle} />
		</div>
	);
}
