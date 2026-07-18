import Image from "next/image";
import { Msg } from "@/components/msg/msg";
import imgResumeFormatStructure from "./_img/resume-format-structure.png";
import imgResumeFormatStructureChronological from "./_img/resume-format-structure-chronological.jpg";
import imgResumeFormatStructureCombination from "./_img/resume-format-structure-combination.jpg";
import imgResumeFormatStructureFunctional from "./_img/resume-format-structure-functional.jpg";

export function StructureFormats(): JSX.Element {
	return (
		<>
			<Msg severity="success">
				ریکروتر قبل از اینکه محتوای رزومه شما رو بخونه، اون رو اسکن میکنه{" "}
			</Msg>
			<h3 id="structure">انواع ساختارهای رزومه</h3>
			<p>
				سه نوع ساختار مختلف برای رزومه داریم که در شکل زیر اون‌ها رو میبینید.
				تفاوت اون‌ها در تاکید روی بخش خاص و نحوه مرتب‌کردن بخش‌هاست. تفاوت در این
				ساختارها در چینش بخش‌های مختلف رزومه است. تا اینجا ما اصلا کاری به گرافیک
				هر بخش نداریم
			</p>

			<figure>
				<Image src={imgResumeFormatStructure} alt="انواع ساختارهای رزومه" />
				<figcaption>
					از سمت چپ به راست، فرمت رزومه معکوس زمانی، رزومه کاربردی، رزومه ترکیبی
				</figcaption>
			</figure>
			<Msg severity="info">هر ۳ ساختار، دارای ۵ بخش اصلی رزومه هستند</Msg>

			<p>
				هر بخش رو به‌صورت تفضیلی با هم تکمیل خواهیم کرد. در این صفحه فقط روی
				انتخاب ساختار رزومه خودتون تمرکز کنید.
			</p>

			<h4 id="structure-chronological">
				<abbr title="Chronological Resume Format">فرمت رزومه زمانی</abbr>
			</h4>
			<p>
				محبوب‌ترین فرمت رزومه کاری است و ایده‌آل برای کسانی است که تجربه کاری
				زیادی دارن که به شغل درخواستی مرتبط است. آخرین شغل در ابتدا لیست میشه و
				به ترتیب زمانی به عقب لیست می‌کنید.
			</p>
			<figure>
				<Image
					src={imgResumeFormatStructureChronological}
					alt="فرمت رزومه در ساختار معکوس زمانی"
				/>
				<figcaption>
					استخدام‌کنندگان با این فرمت کاملا آشنا هستند و می‌دانند کجا دنبال
					اطلاعاتی که دنبالش هستند، بگردند.
				</figcaption>
			</figure>

			<p>
				اگر سابقه کاری کمی دارید، پر کردن تقریبا نصف صفحه با بخش تجربه کاری سخت
				خواهد بود و شاید بهتر باشه یکی از دو مدل کاربردی یا ترکیبی رو انتخاب
				کنید.
			</p>

			<h4 id="structure-functional">
				<abbr title="Functional Resume Format">فرمت رزومه کاربردی</abbr>
			</h4>
			<p>
				اگر دانشجو هستید یا تازه فارغ‌التحصیل شدید و تجربه کاری ندارید یا دنبال
				تغییر شغل هستید شاید این مدل انتخاب بهتری برای شما باشه. مثلا ممکنه یه
				فاصله زمانی وقفه طولانی در سابقه کاری داشته باشید یا مثلا بعد از چند سال
				شغل جدیدی رو میخواید تجربه کنید.
			</p>
			<figure>
				<Image
					src={imgResumeFormatStructureFunctional}
					alt="فرمت رزومه در ساختار کاربری یا مهارت محور"
				/>
				<figcaption>
					در ساختار رزومه کاربردی، تاکید اصلی روی مهارت‌های شماست و تجربیات کاری
					به‌صورت مختصر ذکر می‌شوند
				</figcaption>
			</figure>

			<h4 id="structure-combination">
				<abbr title="Combination Resume Format">فرمت رزومه ترکیبی</abbr>
			</h4>
			<p>
				یک انتخاب خوب برای کسانی که مهارت‌های متنوعی دارن، مدل ترکیبی هست. اگه
				برای شغلی میخواین درخواست بدین که به تخصص در چند زمینه نیاز داره میتونه
				براتون مفید باشه.
			</p>
			<figure>
				<Image
					src={imgResumeFormatStructureCombination}
					alt="فرمت رزومه در ساختار ترکیبی یا رزومه هایبرید"
				/>
				<figcaption>
					ساختار رزومه ترکیبی یا هایبرید روی سابقه کاری و مهارت‌ها به‌صورت همزمان
					تاکید دارد.
				</figcaption>
			</figure>
		</>
	);
}
