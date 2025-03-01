export function SectionTitle({ children }: { children?: string }) {
	if (!children) {
		return null;
	}

	return (
		<h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
			{children}
		</h1>
	);
}
