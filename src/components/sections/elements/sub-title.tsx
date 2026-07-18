export function SectionSubTitle({ children }: { children?: string }) {
	if (!children) {
		return null;
	}

	return (
		<h2 className="text-base font-semibold leading-7 text-accent-700 dark:text-accent-400">
			{children}
		</h2>
	);
}
