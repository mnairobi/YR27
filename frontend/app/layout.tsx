import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import TopBar from '../components/layout/TopBar'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/shared/FloatingWhatsApp'
import ScrollToTop from '../components/shared/ScrollToTop'
import './globals.css'

export const metadata: Metadata = {
  title: 'YR27 – Youths for Ruto 2027 | Youth Power. National Power.',
  description: 'YR27 is a national youth movement mobilizing and empowering young people across Kenya. 2027 – Ruto Tena. From Campus to Country. Youths Rising.',
  keywords: 'YR27, Youths for Ruto, 2027, Ruto Tena, UDA, Kenya Youth, Hustler Nation, Yussuf Mugane',
  openGraph: {
    title: 'YR27 – Youths for Ruto 2027',
    description: 'Youth Power. National Power. 2027 – Ruto Tena.',
    type: 'website',
    locale: 'en_KE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Toaster position="top-right" toastOptions={{
          duration: 5000,
          style: { background: '#111', color: '#FFD700', fontWeight: 700, borderRadius: '12px' },
        }} />
        <TopBar />
        <div className="uda-stripe" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  )
}