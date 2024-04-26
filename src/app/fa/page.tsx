import { SimpleLayout } from '@/components/simple-layout';
import Link from 'next/link';

export default function Home() {
  return (
    <SimpleLayout
      title="فارسی"
      intro="بزودی تکمیل می‌شود."
    >
      <Link href="/fa/resume">آموزش رایگان ساخت رزومه</Link>
    </SimpleLayout>
  );
}