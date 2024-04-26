import clsx from 'clsx';
import Link from 'next/link';

export function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  ariaLabel,
  isShowName,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  ariaLabel: string
  isShowName?: boolean
}) {
  const nameEl = isShowName ? <span>{children}</span> : null;
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      className={clsx(
        'group flex gap-4',
        'text-sm',
        'font-medium',
        'transition',
        'p-2',
        'text-zinc-800',
        'hover:text-teal-500',
        'dark:text-zinc-200',
        'dark:hover:text-teal-500',
        className,
      )
      }
    >
      <Icon
        className={clsx(
          'h-6 w-6',
          'flex-none',
          'fill-zinc-500',
          'transition',
          'group-hover:fill-teal-500',
        )}
      />
      {nameEl}
    </Link>
  );
}
