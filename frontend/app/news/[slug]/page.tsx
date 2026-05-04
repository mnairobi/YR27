'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaCalendarAlt, FaUser, FaEye } from 'react-icons/fa'
import KenyaStripe from '../../../components/ui/KenyaStripe'

export default function NewsDetailPage() {
  const { slug } = useParams()

  return (
    <>
      <section className="relative py-24 bg-gradient-to-br from-uda-green via-uda-black to-uda-green overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Link href="/news" className="inline-flex items-center gap-2 text-uda-yellow mb-6 hover:underline font-semibold">
            <FaArrowLeft /> Back to News
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-uda-yellow text-uda-black text-sm font-bold px-4 py-1 rounded-full">Movement News</span>
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white mt-5 mb-5">
              YR27 Officially Launched Nationwide
            </h1>
            <div className="flex flex-wrap gap-5 text-gray-300 text-sm">
              <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-uda-yellow" /> April 20, 2025</span>
              <span className="flex items-center gap-1.5"><FaUser className="text-uda-yellow" /> YR27 Media Team</span>
              <span className="flex items-center gap-1.5"><FaEye className="text-uda-yellow" /> 2,400 views</span>
            </div>
          </motion.div>
        </div>
      </section>
      <KenyaStripe />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 leading-relaxed">
              The Youths for Ruto 2027 movement was officially launched with massive youth turnout across all 47 counties,
              marking the beginning of a new era in Kenyan youth political engagement.
            </p>
            <p>
              National Convener <strong>Yussuf Mugane</strong> led the launch alongside Chairperson <strong>Alex Kiorop</strong> and
              Deputy Chairperson <strong>Onesmus Nyaga</strong>, calling on young Kenyans to take their rightful place in
              shaping the nation&apos;s future.
            </p>
            <blockquote className="border-l-4 border-uda-yellow bg-uda-yellow-light p-6 rounded-r-xl italic">
              &ldquo;We are the generation that refuses to sit back. We organize. We mobilize. We lead. 2027 is ours to shape.&rdquo;
              <footer className="mt-2 font-bold not-italic text-uda-green">— Yussuf Mugane, National Convener</footer>
            </blockquote>
            <p>
              The movement aims to build a strong, organized youth political force for 2027 and beyond,
              with active chapters in universities, colleges, and communities across Kenya.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}