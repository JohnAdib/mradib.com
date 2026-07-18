import Link from "next/link";
import { Container } from "@/components/container";

export function HomePersonal() {
	return (
		<Container className="mt-20 sm:mt-28">
			<p className="mx-auto max-w-2xl text-center text-base text-zinc-600 dark:text-zinc-400">
				Away from the terminal, I'm a father of two girls, and I carry a camera
				almost everywhere. London gives you no excuse not to. The freshest
				frames live in the{" "}
				<Link
					href="/gallery"
					className="font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
				>
					photography corner
				</Link>
				.
			</p>
		</Container>
	);
}
