'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaTiktok, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import toast from 'react-hot-toast'
import { subscribe } from '../../lib/api'
import { SITE, NAV_LINKS } from '../../lib/constants'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await subscribe({ email })
      toast.success('Subscribed! Welcome to YR27.')
      setEmail('')
    } catch (err: any) {
      toast.error(err?.response?.data?.email?.[0] || 'Failed to subscribe')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-uda-black text-white">
      {/* Newsletter */}
      <div className="bg-uda-green">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold">Stay Connected with YR27</h3>
            <p className="text-green-100 mt-1">Get updates on events, news, and opportunities</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-3">
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Your email address" required
              className="flex-1 md:w-80 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-uda-yellow"
            />
            <button type="submit" disabled={loading} className="btn-yellow !py-3">
              <FaPaperPlane /> {loading ? '...' : 'Join'}
            </button>
          </form>
        </div>
      </div>

      <div className="uda-stripe" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image src="/images/logo.png" alt="YR27" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-heading font-black text-uda-yellow text-xl">YR27</h3>
                <p className="text-[10px] text-gray-400 tracking-wider">YOUTHS FOR RUTO 2027</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              We are the generation that refuses to sit back. We organize. We mobilize. We lead.
              2027 is ours to shape.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaXTwitter, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaTiktok, href: '#' },
                { icon: FaYoutube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href}
                   className="p-2.5 bg-white/10 rounded-full hover:bg-uda-yellow hover:text-uda-black transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-uda-yellow mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-uda-yellow transition text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-uda-yellow rounded-full" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-heading font-bold text-uda-yellow mb-6">Get Involved</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Join the Movement', 'Become a Mobilizer', 'Campus Leadership', 'Volunteer', 'Support / Donate'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-uda-green rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-uda-yellow mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-uda-yellow mt-0.5 flex-shrink-0" />
                Nairobi, Kenya
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-uda-yellow transition">
                  <FaPhone className="text-uda-yellow flex-shrink-0" /> {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-gray-400 hover:text-uda-yellow transition">
                  <FaEnvelope className="text-uda-yellow flex-shrink-0" /> {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} YR27 – Youths for Ruto 2027. All rights reserved.</p>
          <p className="font-semibold text-uda-yellow">Youth Power. National Power. 2027 – Ruto Tena.</p>
        </div>
      </div>
    </footer>
  )
}