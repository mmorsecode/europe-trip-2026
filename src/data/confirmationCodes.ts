export type CodeCategory = 'flight' | 'hotel' | 'train' | 'car' | 'limo'

export interface ConfirmationCode {
  id: string
  label: string
  code: string
  category: CodeCategory
  detail: string
}

export const CATEGORY_STYLES: Record<CodeCategory, { pill: string; border: string; icon: string }> = {
  flight: { pill: 'bg-blue-100 text-blue-700',    border: 'border-blue-200',   icon: '✈️' },
  hotel:  { pill: 'bg-violet-100 text-violet-700', border: 'border-violet-200', icon: '🏨' },
  train:  { pill: 'bg-red-100 text-red-700',       border: 'border-red-200',    icon: '🚄' },
  car:    { pill: 'bg-amber-100 text-amber-700',   border: 'border-amber-200',  icon: '🚗' },
  limo:   { pill: 'bg-slate-100 text-slate-700',   border: 'border-slate-200',  icon: '🚐' },
}

export const CONFIRMATION_CODES: ConfirmationCode[] = [
  { id: 'cc-01', label: 'Delta BOS→LIS',           code: 'HMQZLI',      category: 'flight', detail: 'DL 124 · Apr 8' },
  { id: 'cc-02', label: 'Delta (Mila)',             code: 'GYDUUP',      category: 'flight', detail: 'DL 124 · Apr 8' },
  { id: 'cc-03', label: 'Capital One ref',          code: 'H-SNPIBC',    category: 'flight', detail: 'DL 124 · Apr 8' },
  { id: 'cc-04', label: 'TAP LIS→NCE',             code: 'YXJDDO',      category: 'flight', detail: 'TP 482 · Apr 14' },
  { id: 'cc-05', label: 'Air France CDG→BOS',      code: 'ZOTHWF',      category: 'flight', detail: 'AF 332 · Apr 22' },
  { id: 'cc-06', label: 'Air France (Grace)',       code: 'ZPIN7V',      category: 'flight', detail: 'AF 332 · Apr 22' },
  { id: 'cc-07', label: 'Wine & Books Lisboa',      code: '18211',       category: 'hotel',  detail: 'Apr 8–14' },
  { id: 'cc-08', label: 'Canopy Hilton Cannes',     code: '3366057386',  category: 'hotel',  detail: 'Apr 14–18' },
  { id: 'cc-09', label: 'TGV Cannes→Paris',        code: 'U4RGZ9',      category: 'train',  detail: 'Apr 18 · 11:29 AM' },
  { id: 'cc-10', label: 'Daytrip NCE→Cannes',      code: 'RD3QC291',    category: 'car',    detail: 'Apr 14 · 6:00 PM' },
  { id: 'cc-11', label: 'Daytrip Gare de Lyon',    code: '433UP1FQ',    category: 'car',    detail: 'Apr 18 · 5:15 PM' },
  { id: 'cc-12', label: "Knight's Limo (out)",     code: 'K2067147.BE', category: 'limo',   detail: 'Apr 8 · 7:05 PM' },
  { id: 'cc-13', label: "Knight's Limo (return)",  code: 'K2067148.BE', category: 'limo',   detail: 'Apr 22 · 8:30 PM' },
]
