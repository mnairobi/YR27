'use client'
import { motion } from 'framer-motion'
import SectionHeader from '../../components/ui/SectionHeader'
import KenyaStripe from '../../components/ui/KenyaStripe'
import { iconMap } from '../../lib/utils'

const items = [
  { icon: 'briefcase', title: 'Youth Employment & Job Creation', desc: 'Creating 2 million jobs for young Kenyans through targeted programs, internships, and economic reforms that prioritize youth participation.' },
  { icon: 'laptop', title: 'Digital Economy & Innovation', desc: 'Building tech hubs and coding bootcamps across all 47 counties. Equipping youth with 21st-century digital skills for the global economy.' },
  { icon: 'graduation', title: 'Education & Skills Training', desc: 'Free TVET training, university bursaries, and practical skills development programs that prepare youth for real-world employment.' },
  { icon: 'chart', title: 'Hustler Fund & Youth Enterprise', desc: 'Expanding Hustler Fund access and providing mentorship, training, and market linkages for young entrepreneurs and hustlers.' },
  { icon: 'seedling', title: 'Agriculture & Agribusiness', desc: 'Modern farming techniques, subsidized inputs, and market access for young farmers. Making agriculture attractive to the youth.' },
  { icon: 'home', title: 'Housing & Urban Development', desc: 'Affordable housing for youth and urban renewal projects that create employment while addressing the housing deficit.' },
  { icon: 'heart', title: 'Healthcare & Wellness', desc: 'Universal health coverage and mental health support programs for young Kenyans. Addressing substance abuse and wellness.' },
  { icon: 'users', title: 'National Unity & Cohesion', desc: 'Building bridges across ethnic, regional, and political divides through youth exchange programs and shared national identity.' },
]

export default function AgendaPage() {
  return (
    <>
      <section className="relative py-28 bg-gradient-to-br from-uda-green via-uda-black to-uda-red overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">
              Our <span className="text-uda-yellow">Agenda</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              YR27 stands for more than politics — we stand for the future of young people.
            </p>
          </motion.div>
        </div>
      </section>
      <KenyaStripe />

      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="What We Stand For" badgeIcon="📋" title="Youth-Centered" highlight="Agenda" />
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-hover p-8 flex gap-5 group"
              >
                <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon] || '📌'}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-uda-green transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}