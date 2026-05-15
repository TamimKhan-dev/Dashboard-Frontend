export const formatLastSession = (dates: string[]): string => {
  if (!dates || dates.length === 0) return '-'
  const latest = new Date(dates[0])
  const now = new Date()
  const diffMs = now.getTime() - latest.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  return `${diffDays} days ago`
}