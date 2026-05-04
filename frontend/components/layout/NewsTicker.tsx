'use client'
import { TICKER_MESSAGES } from '../../lib/constants'

export default function NewsTicker() {
  const text = TICKER_MESSAGES.join('   •   ')

  return (
    <div className="bg-uda-green overflow-hidden">
      <div className="py-2 flex">
        <div className="animate-marquee whitespace-nowrap text-white text-sm font-semibold">
          {text}   •   {text}
        </div>
      </div>
    </div>
  )
}