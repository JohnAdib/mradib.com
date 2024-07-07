import { Container } from '@/components/container';
import { FeatureWithFullWidthImage } from '@/components/sections/feature-with-full-width-image';
import { CommandLineIcon, DocumentCheckIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import imgMradibMentoring from './_img/mradib-mentoring.png';

export default function Page() {
  const featuresList = [
    {
      name: 'Software Engineering',
      description:
          'Get guidance on best practices, coding techniques, and career growth in software engineering.',
      icon: CommandLineIcon,
    },
    {
      name: 'Resume Review',
      description:
          'Receive personalized feedback to improve your resume and stand out to employers.',
      icon: DocumentCheckIcon,
    },
    {
      name: 'Tech Immigration Success',
      description:
          'Navigate the complexities of tech immigration with tips and advice based on my own experience.',
      icon: GlobeEuropeAfricaIcon,
    },
  ];

  return (
    <>
      <FeatureWithFullWidthImage
        subTitle='Wanna level up your tech career?'
        title="Mentorship with MrAdib"
        intro="Hello! I'm John Adib, a Principal Software Engineer with a passion for helping others succeed. Whether you're looking to enhance your coding skills, polish your resume, conquer job interviews, or navigate tech immigration, I'm here to help. FREE!"
        image={imgMradibMentoring}
        features={featuresList}
      />

      <Container>

        <section className={clsx(
          'h-[770px]',
          'w-full',
          'lg:max-w-screen-sm',
          'mx-auto',
          'my-16',
          'shadow-md',
          'rounded-3xl',
          'border',
          'border-slate-500',
          'transition',
          'hover:border-slate-300',
          'overflow-hidden',
        )}>
          <iframe
            src="https://adplist.org/widgets/booking?src=john-adib"
            title=""
            width="100%"
            height="100%"
            loading="lazy"
            className='border-0 overflow-hidden rounded-3xl'
          />
        </section>
      </Container>
    </>
  );
}