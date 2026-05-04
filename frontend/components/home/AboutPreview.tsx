'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaFistRaised, FaCheckCircle } from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'

const points = [
  'Youth-led movement across all 47 counties',
  'Students, graduates, hustlers & young professionals',
  'Active participation in governance & leadership',
  'Supporting the development agenda under William Ruto',
]

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              badge="Who We Are"
              badgeIcon="✊"
              title="We Are"
              highlight="YR27"
              subtitle=""
              align="left"
            />

            <p className="text-gray-600 text-lg mb-6 leading-relaxed -mt-8">
              YR27 (Youths for Ruto 2027) is a youth-led movement bringing together students,
              graduates, hustlers, and young professionals to actively participate in Kenya&apos;s
              leadership and governance.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed font-medium">
              We believe that young people are not just voters — they are{' '}
              <span className="text-uda-green font-bold">leaders</span>,{' '}
              <span className="text-uda-green font-bold">organizers</span>, and{' '}
              <span className="text-uda-green font-bold">decision-makers</span>.
            </p>

            <ul className="space-y-3 mb-10">
              {points.map((p, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-uda-green mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{p}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/about" className="btn-green">
              Learn More About Us <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-uda-green to-uda-black aspect-[4/5] flex items-center justify-center">
              <div className="text-center p-10">
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}
                  className="w-40 h-40 mx-auto mb-8 bg-uda-yellow rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                  <FaFistRaised className="text-uda-black text-6xl" />
                </motion.div>
                <h3 className="text-white font-heading font-black text-4xl mb-3">YR27</h3>
                <p className="text-uda-yellow font-bold text-lg tracking-wider">YOUTHS RISING</p>
                <p className="text-gray-400 mt-2">From Campus to Country</p>
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5"
            >
              <div className="text-3xl font-heading font-black text-uda-green">2027</div>
              <p className="text-xs text-gray-500 font-bold">RUTO TENA</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}