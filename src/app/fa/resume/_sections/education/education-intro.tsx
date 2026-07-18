import Image from "next/image";
import imgResumeEducationCover from "./_img/resume-education-cover.jpg";

export function EducationIntro(): JSX.Element {
	return (
		<>
			<p>
				احتمالا با یک بخش ساده طرف هستیم ولی بسته به شرایط شما شاید کمی ظرافت
				نیاز داشته باشه!
			</p>
			<p>
				بهتره ابتدا تمام مواردی که ممکنه داشته باشیم رو لیست کنیم بعد بریم سراغ
				ترفندهایی که کمک میکنه برجسته‌تر بشید.
			</p>
			<figure>
				<Image
					src={imgResumeEducationCover}
					alt="نمونه نحوه نوشتن تحصیلات در رزومه"
				/>
				<figcaption>نمونه نحوه نوشتن تحصیلات در رزومه</figcaption>
			</figure>
		</>
	);
}
