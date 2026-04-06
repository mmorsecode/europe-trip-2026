import { Plane } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center space-y-4 p-8">
        <div className="flex justify-center">
          <Plane className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">
          Morse Family Europe Trip 2026
        </h1>
        <p className="text-slate-500 text-lg">
          April 8–22 · Boston → Lisbon → Nice/Cannes → Paris → Boston
        </p>
        <p className="text-sm text-slate-400 mt-4">
          Trip tracker coming soon...
        </p>
      </div>
    </div>
  )
}

export default App
