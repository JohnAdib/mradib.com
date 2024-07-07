/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/container';
import { SocialMediaLinks } from '@/components/social-media-links';
import portraitImage from '@/images/portrait.jpg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About MrAdib',
  description:
    'John Adib - Photographer & Senior Software Engineer based in London. Passionate about creating innovative web solutions and capturing the smiles.',
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div
        className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
      >
        <div className="lg:pl-20 select-none">
          <div className="max-w-xs px-2.5 lg:max-w-none" >
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1
            className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
          >
            Mr Adib
          </h1>
          <div
            className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"
          >
            <p>I’m John Adib, based in London, where I design web solutions and enjoy photographing portraits and landscapes. Photography is a deep passion of mine.  London's dynamic atmosphere and diverse architecture offer endless inspiration for my work, allowing me to explore and document the world through my lens.</p>
            <p>My journey as a software engineer has been enriched by diverse projects and roles, from startups to large enterprises. I am an open source enthusiast who believes in the power of collaboration and community driven development.</p>
            <p>Throughout my career, I've had the privilege of leading diverse teams and collaborating on projects that span multiple industries, including finance, EdTech, and Ecommerce. I take pride in mentoring junior developers, fostering a collaborative work environment, and implementing best practices that drive both quality and productivity. My leadership philosophy centers on continuous learning, adaptability, and empowering others to achieve their full potential.</p>
            <p>If you're looking to connect with me or explore mentorship opportunities, visit my <Link href="mentor">Mentorship Page</Link> to take the next step in your tech journey.</p>
          </div>
        </div>
        <div className="lg:px-20">
          <SocialMediaLinks forAboutPage={true} />
        </div>
      </div>
    </Container>
  );
}
