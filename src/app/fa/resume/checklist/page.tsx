import { ArticleLayout } from "@/components/article/layout";
import { separator } from "@/lib/constants/en";
import { myNameFa } from "@/lib/constants/fa";
import { readingTime } from "@/lib/reading-time";
import type { Metadata } from "next";
import { Checklist } from "./_checklist";
import { resumeChecklist } from "./_data";
import coverImg from "./opengraph-image.jpg";

const publishDate = "2024-07-22";
const publishTime = "10:20:24";
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = "2024-07-22" + "T" + "10:20:00" + ".000Z";
const articleTitle = "چک لیست ساخت رزومه";
const articleDescription =
	"با کمک این چک لیست به راحتی رزومه خودتون رو بررسی کنید و مشکلاتش رو پیدا کنید";
const pageTitle = "چک لیست ساخت رزومه از صفر تا صد";
const pageDesc = articleDescription;
const pagePath = "/fa/resume/checklist";
const keywords = [
	"رزومه",
	"چک لیست",
	"چک لیست رزومه",
	"رزومه انگلیسی",
	"رزومه فارسی",
	"رزومه موفق",
	"رزومه کاریابی",
	"رزومه شغلی",
	"رزومه کاری",
];

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDesc + separator + myNameFa,
	openGraph: {
		type: "article",
		publishedTime: datePublished,
	},
	twitter: {
		card: "summary_large_image",
	},
};

function PageContent(): JSX.Element {
	return (
		<section>
			<p>Resume</p>
		</section>
	);
}

export default function Page() {
	const articleReadingTime = readingTime(<PageContent />);

	return (
		<>
			<ArticleLayout
				title={articleTitle}
				intro={articleDescription}
				urlPath={pagePath}
				keywords={keywords}
				coverImage={coverImg}
				datePublished={datePublished}
				dateModified={dateModified}
				readTimeMinutes={articleReadingTime}
				lang="fa-IR"
			>
				<PageContent />
				<Checklist id="resume" list={resumeChecklist} />
			</ArticleLayout>
		</>
	);
}
