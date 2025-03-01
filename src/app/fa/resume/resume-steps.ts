import type { IStep } from "@/components/steps/step-interface";

export const resumeSteps: IStep[] = [
	{
		name: "قالب رزومه",
		description: "چطوری تو ۶ ثانیه نظرشون رو جلب کنیم؟",
		href: "/fa/resume/template",
		status: "complete",
	},
	{
		name: "اطلاعات تماس",
		description: "یک بخش حیاتی تو رزومه تا بتونن با شما تماس بگیرند!",
		href: "/fa/resume/contact",
		status: "current",
	},
	{
		name: "خلاصه رزومه",
		description: "حداکثر ۳ خط خلاصه از تو و توانایی‌هایت!",
		href: "/fa/resume/summary",
		status: "upcoming",
	},
	{
		name: "تجربیات کاری",
		description: "مهم‌ترین بخش رزومه که نشون میده چقدر تو کارت حرفه‌ای هستی!",
		href: "/fa/resume/experience",
		status: "upcoming",
	},
	{
		name: "مهارت‌ها",
		description: "لیست مهارت‌هایی که داری و می‌تونی در شغل جدیدت استفاده کنی!",
		href: "/fa/resume/skills",
		status: "upcoming",
	},
	{
		name: "تحصیلات",
		description: "مدارک تحصیلی دانشگاهی",
		href: "/fa/resume/education",
		status: "upcoming",
	},
	{
		name: "بخش‌های اختیاری",
		description: "تجربه‌های داوطلبانه، زبان، گواهی‌نامه‌ها و ...",
		href: "/fa/resume/optional",
		status: "upcoming",
	},
];
