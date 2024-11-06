import Link from "next/link";

interface ICtaOnDarkPanel {
  title: string;
  desc: string;
  linkPrimaryText: string;
  linkPrimaryLink: string;
  linkSecondaryText?: string;
  linkSecondaryLink?: string;
}

export function CtaOnDarkPanel({
  title,
  desc,
  linkPrimaryText,
  linkPrimaryLink,
  linkSecondaryText,
  linkSecondaryLink,
}: ICtaOnDarkPanel) {
  const secondaryLinkEl = linkSecondaryLink ? (
    <Link
      href={linkSecondaryLink}
      className="text-sm font-semibold leading-6 text-white"
    >
      {linkSecondaryText} <span aria-hidden="true">→</span>
    </Link>
  ) : null;

  return (
    <div className="py-24 sm:py-32">
      <div className="relative isolate overflow-hidden backdrop-blur-sm bg-gray-900 dark:bg-gray-900/80 dark:opacity-80 px-6 py-16 md:py-24 text-center shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-8 text-gray-300">
          {desc}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href={linkPrimaryLink}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {linkPrimaryText}
          </a>
          {secondaryLinkEl}
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
