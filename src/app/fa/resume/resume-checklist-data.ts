import type { ITodo } from "@/components/todo/interface";
import type { ResumeSectionId } from "./resume-sections";

export type ChecklistSectionId = ResumeSectionId | "review";

export interface IResumeChecklistItem extends ITodo {
	sectionId: ChecklistSectionId;
}

export const resumeChecklistStorageKey = "resume-checklist-fa";

export const resumeChecklistItems: IResumeChecklistItem[] = [
	{
		id: "resume-format",
		item: "آیا از یک فرمت مناسب برای رزومه استفاده کردی؟",
		sectionId: "template",
	},
	{
		id: "essential-sections",
		item: "آیا تمام بخش‌های ضروری رو تو رزومه خودت قرار دادی؟",
		sectionId: "template",
	},
	{
		id: "contact-info",
		item: "آیا بخش اطلاعات تماس شامل تمام اطلاعات ضروری هست؟",
		sectionId: "contact",
	},
	{
		id: "professional-email",
		item: "آیا از یک ایمیل حرفه‌ای استفاده کردی؟ مثل name.family@gmail.com",
		sectionId: "contact",
	},
	{
		id: "summary-length",
		item: "آیا بخش خلاصه رزومه رو حداکثر تو ۲ تا ۳ خط نوشتی؟",
		sectionId: "summary",
	},
	{
		id: "relevant-experience",
		item: "آیا فقط مرتبط‌ترین تجربیات کاری رو فهرست کردی؟",
		sectionId: "experience",
	},
	{
		id: "achievements",
		item: "آیا به‌جای مسئولیت‌ها، دستاوردهای خودت رو فهرست کردی؟",
		sectionId: "experience",
	},
	{
		id: "work-history",
		item: "آیا میزان مناسبی از تجارت کاری رو ذکر کردی؟",
		sectionId: "experience",
	},
	{
		id: "relevant-skills",
		item: "آیا مهارت‌های مناسب رو باتوجه به موقعیتی که میخوای درخواست بدی فهرست کردی؟",
		sectionId: "skills",
	},
	{
		id: "education",
		item: "آیا تحصیلات خودت رو تو رزومه قرار دادی؟",
		sectionId: "education",
	},
	{
		id: "important-sections",
		item: "آیا از سایر بخش‌های مهم رو به رزومه اضافه کردی؟",
		sectionId: "optional",
	},
	{
		id: "page-length",
		item: "آیا رزومه شما یک تا دو صفحه است؟",
		sectionId: "length",
	},
	{
		id: "job-tailored",
		item: "آیا رزومه خودت رو به نسبت نیازهای آگهی‌های شغلی تنظیم کردی؟",
		sectionId: "ats",
	},
	{
		id: "action-verbs-used",
		item: "آیا دستاوردهای خودت رو با افعال اکشن شروع کردی و از تکرار یک فعل خودداری کردی؟",
		sectionId: "action-verbs",
	},
	{
		id: "self-review",
		item: "آیا رزومه خودت رو خودت کامل خوندی؟",
		sectionId: "review",
	},
	{
		id: "grammar-check",
		item: "آیا متن رزومه رو تو گرامرلی تست کردی که غلط املایی و گرامری نداشته باشه؟",
		sectionId: "review",
	},
	{
		id: "peer-review",
		item: "آیا رزومه رو دادی که چند تا از دوستانت بخونن و نظرشون رو گرفتی؟",
		sectionId: "review",
	},
];

export function checklistItemsBySection(
	sectionId: ChecklistSectionId,
): ITodo[] {
	return resumeChecklistItems.filter((item) => item.sectionId === sectionId);
}

function buildChecklistIdsBySection(): Record<string, string[]> {
	const map: Record<string, string[]> = {};
	for (const item of resumeChecklistItems) {
		const ids = map[item.sectionId] ?? [];
		ids.push(item.id);
		map[item.sectionId] = ids;
	}
	return map;
}

export const checklistIdsBySection: Record<string, string[]> =
	buildChecklistIdsBySection();
