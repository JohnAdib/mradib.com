import { Layout } from '@/components/layout';
import { rootMetadata } from '@/lib/root-metadata';
import { rootViewport } from '@/lib/root-viewport';
import '@/styles/tailwind.css';

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="flex w-full"
      dir="rtl"
      lang="fa"
    >
      <Layout>{children}</Layout>
    </div>
  );
}
