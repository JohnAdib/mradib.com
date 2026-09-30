import clsx from "clsx";
import type { CSSProperties } from "react";
import { TiltCard } from "@/components/tilt-card/tilt-card";
import type { GuideFrame } from "@/data/guides/guide-bundle";
import type {
	IGuidePresenterLabels,
	IGuideStepRef,
} from "@/data/guides/guide-interface";
import { stepNumber } from "@/lib/guides/step-number";
import { StageFrame } from "../presenter/stage-frame";
import { StageSlide } from "../presenter/stage-slide";
import { ArtifactDots } from "./artifact-dots";

interface IArtifactHeroProps {
	frame: GuideFrame;
	steps: IGuideStepRef[];
	labels: Pick<IGuidePresenterLabels, "unit" | "of">;
}

/**
 * The living artifact: the guide's object, cycling through its steps on its
 * own (CSS only, see artifact.css) and tilting toward the cursor. Decorative:
 * every step is written out further down the page.
 */
export function ArtifactHero({ frame, steps, labels }: IArtifactHeroProps) {
	const count = steps.length;
	return (
		<div
			aria-hidden="true"
			className={clsx(
				"mx-auto w-full lg:mx-0",
				frame === "page"
					? "max-w-[17rem] lg:max-w-none"
					: "max-w-md lg:max-w-none",
			)}
		>
			<TiltCard maxTilt={4} restingRotate={1.5} tracking="viewport">
				<StageFrame frame={frame} className="shadow-2xl shadow-zinc-900/20">
					<div
						className="artifact-cycle relative h-full"
						data-cycle={count}
						style={{ "--artifact-count": count } as CSSProperties}
					>
						{steps.map((step, index) => (
							<StageSlide
								key={step.id}
								className="artifact-step"
								style={{ "--artifact-index": index } as CSSProperties}
								number={stepNumber(index)}
								total={count}
								labels={labels}
								title={step.title}
								question={step.question}
							/>
						))}
					</div>
				</StageFrame>
			</TiltCard>
			<ArtifactDots count={count} />
		</div>
	);
}
