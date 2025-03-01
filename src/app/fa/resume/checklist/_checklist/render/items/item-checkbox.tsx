import clsx from "clsx";
import { IChecklistGroupItem } from "../../interfaces/i-checklist-group-item";
import { ChecklistSpecialMsg } from "../group/special-msg";
import { ChecklistItemCheckboxIcon } from "./item-checkbox-icon";

interface IChecklistItemCheckboxProps {
	item: IChecklistGroupItem;
	itemId: string;
}

export function ChecklistItemCheckbox({
	item,
	itemId,
}: IChecklistItemCheckboxProps) {
	return (
		<div className="md:px-1">
			<input
				className="hidden"
				type="checkbox"
				id={itemId}
				checked={item.checked}
				// onChange={() => handleTaskClick(index)}
			/>
			<label
				className={clsx(
					"flex gap-2 items-center",
					"px-2 md:px-4",
					"py-2 md:py-2",
					"rounded-lg",
					"cursor-pointer",
					"transition",
					"hover:bg-gray-100 dark:hover:bg-gray-800",
				)}
				htmlFor={itemId}
			>
				<ChecklistItemCheckboxIcon status={item.status} />
				<div
					className={clsx(
						"text-xs md:text-sm leading-5",
						// 'flex items-center flex-col sm:gap-1 sm:flex-row',
					)}
				>
					<span className="font-bold inline-block pl-1">{item.title}</span>
					<span className="opacity-80">{item.desc}</span>
				</div>
			</label>

			<div className="px-4">
				<ChecklistSpecialMsg
					status={item.status}
					size="sm"
					unknownNote={item.unknownNote}
					passedNote={item.passedNote}
					failedNote={item.failedNote}
				/>
			</div>
		</div>
	);
}
