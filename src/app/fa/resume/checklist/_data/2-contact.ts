import { IChecklistGroup } from "../_checklist/interfaces/i-checklist-group";
import { resumeChecklistContactItems } from "./2-contact-items";

export const resumeChecklistContact: IChecklistGroup = {
	id: "c",
	order: 2,
	group: "contact",
	title: "اطلاعات تماس",
	items: resumeChecklistContactItems,
};
