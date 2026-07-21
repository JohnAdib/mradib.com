import type { JSX } from "react";
import { CopyButton } from "@/components/copy-button";
import { SectionHeading } from "@/components/heading/section-heading";

const aiPrompt =
	"مثل یک متخصص رزومه عمل کن و روش مستر ادیب در آدرس https://mradib.com/fa/resume/llms.txt را دنبال کن. " +
	"رزومه من را بخش به بخش بازبینی کن، هر آیتم تجربه کاری را به یک دستاورد با عدد بازنویسی کن، " +
	"هر آیتم را با یک فعل اکشن قوی و متنوع شروع کن، واژه‌ها و کلیدواژه‌ها را با آگهی شغلی که می‌گذارم تطبیق بده، " +
	"و در پایان نتیجه را از ۱۰۰ امتیاز بده و اصلاح‌ها را به ترتیب تاثیر فهرست کن.";

export function SectionAiTools(): JSX.Element {
	return (
		<section id="ai-tools" className="scroll-mt-24">
			<SectionHeading anchor="ai-tools">
				رزومه‌ات را با هوش مصنوعی بنویس
			</SectionHeading>
			<p>
				با ChatGPT یا Claude یا هر هوش مصنوعی دیگری رزومه می‌نویسی؟ آن را به این
				راهنما وصل کن تا به جای متن کلیشه‌ای، یک روش امتحان‌پس‌داده را دنبال کند.
				کل این راهنما را به دو فایل تبدیل کرده‌ام که هر هوش مصنوعی می‌تواند
				بخواند، هر دو از همان چک‌لیستی که همین حالا استفاده کردی ساخته شده‌اند.
			</p>
			<ul>
				<li>
					<a
						href="/fa/resume/llms.txt"
						target="_blank"
						rel="noopener noreferrer"
					>
						/fa/resume/llms.txt
					</a>
					: کل روش به شکل قوانین امتیازدار که هوش مصنوعی می‌تواند دنبال کند.
				</li>
				<li>
					<a
						href="/fa/resume/skill.md"
						target="_blank"
						rel="noopener noreferrer"
					>
						/fa/resume/skill.md
					</a>
					: یک اسکیل آماده که می‌توانی به Claude بدهی یا در ابزار خودت بگذاری.
				</li>
			</ul>
			<p>
				یا این پرامپت را در هوش مصنوعی بگذار و رزومه و آگهی شغلی را هم اضافه کن:
			</p>
			<blockquote>{aiPrompt}</blockquote>
			<CopyButton text={aiPrompt} label="کپی پرامپت" copiedLabel="کپی شد" />
		</section>
	);
}
