'use client';

import { AppContext } from '@/app/providers';
import { Container } from '@/components/container';
import { Prose } from '@/components/prose';
import { formatDateTimePersian } from '@/lib/fa/format-date';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
import Faq from '../faq/faq';
import { ArrowRightIcon } from '../icon/arrow-right';
import { NavNextPrev } from '../nav-next-prev/nav-next-prev';
import { ArticleJsonLD } from './article-json-ld';
import { IArticleLayout } from './interface';
import { ArticleReadTime } from './read-time';

export function ArticleLayout({
  title,
  intro,
  coverImage,
  urlPath,
  keywords,
  datePublished,
  dateModified,
  readTimeMinutes,
  faq,
  breadcrumb,
  nextPrev,
  children,
}: IArticleLayout) {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);

  return (
    <Container className="mt-8 md:mt-12 lg:mt-16">
      <div className="articleBox xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to the previous page"
              className="group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-right-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:right-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 select-none"
            >
              <ArrowRightIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col gap-4">
              <Breadcrumb list={breadcrumb} />
              <h1 className={clsx(
                'text-balance',
                'text-3xl sm:text-4xl md:text-5xl',
                'font-black',
                'tracking-tight',
                'text-[#003C43]',
                'dark:text-zinc-100',
              )}>
                {title}
              </h1>
              <p className='text-pretty text-sm md:text-base leading-relaxed'>
                {intro}
              </p>

              <Image
                src={coverImage}
                alt={title}
                priority
                className="rounded-xl md:rounded-3xl select-none touch-none max-md:pointer-events-none transition hover:brightness-110"
              />

              <div className='infoBox flex justify-between text-sm select-none'>
                <time
                  dateTime={datePublished}
                  title={'Published on ' + datePublished}
                  className="flex items-center text-stone-500 dark:text-stone-400"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="mr-3">
                    {formatDateTimePersian(datePublished)}
                  </span>
                </time>
                <time
                  dateTime={dateModified}
                  title={'Last modified on ' + dateModified}
                  className="text-stone-500 dark:text-stone-400 hidden"
                >
                  {formatDateTimePersian(dateModified)}
                </time>
                <ArticleReadTime minutes={readTimeMinutes} />
              </div>

            </header>
            <Prose>
              {children}
            </Prose>
          </article>
          <NavNextPrev next={nextPrev?.next} prev={nextPrev?.prev} />

        </div>
        <ArticleJsonLD
          headline={title}
          name={title}
          description={intro}
          coverImage={coverImage}
          urlPath={urlPath}
          keywords={keywords}
          datePublished={datePublished}
          dateModified={dateModified}
        />
      </div>
      <Faq list={faq} />
    </Container>
  );
}
