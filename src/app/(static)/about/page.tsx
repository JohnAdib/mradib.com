import { type Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/container';
import { SocialMediaLinks } from '@/components/social-media-links';
import portraitImage from '@/images/portrait.jpg';

export const metadata: Metadata = {
  title: 'درباره جان ادیب',
  description:
    'جان ادیب - مهندس نرم‌افزار مستقر در لندن',
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div
        className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
      >
        <div className="lg:pr-20">
          <div className="max-w-xs px-2.5 lg:max-w-none" >
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1
            className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
          >
            جان ادیب از لندن
          </h1>
          <div
            className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"
          >
            <p>
              مهندس نرم‌افزار هستم که عاشق ساختن چیزهایی هستم
               که در اینترنت زندگی می‌کنن. وبسایت‌ها
                و اپلیکیشن‌های وب استثنایی توسعه می‌دهم
                که رابط‌های کاربری دقیق و پیکسلی با
                 پشتیبانی موثر و مدرن ارائه می‌دهند.
            </p>
            <p>
              من طرفدار نرم‌افزارهای متن‌باز هستم و دوست دارم به جامعه کمک کنم.
               من یک توسعه‌دهنده خودآموز هستم که دوست دارد
                چیزهای جدید یاد بگیرد و به دیگران کمک کند
                که همین کار را انجام دهند.
            </p>
          </div>
        </div>
        <div className="lg:px-20">
          <SocialMediaLinks forAboutPage={true} />
        </div>
      </div>
    </Container>
  );
}
