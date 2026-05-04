'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { sendContact } from '../../lib/api'
import { ContactFormData } from '../../types'
import { SITE } from '../../lib/constants'
import KenyaStripe from '../../components/ui/KenyaStripe'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true)
    try {
      await sendContact(data)
      toast.success('Message sent! We\'ll get back to you.')
      reset()
    } catch { toast.error('Failed to send. Try again.') }
    finally { setLoading(false) }
  }

  return (
    <>
      <section className="relative py-28 bg-gradient-to-br from-uda-black via-uda-green to-uda-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">
              Contact <span className="text-uda-yellow">Us</span>
            </h1>
            <p className="text-xl text-gray-200">Get in touch with the YR27 team</p>
          </motion.div>
        </div>
      </section>
      <KenyaStripe />

      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="card-hover p-8">
              <h3 className="font-heading font-bold text-xl mb-6">Get In Touch</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-uda-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-uda-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-gray-500 text-sm hover:text-uda-green">{SITE.email}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-uda-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-uda-yellow" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a href={`tel:${SITE.phone}`} className="text-gray-500 text-sm hover:text-uda-green">{SITE.phone}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-uda-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-uda-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Location</p>
                    <p className="text-gray-500 text-sm">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-hover p-8">
              <h3 className="font-heading font-bold text-xl mb-5">Follow Us</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: FaInstagram, label: 'Instagram', color: 'bg-pink-600' },
                  { icon: FaTiktok, label: 'TikTok', color: 'bg-gray-800' },
                  { icon: FaXTwitter, label: 'Twitter(X)', color: 'bg-uda-black' },
                ].map(({ icon: Icon, label, color }) => (
                  <a key={label} href="#" className={`${color} text-white rounded-xl p-3 text-center hover:opacity-90 transition`}>
                    <Icon className="mx-auto mb-1" />
                    <span className="text-[10px] font-bold">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 card-hover p-8 md:p-12">
            <h2 className="text-2xl font-heading font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input {...register('full_name', { required: 'Required' })} className="input-field" />
                  {errors.full_name && <p className="text-uda-red text-xs mt-1">{errors.full_name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                  <input {...register('email', { required: 'Required' })} type="email" className="input-field" />
                  {errors.email && <p className="text-uda-red text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                  <input {...register('phone')} className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                  <select {...register('subject', { required: 'Required' })} className="input-field">
                    <option value="">Select</option>
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership</option>
                    <option value="events">Events</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media Inquiry</option>
                    <option value="complaint">Feedback</option>
                  </select>
                  {errors.subject && <p className="text-uda-red text-xs mt-1">{errors.subject.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                <textarea {...register('message', { required: 'Required' })} rows={5} className="input-field resize-none" />
                {errors.message && <p className="text-uda-red text-xs mt-1">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={loading} className="btn-green disabled:opacity-50">
                <FaPaperPlane /> {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}