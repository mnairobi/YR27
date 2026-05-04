'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaUserPlus, FaBullhorn, FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa'

const actions = [
  { icon: FaUserPlus, title: 'Join the Movement', desc: 'Register as a YR27 member today.', href: '/join', btn: 'btn-yellow' },
  { icon: FaBullhorn, title: 'Become a Mobilizer', desc: 'Lead the charge in your ward or campus.', href: '/join', btn: 'btn-green' },
  { icon: FaHandHoldingHeart, title: 'Support Change', desc: 'Contribute to the youth revolution.', href: '/donate', btn: 'btn-red' },
]

export default function JoinCTA() {
  return (
    <section className="py-20 bg-uda-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Ready to <span className="text-uda-yellow">Rise?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-14 max-w-xl mx-auto">
            YR27 is active. YR27 is growing. YR27 is unstoppable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((a, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 text-center group hover:bg-white/15 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-uda-yellow/10 rounded-2xl flex items-center justify-center group-hover:bg-uda-yellow/20 transition">
                <a.icon className="text-uda-yellow text-2xl" />
              </div>
              <h3 className="text-white font-heading font-bold text-xl mb-3">{a.title}</h3>
              <p className="text-gray-400 mb-6 text-sm">{a.desc}</p>
              <Link href={a.href} className={`${a.btn} !text-xs`}>
                Get Started <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}