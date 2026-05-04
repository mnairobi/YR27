'use client'
import { motion } from 'framer-motion'

interface Props {
  badge?: string
  badgeIcon?: string
  title: string
  highlight?: string
  subtitle?: string
  light?: boolean
  align?: 'left' | 'center'
}

export default function SectionHeader({
  badge, badgeIcon, title, highlight, subtitle, light = false, align = 'center'
}: Props) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${alignClass}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 rounded-full px-5 py-2 mb-5 text-sm font-bold uppercase tracking-wider ${
          light ? 'bg-white/10 text-uda-yellow' : 'bg-uda-yellow/10 text-uda-green'
        }`}>
          {badgeIcon && <span>{badgeIcon}</span>}
          {badge}
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-black leading-tight ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}{' '}
        {highlight && <span className="text-uda-yellow">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl leading-relaxed ${
          align === 'center' ? 'mx-auto' : ''
        } ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}