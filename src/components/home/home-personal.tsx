import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";

const rotations = [
	"rotate-2",
	"-rotate-2",
	"rotate-2",
	"rotate-2",
	"-rotate-2",
];
const photos = [image1, image2, image3, image4, image5];

export function HomePersonal() {
	return (
		<div className="mt-20 sm:mt-28">
			<Container>
				<p className="mx-auto max-w-2xl text-center text-base text-zinc-600 dark:text-zinc-400">
					Away from the terminal, I'm a father of two girls, and I carry a
					camera almost everywhere — London gives you no excuse not to. Some of
					what I catch ends up in the{" "}
					<Link
						href="/gallery"
						className="font-medium text-teal-600 transition hover:text-teal-500 dark:text-teal-400"
					>
						gallery
					</Link>
					.
				</p>
			</Container>
			<div className="mt-12 select-none">
				<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
					{photos.map((image, imageIndex) => (
						<div
							key={image.src}
							className={clsx(
								"relative aspect-9/10 w-36 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-56 sm:rounded-2xl dark:bg-zinc-800",
								rotations[imageIndex % rotations.length],
							)}
						>
							<Image
								src={image}
								alt="Photography by John Adib"
								loading="lazy"
								sizes="(min-width: 640px) 14rem, 9rem"
								className="absolute inset-0 h-full w-full object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
