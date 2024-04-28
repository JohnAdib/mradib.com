import { Inter, Vazirmatn } from 'next/font/google';

export const vazirmatn = Vazirmatn({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});