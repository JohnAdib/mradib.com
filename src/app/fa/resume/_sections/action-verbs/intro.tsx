import Image from "next/image";
import { Msg } from "@/components/msg/msg";
import imgVerbMetricTask from "./_img/resume-action-verb-metric-task.jpg";
import imgVerbTaskMetric from "./_img/resume-action-verb-task-metric.jpg";

export function ActionVerbsIntro(): JSX.Element {
	return (
		<>
			<p>
				برای نگارش رزومه و نوشتن دستاوردها توصیه میشه که جمله رو با افعال حرکتی
				یا افعال کنشی یا افعال اکشن Action Verb شروع کنید. لیست زیر مجموعه‌ای از
				افعال مناسب است که توسط مدیران استخدام شرکت‌های بزرگ تهیه شده و برای
				استفاده در رزومه قابل استفاده است.
			</p>

			<h3>چگونه دستاوردهای خود را در رزومه بنویسیم؟</h3>
			<p>
				ما میتونیم از دو مدل برای نوشتن هر بولت پوینت دستاورد در رزومه استفاده
				کنیم.
			</p>
			<Msg severity="success">هر دو روش به یک اندازه موثر هستند.</Msg>

			<p>
				توجه کنید که چطور باید با یک action verb شروع کنید. در ادامه وظیفه یا
				پروژه را مختصر شرح دهید و جمله را با اثری که شما داشته‌اید به اتمام
				برسانید.
			</p>

			<figure>
				<Image src={imgVerbTaskMetric} alt="resume-action-verb-task-metric" />
				<figcaption dir="ltr">
					1. Metric at the end. Action Verb + Task or Project + Metric or Result
				</figcaption>
			</figure>

			<p>
				اینجا مدل دوم است که باز هم با action verb شروع میکنید، سپس تاثیر خودتون
				رو ذکر میکنید و در انتها وظیفه یا پروژه یا روش انجام رو مختصر توضیح
				میدید. در این مثال، کاهش تماس‌های پشتیبانی نتیجه بوده است.
			</p>
			<figure>
				<Image src={imgVerbMetricTask} alt="resume-action-verb-metric-task" />
				<figcaption dir="ltr">
					2. Metric in the middle. Action Verb + Metric or Result + Task or
					Project
				</figcaption>
			</figure>

			<p>
				در ادامه لیست کاملی از فعل‌های اکشن مناسب برای قرار دادن در رزومه رو
				میتونید ببینید.
			</p>
			<Msg severity="error">از هر فعل بیش از ۲ بار استفاده نکنید.</Msg>
		</>
	);
}
