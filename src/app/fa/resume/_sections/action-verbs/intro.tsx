import Image from "next/image";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import imgVerbMetricTask from "./_img/resume-action-verb-metric-task.jpg";
import imgVerbTaskMetric from "./_img/resume-action-verb-task-metric.jpg";

export function ActionVerbsIntro(): JSX.Element {
	return (
		<>
			<p>
				برای نگارش رزومه و نوشتن دستاوردها توصیه می‌شه که جمله رو با افعال حرکتی
				یا افعال کنشی یا افعال اکشن Action Verb شروع کنید. لیست زیر مجموعه‌ای از
				افعال مناسب است که توسط مدیران استخدام شرکت‌های بزرگ تهیه شده و آماده‌ی
				استفاده در رزومه است.
			</p>

			<h3 id="writing">
				<a
					href="#writing"
					className="no-underline text-inherit hover:underline"
				>
					چگونه دستاوردهای خود را در رزومه بنویسیم؟
				</a>
			</h3>
			<p>
				ما می‌تونیم از دو مدل برای نوشتن هر بولت‌پوینت دستاورد در رزومه استفاده
				کنیم.
			</p>
			<Msg severity="success">هر دو روش به یک اندازه موثر هستند.</Msg>

			<p>
				توجه کنید که چطور باید با یک action verb شروع کنید. در ادامه وظیفه یا
				پروژه را مختصر شرح دهید و جمله را با اثری که شما داشته‌اید به اتمام
				برسانید.
			</p>

			<figure>
				<Image
					src={imgVerbTaskMetric}
					alt="فرمول نوشتن دستاورد با معیار در انتها: فعل کنشی، وظیفه یا پروژه، نتیجه"
				/>
				<figcaption dir="ltr">
					1. Metric at the end. Action Verb + Task or Project + Metric or Result
				</figcaption>
			</figure>

			<p>
				اینجا مدل دوم است که باز هم با action verb شروع می‌کنید، سپس تاثیر خودتون
				رو ذکر می‌کنید و در انتها وظیفه، پروژه یا روش انجامش رو مختصر می‌نویسید.
				در این مثال، کاهش تماس‌های پشتیبانی نتیجه بوده است.
			</p>
			<figure>
				<Image
					src={imgVerbMetricTask}
					alt="فرمول نوشتن دستاورد با معیار در وسط: فعل کنشی، نتیجه، وظیفه یا پروژه"
				/>
				<figcaption dir="ltr">
					2. Metric in the middle. Action Verb + Metric or Result + Task or
					Project
				</figcaption>
			</figure>

			<p>
				در ادامه لیست کاملی از فعل‌های اکشن مناسب برای قرار دادن در رزومه رو
				می‌تونید ببینید.
			</p>
			<Msg severity="error">از هر فعل بیش از ۲ بار استفاده نکنید.</Msg>
		</>
	);
}
