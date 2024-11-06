export interface IStep {
  name: string;
  description: string;
  href: string;
  status: "complete" | "current" | "upcoming";
}
