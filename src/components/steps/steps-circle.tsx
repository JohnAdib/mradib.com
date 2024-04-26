import { CheckIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { IStep } from './step-interface';

// Define meaningful text and background color variables
// TODO: read the colors from template for dark and light mode
const textColorWhite = 'text-white';
const textColorIndigo900 = 'text-indigo-900';
const textColorIndigo600 = 'text-indigo-600';
const textColorGray500 = 'text-gray-500';
const bgColorGray300 = 'bg-gray-300';
const bgColorIndigo600 = 'bg-indigo-600';
const bgColorWhite = 'bg-white';
const borderColorGray300 = 'border-gray-300';
const groupHoverBorderColorGray400 = 'group-hover:border-gray-400';

function VerticalLine() {
  return (
    <div
      className={clsx(
        'absolute right-4 top-4 -mr-px mt-0.5 h-full w-0.5',
        bgColorGray300,
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
  const currentCircleEl =
        <span className={clsx(
          'h-2.5 w-2.5 rounded-full',
          isCurrent && bgColorIndigo600,
          isUpcoming && 'transition bg-transparent group-hover:bg-gray-300',
        )} />;

  return (
    <span className="flex h-9 items-center">
      <span className={clsx(
        'relative z-10 flex h-8 w-8 items-center justify-center rounded-full',
        circleColor,
      )}>
        {isComplete && <CheckIcon className={clsx('h-5 w-5', textColorWhite)} aria-hidden="true" />}
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
    <span className={clsx(
      'mr-4 flex flex-col',
      isComplete && textColorIndigo900,
      isCurrent && textColorIndigo600,
      isUncomplete && textColorGray500,
    )}>
      <span className="text-sm font-bold">
        {step.name}
      </span>
      <span className={clsx('text-xs', textColorGray500)}>{step.description}</span>
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
  const isComplete = step.status === 'complete';
  const isCurrent = step.status === 'current';
  const circleColor = clsx(
    isComplete ? bgColorIndigo600 : bgColorWhite,
    'border-2',
    'transition',
    borderColorGray300,
    groupHoverBorderColorGray400,
  );

  return (
    <li className={clsx(
      'relative',
      !isLastStep && 'pb-2 lg:pb-4',
      'p-0',
    )}>
      {!isLastStep && <VerticalLine />}
      <a
        href={step.href}
        className={clsx(
          'group relative flex items-start',
          isCurrent && textColorIndigo600,
        )}
        aria-current={isCurrent ? 'step' : undefined}
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
    <nav aria-label="Progress" className='select-none'>
      <ol role="list" className="overflow-hidden list-none p-0">
        {steps.map((step, index) => (
          renderStep({ step, index, totalSteps })
        ))}
      </ol>
    </nav>
  );
}
