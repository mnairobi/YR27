'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowRight, FaUserTie } from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'

// 🔹 Leader data (with images)
const leaders = [
  { 
    name: 'Yussuf Mugane', 
    title: 'National Convener', 
    image: '/leaders/yussuf1.jpeg'
  },
  { 
    name: 'Jackim Okoth - Tsunami', 
    title: 'Chairperson', 
    image: '/leaders/kim.jpeg'
  },
  { 
    name: 'Onesmus Nyaga', 
    title: 'Deputy Chairperson', 
    image: '/leaders/ones.jpeg'
  },
]

// 🔹 Utility: generate initials automatically
const getInitials = (name: string) =>
  name.split(' ').map(n => n[0]).join('').slice(0, 2)

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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-hover text-center p-8 group"
            >
              {/* 🔹 Image / Fallback */}
              <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden shadow-xl">
                {leader.image ? (
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-uda-green to-uda-black flex items-center justify-center text-white font-heading font-black text-3xl">
                    {getInitials(leader.name)}
                  </div>
                )}
              </div>

              {/* 🔹 Name + Title */}
              <h3 className="font-heading font-bold text-xl text-gray-900">
                {leader.name}
              </h3>
              <p className="text-uda-green font-semibold text-sm mt-1">
                {leader.title}
              </p>

              {/* 🔹 Badge */}
              <div className="mt-3 inline-flex items-center gap-1 text-xs bg-uda-yellow/10 text-uda-green font-bold px-3 py-1 rounded-full">
                <FaUserTie size={10} /> National Level
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 CTA */}
        <div className="text-center">
          <Link href="/leadership" className="btn-yellow inline-flex items-center gap-2">
            Full Leadership Structure <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}