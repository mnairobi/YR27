'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFistRaised, FaArrowRight } from 'react-icons/fa'

export default function MessageSection() {
  return (
    <section className="relative py-24 bg-uda-green overflow-hidden">
      <div className="absolute inset-0 opacity-5"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E")` }} />
      <motion.div animate={{ x: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-uda-yellow/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FaFistRaised className="text-uda-yellow text-5xl mx-auto mb-8" />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-8">
            We are the generation that{' '}
            <span className="text-uda-yellow">refuses to sit back.</span>
          </h2>

          <div className="space-y-4 text-xl md:text-2xl text-white/90 font-heading font-semibold mb-10">
            <p>We <span className="text-uda-yellow">organize.</span></p>
            <p>We <span className="text-uda-yellow">mobilize.</span></p>
            <p>We <span className="text-uda-yellow">lead.</span></p>
          </div>

          <div className="space-y-2 mb-12">
            <p className="text-lg text-green-100 font-bold">2027 is ours to shape.</p>
            <p className="text-uda-yellow font-heading font-black text-2xl">YR27 – From Campus to Country.</p>
            <p className="text-white font-heading font-bold text-xl">YR27 – Youths Rising.</p>
            <p className="text-uda-yellow font-heading font-black text-3xl mt-4">2027 – Ruto Tena.</p>
          </div>

          <Link href="/join" className="btn-yellow text-lg px-12 py-4">
            Join the Movement <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}