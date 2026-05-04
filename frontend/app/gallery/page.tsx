'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFistRaised } from 'react-icons/fa'
import KenyaStripe from '../../components/ui/KenyaStripe'

const categories = ['All', 'Rallies', 'Meetings', 'Training', 'Community']
const images = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1, title: `YR27 Activity ${i + 1}`,
  category: categories[(i % 4) + 1],
}))

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? images : images.filter(img => img.category === filter)

  return (
    <>
      <section className="relative py-28 bg-gradient-to-br from-uda-black via-uda-green to-uda-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">
              Photo <span className="text-uda-yellow">Gallery</span>
            </h1>
          </motion.div>
        </div>
      </section>
      <KenyaStripe />

      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-heading font-semibold text-sm uppercase tracking-wider transition ${
                  filter === cat ? 'bg-uda-green text-white' : 'bg-white text-gray-600 hover:bg-uda-yellow hover:text-uda-black'
                }`}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <motion.div key={img.id} layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="aspect-square rounded-2xl bg-gradient-to-br from-uda-green/30 to-uda-black/50 flex items-center justify-center cursor-pointer group hover:shadow-xl transition-all"
              >
                <div className="text-center">
                  <FaFistRaised className="text-uda-yellow/40 text-4xl mx-auto mb-2 group-hover:text-uda-yellow transition" />
                  <p className="text-white/60 text-xs font-semibold group-hover:text-white transition">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}