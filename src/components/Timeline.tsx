import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DATE_CITY_MAP, CITY_COLOR_CLASSES, getDatesWithEvents } from '../data/tripData'
import type { CityColor } from '../data/tripData'

interface TimelineProps {
  selectedDate: string | null
  onDateSelect: (date: string) => void
  view: 'day' | 'week'
  onViewChange: (view: 'day' | 'week') => void
}

const TRIP_DATES = [
  '2026-04-08', '2026-04-09', '2026-04-10', '2026-04-11', '2026-04-12',
  '2026-04-13', '2026-04-14', '2026-04-15', '2026-04-16', '2026-04-17',
  '2026-04-18', '2026-04-19', '2026-04-20', '2026-04-21', '2026-04-22',
]

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const CITY_SEGMENTS: { label: string; color: CityColor; dates: string[] }[] = [
  {
    label: '🇵🇹 Lisbon',
    color: 'purple',
    dates: ['2026-04-09', '2026-04-10', '2026-04-11', '2026-04-12', '2026-04-13'],
  },
  {
    label: '🇫🇷 Cannes',
    color: 'amber',
    dates: ['2026-04-15', '2026-04-16', '2026-04-17'],
  },
  {
    label: '🇫🇷 Paris',
    color: 'rose',
    dates: ['2026-04-19', '2026-04-20', '2026-04-21'],
  },
]

function getCityLabelForSegment(color: CityColor): string {
  const seg = CITY_SEGMENTS.find(s => s.color === color)
  return seg ? seg.label : ''
}

const WEEK_1_DATES = TRIP_DATES.slice(0, 7)
const WEEK_2_DATES = TRIP_DATES.slice(7)

export function Timeline({ selectedDate, onDateSelect, view, onViewChange }: TimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const datesWithEvents = getDatesWithEvents()

  // Auto-scroll selected date into view
  useEffect(() => {
    if (view !== 'day' || !selectedDate || !scrollRef.current) return
    const idx = TRIP_DATES.indexOf(selectedDate)
    if (idx < 0) return
    const cellWidth = 68
    const containerWidth = scrollRef.current.offsetWidth
    const targetScroll = idx * cellWidth - containerWidth / 2 + cellWidth / 2
    scrollRef.current.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' })
  }, [selectedDate, view])

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + 'T12:00:00')
    return { day: d.getDate(), dow: DAY_NAMES[d.getDay()] }
  }

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
      {/* View toggle */}
      <div className="max-w-2xl mx-auto px-4 pt-3 flex items-center justify-between">
        <div className="flex bg-slate-100 rounded-lg p-0.5 gap-0.5">
          {(['day', 'week'] as const).map(v => (
            <button
              key={v}
              onClick={() => onViewChange(v)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all capitalize ${
                view === v
                  ? 'bg-white text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {v} View
            </button>
          ))}
        </div>
        <div className="text-xs text-slate-400 font-medium">Apr 8–22 · 2026</div>
      </div>

      {view === 'day' ? (
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide momentum-scroll pb-2"
        >
          <div className="flex px-2 pt-2 min-w-max">
            {TRIP_DATES.map(dateStr => {
              const { day, dow } = formatDate(dateStr)
              const cityInfo = DATE_CITY_MAP[dateStr]
              const isSelected = selectedDate === dateStr
              const hasEvents = datesWithEvents.has(dateStr)
              const colors = CITY_COLOR_CLASSES[cityInfo.cityColor]

              return (
                <button
                  key={dateStr}
                  onClick={() => onDateSelect(dateStr)}
                  className="flex flex-col items-center w-16 py-1 px-1 rounded-xl mx-0.5 transition-all relative"
                  style={isSelected ? {} : {}}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="timeline-selected"
                      className={`absolute inset-0 rounded-xl ${colors.lightBg}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-center gap-0.5">
                    <span className={`text-[10px] font-medium ${isSelected ? colors.text : 'text-slate-400'}`}>
                      {dow}
                    </span>
                    <span className={`text-lg font-bold leading-none ${isSelected ? colors.text : 'text-slate-700'}`}>
                      {day}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full mt-0.5 ${hasEvents ? colors.dot : 'bg-transparent'}`} />
                    <span className={`text-[9px] font-medium truncate max-w-full ${isSelected ? colors.text : 'text-slate-400'}`}>
                      {cityInfo.label}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* City color bar */}
          <div className="flex mx-3 mb-1 mt-1 rounded-full overflow-hidden h-1.5">
            {TRIP_DATES.map(dateStr => {
              const cityInfo = DATE_CITY_MAP[dateStr]
              const colors = CITY_COLOR_CLASSES[cityInfo.cityColor]
              return <div key={dateStr} className={`flex-1 ${colors.bg} opacity-60`} />
            })}
          </div>
        </div>
      ) : (
        <div className="px-4 pb-3 pt-2 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Week 1 · Apr 8–14', dates: WEEK_1_DATES, subtitle: 'Boston → Lisbon' },
              { label: 'Week 2 · Apr 15–22', dates: WEEK_2_DATES, subtitle: 'Cannes → Paris → Boston' },
            ].map(week => (
              <div key={week.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="text-xs font-semibold text-slate-700 mb-0.5">{week.label}</div>
                <div className="text-[10px] text-slate-500 mb-2">{week.subtitle}</div>
                <div className="flex gap-1 flex-wrap">
                  {week.dates.map(dateStr => {
                    const { day } = formatDate(dateStr)
                    const cityInfo = DATE_CITY_MAP[dateStr]
                    const colors = CITY_COLOR_CLASSES[cityInfo.cityColor]
                    const hasEvents = datesWithEvents.has(dateStr)
                    const isSelected = selectedDate === dateStr
                    return (
                      <button
                        key={dateStr}
                        onClick={() => onDateSelect(dateStr)}
                        className={`w-7 h-7 rounded-full text-xs font-bold transition-all relative flex items-center justify-center ${
                          isSelected
                            ? `${colors.bg} text-white shadow-sm`
                            : 'text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {day}
                        {hasEvents && !isSelected && (
                          <div className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${colors.dot}`} />
                        )}
                      </button>
                    )
                  })}
                </div>
                <div className="flex gap-0.5 mt-2 rounded overflow-hidden h-1">
                  {week.dates.map(dateStr => {
                    const cityInfo = DATE_CITY_MAP[dateStr]
                    return <div key={dateStr} className={`flex-1 ${CITY_COLOR_CLASSES[cityInfo.cityColor].bg} opacity-50`} />
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* City legend */}
          <div className="flex gap-3 mt-2 flex-wrap">
            {CITY_SEGMENTS.map(seg => (
              <div key={seg.color} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${CITY_COLOR_CLASSES[seg.color].bg}`} />
                <span className="text-[10px] text-slate-500">{getCityLabelForSegment(seg.color)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
