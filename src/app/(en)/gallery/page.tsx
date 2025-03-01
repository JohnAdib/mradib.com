import { type Metadata } from "next";

import { ContainerOuter } from "@/components/container";
import { CtaWithTile } from "@/components/cta-with-tile/cta-with-tile";
import { SimpleLayout } from "@/components/simple-layout";

export const metadata: Metadata = {
	title: "Gallery",
	description: "Photography by MrAdib.",
};

export default function Page() {
	return (
		<>
			<ContainerOuter>
				<CtaWithTile />
			</ContainerOuter>
			<SimpleLayout
				title="Gallery"
				intro="Photography by John Adib. I will be adding photos soon."
			/>
		</>
	);
}
