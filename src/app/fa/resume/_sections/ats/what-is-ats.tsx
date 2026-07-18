import Image from "next/image";
import type { JSX } from "react";
import imgResumeAts70pDisqualified from "./_img/resume-ats-70p-disqualified.png";
import imgResumeAtsUsage from "./_img/resume-ats-usage.png";

export function WhatIsAts(): JSX.Element {
	return (
		<>
			<p>
				یه غول داریم به اسم ATS که اگه ترفندهاش رو یاد بگیرید می‌تونید از سدش رد
				بشید و کاری کنید که یک انسان رزومه شما رو بخونه.
			</p>
			<p>
				ATS مخفف Applicant Tracking Systems هست و یه سیستم اتوماته که وقتی شما
				رزومه رو ارسال میکنید توسط سیستم چک میکنه که آیا برای این شغل مناسب هست
				یا نه. وقتی مناسب نباشه معمولا بدون اینکه کسی اون رزومه رو بخونه ایمیل
				ریجکت دریافت می‌کنید که احتمالا شبیه به هم هستن.
			</p>
			<figure>
				<Image
					src={imgResumeAts70pDisqualified}
					alt="حدود ۷۰ درصد رزومه‌ها توسط ATS رد میشه"
				/>
				<figcaption>حدود ۷۰ درصد رزومه‌ها توسط ATS رد میشه</figcaption>
			</figure>

			<p>
				ای‌تی‌اس یک جور رباته که با فیلتر کردن صدها رزومه، فقط مواردی که مناسب‌تر
				هستن رو به دست منابع انسانی و استخدام‌کننده‌ها میرسونه.
			</p>
			<p>
				احتمالا تعجب کردین. دارین با خودتون میگین وقتی یه ربات میخواد بهم نه بگه
				چه کاریه این همه وقت بزارم رزومه خودم رو درست کنم :(
			</p>
			<figure>
				<Image
					src={imgResumeAtsUsage}
					alt="حدود ۹۸ درصد شرکت‌ها از ATS استفاده میکنن"
				/>
				<figcaption>حدود ۹۸ درصد شرکت‌ها از ATS استفاده میکنن</figcaption>
			</figure>
		</>
	);
}
