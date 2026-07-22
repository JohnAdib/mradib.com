import type { IOgCard } from "./og-card-interface";

const portrait = { src: "/img/john-adib-hero.jpg", fit: "cover" } as const;

// Social cards for the Persian pages, rendered right to left in Vazirmatn.
export const ogCardsFa: IOgCard[] = [
	{
		slug: "fa-home",
		route: "/fa",
		lang: "fa",
		eyebrow: "مدیر مهندسی در لندن",
		headline: "سلام، جان ادیب هستم",
		proof: "آموزش‌ها و نوشته‌های فارسی: رزومه، منتورشیپ و مهارت‌های حرفه‌ای.",
		artwork: portrait,
	},
	{
		slug: "fa-mentor",
		route: "/fa/mentor",
		lang: "fa",
		eyebrow: "منتورشیپ",
		headline: "منتورشیپ با آقای ادیب",
		proof: "جلسات رایگان برای پیشرفت در حرفه تکنولوژی. همین امروز رزرو کن.",
		artwork: portrait,
	},
	{
		slug: "fa-resume",
		route: "/fa/resume",
		lang: "fa",
		eyebrow: "آموزش رایگان",
		headline: "آموزش صفر تا صد ساخت رزومه",
		proof: "وقتشه رزومه خفن خودت رو بسازی. کامل‌ترین راهنمای فارسی رزومه‌نویسی.",
		image: "src/app/fa/resume/cover.jpg",
	},
	{
		slug: "fa-resume-review",
		route: "/fa/resume/review",
		lang: "fa",
		eyebrow: "بررسی رزومه",
		headline: "رزومه‌ت بررسی شد",
		proof:
			"یک بررسی کامل از رزومه‌ت، بخش به بخش، هرکدوم با یک کار مشخص. همراه با راهنمای کامل ساخت یک رزومه‌ی قوی‌تر.",
	},
	{
		slug: "fa-resume-checklist",
		route: "/fa/resume/checklist",
		lang: "fa",
		eyebrow: "بررسی رزومه",
		headline: "یک رزومه رو سریع بررسی کن",
		proof:
			"از ۱۰۰ نمره بده، مشکل هر بخش رو با راه‌حلش علامت بزن، و نتیجه رو با یک لینک برای بقیه بفرست.",
	},
	{
		slug: "fa-excel",
		route: "/fa/excel",
		lang: "fa",
		eyebrow: "آموزش آفیس",
		headline: "آموزش اکسل",
		proof: "آموزش رایگان اکسل به زبان ساده فارسی، از پایه تا حرفه‌ای.",
	},
	{
		slug: "fa-powerpoint",
		route: "/fa/powerpoint",
		lang: "fa",
		eyebrow: "آموزش آفیس",
		headline: "آموزش پاورپوینت",
		proof: "آموزش رایگان پاورپوینت، از ساخت اسلاید تا ارائه حرفه‌ای.",
	},
	{
		slug: "fa-word",
		route: "/fa/word",
		lang: "fa",
		eyebrow: "آموزش آفیس",
		headline: "آموزش ورد",
		proof: "آموزش رایگان ورد، از تایپ تا صفحه‌آرایی حرفه‌ای.",
	},
	{
		slug: "fa-cover-letter",
		route: "/fa/cover-letter",
		lang: "fa",
		eyebrow: "آموزش رایگان",
		headline: "آموزش کاورلتر",
		proof: "نوشتن کاورلتر حرفه‌ای به زبان فارسی، قدم به قدم.",
	},
	{
		slug: "fa-mysql-auto-backup",
		route: "/fa/mysql-auto-backup",
		lang: "fa",
		eyebrow: "آموزش فنی",
		headline: "بکاپ خودکار از دیتابیس سرور",
		proof:
			"آموزش صفر تا صد بکاپ خودکار از دیتابیس در سرور لینوکس، سریع و بدون دردسر.",
	},
];
