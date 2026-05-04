'use client'
import { useState } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../../lib/constants'

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl p-5 mb-4 w-72"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm">YR27 Support</p>
                  <p className="text-[10px] text-gray-400">Online now</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)}><FaTimes className="text-gray-400" /></button>
            </div>
            <div className="bg-green-50 rounded-xl p-3 mb-3 text-sm text-gray-700">
              ✊ Habari! Welcome to YR27. How can we help you join the movement?
            </div>
            <a href={`https://wa.me/${SITE.whatsapp}?text=Hello%20YR27`}
               target="_blank" rel="noopener noreferrer"
               className="block w-full bg-green-500 text-white text-center py-2.5 rounded-xl font-bold text-sm hover:bg-green-600 transition">
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileTap={{ scale: 0.9 }} onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition relative">
        <FaWhatsapp className="text-white text-2xl" />
        {!open && <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-uda-red rounded-full animate-ping" />}
      </motion.button>
    </div>
  )
}