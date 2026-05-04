'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'
import { iconMap } from '../../lib/utils'

const agendaItems = [
  { icon: 'briefcase', title: 'Youth Employment', desc: 'Creating millions of jobs for young Kenyans.' },
  { icon: 'laptop', title: 'Digital Economy', desc: 'Tech hubs and coding bootcamps nationwide.' },
  { icon: 'graduation', title: 'Education & Skills', desc: 'Free TVET and practical skills programs.' },
  { icon: 'chart', title: 'Hustler Fund', desc: 'Expanded access for youth entrepreneurs.' },
  { icon: 'seedling', title: 'Agriculture', desc: 'Modern farming for young farmers.' },
  { icon: 'home', title: 'Affordable Housing', desc: 'Housing projects creating youth employment.' },
]

export default function AgendaPreview() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="Our Agenda"
          badgeIcon="📋"
          title="More Than Politics —"
          highlight="The Future of Young People"
          subtitle="YR27 stands for more than politics — we stand for the future of young people."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agendaItems.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-hover p-7 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {iconMap[item.icon] || '📌'}
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 group-hover:text-uda-green transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/agenda" className="btn-green">
            Full Agenda <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}