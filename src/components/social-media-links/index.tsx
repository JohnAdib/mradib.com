import clsx from 'clsx';
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, XIcon } from '../icon/social-icons';
import { SocialLink } from './social-link';

export function EmailLink() {
  return <SocialLink
    href="mailto:Mr.JohnAdib@Gmail.com"
    ariaLabel="ایمیل"
    icon={MailIcon}
    className={clsx(
      'mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40',
    )}
  >
      ایمیل
  </SocialLink>;
}

export function SocialMediaLinks({
  forAboutPage = false,
}:{
  forAboutPage?: boolean
},
) {
  const isShowName = forAboutPage;
  return (
    <nav
      className={clsx(
        'flex',
        forAboutPage && 'flex-col',
        'gap-1',
      )}
    >
      <SocialLink
        href="https://www.linkedin.com/in/MrAdib/"
        ariaLabel="لینکداین"
        icon={LinkedInIcon}
        isShowName={isShowName}
      >
      لینکداین
      </SocialLink>
      <SocialLink
        href="https://twitter.com/MrAdib"
        ariaLabel="اکس یا توییتر؟"
        icon={XIcon}
        isShowName={isShowName}
      >
      اکس
      </SocialLink>
      <SocialLink
        href="https://t.me/mradib"
        ariaLabel="تلگرام"
        icon={InstagramIcon}
        isShowName={isShowName}
      >
      تلگرام
      </SocialLink>
      <SocialLink
        href="https://github.com/JohnAdib"
        ariaLabel="گیت‌هاب"
        icon={GitHubIcon}
        isShowName={isShowName}
      >
      گیت‌هاب
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/MrJohnAdib/"
        ariaLabel="اینستاگرام"
        icon={InstagramIcon}
        isShowName={isShowName}
      >
      اینستاگرام
      </SocialLink>
    </nav>
  );
}
