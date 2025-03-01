import { FaqLanguage, IFaqQA } from "./faq-interface";
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
}: {
	list?: IFaqQA[];
	language?: FaqLanguage;
}) {
	if (!list) {
		return null;
	}

	const { title, description, contact } = faqText[language];

	return (
		<section className="faq mx-auto max-w-7xl py-16 lg:py-32">
			<div className="lg:grid lg:grid-cols-12 lg:gap-8">
				<div className="lg:col-span-5">
					<h2 className="text-3xl font-bold leading-10 tracking-tight">
						{title}
					</h2>
					<p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-300">
						{description}{" "}
						<a href="/contact" className="font-semibold">
							{contact}
						</a>
						.
					</p>
				</div>
				<div className="mt-10 lg:col-span-7 lg:mt-0">
					<div className="space-y-10">
						{list?.map((faq) => (
							<div id={"faq-" + faq.id} key={faq.id}>
								<h3 className="text-base font-semibold leading-7">{faq.q}</h3>
								<p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-300">
									{faq.a}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<FaqJsonLD faqData={list} title={title} />
		</section>
	);
}
