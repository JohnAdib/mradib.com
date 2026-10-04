# AI adoption article evidence revision

## Intended result

Update the existing article PR into a concrete case study with dated
measurements and practical implementation details. Preserve company
confidentiality through neutral labels, aggregate numbers and original
charts. The presentation remains a later task.

## Data and story

- Use the same-application monthly merged-PR series for January to August
  2026, corroborated by quarterly totals. Do not combine conflicting
  broader-period totals or later whole-repository counts.
- Add recorded work-item counts to distinguish activity from PR splitting.
- Show actual test and UI-flow inventory checkpoints, including the two
  partial-month snapshots, with dates and file-count definitions.
- Recreate the daily all-environment recorded-error curve. Exclude partial
  endpoint days from the line, mark the missing first hour in the earlier
  reporting window, and describe filtering/sampling effects.
- Explain the dated workflow changes, review evidence, test-build delivery,
  CI cost and the remaining gaps. Preserve release-history boundaries.

## Presentation

- Remove the visible disclosure that repeats the chart's existing values.
- Use readable native charts with explicit units and accessible data.
- Place measurements next to the relevant case-study sections and keep
  compact contents navigation. Retain the existing site design.
- Offer four numeric CSV downloads, including the longer PR history,
  derived from the shared datasets.

## Delivery

- Verify source values, calculations and anonymisation independently.
- Run formatting, type, chart/data, build and SEO checks.
- Review seven screen widths in both themes, including phone endings.
- Commit the revision, push the existing PR branch and update its description.
