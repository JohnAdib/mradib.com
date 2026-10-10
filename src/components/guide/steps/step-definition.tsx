/** What we mean by this step, in plain words. */
export function StepDefinition({ text }: { text: string }) {
	return (
		<p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
			{text}
		</p>
	);
}
