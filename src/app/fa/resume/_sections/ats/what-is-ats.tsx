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
				ATS مخفف Applicant Tracking System هست و یه سیستم خودکاره که وقتی شما
				رزومه رو ارسال می‌کنید، چک می‌کنه که آیا برای این شغل مناسب هستید یا نه.
				وقتی مناسب نباشید، معمولا بدون اینکه کسی اون رزومه رو بخونه یک ایمیل
				ریجکت دریافت می‌کنید؛ ایمیل‌هایی که اغلب شبیه هم هستن.
			</p>
			<figure>
				<Image
					src={imgResumeAts70pDisqualified}
					alt="حدود ۷۰ درصد رزومه‌ها توسط ATS رد می‌شن"
				/>
				<figcaption>حدود ۷۰ درصد رزومه‌ها توسط ATS رد می‌شن</figcaption>
			</figure>

			<p>
				ای‌تی‌اس یک جور رباته که با فیلتر کردن صدها رزومه، فقط مواردی که مناسب‌تر
				هستن رو به دست منابع انسانی و استخدام‌کننده‌ها می‌رسونه.
			</p>
			<p>
				احتمالا تعجب کردین. دارین با خودتون می‌گین وقتی یه ربات می‌خواد بهم نه بگه
				چه کاریه این همه وقت بذارم رزومه خودم رو درست کنم؟ :(
			</p>
			<figure>
				<Image
					src={imgResumeAtsUsage}
					alt="حدود ۹۸ درصد شرکت‌ها از ATS استفاده می‌کنن"
				/>
				<figcaption>حدود ۹۸ درصد شرکت‌ها از ATS استفاده می‌کنن</figcaption>
			</figure>
		</>
	);
}
