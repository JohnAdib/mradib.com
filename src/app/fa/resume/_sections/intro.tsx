import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { Msg } from "@/components/msg/msg";
import { ArticleToc } from "@/components/toc/article-toc";
import {
	checklistIdsBySection,
	resumeChecklistStorageKey,
} from "../resume-checklist-data";
import { tocSections } from "../resume-sections";

export function SectionIntro(): JSX.Element {
	return (
		<>
			<p>
				یک رزومه خوب، راهی برای رسیدین به یک شغل رویایی است. اگر رزومه شما ضعیف
				باشه، ممکنه هفته‌ها یا حتی ماه‌ها منتظر یک دعوت به مصاحبه و پاسخ اولیه
				بمونی. پس وقتی می‌تونی یک رزومه خوب داشته باشی، چرا که نه؟ یکمی وقت بزار
				و رزومه خودت رو حرفه‌ای کن، اونوقت می‌بینی چقدر نرخ دعوت به مصاحبه‌هات بالا
				میره.
			</p>
			<p>
				بنابراین احتمالا از خودت می‌پرسی که چطور می‌تونی یک رزومه خفن بنویسی که
				ریکروتر و منابع انسانی و استخدام‌کننده‌ها رو به‌خودش جذب کنه تا بخوان شما
				رو به مصاحبه دعوت کنن. جای درستی اومدی!
			</p>
			<p>
				توی این راهنما هر نکته‌ای که درباره رزومه ممکنه وجود داشته باشه رو از
				منابع معتبر جمع کردم تا به شما آموزش بدم که چطور اون رزومه خفن خودت رو
				بسازی و یه آفر توپ باهاش بگیری:)
			</p>

			<Msg severity="info">سعی می‌کنم این آموزش رو به روز نگه دارم</Msg>

			<SectionHeading anchor="step-by-step" id="step-by-step">
				آموزش گام به گام ساخت رزومه
			</SectionHeading>
			<p>
				وقتی یه‌کار بزرگ رو به تیکه‌های کوچک تقسیم کنیم میبینیم که چقدر راحت‌تر
				میتونیم انجامش بدیم. پس ببینیم مرحله به مرحله چطور باید پیش بریم.
			</p>
			<p>
				در ادامه به‌ترتیب، بخش‌های مختلف رزومه رو بررسی می‌کنیم. توضیح میدیم که چی
				بنویسید و چطور بنویسید تا برجسته شوید و به‌شغلی که لیاقتش رو دارید برسید.
			</p>

			<div className="xl:hidden">
				<ArticleToc
					variant="inline"
					sections={tocSections}
					storageKey={resumeChecklistStorageKey}
					checklistIdsBySection={checklistIdsBySection}
				/>
			</div>
		</>
	);
}
