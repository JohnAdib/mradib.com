import Image from "next/image";
import imgResumeContactExample1 from "./_img/resume-contact-example-1.png";
import imgResumeContactExample2 from "./_img/resume-contact-example-2.png";
import imgResumeContactExample3 from "./_img/resume-contact-example-3.png";
import imgResumeContactExample4 from "./_img/resume-contact-example-4.png";
import imgResumeContactExample5 from "./_img/resume-contact-example-5.png";

export function ContactExamples(): JSX.Element {
	return (
		<>
			<h3>نمونه‌هایی از بخش تماس</h3>
			<p>
				یک نمونه موفق از بخش اطلاعات تماس، فارغ از دیزاین، میتونه شبیه به تصاویر
				زیر باشه.
			</p>

			<figure>
				<Image src={imgResumeContactExample1} alt="بخش تماس رزومه - نمونه ۱" />
				<figcaption>نمونه ۱</figcaption>
			</figure>

			<figure>
				<Image src={imgResumeContactExample2} alt="بخش تماس رزومه - نمونه ۲" />
				<figcaption>نمونه ۲</figcaption>
			</figure>

			<figure>
				<Image src={imgResumeContactExample3} alt="بخش تماس رزومه - نمونه ۳" />
				<figcaption>نمونه ۳</figcaption>
			</figure>

			<figure>
				<Image src={imgResumeContactExample4} alt="بخش تماس رزومه - نمونه ۴" />
				<figcaption>نمونه ۴</figcaption>
			</figure>

			<figure>
				<Image src={imgResumeContactExample5} alt="بخش تماس رزومه - نمونه ۵" />
				<figcaption>نمونه ۵</figcaption>
			</figure>

			<p>
				دوبار، سه‌بار، حتی شده ده‌بار چک کنید که همه موارد رو درست ذکر کردید و
				مهم‌تر از اون اینکه این اطلاعات رو به‌روز نگه دارید.
			</p>
		</>
	);
}
