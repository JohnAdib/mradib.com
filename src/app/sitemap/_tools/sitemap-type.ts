export type SitemapType = Array<{
  url: string
  lastModified: Date
  changeFrequency:
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'
  priority: number
}>;