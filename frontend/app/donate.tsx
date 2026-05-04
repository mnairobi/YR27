'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FaHeart, FaMobileAlt } from 'react-icons/fa'
import { makeDonation } from '../lib/api'
import KenyaStripe from '../components/ui/KenyaStripe'

const amounts = [500, 1000, 2000, 5000, 10000, 20000]

export default function DonatePage() {
  const [selected, setSelected] = useState<number | null>(null)
  const [custom, setCustom] = useState('')
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()

  const onSubmit = async (data: any) => {
    const amount = selected || Number(custom)
    if (!amount || amount < 10) { toast.error('Enter a valid amount.'); return }
    setLoading(true)
    try {
      await makeDonation({ ...data, amount })
      toast.success('Thank you! Payment instructions will be sent.')
      reset(); setSelected(null); setCustom('')
    } catch { toast.error('Failed. Try again.') }
    finally { setLoading(false) }
  }

  return (
    <>
      <section className="relative py-28 bg-gradient-to-br from-uda-red via-uda-black to-uda-green overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <FaHeart className="text-uda-yellow text-5xl mx-auto mb-5" />
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">
              Support <span className="text-uda-yellow">YR27</span>
            </h1>
            <p className="text-xl text-gray-200">Your contribution fuels the youth revolution.</p>
          </motion.div>
        </div>
      </section>
      <KenyaStripe />

      <section className="section-pad bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-5 gap-12">
          {/* M-Pesa */}
          <div className="lg:col-span-2">
            <div className="card-hover p-8 bg-uda-green text-white">
              <FaMobileAlt className="text-uda-yellow text-3xl mb-4" />
              <h3 className="font-heading font-bold text-xl mb-5">M-Pesa</h3>
              <ol className="space-y-2 text-green-100 text-sm">
                <li><strong className="text-uda-yellow">1.</strong> Go to M-Pesa</li>
                <li><strong className="text-uda-yellow">2.</strong> Lipa na M-Pesa → Pay Bill</li>
                <li><strong className="text-uda-yellow">3.</strong> Business No: <span className="text-white font-bold">XXXXXX</span></li>
                <li><strong className="text-uda-yellow">4.</strong> Account: <span className="text-white font-bold">YR27</span></li>
                <li><strong className="text-uda-yellow">5.</strong> Enter Amount & PIN</li>
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 card-hover p-8 md:p-12">
            <h2 className="text-2xl font-heading font-bold mb-8">Make a Donation</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">Select Amount (KES)</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {amounts.map(a => (
                    <button key={a} type="button"
                      onClick={() => { setSelected(a); setCustom(''); setValue('amount', a) }}
                      className={`py-3 rounded-xl font-heading font-bold text-lg transition ${
                        selected === a ? 'bg-uda-yellow text-uda-black scale-105 shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}>{a.toLocaleString()}</button>
                  ))}
                </div>
                <input type="number" value={custom}
                  onChange={e => { setCustom(e.target.value); setSelected(null); setValue('amount', Number(e.target.value)) }}
                  className="input-field" placeholder="Or enter custom amount" min="10" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
                  <input {...register('donor_name', { required: true })} className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                  <input {...register('phone', { required: true })} className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message (Optional)</label>
                <textarea {...register('message')} rows={2} className="input-field resize-none" placeholder="A word of encouragement..." />
              </div>
              <button type="submit" disabled={loading} className="btn-red w-full !py-4 !text-base disabled:opacity-50">
                <FaHeart /> {loading ? 'Processing...' : `Donate KES ${(selected || Number(custom) || 0).toLocaleString()}`}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}