import { Container } from "@/components/container";
import { CopyButton } from "@/components/copy-button";
import { profile } from "@/data/profile";
import { urlSocial } from "@/lib/constants/url-social";

const [emailLocal, emailDomain] = profile.email.split("@");

export function ContactHero() {
	return (
		<Container className="mt-16 sm:mt-32">
			<div className="max-w-3xl">
				<p className="reveal-up text-sm font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
					Contact
				</p>
				<h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
					<span className="reveal-up reveal-delay-1 block">One inbox.</span>
					<span className="reveal-up reveal-delay-2 block text-accent-700 italic dark:text-accent-400">
						Every door.
					</span>
				</h1>
				<p className="reveal-up reveal-delay-3 mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
					Mentorship, a stage, or a plain hello. Reach me directly, no forms and
					no gatekeepers.
				</p>
				<div className="reveal-up reveal-delay-4 mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
					<a
						href={`mailto:${profile.email}`}
						className="font-display text-4xl font-semibold tracking-tight break-words text-zinc-800 transition hover:text-accent-700 sm:text-5xl dark:text-zinc-100 dark:hover:text-accent-400"
					>
						{emailLocal}@<wbr />
						{emailDomain}
					</a>
					<CopyButton
						iconOnly
						text={profile.email}
						label="Copy email address"
						copiedLabel="Copied"
					/>
				</div>
				<p className="reveal-up reveal-delay-4 mt-6 text-base text-zinc-600 dark:text-zinc-400">
					I read everything that lands here.{" "}
					<a
						href={urlSocial.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="font-semibold text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
					>
						Prefer LinkedIn? Say hello there.
					</a>
				</p>
			</div>
		</Container>
	);
}
