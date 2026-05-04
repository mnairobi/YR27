'use client'

import { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import {
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserTie,
} from 'react-icons/fa'

interface StatsData {
  total_members:  number
  total_counties: number
  total_events:   number
  total_leaders:  number
}

export default function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [stats, setStats] = useState<StatsData | null>(null)

  useEffect(() => {
    const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

    const fetchStats = async () => {
      try {
        const res  = await fetch(`${API}/stats/`)
        const data = await res.json()
        setStats(data)
      } catch (err) {
        console.error('Stats fetch failed:', err)
      }
    }

    fetchStats()

    // Refresh every 30 seconds — reflects new registrations instantly
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  const items = [
    {
      icon:  FaUsers,
      value: stats?.total_members  ?? 0,
      label: 'Registered Members',
      color: 'text-uda-yellow',
    },
    {
      icon:  FaMapMarkerAlt,
      value: stats?.total_counties ?? 0,
      label: 'Counties Active',
      color: 'text-uda-green',
    },
    {
      icon:  FaCalendarAlt,
      value: stats?.total_events   ?? 0,
      label: 'Events Held',
      color: 'text-uda-red',
    },
    {
      icon:  FaUserTie,
      value: stats?.total_leaders  ?? 0,
      label: 'Youth Leaders',
      color: 'text-uda-yellow',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-uda-black relative overflow-hidden">

      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
          backgroundSize:  '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-uda-yellow font-bold text-xs uppercase tracking-widest mb-3">
            📊 Live Movement Stats
          </p>
          <h2
            className="text-3xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Our Growing{' '}
            <span className="text-uda-yellow">Movement</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            Real numbers — updated as members register
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center group"
            >
              {/* Icon box */}
              <div
                className={`inline-flex p-4 rounded-2xl bg-white/5
                            group-hover:bg-white/10 transition-colors
                            duration-300 mb-4 ${s.color}`}
              >
                <s.icon size={28} />
              </div>

              {/* Animated number */}
              <div
                className="text-4xl md:text-5xl font-black text-white mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {inView ? (
                  <CountUp
                    end={s.value}
                    duration={2.5}
                    separator=","
                    useEasing
                  />
                ) : (
                  '0'
                )}
              </div>

              {/* Label */}
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                {s.label}
              </p>

              {/* Live pulse */}
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <span className="w-1.5 h-1.5 bg-uda-green rounded-full animate-pulse" />
                <span className="text-gray-600 text-xs uppercase tracking-wider">
                  Live
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Numbers update as members register.{' '}
            <a
              href="/join"
              className="text-uda-yellow font-bold hover:underline"
            >
              Join YR27 today →
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}