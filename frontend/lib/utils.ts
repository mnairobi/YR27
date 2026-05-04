import { format, parseISO } from 'date-fns'

export const formatDate = (dateStr: string) => {
  try { return format(parseISO(dateStr), 'MMMM dd, yyyy') }
  catch { return dateStr }
}

export const formatTime = (timeStr: string) => {
  const [h, m] = timeStr.split(':')
  const hour = parseInt(h)
  return `${hour % 12 || 12}:${m} ${hour >= 12 ? 'PM' : 'AM'}`
}

export const mediaUrl = (path: string) => {
  if (!path) return '/images/placeholder.jpg'
  if (path.startsWith('http')) return path
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || 'http://localhost:8000'}${path}`
}

export const truncate = (str: string, len: number) =>
  str.length <= len ? str : str.slice(0, len) + '...'

export const statusColor = (s: string) => {
  const map: Record<string, string> = {
    upcoming: 'bg-uda-green text-white',
    ongoing: 'bg-uda-yellow text-uda-black',
    completed: 'bg-gray-500 text-white',
    cancelled: 'bg-uda-red text-white',
  }
  return map[s] || 'bg-gray-500 text-white'
}

export const iconMap: Record<string, string> = {
  briefcase: '💼', graduation: '🎓', chart: '📈', shield: '🛡️',
  heart: '❤️', seedling: '🌱', laptop: '💻', home: '🏠',
  users: '👥', globe: '🌍', lightbulb: '💡', handshake: '🤝',
}