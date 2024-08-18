import { Container } from '@/components/container';
import { urlSocial } from '@/lib/constants/url-social';
import clsx from 'clsx';
import Link from 'next/link';
import { SectionIntro } from '../elements/intro';
import { SectionSubTitle } from '../elements/sub-title';
import { SectionTitle } from '../elements/title';

interface IBookMentorshipSession {
  subTitle?: string;
  title?: string;
  linkText?: string;
  linkDesc?: string;
}

export function BookMentorshipSession({
  subTitle,
  title,
  linkText,
  linkDesc,
}: IBookMentorshipSession) {
  return (
    <Container>
      <section className='my-16 sm:mt-32 sm:text-center'>
        <SectionSubTitle>{subTitle}</SectionSubTitle>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>
          <Link
            target='_blank'
            href={urlSocial.adpList}
          >
            {linkText}
          </Link> {linkDesc}
        </SectionIntro>

        <div className={clsx(
          'h-[770px]',
          'w-full',
          'lg:max-w-screen-sm',
          'mx-auto',
          'my-12',
          'shadow-md',
          'rounded-3xl',
          'border',
          'border-slate-500',
          'transition',
          'hover:border-slate-300',
          'overflow-hidden',
          'select-none',
        )}>
          <iframe
            src="https://adplist.org/widgets/booking?src=john-adib"
            title="book a mentorship session with MrAdib"
            width="100%"
            height="100%"
            loading="lazy"
            className='border-0 overflow-hidden rounded-3xl'
          />
        </div>
      </section>
    </Container>
  );
}
