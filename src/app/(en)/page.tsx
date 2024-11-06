 
import { Container, ContainerOuter } from '@/components/container';
import { HeroWithTile } from '@/components/hero-with-tile/hero-with-tile';
import { SocialMediaLinks } from '@/components/social-media-links';
import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';
import image5 from '@/images/photos/image-5.jpg';
import clsx from 'clsx';
import Image from 'next/image';

function Photos() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className="mt-16 sm:mt-20 select-none">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt="The landscapes of the world"
              loading='lazy'
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl relative z-20">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            MrAdib
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m John Adib, a Senior Software Engineer and avid Photographer based in London. With a passion for creating innovative web solutions and capturing golden moments.
          </p>
          <div className='mt-6'><SocialMediaLinks/></div>
        </div>
      </Container>
      <ContainerOuter>
        <HeroWithTile />
      </ContainerOuter>
      <Photos />
    </>
  );
}
