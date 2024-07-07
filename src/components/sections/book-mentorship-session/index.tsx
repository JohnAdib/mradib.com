import { Container } from '@/components/container';
import { urlSocial } from '@/lib/constants/url-social';
import clsx from 'clsx';
import Link from 'next/link';
import { SectionIntro } from '../elements/intro';
import { SectionSubTitle } from '../elements/sub-title';
import { SectionTitle } from '../elements/title';

export function BookMentorshipSession() {
  return (
    <Container>
      <section className='my-16 sm:mt-32 sm:text-center'>
        <SectionSubTitle>Ready to take the next step?</SectionSubTitle>
        <SectionTitle>Book a Mentorship Session</SectionTitle>
        <SectionIntro>
          <Link
            target='_blank'
            href={urlSocial.adpList}
          >
            Register on ADPList
          </Link> and book a free 1:1 session with me today!
        </SectionIntro>

        <div className={clsx(
          'h-[700px]',
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
