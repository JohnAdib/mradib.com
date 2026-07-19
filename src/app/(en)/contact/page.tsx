import type { Metadata } from "next";
import { Container } from "@/components/container";
import Faq from "@/components/faq/faq";
import { ContactPageJsonLd } from "@/components/json-ld/contact-page-json-ld";
import { ContactChannels } from "./_sections/contact-channels";
import { contactFaq } from "./_sections/contact-faq-data";
import { ContactHero } from "./_sections/contact-hero";

export const metadata: Metadata = {
	title: { absolute: "Contact John Adib" },
	description:
		"Reach John Adib directly, no forms and no gatekeepers. One open inbox on the page, plus two main channels: mentorship and speaking invitations.",
};

export default function Page() {
	return (
		<>
			<ContactPageJsonLd />
			<ContactHero />
			<ContactChannels />
			<Container>
				<Faq list={contactFaq} showContactLink={false} />
			</Container>
		</>
	);
}
