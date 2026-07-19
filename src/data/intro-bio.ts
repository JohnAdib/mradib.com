import { mentoringStats } from "@/data/mentoring-stats";
import { experienceYears } from "@/data/profile";
import { teachingStats } from "@/data/teaching-stats";
import { homepageUrl } from "@/lib/constants/url";

/*
  The canonical shareable self-intro (decisions.md, 2026-07-19): shown as
  the homepage hero paragraph and copied verbatim to the clipboard, plus a
  link tail that never renders on the page.
*/
export const introBio = `I'm John Adib, an engineering leader in London. ${experienceYears}+ years in, three verbs: I build, I teach, I mentor. Two startups, $1M raised, a million users in the first month, 1,200+ businesses served. ${teachingStats.studentsTaught.toLocaleString("en-US")}+ students taught, ${mentoringStats.sessions}+ mentorship sessions, and ADPList named me The World's Most Influential Mentor. The UK endorsed me as exceptional talent in technology. These days I build AI-first: changing how teams work, not just how fast they ship.`;

export const introBioClipboard = `${introBio}

More: ${homepageUrl}`;
