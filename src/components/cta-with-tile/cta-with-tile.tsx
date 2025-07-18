import Link from "next/link";

export function CtaWithTile() {
	return (
		<div className="overflow-hidden py-32">
			<div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
					<div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
						<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
							MrAdib Gallery
						</h1>
						<p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400">
							Welcome to my photo gallery, where I capture the essence of
							humanity. Each image tells a unique story, showcasing the diverse
							and beautiful faces of people I encounter on the streets.
						</p>
						<p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
							In addition to portraits, my gallery features a collection of
							landscapes, cityscapes, flowers, and animals, all captured with
							the same attention to detail and love for the subject. These
							images offer a glimpse into the world as I see it, full of vibrant
							colors, breathtaking scenes, and moments of quiet beauty.
						</p>
						<div className="mt-10 flex">
							<Link
								href="/gallery/tools"
								className="rounded-md bg-sky-700 dark:bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
							>
								Photography tools <span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</div>
					<div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
						<div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
							<img
								src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
								alt=""
								className="aspect-7/5 w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
							/>
						</div>
						<div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
							<div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
								<img
									src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
									alt=""
									className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
								/>
							</div>
							<div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
								<img
									src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
									alt=""
									className="aspect-7/5 w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
								/>
							</div>
							<div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
								<img
									src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
									alt=""
									className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
