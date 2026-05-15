export const formatDateHeader = (isoString: string): string => {
  const date = new Date(isoString)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
}

export const formatCallTime = (isoString: string): string => {
  const date = new Date(isoString)
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).toLowerCase()
}