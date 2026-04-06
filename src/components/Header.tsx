import { motion } from 'framer-motion'
import { Plane, MapPin } from 'lucide-react'
import { TRAVELERS } from '../data/travelers'

export function Header() {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white px-4 pt-6 pb-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Plane size={20} className="text-blue-300" />
          <span className="text-blue-300 text-sm font-medium tracking-wide uppercase">Family Trip Tracker</span>
        </div>
        <h1 className="text-2xl font-bold leading-tight mb-2">
          Morse Family<br />
          <span className="text-blue-200">Europe Trip 2026</span>
        </h1>
        <div className="flex items-center gap-1.5 text-slate-300 text-sm mb-1">
          <MapPin size={13} />
          <span>Boston → Lisbon → Nice/Cannes → Paris → Boston</span>
        </div>
        <div className="text-slate-400 text-sm mb-6">April 8–22, 2026 · 15 days</div>

        {/* Traveler Avatars */}
        <div className="flex gap-3 flex-wrap">
          {TRAVELERS.map((traveler, i) => (
            <motion.div
              key={traveler.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="flex flex-col items-center gap-1"
            >
              <div className={`w-11 h-11 rounded-full ${traveler.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white/20`}>
                {traveler.initials}
              </div>
              <div className="text-center">
                <div className="text-white text-xs font-medium leading-tight">
                  {traveler.name.split(' ')[0]}
                </div>
                <div className="text-slate-400 text-[10px] capitalize">{traveler.type}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  )
}
