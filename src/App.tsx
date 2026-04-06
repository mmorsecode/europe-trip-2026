import { useState, useRef } from 'react'
import { Header } from './components/Header'
import { Timeline } from './components/Timeline'
import { EventCard } from './components/EventCard'
import { ConfirmationCodes } from './components/ConfirmationCodes'
import { LodgingSummary } from './components/LodgingSummary'
import { TravelerCard } from './components/TravelerCard'
import { CreditCardSection } from './components/CreditCardSection'
import { OfflineBanner } from './components/OfflineBanner'
import { TRIP_EVENTS } from './data/tripData'
import { TRAVELERS } from './data/travelers'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [completedEvents, setCompletedEvents] = useLocalStorage<Record<string, boolean>>(
    'trip-completed-events',
    {}
  )
  const [expandedEvents, setExpandedEvents] = useState<Record<string, boolean>>({})
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [timelineView, setTimelineView] = useState<'day' | 'week'>('day')

  const eventRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    const firstEvent = TRIP_EVENTS.find(e => e.date === date)
    if (firstEvent && eventRefs.current[firstEvent.id]) {
      setTimeout(() => {
        eventRefs.current[firstEvent.id]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 100)
    }
  }

  const toggleExpand = (id: string) => {
    setExpandedEvents(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleComplete = (id: string) => {
    const nowComplete = !completedEvents[id]
    setCompletedEvents({ ...completedEvents, [id]: nowComplete })
    if (nowComplete) {
      setExpandedEvents(prev => ({ ...prev, [id]: false }))
    }
  }

  const sortedEvents = [...TRIP_EVENTS].sort((a, b) => {
    const aComplete = completedEvents[a.id] ?? false
    const bComplete = completedEvents[b.id] ?? false
    if (aComplete === bComplete) return 0
    return aComplete ? 1 : -1
  })

  const incompleteCount = TRIP_EVENTS.filter(e => !completedEvents[e.id]).length

  return (
    <div className="min-h-screen bg-slate-50">
      <OfflineBanner />
      <Header />
      <Timeline
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        view={timelineView}
        onViewChange={setTimelineView}
      />

      <main className="max-w-2xl mx-auto">
        <section className="px-4 pt-5 pb-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800">Itinerary</h2>
            <div className="text-xs text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
              {incompleteCount} of {TRIP_EVENTS.length} remaining
            </div>
          </div>

          <div className="space-y-3">
            {sortedEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isExpanded={expandedEvents[event.id] ?? false}
                isCompleted={completedEvents[event.id] ?? false}
                onToggleExpand={() => toggleExpand(event.id)}
                onToggleComplete={() => toggleComplete(event.id)}
                scrollRef={(el) => { eventRefs.current[event.id] = el }}
              />
            ))}
          </div>
        </section>

        <ConfirmationCodes />
        <LodgingSummary />

        <section className="px-4 py-6">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-800">Travelers</h2>
            <p className="text-xs text-slate-500 mt-0.5">Tickets, seats & loyalty numbers</p>
          </div>
          <div className="space-y-3">
            {TRAVELERS.map(traveler => (
              <TravelerCard key={traveler.id} traveler={traveler} />
            ))}
          </div>
        </section>

        <CreditCardSection />

        <footer className="px-4 py-8 text-center">
          <div className="text-xs text-slate-400">Morse Family Europe Trip 2026 · Apr 8–22</div>
          <div className="text-[10px] text-slate-300 mt-1">Works offline · Powered by love ✈️</div>
        </footer>
      </main>
    </div>
  )
}

export default App
