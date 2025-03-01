import clsx from "clsx";
import type { IChecklistGroupItem } from "../../interfaces/i-checklist-group-item";
import { ChecklistItemCheckbox } from "./item-checkbox";

interface IChecklistItemProps {
	item: IChecklistGroupItem;
	itemId: string;
}

export function ChecklistItem({ item, itemId }: IChecklistItemProps) {
	return (
		<div className={clsx("my-1 lg:my-2")}>
			<ChecklistItemCheckbox item={item} itemId={itemId} />
		</div>
	);
}
