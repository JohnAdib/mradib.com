import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { IStep } from "./step-interface";

// Define meaningful text and background color variables
// TODO: read the colors from template for dark and light mode
const textColorWhite = "text-white";
const headingLinkComplete = "text-sky-900 dark:text-sky-500";
const headingLinkCurrent = "text-sky-700 dark:text-sky-300";
const headingLinkUpcoming = "text-stone-600 dark:text-stone-300";
const stepDesc = "text-stone-500 dark:text-stone-400";
const verticalLineColor = "bg-stone-300 dark:bg-stone-500";
const borderCircle = "border-stone-300 dark:border-stone-500";
const borderCircleHover =
	"group-hover:border-stone-400 dark:group-hover:border-stone-300";
const bgCircleComplete = "bg-sky-900";
const bgCircleCurrent = "bg-sky-600";
const bgCircleUpcoming = "bg-stone-50 dark:bg-stone-800";

function VerticalLine() {
	return (
		<div
			className={clsx(
				"absolute right-4 top-4 -mr-px mt-0.5 h-full w-0.5",
				verticalLineColor,
			)}
			aria-hidden="true"
		/>
	);
}

interface IStepCircle {
	circleColor: string;
	isComplete: boolean;
	isCurrent: boolean;
}

function StepCircle({ circleColor, isComplete, isCurrent }: IStepCircle) {
	const isUpcoming = !isComplete && !isCurrent;
	const currentCircleEl = (
		<span
			className={clsx(
				"h-2.5 w-2.5 rounded-full",
				isCurrent && bgCircleCurrent,
				isUpcoming && "transition bg-transparent group-hover:bg-gray-300",
			)}
		/>
	);

	return (
		<span className="flex h-9 items-center">
			<span
				className={clsx(
					"relative z-10 flex h-8 w-8 items-center justify-center rounded-full",
					circleColor,
				)}
			>
				{isComplete && (
					<CheckIcon
						className={clsx("h-5 w-5", textColorWhite)}
						aria-hidden="true"
					/>
				)}
				{!isComplete && currentCircleEl}
			</span>
		</span>
	);
}

interface IStepDetails {
	step: IStep;
	isCurrent: boolean;
	isComplete: boolean;
}

function StepDetails({ step, isCurrent, isComplete }: IStepDetails) {
	const isUncomplete = !isComplete && !isCurrent;
	return (
		<span className={clsx("mr-4 flex flex-col")}>
			<span
				className={clsx(
					isComplete && headingLinkComplete,
					isCurrent && headingLinkCurrent,
					isUncomplete && headingLinkUpcoming,
					"text-sm",
					"font-bold",
				)}
			>
				{step.name}
			</span>
			<span className={clsx("text-xs", stepDesc)}>{step.description}</span>
		</span>
	);
}

interface IRenderStep {
	step: IStep;
	index: number;
	totalSteps: number;
}

function renderStep({ step, index, totalSteps }: IRenderStep) {
	const isLastStep = index === totalSteps - 1;
	const isComplete = step.status === "complete";
	const isCurrent = step.status === "current";
	const circleColor = clsx(
		isComplete ? bgCircleComplete : bgCircleUpcoming,
		"border-2",
		"transition",
		borderCircle,
		borderCircleHover,
	);

	return (
		<li className={clsx("relative", !isLastStep && "pb-2 lg:pb-4", "p-0")}>
			{!isLastStep && <VerticalLine />}
			<a
				href={step.href}
				className={clsx(
					"group relative flex items-start",
					isCurrent && headingLinkCurrent,
				)}
				aria-current={isCurrent ? "step" : undefined}
			>
				<StepCircle
					circleColor={circleColor}
					isComplete={isComplete}
					isCurrent={isCurrent}
				/>
				<StepDetails
					step={step}
					isComplete={isComplete}
					isCurrent={isCurrent}
				/>
			</a>
		</li>
	);
}

// Function for rendering the StepsCircle
export default function StepsCircle({ steps }: { steps: IStep[] }) {
	const totalSteps = steps.length;

	return (
		<nav aria-label="Progress" className="select-none">
			<ol role="list" className="overflow-hidden list-none p-0">
				{steps.map((step, index) => renderStep({ step, index, totalSteps }))}
			</ol>
		</nav>
	);
}
