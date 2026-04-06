export interface FlightTicket {
  flightId: string
  flightNumber: string
  seat?: string
  ticketNumber: string
  confirmationCode: string
  class: string
}

export interface Traveler {
  id: string
  name: string
  initials: string
  type: 'adult' | 'child' | 'infant'
  avatarColor: string
  loyaltyNumbers: Record<string, string>
  knownTravelerNumber?: string
  tickets: FlightTicket[]
}

export const TRAVELERS: Traveler[] = [
  {
    id: 'michael',
    name: 'Michael Morse',
    initials: 'MM',
    type: 'adult',
    avatarColor: 'bg-blue-600',
    loyaltyNumbers: {
      'Air France Flying Blue': '005294354460',
      'Hilton Honors': '693800044',
    },
    knownTravelerNumber: '1362750640',
    tickets: [
      {
        flightId: 'evt-02',
        flightNumber: 'DL 124',
        ticketNumber: '0067347606946',
        confirmationCode: 'HMQZLI',
        class: 'Delta One Classic',
      },
      {
        flightId: 'evt-04',
        flightNumber: 'TP 482',
        seat: '5B',
        ticketNumber: '047 2523746078',
        confirmationCode: 'YXJDDO',
        class: 'Plus (L)',
      },
      {
        flightId: 'evt-10',
        flightNumber: 'AF 332',
        seat: '03A',
        ticketNumber: '057 2345632809',
        confirmationCode: 'ZOTHWF',
        class: 'Business',
      },
    ],
  },
  {
    id: 'katherine',
    name: 'Katherine Morse',
    initials: 'KM',
    type: 'adult',
    avatarColor: 'bg-rose-500',
    loyaltyNumbers: {
      'Delta SkyMiles': '009176928597',
    },
    tickets: [
      {
        flightId: 'evt-04',
        flightNumber: 'TP 482',
        seat: '5A',
        ticketNumber: '047 2523746077',
        confirmationCode: 'YXJDDO',
        class: 'Plus (L)',
      },
      {
        flightId: 'evt-10',
        flightNumber: 'AF 332',
        seat: '01A',
        ticketNumber: '057 2345632810',
        confirmationCode: 'ZOTHWF',
        class: 'Business',
      },
    ],
  },
  {
    id: 'grace',
    name: 'Grace Morse',
    initials: 'GM',
    type: 'adult',
    avatarColor: 'bg-violet-500',
    loyaltyNumbers: {},
    tickets: [
      {
        flightId: 'evt-02',
        flightNumber: 'DL 124',
        ticketNumber: '0067347606945',
        confirmationCode: 'HMQZLI',
        class: 'Delta One Classic',
      },
      {
        flightId: 'evt-04',
        flightNumber: 'TP 482',
        seat: '5C',
        ticketNumber: '047 2523746074',
        confirmationCode: 'YXJDDO',
        class: 'Plus (L)',
      },
      {
        flightId: 'evt-10',
        flightNumber: 'AF 332',
        seat: '06A',
        ticketNumber: 'Upgrade Award (25,000 miles)',
        confirmationCode: 'ZPIN7V',
        class: 'Business',
      },
    ],
  },
  {
    id: 'mila',
    name: 'Mila Coco Morse',
    initials: 'MC',
    type: 'child',
    avatarColor: 'bg-amber-500',
    loyaltyNumbers: {},
    tickets: [
      {
        flightId: 'evt-02',
        flightNumber: 'DL 124',
        seat: '06J',
        ticketNumber: '0062379610056',
        confirmationCode: 'GYDUUP',
        class: 'Delta One Classic',
      },
      {
        flightId: 'evt-04',
        flightNumber: 'TP 482',
        seat: '5D',
        ticketNumber: '047 2523746075',
        confirmationCode: 'YXJDDO',
        class: 'Plus (L)',
      },
      {
        flightId: 'evt-10',
        flightNumber: 'AF 332',
        seat: '02A',
        ticketNumber: '057 2345632811',
        confirmationCode: 'ZOTHWF',
        class: 'Business',
      },
    ],
  },
  {
    id: 'bradley',
    name: 'Bradley Morse',
    initials: 'BM',
    type: 'infant',
    avatarColor: 'bg-teal-400',
    loyaltyNumbers: {},
    tickets: [
      {
        flightId: 'evt-04',
        flightNumber: 'TP 482',
        ticketNumber: '047 2523746076',
        confirmationCode: 'YXJDDO',
        class: 'Infant (no seat)',
      },
      {
        flightId: 'evt-10',
        flightNumber: 'AF 332',
        ticketNumber: '057 2347373401',
        confirmationCode: 'ZOTHWF',
        class: 'Infant',
      },
    ],
  },
]
