import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle2, Circle, Hash } from 'lucide-react'
import { CITY_COLOR_CLASSES } from '../data/tripData'
import type { TripEvent } from '../data/tripData'

interface EventCardProps {
  event: TripEvent
  isExpanded: boolean
  isCompleted: boolean
  onToggleExpand: () => void
  onToggleComplete: () => void
  scrollRef: (el: HTMLDivElement | null) => void
}

const TYPE_LABEL: Record<TripEvent['type'], string> = {
  flight: 'Flight',
  hotel: 'Hotel',
  transport: 'Transport',
  limo: 'Transfer',
}

export function EventCard({ event, isExpanded, isCompleted, onToggleExpand, onToggleComplete, scrollRef }: EventCardProps) {
  const colors = CITY_COLOR_CLASSES[event.cityColor]
  const Icon = event.icon

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + 'T12:00:00')
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' })
  }

  const dateLabel = event.endDate
    ? `${formatDate(event.date)} – ${formatDate(event.endDate)}`
    : formatDate(event.date)

  return (
    <motion.div
      layout
      ref={scrollRef}
      className={`bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-opacity duration-300 ${isCompleted ? 'opacity-60' : 'opacity-100'}`}
    >
      {/* Left accent bar */}
      <div className="flex">
        <div className={`w-1 flex-shrink-0 ${colors.bg}`} />

        <div className="flex-1 min-w-0">
          {/* Card header — always visible */}
          <button
            onClick={onToggleExpand}
            className="w-full text-left px-4 py-3.5"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className={`flex-shrink-0 w-9 h-9 rounded-xl ${colors.lightBg} ${colors.text} flex items-center justify-center mt-0.5`}>
                <Icon size={18} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`text-[10px] font-semibold uppercase tracking-wide ${colors.text} bg-opacity-10 ${colors.lightBg} px-1.5 py-0.5 rounded`}>
                    {TYPE_LABEL[event.type]}
                  </span>
                  {event.confirmationNumber && (
                    <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                      <Hash size={9} />
                      {event.confirmationNumber}
                    </span>
                  )}
                </div>
                <h3 className={`text-sm font-semibold text-slate-800 leading-tight ${isCompleted ? 'line-through text-slate-400' : ''}`}>
                  {event.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 truncate">{event.subtitle}</p>
                <p className="text-xs text-slate-400 mt-0.5">{dateLabel} · {event.location}</p>
              </div>

              {/* Chevron */}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 text-slate-400 mt-1"
              >
                <ChevronDown size={16} />
              </motion.div>
            </div>
          </button>

          {/* Expandable details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className={`mx-4 mb-3 rounded-xl p-3 ${colors.lightBg}`}>
                  <ul className="space-y-1.5">
                    {event.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${colors.bg} mt-1.5`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Checkbox footer */}
          <div className="px-4 pb-3 flex items-center justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleComplete()
              }}
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                isCompleted ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 size={15} className="text-emerald-500" />
              ) : (
                <Circle size={15} />
              )}
              {isCompleted ? 'Completed' : 'Mark complete'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
