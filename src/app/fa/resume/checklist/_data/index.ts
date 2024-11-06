import { IChecklistGroup } from "../_checklist/interfaces/i-checklist-group";
import { resumeChecklistTemplate } from "./1-template";
import { resumeChecklistContact } from "./2-contact";

export const resumeChecklist: IChecklistGroup[] = [
  resumeChecklistTemplate,
  resumeChecklistContact,
];
