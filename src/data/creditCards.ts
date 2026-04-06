export interface CardBenefit {
  category: string
  description: string
  value?: string
}

export interface CreditCard {
  id: string
  name: string
  issuer: string
  gradientClass: string
  textClass: string
  accentClass: string
  annualFee: number
  benefits: CardBenefit[]
  whenToUse: string[]
  loungeAccess?: string
}

export const CREDIT_CARDS: CreditCard[] = [
  {
    id: 'csr',
    name: 'Sapphire Reserve',
    issuer: 'Chase',
    gradientClass: 'from-slate-800 to-slate-700',
    textClass: 'text-white',
    accentClass: 'text-amber-400',
    annualFee: 550,
    loungeAccess: 'Priority Pass Select (1,300+ lounges worldwide)',
    benefits: [
      { category: 'Rewards', description: '3x points on travel & dining worldwide', value: '3x' },
      { category: 'Rewards', description: '10x on hotels & car rentals via Chase Travel', value: '10x' },
      { category: 'Travel Credit', description: '$300 annual travel credit (auto-applied)', value: '$300/yr' },
      { category: 'Redemption', description: '1.5x value when redeeming points via Chase Travel Portal', value: '1.5¢/pt' },
      { category: 'Insurance', description: 'Trip cancellation/interruption insurance up to $10,000/person', value: 'Up to $10k' },
      { category: 'Insurance', description: 'Primary rental car CDW — no need to pay extra', value: 'Primary CDW' },
      { category: 'Insurance', description: 'Trip delay reimbursement (6+ hours, up to $500/ticket)', value: 'Up to $500' },
      { category: 'Fees', description: 'No foreign transaction fees', value: 'No FX fee' },
      { category: 'Status', description: 'DoorDash DashPass, Lyft Pink — complimentary memberships', value: 'Included' },
    ],
    whenToUse: [
      'Dining at restaurants in Lisbon, Cannes & Paris (3x points)',
      'Taxis, Uber, trains, and any transportation (3x travel)',
      'Rental cars — provides primary CDW coverage (no collision charge)',
      'When redeeming points for flights/hotels via Chase Travel (1.5x value)',
    ],
  },
  {
    id: 'cvx',
    name: 'Venture X',
    issuer: 'Capital One',
    gradientClass: 'from-indigo-800 to-indigo-600',
    textClass: 'text-white',
    accentClass: 'text-indigo-200',
    annualFee: 395,
    loungeAccess: 'Capital One Lounges + Priority Pass (unlimited visits)',
    benefits: [
      { category: 'Rewards', description: '2x miles on all purchases (best catch-all card)', value: '2x' },
      { category: 'Rewards', description: '10x miles on hotels & rental cars via C1 Travel', value: '10x' },
      { category: 'Rewards', description: '5x miles on flights via Capital One Travel', value: '5x' },
      { category: 'Travel Credit', description: '$300 annual travel credit (via Capital One Travel portal)', value: '$300/yr' },
      { category: 'Anniversary', description: '10,000 bonus miles every account anniversary', value: '10k miles' },
      { category: 'Insurance', description: 'Primary rental car CDW when booked through Capital One Travel', value: 'Primary CDW' },
      { category: 'Protection', description: 'Cell phone protection up to $800 (pay bill with this card)', value: 'Up to $800' },
      { category: 'Fees', description: 'No foreign transaction fees', value: 'No FX fee' },
    ],
    whenToUse: [
      'Best catch-all for any purchase not covered better by another card (2x)',
      'Book hotels/cars via Capital One Travel for 10x miles',
      'Use as backup card when other cards are maxed or not accepted',
    ],
  },
  {
    id: 'amex-gold',
    name: 'Gold Card',
    issuer: 'American Express',
    gradientClass: 'from-yellow-600 to-yellow-500',
    textClass: 'text-white',
    accentClass: 'text-yellow-100',
    annualFee: 325,
    benefits: [
      { category: 'Rewards', description: '4x Membership Rewards at restaurants worldwide', value: '4x' },
      { category: 'Rewards', description: '4x at U.S. supermarkets (up to $25,000/yr)', value: '4x' },
      { category: 'Rewards', description: '3x on flights booked directly with airlines or amextravel.com', value: '3x' },
      { category: 'Dining Credit', description: '$120 annual dining credit ($10/month at participating restaurants)', value: '$120/yr' },
      { category: 'Uber Cash', description: '$120 annual Uber Cash ($10/month, US Uber & Uber Eats)', value: '$120/yr' },
      { category: 'Insurance', description: 'Baggage insurance plan up to $1,250 carry-on, $500 checked', value: 'Baggage' },
      { category: 'Fees', description: 'No foreign transaction fees', value: 'No FX fee' },
    ],
    whenToUse: [
      'Every restaurant meal on the trip — 4x points worldwide (best dining card)',
      'Cafés, wine bars, bistros in Lisbon/Cannes/Paris all qualify (4x)',
      'Best overall card for ALL dining throughout the trip',
    ],
  },
  {
    id: 'aspire',
    name: 'Hilton Honors Aspire',
    issuer: 'American Express',
    gradientClass: 'from-blue-800 to-blue-600',
    textClass: 'text-white',
    accentClass: 'text-amber-300',
    annualFee: 550,
    loungeAccess: 'Priority Pass (10 free visits/year)',
    benefits: [
      { category: 'Rewards', description: '14x Hilton Honors points at Hilton hotels worldwide', value: '14x' },
      { category: 'Rewards', description: '7x on flights booked directly with airlines', value: '7x' },
      { category: 'Rewards', description: '7x on car rentals booked directly with rental companies', value: '7x' },
      { category: 'Rewards', description: '3x on all other purchases', value: '3x' },
      { category: 'Hotel Status', description: 'Complimentary Hilton Diamond status (highest tier)', value: 'Diamond' },
      { category: 'Resort Credit', description: '$200 Hilton resort credit, semi-annually (up to $400/yr)', value: '$400/yr' },
      { category: 'Hotel Credit', description: '$100 on-property credit at Hilton resorts & hotels', value: '$100' },
      { category: 'Flight Credit', description: '$200 annual airline fee credit', value: '$200/yr' },
      { category: 'Free Night', description: 'Free weekend night certificate upon renewal', value: 'Free night' },
      { category: 'Fees', description: 'No foreign transaction fees', value: 'No FX fee' },
    ],
    whenToUse: [
      'ALL purchases at Canopy by Hilton Cannes — 14x points + Diamond benefits',
      'Use $100 on-property credit at Canopy Hilton for incidentals/spa/dining',
      'Book flights directly with airlines when not using Amex Platinum (7x)',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Card',
    issuer: 'American Express',
    gradientClass: 'from-slate-400 to-slate-300',
    textClass: 'text-slate-900',
    accentClass: 'text-slate-700',
    annualFee: 695,
    loungeAccess: 'Centurion Lounges + Delta Sky Clubs (when flying Delta) + Priority Pass + Airspace + Escape',
    benefits: [
      { category: 'Rewards', description: '5x Membership Rewards on flights booked directly with airlines', value: '5x' },
      { category: 'Rewards', description: '5x on prepaid hotels booked via amextravel.com', value: '5x' },
      { category: 'Rewards', description: '1x on all other purchases', value: '1x' },
      { category: 'Travel Credit', description: '$200 airline fee credit (incidentals with one selected airline)', value: '$200/yr' },
      { category: 'Hotel Credit', description: '$200 hotel credit on prepaid Fine Hotels + Resorts bookings', value: '$200/yr' },
      { category: 'Digital Credit', description: '$240 digital entertainment credit ($20/month)', value: '$240/yr' },
      { category: 'Hotel Status', description: 'Marriott Bonvoy Gold Elite + Hilton Honors Gold status', value: 'Gold' },
      { category: 'TSA/Global Entry', description: 'Global Entry ($120) or TSA PreCheck ($85) fee credit', value: 'Up to $120' },
      { category: 'Insurance', description: 'Trip delay insurance (6+ hours, up to $500/ticket)', value: 'Up to $500' },
      { category: 'Insurance', description: 'Baggage insurance up to $3,000 carry-on, $2,000 checked', value: 'Baggage' },
      { category: 'Fees', description: 'No foreign transaction fees', value: 'No FX fee' },
    ],
    whenToUse: [
      'Book flights directly with airlines for maximum 5x Membership Rewards',
      'Airport lounges — Centurion access at CDG Terminal 2E and BOS',
      'When you need the best travel insurance coverage for flights',
      'Global Entry or TSA PreCheck renewal (fee credit up to $120)',
    ],
  },
]
