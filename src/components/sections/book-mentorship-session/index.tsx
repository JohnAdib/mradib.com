import { Container } from '@/components/container';
import clsx from 'clsx';

export function BookMentorshipSession() {
  return (
    <Container>
      <section className='my-16 sm:my-32'>
        <h2 className="mt-8 text-3xl font-bold text-center">Book a Mentorship Session</h2>
        <p className="mt-2 mb-8 text-base text-center text-zinc-600 dark:text-zinc-400">
          Ready to take the next step? Book a free 1:1 session with me today!
        </p>
        <div className={clsx(
          'h-[800px]',
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
            title=""
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
