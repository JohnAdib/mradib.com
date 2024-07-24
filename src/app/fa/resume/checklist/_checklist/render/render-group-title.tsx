import clsx from 'clsx';

interface IRenderChecklistGroup {
  title: string | React.ReactNode;
  desc?: string | React.ReactNode;
}

export function RenderChecklistGroupTitle({
  title,
  desc,
}: IRenderChecklistGroup) {

  const DescElement = () => {
    if (!desc) {
      return null;
    }
    return <p className={
      clsx(
        'mt-4',
      )
    }>{desc}</p>;
  };

  return (
    <div className={
      clsx(
        'mb-2',
      )
    }>
      <div className={clsx(
        'border-b',
        'border-gray-300 dark:border-gray-700',
        'pb-2',
        // 'mb-6',

      )}>
        <h2 className={clsx(
          'select-none',
          'mb-0',
        )}>
          <span className={clsx(
            'border-b-4',
            'border-blue-500',
          )}>
            {title}
          </span>
        </h2>
      </div>
      <DescElement />
    </div>
  );
}
