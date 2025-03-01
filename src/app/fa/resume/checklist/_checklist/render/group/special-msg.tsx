import { Msg } from "@/components/msg/msg";
import { ChecklistItemStatusType } from "../../interfaces/type-checklist-item-status";

interface IChecklistGroupDescProps {
	size?: "xs" | "sm" | "md" | "lg";
	status?: ChecklistItemStatusType;
	passedNote?: string | React.ReactNode;
	failedNote?: string | React.ReactNode;
	unknownNote?: string | React.ReactNode;
}

export function ChecklistSpecialMsg({
	size = "md",
	status,
	unknownNote,
	passedNote,
	failedNote,
}: IChecklistGroupDescProps): JSX.Element | null {
	switch (status) {
		case "passed":
			return (
				<Msg severity="success" size={size}>
					{passedNote}
				</Msg>
			);

		case "failed":
			return (
				<Msg severity="warning" size={size}>
					{failedNote}
				</Msg>
			);

		case "unknown":
		default:
			return (
				<Msg severity="info" size={size}>
					{unknownNote}
				</Msg>
			);
	}
}
