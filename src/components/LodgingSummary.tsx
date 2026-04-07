import { Hotel, Calendar, Star } from 'lucide-react'

interface LodgingProperty {
  name: string
  city: string
  flag: string
  dates: string
  nights: number
  room: string
  address: string
  benefits: string[]
  bestCard: string
  cardNote: string
  colorClass: string
  bgClass: string
  textClass: string
}

const LODGING: LodgingProperty[] = [
  {
    name: 'Wine & Books Lisboa',
    city: 'Lisbon, Portugal',
    flag: '🇵🇹',
    dates: 'Apr 8–14',
    nights: 6,
    room: 'Suite Premium — Church View with Balcony',
    address: 'Travessa da Memória, 56-62, 1300-403 Lisbon',
    benefits: [
      'Breakfast buffet daily (7:30–10:30 AM)',
      'Restaurant "Tasca da Memória" (12:30–22:00)',
      'Wellness Area 24h: sauna, Turkish bath, contrast shower, gym',
      'Wi-Fi throughout · Pressreader (newspapers & magazines)',
      '24-hour reception with concierge services',
      'City tax per person (13+) per night, paid at check-in',
      'Res 18211 · Contact: +351 211 566 250',
    ],
    bestCard: 'Chase Sapphire Reserve',
    cardNote: '3x points on hotels + primary trip insurance',
    colorClass: 'border-violet-500',
    bgClass: 'bg-violet-50',
    textClass: 'text-violet-700',
  },
  {
    name: 'Canopy by Hilton Cannes',
    city: 'Cannes, France',
    flag: '🇫🇷',
    dates: 'Apr 14–18',
    nights: 4,
    room: 'King One Bedroom Apartment with View',
    address: '2 Boulevard Jean Hibert, Cannes 06400',
    benefits: [
      'Complimentary Continental Breakfast (Hilton Honors MyWay)',
      '1,000 Bonus Hilton Honors Points on arrival',
      'Spa access: 90-min limit (reserve in advance)',
      'Children 4–16 spa access with parent: 9–10 AM & 8–9 PM',
      'City tax per person/night · Valet parking available',
      'Smoke-free hotel · Conf: 3366057386',
      'Phone: +33 4 92 99 73 00',
    ],
    bestCard: 'Amex Hilton Honors Aspire',
    cardNote: '14x points + Diamond status + $100 on-property credit',
    colorClass: 'border-amber-500',
    bgClass: 'bg-amber-50',
    textClass: 'text-amber-700',
  },
  {
    name: 'Airbnb Paris',
    city: 'Paris, France',
    flag: '🇫🇷',
    dates: 'Apr 18–22',
    nights: 4,
    room: 'Entire Home in Paris',
    address: '20 Avenue de Suffren, Paris',
    benefits: [
      'Near the Eiffel Tower',
      'Entire home — full privacy',
      'Host: Checkmyguest',
      'Check-in: Apr 18, 4:00 PM',
      'Check-out: Apr 22, 10:00 AM',
      'Review house manual in the Airbnb app for access & rules',
    ],
    bestCard: 'Chase Sapphire Reserve',
    cardNote: '3x on lodging + trip cancellation/interruption insurance',
    colorClass: 'border-rose-400',
    bgClass: 'bg-rose-50',
    textClass: 'text-rose-600',
  },
]

export function LodgingSummary() {
  return (
    <section className="px-4 py-6 max-w-2xl mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800">Accommodations</h2>
        <p className="text-xs text-slate-500 mt-0.5">All 3 properties at a glance</p>
      </div>

      <div className="space-y-4">
        {LODGING.map(prop => (
          <div key={prop.name} className={`bg-white rounded-2xl border-l-4 ${prop.colorClass} shadow-sm overflow-hidden`}>
            <div className={`px-4 py-3 ${prop.bgClass}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{prop.flag}</span>
                    <h3 className="font-bold text-slate-800 text-sm">{prop.name}</h3>
                  </div>
                  <p className={`text-xs font-medium mt-0.5 ${prop.textClass}`}>{prop.city}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="flex items-center gap-1 text-xs text-slate-600">
                    <Calendar size={12} />
                    <span>{prop.dates}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{prop.nights} nights</div>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-slate-600">
                <Hotel size={12} />
                <span>{prop.room}</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">{prop.address}</div>
            </div>

            <div className="px-4 py-3">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-2">Included Benefits</div>
              <ul className="space-y-1">
                {prop.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                    <Star size={9} className={`flex-shrink-0 mt-1 ${prop.textClass}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className={`mt-3 flex items-start gap-2 p-2 rounded-lg ${prop.bgClass}`}>
                <span className="text-[10px]">💳</span>
                <div>
                  <span className={`text-xs font-semibold ${prop.textClass}`}>{prop.bestCard}</span>
                  <span className="text-xs text-slate-500"> — {prop.cardNote}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
