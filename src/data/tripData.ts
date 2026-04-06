import type { LucideIcon } from 'lucide-react'
import { Car, Plane, Hotel, Train, Users } from 'lucide-react'

export type CityColor = 'blue' | 'purple' | 'amber' | 'rose' | 'teal'
export type EventType = 'flight' | 'hotel' | 'transport' | 'limo'

export interface TripEvent {
  id: string
  type: EventType
  date: string
  endDate?: string
  title: string
  subtitle: string
  location: string
  details: string[]
  cityColor: CityColor
  icon: LucideIcon
  confirmationNumber?: string
}

export const CITY_COLOR_CLASSES: Record<CityColor, { border: string; bg: string; text: string; dot: string; lightBg: string }> = {
  blue:   { border: 'border-blue-500',   bg: 'bg-blue-500',   text: 'text-blue-600',   dot: 'bg-blue-400',   lightBg: 'bg-blue-50' },
  purple: { border: 'border-violet-500', bg: 'bg-violet-500', text: 'text-violet-600', dot: 'bg-violet-400', lightBg: 'bg-violet-50' },
  amber:  { border: 'border-amber-500',  bg: 'bg-amber-500',  text: 'text-amber-600',  dot: 'bg-amber-400',  lightBg: 'bg-amber-50' },
  rose:   { border: 'border-rose-400',   bg: 'bg-rose-400',   text: 'text-rose-500',   dot: 'bg-rose-300',   lightBg: 'bg-rose-50' },
  teal:   { border: 'border-teal-500',   bg: 'bg-teal-500',   text: 'text-teal-600',   dot: 'bg-teal-400',   lightBg: 'bg-teal-50' },
}

// City label per date (Apr 8–22)
export const DATE_CITY_MAP: Record<string, { label: string; cityColor: CityColor }> = {
  '2026-04-08': { label: 'Boston', cityColor: 'blue' },
  '2026-04-09': { label: 'Lisbon', cityColor: 'purple' },
  '2026-04-10': { label: 'Lisbon', cityColor: 'purple' },
  '2026-04-11': { label: 'Lisbon', cityColor: 'purple' },
  '2026-04-12': { label: 'Lisbon', cityColor: 'purple' },
  '2026-04-13': { label: 'Lisbon', cityColor: 'purple' },
  '2026-04-14': { label: 'Travel', cityColor: 'blue' },
  '2026-04-15': { label: 'Cannes', cityColor: 'amber' },
  '2026-04-16': { label: 'Cannes', cityColor: 'amber' },
  '2026-04-17': { label: 'Cannes', cityColor: 'amber' },
  '2026-04-18': { label: 'Travel', cityColor: 'rose' },
  '2026-04-19': { label: 'Paris', cityColor: 'rose' },
  '2026-04-20': { label: 'Paris', cityColor: 'rose' },
  '2026-04-21': { label: 'Paris', cityColor: 'rose' },
  '2026-04-22': { label: 'Boston', cityColor: 'blue' },
}

export const TRIP_EVENTS: TripEvent[] = [
  {
    id: 'evt-01',
    type: 'limo',
    date: '2026-04-08',
    title: "Knight's Limo — Home to BOS",
    subtitle: 'VIP Van · 5 Passengers',
    location: 'Framingham, MA → Logan Airport',
    cityColor: 'blue',
    icon: Car,
    confirmationNumber: 'K2067147.BE',
    details: [
      'Pickup: 7:05 PM from 63 Howe St, Framingham, MA 01702',
      'Dropoff: Logan (BOS) International Airport',
      'Service: VIP Van, 5 passengers',
      'Confirmation: K2067147.BE',
      'Cost: $249.60 (prepaid, card *6610)',
      'For Delta DL124 departing 11:00 PM',
    ],
  },
  {
    id: 'evt-02',
    type: 'flight',
    date: '2026-04-08',
    endDate: '2026-04-09',
    title: 'Flight — Boston to Lisbon',
    subtitle: 'Delta DL 124 · Delta One Classic · 6h 20m Nonstop',
    location: 'Boston (BOS) → Lisbon (LIS)',
    cityColor: 'blue',
    icon: Plane,
    confirmationNumber: 'HMQZLI',
    details: [
      'Delta DL 124 · Delta One Classic · Nonstop',
      'Departure: Wed Apr 8, 11:25 PM (BOS)',
      'Arrival: Thu Apr 9, 10:45 AM (LIS)',
      'Duration: 6h 20m',
      'Michael Morse — Ticket 0067347606946, Conf HMQZLI',
      'Grace Morse — Ticket 0067347606945, Conf HMQZLI',
      'Mila Coco Morse — Ticket 0062379610056, Seat 06J, Conf GYDUUP',
      'Capital One Travel ref: H-SNPIBC',
      'Cost: $5,786 (376,127 Venture X miles + $1,724.73 + $300 travel credit)',
      'Note: Katherine & Bradley traveling separately (JetBlue employee benefit)',
    ],
  },
  {
    id: 'evt-03',
    type: 'hotel',
    date: '2026-04-08',
    endDate: '2026-04-14',
    title: 'Hotel — Wine & Books Lisboa',
    subtitle: '6 Nights · Suite Premium, Church View with Balcony',
    location: 'Lisbon, Portugal',
    cityColor: 'purple',
    icon: Hotel,
    confirmationNumber: '18211',
    details: [
      'Travessa da Memória, 56-62, 1300-403 Lisbon',
      'Room: Suite Premium — Church View with Balcony',
      'Check-in: Apr 8 (early arrival ~6 AM on Apr 9) · Check-out: Apr 14',
      'Rate: €296/night (Non-Refundable) · Total: €1,776.00',
      'Reservation: Folio 69949 / Res 18211 · Guest: Katherine Morse',
      'Breakfast buffet daily 7:30–10:30 AM',
      'Restaurant "Tasca da Memória" (12:30–22:00)',
      'Wellness Area 24h: sauna, Turkish bath, contrast shower, gym',
      'Wi-Fi · Pressreader · 24hr concierge',
      'City tax: €4/person (13+) per night, paid at check-in',
      'Contact: +351 211 566 250',
    ],
  },
  {
    id: 'evt-04',
    type: 'flight',
    date: '2026-04-14',
    title: 'Flight — Lisbon to Nice',
    subtitle: 'TAP Air Portugal TP 482 · Class Plus · 2h 30m',
    location: 'Lisbon (LIS) → Nice (NCE)',
    cityColor: 'blue',
    icon: Plane,
    confirmationNumber: 'YXJDDO',
    details: [
      'TAP Air Portugal TP 482 (operated by Portugália) · Class Plus (L)',
      'Departure: Mon Apr 14, 1:50 PM (LIS Terminal 1)',
      'Arrival: Mon Apr 14, 5:20 PM (NCE Terminal 1)',
      'Duration: 2h 30m · Booking Ref: YXJDDO',
      'Katherine Morse — Ticket 047 2523746077, Seat 5A',
      'Michael Morse — Ticket 047 2523746078, Seat 5B',
      'Grace Morse — Ticket 047 2523746074, Seat 5C',
      'Mila Morse — Ticket 047 2523746075, Seat 5D',
      'Bradley Morse — Ticket 047 2523746076, Infant (no seat)',
      'Baggage: 1 checked bag (23 kg) per passenger',
    ],
  },
  {
    id: 'evt-05',
    type: 'transport',
    date: '2026-04-14',
    title: 'Daytrip Car — Nice Airport to Cannes',
    subtitle: 'Van · 5 Passengers · ~37 min',
    location: 'Nice Côte d\'Azur Airport → Cannes',
    cityColor: 'amber',
    icon: Car,
    confirmationNumber: 'RD3QC291',
    details: [
      'Pickup: 6:00 PM at Nice Côte d\'Azur Airport',
      'Dropoff: Canopy by Hilton Cannes (est. 6:37 PM)',
      'Vehicle: 1x Van (5 passengers + driver)',
      'Booking Ref: RD3QC291 · Cost: €128 (prepaid)',
      'Lead Passenger: Michael Morse',
      'Luggage: 5 check-in + 5 carry-on bags included',
      'Contact: daytrip@daytrip.com · +1 628 288 2020',
    ],
  },
  {
    id: 'evt-06',
    type: 'hotel',
    date: '2026-04-14',
    endDate: '2026-04-18',
    title: 'Hotel — Canopy by Hilton Cannes',
    subtitle: '4 Nights · King One Bedroom Apartment with View',
    location: 'Cannes, France',
    cityColor: 'amber',
    icon: Hotel,
    confirmationNumber: '3366057386',
    details: [
      '2 Boulevard Jean Hibert, Cannes 06400',
      'Room: King One Bedroom Apartment with View — Premium Room Reward',
      'Check-in: Apr 14, 3:00 PM · Check-out: Apr 18, 11:00 AM',
      'Points: 245,000 Hilton Honors Points · Taxes/Fees: €1,759.88',
      'Confirmation: 3366057386 · Hilton Honors: #693800044',
      'Complimentary Continental Breakfast (MyWay benefit)',
      'Spa Access: €20/person, 90 min limit, reservation required',
      'Children 4–16 spa with parental guidance: 9–10 AM and 8–9 PM',
      'City tax: €2.95/person/night · Valet parking: €40/night',
      'Cancellation: Free before 11:59 PM on Apr 13',
      'Phone: +33 4 92 99 73 00',
    ],
  },
  {
    id: 'evt-07',
    type: 'transport',
    date: '2026-04-18',
    title: 'Train — Cannes to Paris',
    subtitle: 'TGV INOUI 6170 · Standard Seconde · ~5h 9m',
    location: 'Cannes → Paris Gare de Lyon',
    cityColor: 'rose',
    icon: Train,
    confirmationNumber: 'U4RGZ9',
    details: [
      'TGV INOUI 6170 · Standard Seconde',
      'Departure: Sat Apr 18, 11:29 AM (Cannes)',
      'Arrival: ~4:38 PM (Paris Gare de Lyon)',
      'Reference: U4RGZ9 · Total: €325.00 (5 passengers)',
      'Michael Morse (30–59 years old)',
      'Katherine Morse (30–59 years old)',
      'Grace Morse (60+ years old)',
      'Mila Morse (4–29 years old)',
      'Bradley Morse (0–3, child traveling free without seat)',
      'E-tickets: QR codes in SNCF Connect app',
      'Platform closes 2 min before departure',
    ],
  },
  {
    id: 'evt-08',
    type: 'transport',
    date: '2026-04-18',
    title: 'Daytrip Car — Gare de Lyon to Airbnb',
    subtitle: 'Van · 5 Passengers · ~33 min',
    location: 'Paris Gare de Lyon → 20 Avenue de Suffren',
    cityColor: 'rose',
    icon: Car,
    confirmationNumber: '433UP1FQ',
    details: [
      'Pickup: 5:15 PM at Gare de Lyon, Paris',
      '(TGV INOUI 6170 eta 4:38 PM — allow time for arrival)',
      'Dropoff: 20 Avenue de Suffren, Paris (est. 5:48 PM)',
      'Vehicle: 1x Van (5 passengers + driver)',
      'Booking Ref: 433UP1FQ · Cost: €250 (prepaid)',
      'Lead Passenger: Michael Morse',
      'Luggage: 5 check-in + 5 carry-on bags included',
      'Contact: daytrip@daytrip.com · +1 628 288 2020',
    ],
  },
  {
    id: 'evt-09',
    type: 'hotel',
    date: '2026-04-18',
    endDate: '2026-04-22',
    title: 'Airbnb — Paris',
    subtitle: '4 Nights · Home in Paris · Near Eiffel Tower',
    location: 'Paris, France',
    cityColor: 'rose',
    icon: Hotel,
    details: [
      '20 Avenue de Suffren, Paris',
      'Type: Home in Paris · Host: Checkmyguest',
      'Check-in: Sat Apr 18, 4:00 PM',
      'Check-out: Wed Apr 22, 10:00 AM',
      'Near the Eiffel Tower',
      'Check house manual in Airbnb app for rules',
    ],
  },
  {
    id: 'evt-10',
    type: 'flight',
    date: '2026-04-22',
    title: 'Flight — Paris to Boston',
    subtitle: 'Air France AF 332 · Business Class · A350-900 · 7h 55m',
    location: 'Paris CDG → Boston (BOS)',
    cityColor: 'blue',
    icon: Plane,
    confirmationNumber: 'ZOTHWF',
    details: [
      'Air France AF 0332 · Business Class · Airbus A350-900',
      'Departure: Wed Apr 22, 6:25 PM (CDG Terminal 2E)',
      'Arrival: Wed Apr 22, 8:20 PM (BOS Terminal E)',
      'Duration: 7h 55m · Booking Ref: ZOTHWF',
      'Katherine Morse — Ticket 057 2345632810, Seat 01A',
      'Michael Morse — Ticket 057 2345632809, Seat 03A',
      'Mila Morse — Ticket 057 2345632811, Seat 02A',
      'Bradley Morse — Ticket 057 2347373401, Infant',
      'Grace Morse — Upgrade Award (25,000 miles), Seat 06A, Conf ZPIN7V',
      'Payment: 165,000 Flying Blue Miles + $989.46',
      'ESTA required for US entry · Check-in opens 30 hours before departure',
    ],
  },
  {
    id: 'evt-11',
    type: 'limo',
    date: '2026-04-22',
    title: "Knight's Limo — BOS to Home",
    subtitle: 'VIP Van · 5 Passengers',
    location: 'Logan Airport → Framingham, MA',
    cityColor: 'blue',
    icon: Users,
    confirmationNumber: 'K2067148.BE',
    details: [
      'Pickup: 8:30 PM at Logan (BOS) International Airport',
      'Dropoff: 63 Howe St, Framingham, MA 01702',
      'Service: VIP Van, 5 passengers',
      'Confirmation: K2067148.BE',
      'Cost: $249.60 (prepaid, card *6610)',
      'For Air France AF332 arriving ~8:00 PM',
    ],
  },
]

export function getEventsByDate(date: string): TripEvent[] {
  return TRIP_EVENTS.filter(e => e.date === date || (e.endDate && e.date <= date && e.endDate >= date))
}

export function getDatesWithEvents(): Set<string> {
  const dates = new Set<string>()
  for (const evt of TRIP_EVENTS) {
    dates.add(evt.date)
  }
  return dates
}
