"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import imgInstagramPageScreenshot from "./instagram-page-screenshot.jpg";

export function HeroWithPhone() {
	return (
		<div className="relative isolate pt-14 z-10 -mt-10 lg:-mt-32">
			<svg
				className="select-none absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-gray-900 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
						width={200}
						height={200}
						x="50%"
						y={-1}
						patternUnits="userSpaceOnUse"
					>
						<path d="M100 200V.5M.5 .5H200" fill="none" />
					</pattern>
				</defs>
				<svg
					x="50%"
					y={-1}
					className="overflow-visible fill-gray-50 dark:fill-gray-800"
					aria-label="Background pattern"
				>
					<title>Background pattern</title>
					<path
						d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
						strokeWidth={0}
					/>
				</svg>
				<rect
					width="100%"
					height="100%"
					strokeWidth={0}
					fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
				/>
			</svg>
			<div className="mx-auto py-12 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:py-20">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
					<div className="flex select-none">
						<div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm transition leading-6 text-stone-600 dark:text-stone-300 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20">
							<span className="font-semibold text-sky-700 dark:text-sky-300">
								Follow me on
							</span>
							<span className="h-4 w-px bg-stone-900/10" aria-hidden="true" />
							<Link
								href="https://mradib.com/instagram"
								className="flex items-center gap-x-1"
								target="_blank"
							>
								<span className="absolute inset-0" aria-hidden="true" />
								Instagram
								<ChevronRightIcon
									className="-mr-2 h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</Link>
						</div>
					</div>
					<h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight sm:text-6xl">
						Smile is Gold
					</h1>
					<p className="mt-6 text-sm md:text-base leading-7 text-zinc-600 dark:text-zinc-400">
						In the bustling streets of London, I find beauty in the everyday
						faces of strangers. Through my lens, I capture candid portraits that
						reveal the genuine emotions and unique stories of the people I meet.
					</p>
					<p className="mt-2 text-sm md:text-base leading-7 text-zinc-600 dark:text-zinc-400">
						I take a photo, print it on the spot, and gift it to them, recording
						their heartfelt reactions. These golden moments are then crafted
						into 1 minute videos, celebrating the spontaneous joy and connection
						that a simple portrait can bring.
					</p>
					<div className="mt-10 flex items-center gap-x-6 select-none">
						<Link
							href="/gallery"
							className="rounded-md bg-sky-700 dark:bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Visit my Gallery
						</Link>
						<Link
							href="/gallery/tools"
							className="text-sm font-semibold leading-6 text-stone-700 dark:text-stone-300 transition hover:opacity-90"
						>
							Photography Tools <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
				<div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow select-none">
					<svg
						viewBox="0 0 366 729"
						role="img"
						className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
					>
						<title>MrAdib Portfolio</title>
						<defs>
							<clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
								<rect width={316} height={684} rx={36} />
							</clipPath>
						</defs>
						<path
							fill="#4B5563"
							d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
						/>
						<path
							fill="#343E4E"
							d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
						/>
						<foreignObject
							width={316}
							height={684}
							transform="translate(24 24)"
							clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
						>
							<Image
								src={imgInstagramPageScreenshot}
								alt="Smile Is Gold Instagram page"
							/>
						</foreignObject>
					</svg>
				</div>
			</div>
		</div>
	);
}
