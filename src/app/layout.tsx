import { rootMetadata } from '@/lib/root-metadata';
import { rootViewport } from '@/lib/root-viewport';
import '@/styles/tailwind.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import clsx from 'clsx';
import { Inter, Vazirmatn } from 'next/font/google';
import { Providers } from './providers';

export const metadata = rootMetadata;
export const viewport = rootViewport;

const vazirmatn = Vazirmatn({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      prefix="og:http://ogp.me/ns#"
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
          {children}
        </Providers>
        <GoogleAnalytics gaId="G-0T9SVDBER6"/>
      </body>
    </html>
  );
}
