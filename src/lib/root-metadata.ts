import { Metadata } from 'next';

export const siteUrl = 'https://blog.mradib.com';
export const homepageUrl = 'https://mradib.com';

export const myTitle = 'MrAdib';
export const myName = 'John Adib';
export const myNickNameFa = 'مستر ادیب';
export const myNameFa = 'جان ادیب';
export const myJobTitleFa = 'مهندس ارشد نرم‌افزار';

export const separator = ' - ';
export const defaultTitle = myNameFa + separator + myJobTitleFa;

export const desc1 = 'جان ادیب هستم،';
export const desc2 = 'مهندس نرم‌افزار از لندن.';
export const desc3 = 'آموزش‌ها و نوشته‌های فارسی من رو میتونید اینجا بخونید.';
export const defaultDescription = desc1 + ' ' + desc2 + ' ' + desc3;

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    // template: '%s' + separator + myNameFa,
    template: '%s',
    default: defaultTitle,
  },
  description: defaultDescription,
  // TODO: Add manifest.json
  //   manifest: siteUrl + '/manifest.json',
  generator: myTitle,
  category: 'blog',
  applicationName: myTitle + ' Blog',
  authors: [
    {
      name: myName,
      url: homepageUrl,
    },
  ],
  creator: myTitle,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    creator: '@MrAdib',
  },
  //   verification: {
  //     google: 'google-site-verification',
  //   },
  appLinks: {
    web: {
      url: homepageUrl,
      should_fallback: true,
    },
  },
};