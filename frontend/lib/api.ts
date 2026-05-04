import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
})

// Counties
export const getCounties = () => api.get('/counties/').then(r => r.data)

// Leaders
export const getLeaders = (params?: Record<string, string>) =>
  api.get('/leaders/', { params }).then(r => r.data)
export const getNationalLeaders = () => api.get('/leaders/national/').then(r => r.data)

// Agenda
export const getAgendaItems = () => api.get('/agenda/').then(r => r.data)

// News
export const getLatestNews = () => api.get('/news/latest/').then(r => r.data)
export const getFeaturedNews = () => api.get('/news/featured/').then(r => r.data)
export const getNewsArticles = (params?: Record<string, string>) =>
  api.get('/news/', { params }).then(r => r.data)
export const getNewsArticle = (slug: string) => api.get(`/news/${slug}/`).then(r => r.data)
export const getNewsCategories = () => api.get('/news-categories/').then(r => r.data)

// Events
export const getEvents = (params?: Record<string, string>) =>
  api.get('/events/', { params }).then(r => r.data)
export const getUpcomingEvents = () => api.get('/events/upcoming/').then(r => r.data)

// Gallery
export const getGalleryImages = (params?: Record<string, string>) =>
  api.get('/gallery/', { params }).then(r => r.data)
export const getGalleryCategories = () => api.get('/gallery-categories/').then(r => r.data)

// Testimonials
export const getTestimonials = () => api.get('/testimonials/').then(r => r.data)

// Stats
export const getStats = () => api.get('/stats/').then(r => r.data)

// Settings
export const getSiteSettings = () => api.get('/settings/').then(r => r.data)

// Forms
export const joinMovement = (data: any) => api.post('/join/', data).then(r => r.data)
export const sendContact = (data: any) => api.post('/contact/', data).then(r => r.data)
export const makeDonation = (data: any) => api.post('/donate/', data).then(r => r.data)
export const subscribe = (data: { email: string; phone?: string }) =>
  api.post('/subscribe/', data).then(r => r.data)

export default api