import { Container } from '@/components/container';
import { StaticImageData } from 'next/image';
import { ISectionFeature, SectionFeaturesList } from '../elements/features-list';
import { SectionImageFullWidth } from '../elements/image-full-width';
import { SectionIntro } from '../elements/intro';
import { SectionSubTitle } from '../elements/sub-title';
import { SectionTitle } from '../elements/title';

interface IFeatureWithFullWidthImage {
  subTitle: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
  image?: StaticImageData;
  features?:ISectionFeature[];
}

export function FeatureWithFullWidthImage({
  subTitle,
  title,
  intro,
  children,
  image,
  features,
}: IFeatureWithFullWidthImage) {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl mx-auto sm:text-center flex flex-col gap-2">
          <SectionSubTitle>{subTitle}</SectionSubTitle>
          <SectionTitle>{title}</SectionTitle>
          <SectionIntro>{intro}</SectionIntro>
        </header>
        <SectionImageFullWidth src={image} alt={title} />
        <SectionFeaturesList features={features} />

        {children}
      </Container>
    </>
  );
}