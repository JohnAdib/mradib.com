import { IChecklistGroup } from "../_checklist/interfaces/i-checklist-group";
import { resumeChecklistTemplateItems } from "./1-template-items";

export const resumeChecklistTemplate: IChecklistGroup = {
  id: "t",
  order: 1,
  group: "template",
  title: "قالب رزومه",
  desc: "این موارد باید در قالب رزومه‌ی شما وجود داشته باشد.",
  items: resumeChecklistTemplateItems,
  passedNote: "تبریک! قالب رزومه‌ی شما کامل است.",
  failedNote: "قالب رزومه‌ی شما نیاز به بهبود دارد.",
  unknownNote: "قالب رزومه‌ی شما نیاز به بررسی دارد.",
  // status: 'passed',
};
