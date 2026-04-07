import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CreditCard, Zap } from 'lucide-react'
import { CREDIT_CARDS } from '../data/creditCards'

export function CreditCardSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="px-4 py-6 max-w-2xl mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800">Credit Cards</h2>
        <p className="text-xs text-slate-500 mt-0.5">Which card to use — at a glance</p>
      </div>

      <div className="space-y-3">
        {CREDIT_CARDS.map(card => {
          const isExpanded = expandedId === card.id

          return (
            <motion.div
              key={card.id}
              layout
              className="rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Card visual header */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : card.id)}
                className={`w-full text-left bg-gradient-to-r ${card.gradientClass} p-4`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className={`text-[10px] font-semibold uppercase tracking-widest ${card.accentClass} mb-1`}>
                      {card.issuer}
                    </div>
                    <div className={`text-base font-bold ${card.textClass}`}>{card.name}</div>
                    {card.loungeAccess && (
                      <div className={`text-[10px] mt-1 ${card.textClass} opacity-70 flex items-center gap-1`}>
                        <span>✈</span> {card.loungeAccess}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <CreditCard size={24} className={`${card.textClass} opacity-60`} />
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`${card.textClass} opacity-60`}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    key="card-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden bg-white border border-t-0 border-slate-100 rounded-b-2xl"
                  >
                    <div className="p-4 space-y-4">
                      {/* When to use */}
                      <div>
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 uppercase tracking-wide mb-2">
                          <Zap size={11} />
                          When to use on this trip
                        </div>
                        <ul className="space-y-1.5">
                          {card.whenToUse.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-amber-50 px-2.5 py-1.5 rounded-lg">
                              <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits grouped by category */}
                      {(() => {
                        const categories = Array.from(new Set(card.benefits.map(b => b.category)))
                        return (
                          <div>
                            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-2">Benefits</div>
                            <div className="space-y-2">
                              {categories.map(cat => (
                                <div key={cat}>
                                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">{cat}</div>
                                  {card.benefits.filter(b => b.category === cat).map((benefit, i) => (
                                    <div key={i} className="flex items-start justify-between gap-2 text-xs py-1 border-b border-slate-50 last:border-0">
                                      <span className="text-slate-600">{benefit.description}</span>
                                      {benefit.value && (
                                        <span className="flex-shrink-0 font-semibold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                                          {benefit.value}
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })()}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
