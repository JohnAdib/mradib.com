import clsx from 'clsx';
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, XIcon } from '../icon/social-icons';
import { SocialLink } from './social-link';

export function EmailLink() {
  return <SocialLink
    href="mailto:Mr.JohnAdib@Gmail.com"
    ariaLabel="Send an email to MrAdib"
    icon={MailIcon}
    className={clsx(
      'mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40',
    )}
  >
      Email
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
        ariaLabel="Connected to MrAdib on LinkedIn"
        icon={LinkedInIcon}
        isShowName={isShowName}
      >Linkedin</SocialLink>

      <SocialLink
        href="https://twitter.com/MrAdib"
        ariaLabel="Follow MrAdib on Twitter"
        icon={XIcon}
        isShowName={isShowName}
      >X</SocialLink>

      <SocialLink
        href="https://t.me/mradib"
        ariaLabel="You can find me on Telegram"
        icon={InstagramIcon}
        isShowName={isShowName}
      >Telegram</SocialLink>

      <SocialLink
        href="https://github.com/JohnAdib"
        ariaLabel="Check out my GitHub profile"
        icon={GitHubIcon}
        isShowName={isShowName}
      >GitHub</SocialLink>

      <SocialLink
        href="https://www.instagram.com/MrJohnAdib/"
        ariaLabel="See MrAdib photos on Instagram"
        icon={InstagramIcon}
        isShowName={isShowName}
      >Instagram</SocialLink>

    </nav>
  );
}
