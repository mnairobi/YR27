'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NAV_LINKS } from '../../lib/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-uda-yellow group-hover:border-uda-green transition">
              <Image src="/images/logo.png" alt="YR27" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-black text-xl text-uda-green leading-none">YR27</h1>
              <p className="text-[10px] font-bold text-uda-yellow tracking-[0.2em] uppercase">Youths for Ruto</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-heading font-semibold uppercase tracking-wider transition-colors ${
                    active ? 'text-uda-green' : 'text-gray-600 hover:text-uda-green'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-uda-yellow rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTAs */}
          <div className="hidden xl:flex items-center gap-3">
            <Link href="/join" className="btn-yellow !py-2.5 !px-6 !text-xs">
              Join Movement
            </Link>
            <Link href="/donate" className="btn-red !py-2.5 !px-6 !text-xs">
              Support
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Menu"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl font-heading font-semibold transition ${
                    pathname === link.href
                      ? 'bg-uda-green-light text-uda-green'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/join" className="btn-yellow text-center">Join the Movement</Link>
                <Link href="/donate" className="btn-red text-center">Support YR27</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}