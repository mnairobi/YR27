'use client'
import { motion } from 'framer-motion'
import { FaNewspaper, FaCalendarAlt, FaEye } from 'react-icons/fa'
import SectionHeader from '../../components/ui/SectionHeader'
import KenyaStripe from '../../components/ui/KenyaStripe'
import Link from 'next/link'

const articles = [
  { id: 1, slug: 'yr27-launched', title: 'YR27 Officially Launched Nationwide', excerpt: 'The Youths for Ruto 2027 movement launched with massive youth turnout across all 47 counties.', category: 'Movement News', date: '2025-04-20', views: 2400 },
  { id: 2, slug: 'convener-speech', title: 'National Convener Yussuf Mugane Addresses Youth', excerpt: 'In a powerful address, Yussuf Mugane called on the youth to organize, mobilize, and lead.', category: 'Press Releases', date: '2025-04-18', views: 1800 },
  { id: 3, slug: 'campus-chapter', title: 'YR27 Campus Chapters Grow Rapidly', excerpt: 'Over 50 university and college chapters established in the first month of the movement.', category: 'County Updates', date: '2025-04-15', views: 1200 },
  { id: 4, slug: 'digital-campaign', title: 'YR27 Digital Campaign Goes Viral', excerpt: 'Social media campaigns reach millions as youth embrace digital organizing.', category: 'Movement News', date: '2025-04-12', views: 3100 },
  { id: 5, slug: 'county-coordinators', title: 'County Coordinators Appointed in 30 Counties', excerpt: 'YR27 expands leadership with county coordinators driving grassroots mobilization.', category: 'County Updates', date: '2025-04-10', views: 950 },
  { id: 6, slug: 'youth-forum', title: 'First National Youth Forum Announced', excerpt: 'YR27 announces a major national youth forum to discuss agenda and strategy.', category: 'Events', date: '2025-04-08', views: 1600 },
]

export default function NewsPage() {
  return (
    <>
      <section className="relative py-28 bg-gradient-to-br from-uda-red via-uda-black to-uda-green overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">
              Media & <span className="text-uda-yellow">News</span>
            </h1>
            <p className="text-xl text-gray-200">Stay updated with the YR27 movement</p>
          </motion.div>
        </div>
      </section>
      <KenyaStripe />

      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <motion.div key={a.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-hover group"
              >
                <div className="h-48 bg-gradient-to-br from-uda-green/20 to-uda-black/40 flex items-center justify-center relative">
                  <FaNewspaper className="text-uda-green/30 text-6xl" />
                  <span className="absolute top-4 left-4 bg-uda-yellow text-uda-black text-xs font-bold px-3 py-1 rounded-full">
                    {a.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {a.date}</span>
                    <span className="flex items-center gap-1"><FaEye /> {a.views}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 group-hover:text-uda-green transition line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-4">{a.excerpt}</p>
                  <Link href={`/news/${a.slug}`} className="text-uda-green font-bold text-sm hover:text-uda-green-hover transition">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}