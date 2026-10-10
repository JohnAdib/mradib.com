import type { IFaqQA } from "@/components/faq/faq-interface";

export const productDemoFaqTitle = "Questions founders ask";

export const productDemoFaq: IFaqQA[] = [
	{
		id: "length",
		q: "How long should a product demo video be?",
		a: "Under three minutes, and two is better. Y Combinator asks for up to three. Reviewers watch dozens in a sitting; the shorter video with one clear flow beats the complete tour every time.",
	},
	{
		id: "voice",
		q: "Do I need a voiceover?",
		a: "Yes. The screen shows what happens; your voice explains why it matters. Record it in one take in a quiet room. A phone headset microphone is enough.",
	},
	{
		id: "notready",
		q: "What if the product is not ready?",
		a: "Show what works, and say what does not. A clickable prototype is fine if you call it one. Never present a mockup as a product; reviewers can tell, and it costs you trust.",
	},
	{
		id: "live",
		q: "Video or live demo?",
		a: "Both, for different rooms. Applications and cold intros get the video. Meetings get the live demo, with the video as backup for when the wifi fails.",
	},
];
