import { Container } from "@/components/container";
import type { StaticImageData } from "next/image";
import {
	type ISectionFeature,
	SectionFeaturesList,
} from "../elements/features-list";
import { SectionImageFullWidth } from "../elements/image-full-width";
import { SectionIntro } from "../elements/intro";
import { SectionSubTitle } from "../elements/sub-title";
import { SectionTitle } from "../elements/title";

interface IFeatureWithFullWidthImage {
	subTitle: string;
	title: string;
	children?: React.ReactNode;
	image?: StaticImageData;
	features?: ISectionFeature[];
}

export function FeatureWithFullWidthImage({
	subTitle,
	title,
	children,
	image,
	features,
}: IFeatureWithFullWidthImage) {
	return (
		<>
			<Container className="my-16 sm:my-32">
				<header className="max-w-2xl mx-auto sm:text-center flex flex-col gap-2">
					<SectionSubTitle>{subTitle}</SectionSubTitle>
					<SectionTitle>{title}</SectionTitle>
					<SectionIntro>{children}</SectionIntro>
				</header>
				<SectionImageFullWidth src={image} alt={title} />
				<SectionFeaturesList features={features} />
			</Container>
		</>
	);
}
