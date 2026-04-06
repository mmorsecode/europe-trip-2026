import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { CONFIRMATION_CODES, CATEGORY_STYLES } from '../data/confirmationCodes'

export function ConfirmationCodes() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 1500)
    }).catch(() => {
      // fallback: select text
    })
  }

  return (
    <section className="px-4 py-6 max-w-2xl mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800">Confirmation Codes</h2>
        <p className="text-xs text-slate-500 mt-0.5">Tap any code to copy it</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {CONFIRMATION_CODES.map(item => {
          const styles = CATEGORY_STYLES[item.category]
          const isCopied = copiedId === item.id

          return (
            <motion.button
              key={item.id}
              onClick={() => handleCopy(item.id, item.code)}
              whileTap={{ scale: 0.97 }}
              className={`text-left p-3 rounded-xl border bg-white ${styles.border} shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}
            >
              <div className="flex items-start justify-between gap-1">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${styles.pill}`}>
                      {styles.icon} {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">{item.label}</div>
                  <div className="text-sm font-bold font-mono text-slate-800 mt-0.5 truncate">{item.code}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{item.detail}</div>
                </div>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  isCopied ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                }`}>
                  <AnimatePresence mode="wait">
                    {isCopied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Check size={12} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Copy size={12} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}
