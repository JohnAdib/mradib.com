import { mentoringStats } from "@/data/mentoring-stats";
import { experienceYears } from "@/data/profile";
import { teachingStats } from "@/data/teaching-stats";
import { homepageUrl } from "@/lib/constants/url";

/*
  The canonical shareable self-intro (decisions.md, 2026-07-19). The body
  is defined once. On the page the H1 already carries the name, so the
  rendered paragraph opens on the role; the clipboard copy reintroduces
  the name plus a link tail so the handout travels complete.
*/
const introBioBody = `${experienceYears}+ years in, three verbs: I build, I teach, I mentor. Two startups, $1M raised, a million users in the first month, 1,200+ businesses served. ${teachingStats.studentsTaught.toLocaleString("en-US")}+ students taught, ${mentoringStats.sessions}+ mentorship sessions, and ADPList named me The World's Most Influential Mentor. The UK endorsed me as exceptional talent in technology. These days I build AI-first: changing how teams work, not just how fast they ship.`;

export const introBio = `An engineering leader in London. ${introBioBody}`;

export const introBioClipboard = `I'm John Adib, an engineering leader in London. ${introBioBody}

More: ${homepageUrl}`;
