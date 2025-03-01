import clsx from "clsx";
import { IChecklistGroup } from "../../interfaces/i-checklist-group";
import { ChecklistGroupDesc } from "./group-desc";
import { ChecklistGroupTitle } from "./group-title";
import { ChecklistSpecialMsg } from "./special-msg";

interface IChecklistGroupProps {
	group: IChecklistGroup;
}

export function ChecklistGroup({ group }: IChecklistGroupProps) {
	return (
		<div className={clsx("my-6 lg:my-12")}>
			<ChecklistGroupTitle title={group.title} />
			<ChecklistGroupDesc desc={group.desc} />

			<ChecklistSpecialMsg
				status={group.status}
				unknownNote={group.unknownNote}
				passedNote={group.passedNote}
				failedNote={group.failedNote}
			/>
		</div>
	);
}
