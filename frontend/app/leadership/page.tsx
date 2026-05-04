'use client'
import { motion } from 'framer-motion'
import { FaUserTie, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'
import SectionHeader from '../../components/ui/SectionHeader'
import KenyaStripe from '../../components/ui/KenyaStripe'

// const nationalLeaders = [
//   { name: 'Yussuf Mugane', title: 'National Convener', initials: 'YM', order: 1 },
//   { name: 'Alex Kiorop', title: 'Chairperson', initials: 'AK', order: 2 },
//   { name: 'Onesmus Nyaga', title: 'Deputy Chairperson', initials: 'ON', order: 3 },
// ]
const nationalLeaders = [
  { 
    name: 'YUSSUF MUGANE', 
    title: 'National Convener', 
    initials: 'YM', 
    image: '/leaders/yussuf1.jpeg',
    order: 1 
  },
  { 
    name: 'JACKIM OKOTH - TSUNAMI', 
    title: 'Chairperson', 
    initials: 'AK', 
    image: '/leaders/kim.jpeg',
    order: 2 
  },
  { 
    name: 'ONESMUS NYAGA', 
    title: 'Deputy Chairperson', 
    initials: 'ON', 
    image: '/leaders/ones.jpeg',
    order: 3 
  },
]
const levels = [
  {
    icon: FaUserTie,
    title: 'National Level',
    color: 'bg-uda-green',
    roles: ['National Convener', 'Deputy Convener', 'Chairperson', 'Deputy Chairperson', 'National Coordinators'],
  },
  {
    icon: FaMapMarkerAlt,
    title: 'County Level',
    color: 'bg-uda-yellow',
    roles: ['County Coordinators', 'Sub-County Leaders'],
  },
  {
    icon: FaUsers,
    title: 'Grassroots Level',
    color: 'bg-uda-red',
    roles: ['Campus Leaders', 'Ward Mobilizers', 'Community Organizers'],
  },
]

export default function LeadershipPage() {
  return (
    <>
      <section className="relative py-28 bg-gradient-to-br from-uda-black via-uda-green to-uda-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">
              Leadership <span className="text-uda-yellow">Structure</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              YR27 is organized, strategic, and nationwide.
            </p>
          </motion.div>
        </div>
      </section>
      <KenyaStripe />

      {/* National Leaders */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="National Level" badgeIcon="🏛️" title="National" highlight="Leadership" />
          <div className="grid md:grid-cols-3 gap-8">
            {nationalLeaders.map((leader, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-hover text-center p-10"
              >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
  {leader.image ? (
    <img
      src={leader.image}
      alt={leader.name}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-uda-green via-uda-black to-uda-green flex items-center justify-center text-white font-heading font-black text-4xl">
      {leader.initials}
    </div>
  )}
</div>
                <h3 className="font-heading font-bold text-2xl text-gray-900">{leader.name}</h3>
                <p className="text-uda-green font-bold mt-2">{leader.title}</p>
                <div className="mt-4 inline-flex items-center gap-1 bg-uda-yellow/10 text-uda-green text-xs font-bold px-4 py-1.5 rounded-full">
                  <FaUserTie size={10} /> National Level
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader badge="Full Structure" badgeIcon="📊" title="Leadership" highlight="Hierarchy" />
          <div className="space-y-8">
            {levels.map((level, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-hover p-8 flex items-start gap-6"
              >
                <div className={`${level.color} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  level.color === 'bg-uda-yellow' ? 'text-uda-black' : 'text-white'
                }`}>
                  <level.icon size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{level.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {level.roles.map((role, j) => (
                      <span key={j} className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full">
                        {role}
                      </span>
                    ))}
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