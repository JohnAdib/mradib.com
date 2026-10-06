import type { IArticle } from "./article-interface";

export const articleCoaching: IArticle = {
	author: "John Adib",
	publishDate: "2026-10-06",
	publishTime: "00:00:00",
	datePublished: "2026-10-06T00:00:00.000Z",
	dateModified: "2026-10-06T00:00:00.000Z",
	title: "A Coach for Every Learner",
	description:
		"Excellence is a method learners can practise. Show the standard, practise under pressure and teach learners to assess their own work.",
	pageTitle: "A Coach for Every Learner",
	pageDesc:
		"John Adib shares three coaching moves for everyday teaching: show the standard, practise under pressure and develop learners’ self-assessment. Includes presentation slides.",
	pagePath: "/a-coach-for-every-learner",
	pdfUrl: "/talks/a-coach-for-every-learner.pdf",
	keywords: ["Coaching", "Teaching", "Learner autonomy", "Self-assessment"],
};

export const coachingIntro = [
	"A learner needs a clear standard to work towards and the ability to judge their own progress. The habits of coaching can support everyday teaching by making both parts of the learning process.",
	"This presentation follows three coaching moves: show the standard, pressure test, and hand learners the mirror. Each moves responsibility a little further towards the learner. Together they form a progression from ‘I do’ to ‘We do’ to ‘You do’, with clear criteria running through every stage.",
];

export const coachingSections = [
	{
		title: "Show the standard",
		paragraphs: [
			"A learner needs to see what good work looks like before they can aim for it. Exemplars, marking criteria and side-by-side comparisons make an abstract expectation concrete.",
			"In the presentation, I use the example of a web class building a landing page for a coffee shop. Before learners start, the coach shows three examples at different quality levels. Comparing the visual hierarchy, call to action and imagery gives learners a target they can recognise, rather than a grade they only discover afterwards.",
		],
	},
	{
		title: "Pressure test",
		paragraphs: [
			"Practice becomes more useful when it includes the conditions in which the work will be assessed. A time limit, clear criteria and an unexpected change in the brief make pacing and judgement part of the task.",
			"The deck focuses on four habits learners can practise under pressure. Watch the clock as well as the task. Adapt when the brief changes. Recover attention after a distraction. Finish and submit work instead of leaving a perfect idea undelivered. These are coaching opportunities: the learner needs practice using them, not just an instruction to stay calm.",
		],
	},
	{
		title: "Hand them the mirror",
		paragraphs: [
			"The final move is to help learners see their own work through the same criteria a coach would use. Feedback becomes more valuable when learners can make that judgement themselves and explain what they would change.",
			"After a practice task, ask learners to assess one another’s work using the same marking criteria. Reviewing together can reveal details in other people’s work that learners have missed in their own. That is the purpose of the mirror: learners develop the judgement to keep improving without waiting for the coach to mark everything.",
		],
	},
	{
		title: "I do. We do. You do.",
		paragraphs: [
			"Showing the standard makes the method visible. Practising together builds the habits needed to apply it under pressure. Self-assessment gives learners ownership of the next improvement. This is the gradual release model expressed through a coach’s approach to teaching.",
			"The goal is to make those methods available to every learner. A teacher can bring clear examples into an ordinary lesson, design practice around realistic conditions, and let learners assess work against shared criteria. Excellence becomes something learners can work on, one attempt at a time.",
		],
	},
];
