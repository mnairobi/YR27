'use client'
import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaCheckCircle } from 'react-icons/fa'
import SectionHeader from '../../components/ui/SectionHeader'
import StatsCounter from '../../components/home/StatsCounter'
import KenyaStripe from '../../components/ui/KenyaStripe'
import { CORE_VALUES } from '../../lib/constants'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-uda-green via-uda-black to-uda-green overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">
              About <span className="text-uda-yellow">YR27</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Who we are, what we believe, and why we&apos;re building the largest youth movement in Kenya.
            </p>
          </motion.div>
        </div>
      </section>
      <KenyaStripe />

      {/* Who We Are */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader badge="Who We Are" badgeIcon="✊" title="YR27 —" highlight="Youths for Ruto 2027" />
          <div className="prose prose-lg max-w-none text-gray-600 text-center -mt-6">
            <p>
              YR27 (Youths for Ruto 2027) is a youth-led movement bringing together <strong>students, graduates, hustlers,
              and young professionals</strong> to actively participate in Kenya&apos;s leadership and governance.
            </p>
            <p className="font-semibold text-uda-green text-xl mt-6">
              We believe that young people are not just voters — they are leaders, organizers, and decision-makers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="card-hover p-10 border-l-4 border-uda-green">
              <FaEye className="text-uda-green text-3xl mb-4" />
              <h2 className="text-2xl font-heading font-black text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A united, empowered, and politically conscious youth driving Kenya&apos;s transformation.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="card-hover p-10 border-l-4 border-uda-yellow">
              <FaBullseye className="text-uda-yellow text-3xl mb-4" />
              <h2 className="text-2xl font-heading font-black text-gray-900 mb-4">Our Mission</h2>
              <ul className="space-y-3 text-gray-600">
                {[
                  'To mobilize youth across all counties',
                  'To promote active participation in governance',
                  'To support the development agenda under William Ruto',
                  'To build a strong, organized youth political force for 2027 and beyond',
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-uda-green mt-1 flex-shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Core Values */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="Our Values" badgeIcon="⭐" title="Core" highlight="Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((v, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover p-6 text-center group hover:bg-uda-green transition-all duration-500"
              >
                <span className="text-4xl block mb-3">{v.icon}</span>
                <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-white transition">{v.title}</h3>
                <p className="text-gray-500 text-sm mt-2 group-hover:text-green-100 transition">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}