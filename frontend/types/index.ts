export interface County {
  id: number
  name: string
  code: string
  registered_youth: number
}

export interface Leader {
  id: number
  full_name: string
  position: string
  custom_title: string
  display_title: string
  level: 'national' | 'county' | 'grassroots'
  county: number | null
  county_name: string
  photo: string
  bio: string
  phone: string
  email: string
  twitter: string
  facebook: string
  instagram: string
  tiktok: string
  order: number
  is_active: boolean
}

export interface AgendaItem {
  id: number
  title: string
  slug: string
  icon: string
  short_description: string
  full_description: string
  image: string
  order: number
}

export interface NewsCategory {
  id: number
  name: string
  slug: string
  article_count: number
}

export interface NewsArticle {
  id: number
  title: string
  slug: string
  category: number
  category_name: string
  excerpt: string
  content?: string
  featured_image: string
  author: string
  is_featured: boolean
  views: number
  created_at: string
  updated_at?: string
}

export interface Event {
  id: number
  title: string
  slug: string
  description: string
  short_description: string
  image: string
  venue: string
  county: number
  county_name: string
  date: string
  start_time: string
  end_time: string
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  registration_link: string
  is_featured: boolean
}

export interface GalleryImage {
  id: number
  title: string
  image: string
  category: number
  category_name: string
  caption: string
  is_featured: boolean
  created_at: string
}

export interface Testimonial {
  id: number
  name: string
  location: string
  photo: string
  quote: string
  role: string
}

export interface Stats {
  total_members:  number
  total_counties: number
  total_events:   number
  total_leaders:  number
}

export interface JoinFormData {
  full_name: string
  id_number: string
  phone: string
  email: string
  gender: string
  age_bracket: string
  county: number | string
  constituency: string          // ← was sub_county
  ward: string
  polling_station: string
  institution: string
  occupation: string
  role_interest: string
  skills: string
  motivation: string
}

export interface ContactFormData {
  full_name: string
  email: string
  phone: string
  subject: string
  message: string
}