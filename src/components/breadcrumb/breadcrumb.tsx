import { ChevronLeftIcon, HomeIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { IBreadcrumb } from './interface';

export function Breadcrumb({ list }: IBreadcrumb) {
  if (!list) {
    return null;
  }

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center gap-2 md:gap-4">
        <li>
          <div>
            <Link
              href="/"
              className={clsx(
                'transition',
                'text-slate-400 hover:text-slate-500',
                'dark:text-slate-300 hover:text-slate-400',
              )}
            >
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {list?.map((page) => (
          <li key={page.name}>
            <div className="flex items-center gap-2 md:gap-4">
              <ChevronLeftIcon className="h-5 w-5 flex-shrink-0 text-slate-400" aria-hidden="true" />
              <Link
                href={page.item}
                className={clsx(
                  'text-xs md:text-sm',
                  'leading-8',
                  'font-medium',
                  'text-slate-500 hover:text-slate-700',
                  'dark:text-slate-300 dark:hover:text-slate-500',
                )}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
