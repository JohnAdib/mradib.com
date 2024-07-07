export function SectionSubTitle({ children }: { children?: string }) {
  if (!children) {
    return null;
  }

  return (
    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
      {children}
    </h2>
  );
}
