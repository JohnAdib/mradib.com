export function SectionHeading({
	anchor,
	id,
	children,
}: {
	anchor: string;
	id?: string;
	children: React.ReactNode;
}): JSX.Element {
	return (
		<h2 id={id}>
			<a
				href={`#${anchor}`}
				className="no-underline text-inherit hover:underline"
			>
				{children}
			</a>
		</h2>
	);
}
