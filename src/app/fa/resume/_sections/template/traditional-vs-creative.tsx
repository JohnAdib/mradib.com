import Image from "next/image";
import { Accordion } from "@/components/accordion/accordion";
import imgResumeDesignTraditionalVsCreative from "./_img/resume-design-traditional-vs-creative.jpg";
import imgResumeFormatingInfographic from "./_img/resume-formating-infographic.jpg";

export function TraditionalVsCreative(): JSX.Element {
	return (
		<>
			<h3 id="traditional-vs-creative">قالب رزومه سنتی یا خلاقانه؟</h3>
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
				اگه تو صنعت‌های سنتی‌تر مثل حقوقی، بانکداری، مالی و … دنبال شغل هستی،
				به‌نظر میرسه مدل سنتی مناسب‌تر باشه
			</p>
			<p>
				اگه برای شرکت‌های تکنولوژی میخوای درخواست بدی، جایی که نوآوری ارزشمند
				هست، شاید دنبال مدل خلاقانه‌تری باشی. یادت باشه، بالا رفتن میزان خلاقیت
				مساوی است با بالا رفتن ریسک!
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
