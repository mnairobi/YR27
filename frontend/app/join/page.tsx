'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaFistRaised,
} from 'react-icons/fa'
import { joinMovement } from '../../lib/api'
import KenyaStripe from '../../components/ui/KenyaStripe'

// ── Match EXACTLY what the backend model accepts ──────────────────────────
interface JoinFormData {
  full_name:    string
  phone:        string
  email:        string
  gender:       string
  county:       number | string
  constituency: string          // ← model field name (was sub_county)
  ward:         string
}

const counties = [
  'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet',
  'Embu', 'Garissa', 'Homa Bay', 'Isiolo', 'Kajiado',
  'Kakamega', 'Kericho', 'Kiambu', 'Kilifi', 'Kirinyaga',
  'Kisii', 'Kisumu', 'Kitui', 'Kwale', 'Laikipia',
  'Lamu', 'Machakos', 'Makueni', 'Mandera', 'Marsabit',
  'Meru', 'Migori', 'Mombasa', "Murang'a", 'Nairobi',
  'Nakuru', 'Nandi', 'Narok', 'Nyamira', 'Nyandarua',
  'Nyeri', 'Samburu', 'Siaya', 'Taita-Taveta', 'Tana River',
  'Tharaka-Nithi', 'Trans-Nzoia', 'Turkana', 'Uasin Gishu',
  'Vihiga', 'Wajir', 'West Pokot',
]

export default function JoinPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JoinFormData>()

  const onSubmit = async (data: JoinFormData) => {
    setLoading(true)
    try {
      await joinMovement(data)
      setSuccess(true)
      reset()
      toast.success('Welcome to YR27! Youths Rising! 🔥')
    } catch (err: any) {
      const errData = err?.response?.data
      const msg =
        errData?.phone?.[0]        ||
        errData?.email?.[0]        ||
        errData?.county?.[0]       ||
        errData?.non_field_errors?.[0] ||
        'Registration failed. Please try again.'
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  // ── Success screen ────────────────────────────────────────────────────
  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg px-4"
        >
          <div className="w-24 h-24 bg-uda-green rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-white text-5xl" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Welcome to <span className="text-uda-yellow">YR27!</span>
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            You are now part of the movement.
            YR27 – Youths Rising. 2027 – Ruto Tena.
          </p>
          <p className="text-uda-green font-bold mb-8">
            We organize. We mobilize. We lead.
          </p>
          <button onClick={() => setSuccess(false)} className="btn-yellow">
            Register Another Member
          </button>
        </motion.div>
      </div>
    )
  }

  // ── Registration form ─────────────────────────────────────────────────
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-uda-green via-uda-black to-uda-red overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FaFistRaised className="text-uda-yellow text-5xl mx-auto mb-5" />
          <h1
            className="text-5xl md:text-7xl font-black text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Join <span className="text-uda-yellow">YR27</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-xl mx-auto">
            Be part of the change. Register as a member of the movement.
          </p>
        </div>
      </section>

      <KenyaStripe />

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <h2
              className="text-2xl font-bold text-center text-gray-900 mb-10"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Member Registration
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">

              {/* ── Personal Information ──────────────────────────── */}
              <div>
                <h3
                  className="font-bold text-uda-green flex items-center gap-2 mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <FaUser /> Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="full_name"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="full_name"
                      {...register('full_name', { required: 'Required' })}
                      className="input-field"
                      placeholder="Full name"
                    />
                    {errors.full_name && (
                      <p className="text-uda-red text-xs mt-1">
                        {errors.full_name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Phone *
                    </label>
                    <input
                      id="phone"
                      {...register('phone', { required: 'Required' })}
                      className="input-field"
                      placeholder="0712345678"
                      type="tel"
                    />
                    {errors.phone && (
                      <p className="text-uda-red text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      {...register('email')}
                      type="email"
                      className="input-field"
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Gender *
                    </label>
                    <select
                      id="gender"
                      {...register('gender', { required: 'Required' })}
                      className="input-field"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-uda-red text-xs mt-1">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>

                </div>
              </div>

              {/* ── Location ──────────────────────────────────────── */}
              <div>
                <h3
                  className="font-bold text-uda-green flex items-center gap-2 mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <FaMapMarkerAlt /> Location
                </h3>

                <div className="grid md:grid-cols-2 gap-4">

                  {/* County */}
                  <div>
                    <label
                      htmlFor="county"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      County *
                    </label>
                    <select
                      id="county"
                      {...register('county', { required: 'Required' })}
                      className="input-field"
                    >
                      <option value="">Select County</option>
                      {counties.map((c, i) => (
                        <option key={i} value={i + 1}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.county && (
                      <p className="text-uda-red text-xs mt-1">
                        {errors.county.message}
                      </p>
                    )}
                  </div>

                  {/* Constituency ← replaces sub_county */}
                  <div>
                    <label
                      htmlFor="constituency"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Constituency *
                    </label>
                    <input
                      id="constituency"
                      {...register('constituency', { required: 'Required' })}
                      className="input-field"
                      placeholder="e.g. Westlands"
                    />
                    {errors.constituency && (
                      <p className="text-uda-red text-xs mt-1">
                        {errors.constituency.message}
                      </p>
                    )}
                  </div>

                  {/* Ward */}
                  <div>
                    <label
                      htmlFor="ward"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Ward *
                    </label>
                    <input
                      id="ward"
                      {...register('ward', { required: 'Required' })}
                      className="input-field"
                      placeholder="e.g. Parklands"
                    />
                    {errors.ward && (
                      <p className="text-uda-red text-xs mt-1">
                        {errors.ward.message}
                      </p>
                    )}
                  </div>

                </div>
              </div>

              {/* ── Submit ────────────────────────────────────────── */}
              <button
                type="submit"
                disabled={loading}
                className="btn-yellow w-full !py-4 !text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-uda-black border-t-transparent rounded-full animate-spin" />
                    Registering...
                  </>
                ) : (
                  <>
                    <FaCheckCircle />
                    Join YR27 – Youths Rising
                  </>
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}