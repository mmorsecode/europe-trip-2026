import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Ticket, Award } from 'lucide-react'
import type { Traveler } from '../data/travelers'
import { TRIP_EVENTS } from '../data/tripData'

interface TravelerCardProps {
  traveler: Traveler
}

const TYPE_BADGE: Record<string, string> = {
  adult: 'bg-slate-100 text-slate-600',
  child: 'bg-amber-100 text-amber-700',
  infant: 'bg-teal-100 text-teal-700',
}

export function TravelerCard({ traveler }: TravelerCardProps) {
  const [expanded, setExpanded] = useState(false)

  const getFlightLabel = (flightId: string) => {
    const evt = TRIP_EVENTS.find(e => e.id === flightId)
    return evt ? evt.title.replace('Flight — ', '') : flightId
  }

  return (
    <motion.div
      layout
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-4"
      >
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full ${traveler.avatarColor} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}>
            {traveler.initials}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-slate-800 text-sm">{traveler.name}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${TYPE_BADGE[traveler.type]}`}>
                {traveler.type}
              </span>
              <span className="text-[10px] text-slate-400">{traveler.tickets.length} flight{traveler.tickets.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-slate-400 flex-shrink-0"
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="traveler-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              {/* Flight Tickets */}
              {traveler.tickets.length > 0 && (
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                    <Ticket size={11} />
                    Flight Tickets
                  </div>
                  <div className="space-y-2">
                    {traveler.tickets.map(ticket => (
                      <div key={ticket.flightId} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-xs font-bold text-slate-700">{ticket.flightNumber}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">{getFlightLabel(ticket.flightId)}</div>
                          </div>
                          <div className="text-right">
                            {ticket.seat && (
                              <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                Seat {ticket.seat}
                              </div>
                            )}
                            <div className="text-[10px] text-slate-400 mt-0.5">{ticket.class}</div>
                          </div>
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-[10px] text-slate-400">Ticket #</div>
                              <div className="text-[11px] font-mono text-slate-600">{ticket.ticketNumber}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-[10px] text-slate-400">Conf</div>
                              <div className="text-[11px] font-bold font-mono text-slate-700">{ticket.confirmationCode}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Loyalty Numbers */}
              {Object.keys(traveler.loyaltyNumbers).length > 0 && (
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                    <Award size={11} />
                    Loyalty Programs
                  </div>
                  <div className="space-y-1.5">
                    {Object.entries(traveler.loyaltyNumbers).map(([program, number]) => (
                      <div key={program} className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">{program}</span>
                        <span className="font-mono font-bold text-slate-800">{number}</span>
                      </div>
                    ))}
                    {traveler.knownTravelerNumber && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">Known Traveler (TSA Pre✓)</span>
                        <span className="font-mono font-bold text-slate-800">{traveler.knownTravelerNumber}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
