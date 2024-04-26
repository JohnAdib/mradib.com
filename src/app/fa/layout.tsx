import { Providers } from '@/app/providers';
import { Layout } from '@/components/layout';
import { rootMetadata } from '@/lib/root-metadata';
import { rootViewport } from '@/lib/root-viewport';
import '@/styles/tailwind.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import clsx from 'clsx';
import { Inter, Vazirmatn } from 'next/font/google';

export const metadata = rootMetadata;
export const viewport = rootViewport;

// If loading a variable font, you don't need to specify the font weight
const vazirmatn = Vazirmatn({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export async function generateStaticParams() {
  return [{ lang: 'fa' }];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      prefix="og: http://ogp.me/ns#"
      suppressHydrationWarning
    >
      <body
        className={
          clsx(
            vazirmatn.className,
            inter.variable,
          )
        }
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <GoogleAnalytics gaId="G-0T9SVDBER6" />
      </body>
    </html>
  );
}
