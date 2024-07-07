export function SectionIntro({ children }: { children?: string }) {
  if (!children) {
    return null;
  }

  return (
    <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  );
}
