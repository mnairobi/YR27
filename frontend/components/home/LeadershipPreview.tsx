'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaUserTie } from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'

const leaders = [
  { name: 'Yussuf Mugane', title: 'National Convener', initials: 'YM' },
  { name: 'Alex Kiorop', title: 'Chairperson', initials: 'AK' },
  { name: 'Onesmus Nyaga', title: 'Deputy Chairperson', initials: 'ON' },
]

export default function LeadershipPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="Leadership"
          badgeIcon="👥"
          title="Organized. Strategic."
          highlight="Nationwide."
          subtitle="YR27 is organized, strategic, and nationwide — led by committed young leaders."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {leaders.map((leader, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-hover text-center p-8"
            >
              <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-br from-uda-green to-uda-black flex items-center justify-center text-white font-heading font-black text-3xl shadow-xl">
                {leader.initials}
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">{leader.name}</h3>
              <p className="text-uda-green font-semibold text-sm mt-1">{leader.title}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs bg-uda-yellow/10 text-uda-green font-bold px-3 py-1 rounded-full">
                <FaUserTie size={10} /> National Level
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/leadership" className="btn-yellow">
            Full Leadership Structure <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}