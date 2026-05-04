'use client'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import SectionHeader from '../../components/ui/SectionHeader'
import KenyaStripe from '../../components/ui/KenyaStripe'

const events = [
  { id: 1, title: 'National Youth Convention 2025', venue: 'KICC, Nairobi', date: '2025-06-15', time: '09:00 AM', status: 'upcoming' },
  { id: 2, title: 'Campus Leaders Training', venue: 'UoN Main Campus', date: '2025-05-20', time: '10:00 AM', status: 'upcoming' },
  { id: 3, title: 'Ward Mobilizers Bootcamp - Rift Valley', venue: 'Eldoret', date: '2025-05-25', time: '08:00 AM', status: 'upcoming' },
  { id: 4, title: 'Digital Skills Workshop', venue: 'iHub, Nairobi', date: '2025-06-01', time: '09:00 AM', status: 'upcoming' },
  { id: 5, title: 'County Coordinators Meeting', venue: 'Virtual', date: '2025-05-10', time: '02:00 PM', status: 'upcoming' },
  { id: 6, title: 'YR27 Sports Gala', venue: 'Nyayo Stadium', date: '2025-07-01', time: '08:00 AM', status: 'upcoming' },
]

export default function EventsPage() {
  return (
    <>
      <section className="relative py-28 bg-gradient-to-br from-uda-yellow/80 via-uda-green to-uda-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">
              Our <span className="text-uda-yellow">Events</span>
            </h1>
            <p className="text-xl text-gray-200">Join us at events across Kenya</p>
          </motion.div>
        </div>
      </section>
      <KenyaStripe />

      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((e, i) => (
              <motion.div key={e.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-hover group"
              >
                <div className="h-44 bg-gradient-to-br from-uda-green to-uda-black flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-5xl font-heading font-black text-uda-yellow">{new Date(e.date).getDate()}</div>
                    <div className="text-white font-bold uppercase text-sm">{new Date(e.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
                  </div>
                  <span className="absolute top-4 right-4 bg-uda-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {e.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-3 group-hover:text-uda-green transition">
                    {e.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p className="flex items-center gap-2"><FaCalendarAlt className="text-uda-yellow" /> {e.date}</p>
                    <p className="flex items-center gap-2"><FaClock className="text-uda-green" /> {e.time}</p>
                    <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-uda-red" /> {e.venue}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}