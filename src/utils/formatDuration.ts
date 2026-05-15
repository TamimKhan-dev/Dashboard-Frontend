export const formatDuration = (seconds: number): string => {
  if (!seconds || seconds === 0) return '0'
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  if (mins === 0) return `${secs}sec`
  if (secs === 0) return `${mins}m`
  return `${mins}m ${secs}sec`
}