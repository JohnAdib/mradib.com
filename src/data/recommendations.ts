/*
  Quotable fragments from LinkedIn recommendations, verbatim from
  docs/profile/recommendations.md. Surfaced as a mosaic of short quotes
  with collective attribution linking to the LinkedIn recommendations
  page (decision 2026-07-19). Full texts and authors stay in docs.
*/
export interface IRecommendationQuote {
	quote: string;
	from: string;
	role: string;
}

export const recommendationQuotes: IRecommendationQuote[] = [
	{
		quote: "the best software engineer I have ever met",
		from: "Qudrat Ullah",
		role: "Senior Lead Software Engineer",
	},
	{
		quote:
			"a visionary leader who excels at turning ambitious ideas into reality",
		from: "Hasan Salehi",
		role: "Co-Founder and CEO at Risloo",
	},
	{
		quote: "outstanding innovation, technical expertise, and great leadership",
		from: "Saman Soltani",
		role: "Engineering Team Lead at METRO Markets",
	},
	{
		quote: "a natural leader",
		from: "Qudrat Ullah",
		role: "Senior Lead Software Engineer",
	},
	{
		quote: "an exceptional software developer",
		from: "Daniel Szunomar",
		role: "Principal UI Engineer at Marex",
	},
	{
		quote: "a perfectionist in the best sense",
		from: "Konstantinos Kapenekakis",
		role: "Managed John directly",
	},
	{
		quote: "methodical, detail oriented",
		from: "Konstantinos Kapenekakis",
		role: "Managed John directly",
	},
	{
		quote: "a valuable mentor",
		from: "Qudrat Ullah",
		role: "Senior Lead Software Engineer",
	},
	{
		quote: "I wholeheartedly recommend him",
		from: "Daniel Szunomar",
		role: "Principal UI Engineer at Marex",
	},
];

export const recommendationsUrl =
	"https://www.linkedin.com/in/mradib/details/recommendations/";
