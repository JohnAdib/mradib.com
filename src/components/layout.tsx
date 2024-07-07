import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import clsx from 'clsx';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className={clsx(
            'w-full',
            'ring-1',
            'bg-white/60',
            'ring-slate-100',
            'dark:bg-[#13141b]',
            'backdrop-blur-sm',
            'dark:ring-slate-300/20',
          )}
          />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
