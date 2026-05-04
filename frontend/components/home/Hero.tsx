'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaFistRaised, FaUsers, FaBullhorn } from 'react-icons/fa'

const slides = [
  {
    badge: 'Youth Power. National Power.',
    badgeIcon: <FaFistRaised />,
    title: 'YOUTHS FOR',
    titleHighlight: 'RUTO 2027',
    subtitle: 'We are not waiting for change. We are the change. 2027 is not just an election — it is a generational moment.',
    cta1: { label: 'Join the Movement', href: '/join' },
    cta2: { label: 'Become a Mobilizer', href: '/join' },
    gradient: 'from-uda-green/95 via-uda-black/90 to-uda-green/95',
  },
  {
    badge: 'From Campus to Country',
    badgeIcon: <FaUsers />,
    title: 'WE ORGANIZE.',
    titleHighlight: 'WE MOBILIZE. WE LEAD.',
    subtitle: 'YR27 is a national youth movement mobilizing, organizing, and empowering young people across Kenya to shape the country\'s political and economic future.',
    cta1: { label: 'Our Agenda', href: '/agenda' },
    cta2: { label: 'Support Change', href: '/donate' },
    gradient: 'from-uda-black/95 via-uda-green/85 to-uda-black/95',
  },
  {
    badge: '2027 – Ruto Tena',
    badgeIcon: <FaBullhorn />,
    title: 'YR27 IS',
    titleHighlight: 'UNSTOPPABLE',
    subtitle: 'YR27 is active. YR27 is growing. YR27 is unstoppable. Join over 50,000 youth across all 47 counties building Kenya\'s future.',
    cta1: { label: 'View Leadership', href: '/leadership' },
    cta2: { label: 'Latest News', href: '/news' },
    gradient: 'from-uda-red/90 via-uda-black/90 to-uda-green/90',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 7000)
    return () => clearInterval(t)
  }, [])

  const s = slides[current]

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* BG */}
      {/* <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} transition-all duration-1000`}
       /> */}
       <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
  style={{ backgroundImage: "url('/images/ruto.jpeg')" }}
/>
      <div className="absolute inset-0 opacity-[0.04]"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")` }} />

      {/* Floating orbs */}
      <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-72 h-72 bg-uda-yellow/10 rounded-full blur-3xl" />
      <motion.div animate={{ y: [20, -20, 20] }} transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-uda-green/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-uda-yellow/15 backdrop-blur-sm border border-uda-yellow/30 rounded-full px-5 py-2 mb-8">
              <span className="text-uda-yellow">{s.badgeIcon}</span>
              <span className="text-uda-yellow font-heading font-bold text-sm tracking-wider">{s.badge}</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.95] mb-8">
              {s.title}<br />
              <span className="text-uda-yellow">{s.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              {s.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href={s.cta1.href} className="btn-yellow text-base">
                {s.cta1.label} <FaArrowRight />
              </Link>
              <Link href={s.cta2.href} className="btn-outline-yellow text-base">
                {s.cta2.label}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-3 mt-16">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? 'w-14 bg-uda-yellow' : 'w-3 bg-white/30 hover:bg-white/50'
              }`} />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}