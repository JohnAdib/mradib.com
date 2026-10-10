import clsx from "clsx";
import Link from "next/link";
import { Accordion } from "@/components/accordion/accordion";
import type { FaqLanguage, IFaqQA } from "./faq-interface";
import { FaqJsonLD } from "./faq-json-ld";

const faqText = {
	en: {
		title: "Frequently Asked Questions",
		description:
			"Have a question that’s unanswered? Check the FAQ. If you still can’t find your answer,",
		contact: "contact me",
	},
	fa: {
		title: "سوالات متداول",
		description:
			"سوال بدون جواب برات باقی مونده؟ پرسش و پاسخ رو چک کن. اگه جواب سوالت رو بازم پیدا نکردی،",
		contact: "با من تماس بگیر",
	},
};

export default function Faq({
	list,
	language = "en",
	showContactLink = true,
}: {
	list?: IFaqQA[];
	language?: FaqLanguage;
	showContactLink?: boolean;
}) {
	if (!list) {
		return null;
	}

	const { title, description, contact } = faqText[language];

	return (
		<section className="faq mx-auto max-w-7xl py-16 lg:py-32">
			<div className="lg:grid lg:grid-cols-12 lg:gap-8">
				<div className="lg:col-span-5">
					<h2
						className={clsx(
							"text-4xl font-semibold leading-10 tracking-tight",
							language === "fa" ? "font-fa" : "font-display",
						)}
					>
						{title}
					</h2>
					{showContactLink && (
						<p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-300">
							{description}{" "}
							<Link href="/contact" className="font-semibold">
								{contact}
							</Link>
							.
						</p>
					)}
				</div>
				<div className="mt-10 space-y-4 lg:col-span-7 lg:mt-0">
					{list.map((faq) => (
						<Accordion key={faq.id} id={`faq-${faq.id}`} title={faq.q}>
							<p>{faq.a}</p>
						</Accordion>
					))}
				</div>
			</div>
			<FaqJsonLD faqData={list} title={title} />
		</section>
	);
}
