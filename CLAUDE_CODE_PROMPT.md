# Morse Family Europe Trip Tracker — Build Prompt for Claude Code

Build a polished, modern React single-page app (Next.js or Vite + React) that serves as a shared trip itinerary tracker for the Morse family's Europe trip, April 8–22, 2026. This will be hosted on GitHub for other people on the trip to access. It should feel like a premium travel app — think TripIt meets Notion meets Apple Calendar.

---

## Tech Stack
- React 18+ with TypeScript
- Tailwind CSS for styling (use a clean, modern design system — soft shadows, rounded corners, smooth transitions)
- Framer Motion for animations (card expand/collapse, timeline scrubbing, check-off animations)
- Lucide React for icons
- Deploy-ready (Vercel or GitHub Pages)
- Mobile-first responsive design — this will primarily be used on phones during the trip

---

## Layout & Sections

### 1. Header
- Title: "Morse Family Europe Trip 2026"
- Subtitle: "April 8–22 · Boston → Lisbon → Nice/Cannes → Paris → Boston"
- Show traveler avatars in a row with names below: Michael (Adult), Katherine (Adult), Grace (Adult, 60+), Mila (Child), Bradley (Infant)

### 2. Interactive Timeline (Top — Sticky/Fixed)
This is the hero feature. A **horizontally scrollable timeline bar** pinned to the top of the page:

- **Two view modes via toggle tabs: "Day View" and "Week View"**
- **Day View**: Each day April 8–22 gets its own column. Show the day of week, date number, and a small city label underneath (e.g., "Lisbon", "Travel Day", "Cannes", "Paris"). The current/selected day is highlighted. Tapping a day scrolls the cards below to that day's events.
- **Week View**: Shows Week 1 (Apr 8–14: Boston → Lisbon) and Week 2 (Apr 15–22: Nice/Cannes → Paris → Boston) as two wider blocks with mini-icons for each event type (plane, hotel, train, car).
- The timeline should have colored segments for each city: blue for travel days, purple for Lisbon, amber for Cannes/Nice, rose for Paris.
- Small dot indicators on days that have events.

### 3. Event Cards (Main Content — Scrollable)
Below the timeline, display **event cards** for each segment of the trip, in chronological order. Each card should:

- Have a colored left border or accent matching its city/category
- Show an icon (plane, hotel, train, car, home), title, date, and location
- Be **expandable** to show full details (click to expand/collapse)
- Have a **checkbox** on each card. When checked:
  - Card gets a subtle "completed" styling (slightly dimmed, strikethrough on title, green checkmark)
  - Card **collapses/minimizes** with a smooth animation, showing only a single condensed line
  - Completed cards move to the bottom or stay in place but are visually de-emphasized
- **Persist checkbox state in localStorage** so it survives page reloads

Here are all the events with their full data:

#### Event 1: Knight's Limo — Home to BOS
- Date: Apr 8, 2026
- Pickup: 7:05 PM from 63 Howe St, Framingham, MA 01702
- Dropoff: Logan (BOS) International Airport
- Service: VIP Van, 5 passengers
- Confirmation: K2067147.BE
- Cost: $249.60 (prepaid, card *6610)
- Note: For Delta DL124 departing 11:00 PM

#### Event 2: Flight — Boston to Lisbon
- Date: Apr 8–9, 2026
- Flight: Delta DL 124, Delta One Classic
- Departure: Wed Apr 8, 11:25 PM (BOS)
- Arrival: Thu Apr 9, 10:45 AM (LIS)
- Duration: 6h 20m, Nonstop
- Passengers & Tickets:
  - Michael Morse — Ticket 0067347606946, Conf HMQZLI
  - Grace Morse — Ticket 0067347606945, Conf HMQZLI
  - Mila Coco Morse — Ticket 0062379610056, Seat 06J, Conf GYDUUP
- Capital One Travel ref: H-SNPIBC
- Cost: $5,786 (376,127 Venture X miles + $1,724.73 card + $300 travel credit)
- Note: Katherine & Bradley traveling separately (JetBlue employee benefit)

#### Event 3: Hotel — Wine & Books Lisboa
- Dates: Apr 8–14, 2026 (6 nights)
- Address: Travessa da Memória, 56-62, 1300-403 Lisbon
- Room: Suite Premium — Church View with Balcony
- Rate: €296/night (Non-Refundable)
- Total Paid: €1,776.00
- Check-in: Apr 8 (early arrival ~6 AM on Apr 9)
- Check-out: Apr 14
- Reservation: Folio 69949 / Res 18211
- Guest: Katherine Morse
- Benefits included:
  - Breakfast buffet daily (7:30–10:30 AM)
  - Restaurant "Tasca da Memória" (12:30–22:00, lunch/dinner/snacks)
  - Wellness Area 24 hours (sauna, Turkish bath, contrast shower, gym)
  - Wi-Fi throughout hotel
  - Pressreader (online newspapers/magazines)
  - 24-hour reception with concierge services
- City tax: €4/person (13+) per night, paid at check-in
- Contact: +351 211 566 250

#### Event 4: Flight — Lisbon to Nice
- Date: Apr 14, 2026
- Flight: TAP Air Portugal TP 482 (operated by Portugália), Class: Plus (L)
- Departure: Mon Apr 14, 1:50 PM (LIS Terminal 1)
- Arrival: Mon Apr 14, 5:20 PM (NCE Terminal 1)
- Duration: 2h 30m
- Booking Ref: YXJDDO
- Passengers & Tickets:
  - Katherine Morse — Ticket 047 2523746077, Seat 5A
  - Michael Morse — Ticket 047 2523746078, Seat 5B
  - Grace Morse — Ticket 047 2523746074, Seat 5C
  - Mila Morse — Ticket 047 2523746075, Seat 5D
  - Bradley Morse — Ticket 047 2523746076, Infant (no seat)
- Baggage: 1 checked bag (23 kg) per passenger

#### Event 5: Daytrip Car — Nice Airport to Cannes
- Date: Apr 14, 2026
- Pickup: 6:00 PM at Nice Côte d'Azur Airport
- Dropoff: Canopy by Hilton Cannes (est. 6:37 PM)
- Vehicle: 1x Van (5 passengers + driver)
- Booking Ref: RD3QC291
- Cost: €128 (prepaid)
- Lead Passenger: Michael Morse
- Luggage: 5 check-in + 5 carry-on bags included
- Contact: daytrip@daytrip.com, +1 628 288 2020

#### Event 6: Hotel — Canopy by Hilton Cannes
- Dates: Apr 14–18, 2026 (4 nights)
- Address: 2 Boulevard Jean Hibert, Cannes 06400
- Room: King One Bedroom Apartment with View — Premium Room Reward
- Guests: 2 adults, 2 children
- Points: 245,000 Hilton Honors Points
- Taxes/Fees: €1,759.88 (incl. €23.60 tax)
- Check-in: Apr 14, 3:00 PM
- Check-out: Apr 18, 11:00 AM
- Confirmation: 3366057386
- Hilton Honors: #693800044
- Benefits included:
  - Complimentary Continental Breakfast (MyWay benefit)
  - 1,000 Bonus Hilton Honors Points
  - Spa Access: €20/person (€40 for external guests), 90 min limit, reservation required
  - Children 4–16 spa access with parental guidance: 9–10 AM and 8–9 PM
  - Smoke-free hotel
  - City tax: €2.95/person/night
- Cancellation: Free before 11:59 PM on Apr 13
- Valet parking: €40/night
- Phone: +33 4 92 99 73 00

#### Event 7: Train — Cannes to Paris
- Date: Apr 18, 2026
- Train: TGV INOUI 6170
- Departure: Sat Apr 18, 11:29 AM (Cannes)
- Arrival: ~4:38 PM (Paris Gare de Lyon)
- Class: Standard Seconde
- Reference: U4RGZ9
- Total: €325.00 (5 passengers)
- Passengers:
  - Michael Morse (30–59 years old)
  - Katherine Morse (30–59 years old)
  - Grace Morse (60+ years old)
  - Mila Morse (4–29 years old)
  - Bradley Morse (0–3 years old, child traveling free without seat)
- E-tickets: QR codes in SNCF Connect app
- Note: Exchangeable/refundable free up to 7 days before. Platform closes 2 min before departure.

#### Event 8: Daytrip Car — Paris Gare de Lyon to Airbnb
- Date: Apr 18, 2026
- Pickup: 5:15 PM at Gare de Lyon, Paris (TGV INOUI 6170 eta 4:38 PM)
- Dropoff: 20 Avenue de Suffren, Paris (est. 5:48 PM)
- Vehicle: 1x Van (5 passengers + driver)
- Booking Ref: 433UP1FQ
- Cost: €250 (prepaid)
- Lead Passenger: Michael Morse
- Luggage: 5 check-in + 5 carry-on bags included
- Contact: daytrip@daytrip.com, +1 628 288 2020

#### Event 9: Airbnb — Paris
- Dates: Apr 18–22, 2026 (4 nights)
- Address: 20 Avenue de Suffren, Paris
- Type: Home in Paris
- Host: Checkmyguest
- Check-in: Sat Apr 18, 4:00 PM
- Check-out: Wed Apr 22, 10:00 AM
- Note: Near the Eiffel Tower. Check house manual for rules.

#### Event 10: Flight — Paris to Boston (Return)
- Date: Apr 22, 2026
- Flight: Air France AF 0332, Business Class, Airbus A350-900
- Departure: Wed Apr 22, 6:25 PM (CDG Terminal 2E)
- Arrival: Wed Apr 22, 8:20 PM (BOS Terminal E)
- Duration: 7h 55m
- Booking Ref: ZOTHWF
- Payment: 165,000 Flying Blue Miles + $989.46
- Passengers & Tickets:
  - Katherine Morse — Ticket 057 2345632810, Seat 01A, Conf ZOTHWF
  - Michael Morse — Ticket 057 2345632809, Seat 03A, Conf ZOTHWF
  - Mila Morse — Ticket 057 2345632811, Seat 02A, Conf ZOTHWF
  - Bradley Morse — Ticket 057 2347373401, Infant, Conf ZOTHWF
  - Grace Morse — Ticket (Upgrade Award, 25,000 miles), Seat 06A, Conf ZPIN7V
- Note: ESTA required for US entry. Check-in opens 30 hours before departure.

#### Event 11: Knight's Limo — BOS to Home (Return)
- Date: Apr 22, 2026
- Pickup: 8:30 PM at Logan (BOS) International Airport
- Dropoff: 63 Howe St, Framingham, MA 01702
- Service: VIP Van, 5 passengers
- Confirmation: K2067148.BE
- Cost: $249.60 (prepaid, card *6610)
- Note: For Air France AF332 arriving ~8:00 PM

---

### 4. Lodging Summary Section
A dedicated section (or tab) showing all accommodations at a glance with full benefits:

| Property | Dates | Nights | Room Type | Benefits |
|---|---|---|---|---|
| Wine & Books Lisboa | Apr 8–14 | 6 | Suite Premium, Church View w/ Balcony | Breakfast buffet, restaurant, 24hr wellness (sauna/Turkish bath/gym), Wi-Fi, Pressreader, 24hr concierge |
| Canopy by Hilton Cannes | Apr 14–18 | 4 | King 1BR Apt w/ View | Continental breakfast, 1000 bonus pts, spa (€20/person), smoke-free |
| Airbnb Paris | Apr 18–22 | 4 | Entire Home | Near Eiffel Tower, hosted by Checkmyguest |

### 5. Travelers Section
Show each traveler in a card with:
- Name, type (Adult/Child/Infant)
- All their ticket numbers across every flight
- Seat assignments per flight
- Loyalty program numbers if known (Michael: Flying Blue AF 005294354460, Hilton Honors 693800044, Known Traveler 1362750640; Katherine: DL 009176928597)

### 6. Credit Card Benefits Section (Bottom)
A clean reference section showing **current up-to-date benefits** for these 5 credit cards. Research the latest 2025/2026 benefits and present them in a useful, at-a-glance format:

#### Cards to include:
1. **Chase Sapphire Reserve**
2. **Capital One Venture X**
3. **American Express Gold**
4. **American Express Hilton Honors Aspire**
5. **American Express Platinum**

For each card show:
- Card name with brand color accent
- Key travel benefits (lounge access, travel credits, hotel status, etc.)
- Key dining/everyday benefits
- Trip-relevant perks (travel insurance, purchase protection, rental car coverage, etc.)
- **"When to use" quick tip** — a one-liner about when this card is the best choice (e.g., "Use for dining at restaurants for 4x points" or "Use at Hilton properties for 14x points + Diamond benefits")

Format these as compact, scannable cards — travelers should be able to glance at this section at a restaurant or hotel check-in and instantly know which card to pull out.

---

## Design Guidelines
- Color palette: Use a sophisticated travel theme — navy, warm amber, soft rose, muted greens, with white/light gray backgrounds
- Typography: Clean sans-serif (Inter or similar), good hierarchy
- Cards should have subtle hover effects and smooth expand/collapse transitions
- The timeline should feel tactile — draggable/scrollable on mobile
- Use country flag emojis or small icons for cities
- Overall vibe: premium but not stuffy, like a well-designed travel app

## Data Architecture
- Store all trip data in a clean JSON/TypeScript data structure
- Make it easy to update or add events
- Checkbox state persisted in localStorage
- Consider using React Context or Zustand for state management

---

## File Structure Suggestion
```
src/
  components/
    Timeline.tsx
    EventCard.tsx
    TravelerCard.tsx
    LodgingSummary.tsx
    CreditCardSection.tsx
    Header.tsx
  data/
    tripData.ts
    travelers.ts
    creditCards.ts
  App.tsx
  index.tsx
```
