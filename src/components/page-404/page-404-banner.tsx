import Link from 'next/link';

export default function Page404Banner() {
  return (
    <>
      <div className="pointer-events-none select-none fixed inset-x-0 top-0 sm:flex sm:justify-center sm:px-6 sm:pt-5 lg:px-8">
        <div className="pointer-events-auto bg-gray-900 px-6 py-3 sm:rounded-xl sm:py-4 sm:pl-4 sm:px-3.5">
          <Link href="/" className="text-sm leading-6 text-white flex flex-wrap items-end justify-between gap-4 sm:gap-6 lg:items-center lg:gap-8">
            <div className='basis-full sm:basis-auto flex flex-col gap-2 lg:gap-6 lg:flex-row lg:items-center'>
              <h1 className="text-xl font-bold">Page Not Found</h1>
              <span className='text-xs sm:text-sm'>Unfortunately the page you were looking for could not be found.</span>
            </div>
            <span className='text-xs sm:text-sm' aria-hidden="true">Go to Homepage &rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
}
