import Image from "next/image";
import type { JSX } from "react";
import { Accordion } from "@/components/accordion/accordion";
import imgResumeDesignTraditionalVsCreative from "./_img/resume-design-traditional-vs-creative.jpg";
import imgResumeFormatingInfographic from "./_img/resume-formating-infographic.jpg";

export function TraditionalVsCreative(): JSX.Element {
	return (
		<>
			<h3 id="creative">
				<a
					href="#creative"
					className="no-underline text-inherit hover:underline"
				>
					قالب رزومه سنتی یا خلاقانه؟
				</a>
			</h3>
			<p>
				خب حالا که نکات اصلی رو گفتیم یه موردی هست که شاید لازم باشه درباره اون
				صحبت کنیم و اون اینکه آیا از قالب‌های سنتی استفاده کنیم یا خلاقانه و
				مدرن. به تصویر زیر دقت کنید.
			</p>
			<figure>
				<Image
					src={imgResumeDesignTraditionalVsCreative}
					alt="رزومه سنتی یا رزومه خلاقانه؟"
				/>
				<figcaption>رزومه سنتی یا رزومه خلاقانه؟</figcaption>
			</figure>
			<p>
				اگه کارت درباره طراحی یا کارهای بصری هست، یه قالب خلاقانه یا طراحی‌شده
				می‌تونه منطقی باشه. مثلاً یه طراح شاید بخواد خلاقیت و نوآوری رو نشون بده و
				یه چیدمان جسورانه می‌تونه این کارو بکنه. حتی اون‌موقع هم اختیاریه و به
				خودت بستگی داره.
			</p>
			<p>
				برای بیشتر رشته‌های دیگه، یه قالب سنتی و تمیز انتخاب امن‌تریه. این یه
				انتخاب شخصیه که به رشته‌ات و تصویری که میخوای بسازی بستگی داره، نه یه
				قانون. یادت باشه، بالا رفتن میزان خلاقیت مساوی است با بالا رفتن ریسک.
			</p>

			<Accordion title="اینفوگرافیک قوانین چیدمان رزومه">
				<figure>
					<Image
						src={imgResumeFormatingInfographic}
						alt="اینفوگرافیک درباره قالب رزومه"
					/>
					<figcaption>
						تنها ۷ درصد ریکروترها موافق رزومه خلاقانه هستند
					</figcaption>
				</figure>
			</Accordion>
		</>
	);
}
