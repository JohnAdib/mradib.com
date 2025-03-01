import Link from "next/link";

const references = [
	"https://novoresume.com/career-blog/how-to-write-a-resume-guide",
	"https://novoresume.com/career-blog/how-long-should-a-resume-be",
	"https://novoresume.com/career-blog/job-titles-on-resume",
	"https://novoresume.com/career-blog/resume-fonts",
	"https://novoresume.com/career-blog/contact-information-on-resume",
	"https://novoresume.com/career-blog/what-to-put-on-a-resume",
	"https://novoresume.com/career-blog/most-important-skills-to-put-on-your-resume",
	"https://novoresume.com/career-blog/how-long-should-a-resume-be",
	"https://novoresume.com/career-blog/optimize-linkedin-profile-to-complement-your-resume",
	"https://novoresume.com/career-blog/how-to-list-work-experience-on-a-resume",
	"https://novoresume.com/career-blog/how-to-list-education-on-a-resume",
	"https://novoresume.com/career-blog/resume-summary",
	"https://novoresume.com/career-blog/ats-resume",
	"https://resumelab.com/resume/how-to",
	"https://resumelab.com/resume/format",
	"https://zety.com/blog/how-to-make-a-resume",
	"https://business.time.com/2012/04/13/how-to-make-your-resume-last-longer-than-6-seconds/",
	"https://www.youtube.com/watch?v=Gt2AQG-u8xM",
	"https://www.youtube.com/watch?v=HfEvIuUvF2Q",
];

export function ResumeReferences(): JSX.Element {
	// create a list of references with ul li
	return (
		<section>
			<h2>منابع</h2>
			<p>
				این مقاله با استناد به منابع مختلفی نوشته شده و در ادامه با مستندات
				تکمیلی ترکیب شده که لیست اون‌ها رو میتونید در ادامه ببینید و متن اصلی رو
				در صورت تمایل مطالعه کنید. هر چند مطمئن باشید سعی کردم چیزی جا نیافتاده
				باشه.
			</p>
			<ul dir="ltr" className="text-xs">
				{references.map((ref) => (
					<li key={ref} className="my-1 leading-4">
						<Link
							href={ref}
							target="_blank"
							className="block py-1.5 md:py-1"
							rel="nofollow noreferrer noopener"
						>
							{ref}
						</Link>
					</li>
				))}
			</ul>
			<p>
				اگه شما هم نکته‌ای دارید که اضافه کنید یا فکر میکنید بخشی نیازمند اصلاح
				است، ممنون میشم اون رو برام بفرستید تا بتونم آپدیت کنم تا یک مرجع کامل
				برای نگارش رزومه به فارسی داشته باشیم.
			</p>
		</section>
	);
}
