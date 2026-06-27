import { useState } from 'react'
import { DAYS, NOTES, TYPE_COLORS } from './data'

function ExerciseCard({ exercise, dayColor }) {
  const tc = TYPE_COLORS[exercise.type] || TYPE_COLORS.compound
  const isSuperset = exercise.type === 'superset'

  return (
    <div
      className="rounded-xl p-4 mb-3"
      style={{ background: '#1A1D2E', border: '1px solid #2A2D3E' }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-3 h-3 rounded-full mt-1.5 shrink-0"
          style={{ background: tc.border }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-semibold text-white text-base leading-tight">
              {exercise.name}
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.border}40` }}
            >
              {tc.label}
            </span>
          </div>

          {isSuperset && (
            <div
              className="flex items-center gap-2 mb-2 pl-2 border-l-2"
              style={{ borderColor: tc.border + '60' }}
            >
              <span className="text-sm text-gray-400">+ {exercise.pair}</span>
              <span className="text-xs text-gray-500 ml-auto">{exercise.pairReps} powt.</span>
            </div>
          )}

          <div className="flex items-center gap-4 mt-2">
            <div className="text-center">
              <div className="text-3xl font-bold leading-none" style={{ color: dayColor }}>
                {exercise.sets}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">serie</div>
            </div>
            <div className="h-8 w-px bg-gray-700" />
            <div>
              <div className="text-lg font-semibold text-white">{exercise.reps}</div>
              <div className="text-xs text-gray-500">powtórzeń</div>
            </div>
            <div className="ml-auto text-right">
              <div className="text-xs text-gray-400">{exercise.note}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DayView({ day }) {
  return (
    <div className="px-4 pb-6">
      <div className="mb-4 pt-4">
        <div
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
          style={{ background: day.color + '22', color: day.color }}
        >
          {day.focus}
        </div>
        <div className="text-sm text-gray-400">{day.tag}</div>
      </div>
      {day.exercises.map((ex, i) => (
        <ExerciseCard key={i} exercise={ex} dayColor={day.color} />
      ))}
    </div>
  )
}

function NotesSection() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-4 mb-8 rounded-xl overflow-hidden" style={{ border: '1px solid #2A2D3E' }}>
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer"
        style={{ background: '#1A1D2E', border: 'none' }}
        onClick={() => setOpen(o => !o)}
      >
        <span className="font-semibold text-white">Zasady planu</span>
        <span className="text-gray-400 text-sm">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div style={{ background: '#13151F' }}>
          {NOTES.map((n, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-4 py-3"
              style={{ borderTop: '1px solid #2A2D3E' }}
            >
              <span className="text-lg shrink-0">{n.icon}</span>
              <span className="text-sm text-gray-300 leading-relaxed">{n.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [activeDay, setActiveDay] = useState('A')
  const day = DAYS.find(d => d.id === activeDay)

  return (
    <div className="min-h-screen" style={{ background: '#0F1117' }}>
      <div className="max-w-[480px] mx-auto">
        <div
          className="px-4 pt-5 pb-3"
          style={{ borderBottom: '1px solid #2A2D3E' }}
        >
          <h1 className="text-xl font-bold text-white">Plan Mikołaj</h1>
          <p className="text-xs text-gray-500 mt-0.5">Upper / Lower · 4 dni</p>
        </div>

        <div
          className="flex"
          style={{ borderBottom: '1px solid #2A2D3E', background: '#13151F' }}
        >
          {DAYS.map(d => (
            <button
              key={d.id}
              onClick={() => setActiveDay(d.id)}
              className="flex-1 py-3 text-sm font-semibold transition-colors relative cursor-pointer"
              style={{
                color: activeDay === d.id ? d.color : '#6b7280',
                background: 'transparent',
                border: 'none',
              }}
            >
              {d.name}
              {activeDay === d.id && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: d.color }}
                />
              )}
            </button>
          ))}
        </div>

        <DayView day={day} />
        <NotesSection />
      </div>
    </div>
  )
}
