import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function SkillLeveling(): JSX.Element {
	return (
		<>
			<h3 id="levels">
				<a href="#levels" className="no-underline text-inherit hover:underline">
					مهارت‌ها رو چطور لیست کنیم؟
				</a>
			</h3>
			<p>
				اولین اقدام اینه که مهارت‌‌های سخت خودتون رو لیست کنید. مثلا وقتی
				برنامه‌نویس هستید با یک فریم‌ورک کار کردید یا یک زبان بلد هستید. به‌عنوان
				یک قاعده کلی، سطح مهارت شما رو می‌تونیم به سه قسمت تقسیم کنیم.
			</p>
			<ul>
				<li>
					<h4 id="beginner">
						<a
							href="#beginner"
							className="no-underline text-inherit hover:underline"
						>
							مبتدی
						</a>
					</h4>
					<p>
						شما کمی تجربه اولیه درباره این مهارت دارید که ممکنه از یک تمرین کلاس
						آموزشی یا یک تفریح آخرهفته‌ای باشه. میشه گفت تنها با موضوع آشنا
						هستید.
					</p>
				</li>
				<li>
					<h4 id="intermediate">
						<a
							href="#intermediate"
							className="no-underline text-inherit hover:underline"
						>
							متوسط
						</a>
					</h4>
					<p>
						شما از این مهارت در محیط کاری استفاده کردید و سطح درک خوبی ازش
						دارید.
					</p>
				</li>
				<li>
					<h4 id="advanced">
						<a
							href="#advanced"
							className="no-underline text-inherit hover:underline"
						>
							پیشرفته
						</a>
					</h4>
					<p>
						شما کاملا در این زمینه در سطح بالایی تخصص دارید و حتی می‌تونید به
						سایر همکاران خودتون آموزش بدید.
					</p>
				</li>
			</ul>
			<Msg severity="error">درباره سطح مهارت خودتون هرگز دروغ نگید.</Msg>
			<p>
				فرض کنید که به‌عنوان یک گرافیست استخدام شدید و اولین تسک شما مثلا یک کاور
				زیبا برای یک مقاله با ایلاستراتور هست. اگه در نهایت با نقاشی مایکروسافت
				یه‌چیزی بکشید و تحویل بدید مطمئن باشید قبل از اتمام دوره آزمایشی بیکار
				خواهید شد.
			</p>
		</>
	);
}
