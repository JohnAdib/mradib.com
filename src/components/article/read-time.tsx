export function ArticleReadTime({
  minutes,
}: {
  minutes?: number | null;
}): JSX.Element | null {
  if (!minutes) {
    return null;
  }

  const readTimeMinutesFa = minutes.toLocaleString("fa");
  const readTimeTxt = `در ${readTimeMinutesFa} دقیقه بخوانید‍‍‍‍‍‍`;
  const readTimeTitle = `ما تخمین می‌زنیم که شما این نوشته را در ${readTimeMinutesFa} دقیقه بخوانید.`;

  return <abbr title={readTimeTitle}>{readTimeTxt}</abbr>;
}
