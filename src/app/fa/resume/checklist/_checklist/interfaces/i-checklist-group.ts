import type React from "react";
import type { IChecklistGroupItem } from "./i-checklist-group-item";
import type { ChecklistGroupType } from "./type-checklist-groups";
import type { ChecklistItemStatusType } from "./type-checklist-item-status";

export interface IChecklistGroup {
	id: string;
	order: number;
	group: ChecklistGroupType;
	title: string | React.ReactNode;
	desc?: string | React.ReactNode;
	passedNote?: string | React.ReactNode;
	failedNote?: string | React.ReactNode;
	unknownNote?: string | React.ReactNode;
	status?: ChecklistItemStatusType;
	items: IChecklistGroupItem[];
}
