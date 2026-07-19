import type { IFaqQA } from "@/components/faq/faq-interface";
import { mentoringStats } from "@/data/mentoring-stats";

export const contactFaq: IFaqQA[] = [
	{
		id: "fastest-way",
		q: "What is the fastest way to reach you?",
		a: "Email. The address sits at the top of this page with a one tap copy. No forms, no gatekeepers.",
	},
	{
		id: "mentorship-booking",
		q: "How does mentorship booking work?",
		a: `I keep free slots open on ADPList, where I have run ${mentoringStats.sessions}+ sessions. Book a 1:1 straight from the mentorship page.`,
	},
	{
		id: "speaking-invitation",
		q: "What should a speaking invitation include?",
		a: "Tell me the event, the date, the audience, and the topic. I am London based and happy to travel.",
	},
	{
		id: "linkedin-or-email",
		q: "LinkedIn or email?",
		a: "I read both. Email is the most direct line to me, LinkedIn is perfect for a quick hello.",
	},
];
