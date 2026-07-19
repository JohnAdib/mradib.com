import type { Metadata } from "next";
import { Container } from "@/components/container";
import { HeroWithPhone } from "@/components/hero-with-phone/hero-with-phone";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: "Smile is Gold",
	description:
		"John Adib photographs strangers on the streets of London, prints each candid portrait on the spot, gifts it, and turns their reaction into a short video.",
	...ogMetadata("/smileisgold"),
};

export default function Page() {
	return (
		<Container className="mt-9">
			<HeroWithPhone />
		</Container>
	);
}
