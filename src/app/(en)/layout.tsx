import { Providers } from '@/app/providers';
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
    <html
      prefix="og: http://ogp.me/ns#"
      dir="ltr"
      lang="en"
    >
      <body>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
