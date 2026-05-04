import { FaPhone, FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SITE } from '../../lib/constants'

export default function TopBar() {
  return (
    <div className="bg-uda-black text-white text-xs hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 hover:text-uda-yellow transition">
            <FaPhone className="text-uda-yellow" size={10} />
            {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-uda-yellow transition">
            <FaEnvelope className="text-uda-yellow" size={10} />
            {SITE.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500">Follow YR27:</span>
          <a href="#" className="hover:text-uda-yellow transition"><FaXTwitter size={14} /></a>
          <a href="#" className="hover:text-uda-yellow transition"><FaInstagram size={14} /></a>
          <a href="#" className="hover:text-uda-yellow transition"><FaTiktok size={14} /></a>
        </div>
      </div>
    </div>
  )
}