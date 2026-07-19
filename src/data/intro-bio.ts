import { mentoringStats } from "@/data/mentoring-stats";
import { experienceYears } from "@/data/profile";
import { teachingStats } from "@/data/teaching-stats";
import { homepageUrl } from "@/lib/constants/url";

/*
  The canonical shareable self-intro (decisions.md, 2026-07-19): shown as
  the homepage hero paragraph and copied verbatim to the clipboard, plus a
  link tail that never renders on the page.
*/
export const introBio = `I'm John Adib, an engineering leader at Zapp in London. Over ${experienceYears}+ years I've co-founded two startups, one raised $1M and reached a million users in its first month, the other served 1,200+ businesses. I've taught ${teachingStats.studentsTaught.toLocaleString("en-US")}+ students, run ${mentoringStats.sessions}+ mentorship sessions on ADPList, where I was named the World's Most Influential Mentor, and the UK endorsed me as exceptional talent in technology. These days I build AI-first: changing how teams work, not just how fast they ship.`;

export const introBioClipboard = `${introBio}

More: ${homepageUrl}`;
