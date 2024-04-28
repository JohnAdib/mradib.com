import { Layout } from '@/components/layout';
import '@/styles/tailwind.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="flex w-full"
      dir='ltr'
      lang='en'
    >
      <Layout>{children}</Layout>
    </div>
  );
}
