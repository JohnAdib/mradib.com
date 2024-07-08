/* eslint-disable react/no-unescaped-entities */
import { BookMentorshipSession } from '@/components/sections/book-mentorship-session';
import { FeatureWithFullWidthImage } from '@/components/sections/feature-with-full-width-image';
import { CommandLineIcon, DocumentCheckIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/20/solid';
import { Metadata } from 'next';
import imgMradibMentoring from './_img/mradib-mentoring.png';

export const metadata: Metadata = {
  title: 'Mentorship with MrAdib',
  description: 'I offer limited FREE mentorship to help you level up your tech career. Book a 1:1 session today!',
  twitter: {
    card: 'summary_large_image',
  },
};

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
        image={imgMradibMentoring}
        features={featuresList}
      >
        Hello! I'm John Adib,
        a Principal Software Engineer
        with a passion for helping others succeed.
        Whether you're looking to enhance your coding skills,
        polish your resume,
        conquer job interviews,
        or navigate tech immigration,
        I'm here to help. <b>FREE!</b>
      </FeatureWithFullWidthImage>

      <BookMentorshipSession />
    </>
  );
}