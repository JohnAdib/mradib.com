import Image from "next/image";
import { Pre } from "@/components/syntax-highlighter/pre";
import imgResumeAtJobExample1 from "./_img/resume-ats-job-example-1.jpg";

export function KeywordTailoring(): JSX.Element {
	return (
		<>
			<p>
				نگران نباشید، وقتی بدونید با چی طرف هستید و چطور کار میکنه، رد شدن ازش
				کار سختی نخواهد بود. نکته این‌جاست که باید آگهی شغلی رو بخونید و رزومه رو
				متناسب با اون تنظیم کنید. برای این‌کار باید کلمات کلیدی رو پیدا کنید و
				توی رزومه خودتون ازشون استفاده کنید.
			</p>
			<p>
				بزارید یه مثال ساده بزنیم. یک آگهی برای بازریاب دیجیتال رو بخونیم ببینیم
				چی برای شرکت مهمه.
			</p>
			<figure>
				<Image
					src={imgResumeAtJobExample1}
					alt="بررسی یک آگهی شغلی از نگاه ATS"
				/>
				<figcaption>بررسی یک آگهی شغلی از نگاه ATS</figcaption>
			</figure>
			<Pre language="plaintext">5+ years of experience in online marketing</Pre>
			<Pre language="plaintext">
				Social media marketing experience ... Facebook advertising
			</Pre>
			<Pre language="plaintext">
				B.A. in Marketing or Business Administration
			</Pre>
			<Pre language="plaintext">
				managing USD 20,000+ monthly advertising budget on Facebook
			</Pre>

			<p>
				حالا برای اینکه رزومه خودمون رو برای این پیش‌نیازها تنظیم کنیم، کافیه این
				موارد رو توی رزومه خودتون اضافه کنید. البته منظورم مشابه اون‌هاست با توجه
				به دستاوردها و صلاحیت‌هایی که دارید.
			</p>
		</>
	);
}
