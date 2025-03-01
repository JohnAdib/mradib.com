import type { FAQPage, WithContext } from "schema-dts";
import type { IFaqQA } from "./faq-interface";

interface FAQProps {
	faqData: IFaqQA[];
	title: string;
}

export const FaqJsonLD: React.FC<FAQProps> = ({ faqData, title }: FAQProps) => {
	const jsonLd: WithContext<FAQPage> = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		name: title,
		mainEntity: faqData.map(({ q, a }) => ({
			"@type": "Question",
			name: q,
			acceptedAnswer: {
				"@type": "Answer",
				text: a,
			},
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
};
