import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import type { JSX } from "react";
import type { ITodo } from "./interface";

export function TodoList({
	items,
	checked,
	onToggle,
	idPrefix = "task",
}: {
	items: ITodo[];
	checked: Record<string, boolean>;
	onToggle: (id: string) => void;
	idPrefix?: string;
}): JSX.Element {
	return (
		<div className="select-none">
			{items.map((item) => (
				<div key={item.id} className="px-2">
					<input
						className="hidden"
						type="checkbox"
						id={`${idPrefix}_${item.id}`}
						checked={checked[item.id] ?? false}
						onChange={() => onToggle(item.id)}
					/>
					<label
						className="flex gap-2 items-center px-4 py-2 rounded-lg cursor-pointer transition hover:bg-gray-100"
						htmlFor={`${idPrefix}_${item.id}`}
					>
						{checked[item.id] ? (
							<CheckCircleIcon className="w-5 h-5 text-green-500" />
						) : (
							<QuestionMarkCircleIcon className="w-5 h-5 text-gray-300" />
						)}
						<span className="text-xs md:text-sm leading-5">{item.item}</span>
					</label>
				</div>
			))}
		</div>
	);
}
