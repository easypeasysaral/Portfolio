import { useState } from 'react'
import { GITHUB_USERNAME } from '../config'

export default function Heatmap({ cells, total, streak, best, colorVar, kind, extra }) {
  const [tip, setTip] = useState(null) // { x, y, text }

  return (
    <div>
      {tip && (
        <div
          className="fixed pointer-events-none font-mono text-[11.5px] px-2.5 py-1.5 rounded-md z-[200] whitespace-nowrap"
          style={{ left: tip.x + 14, top: tip.y - 30, background: 'var(--text)', color: 'var(--bg)' }}
        >
          {tip.text}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-6">
        <Stat num={total} label={kind === 'leetcode' ? 'TOTAL SOLVED' : 'CONTRIBUTIONS / YR'} />
        {kind === 'leetcode' ? (
          <>
            <Stat num={extra?.easy ?? 0} label="EASY" color="var(--accent)" />
            <Stat num={extra?.medium ?? 0} label="MEDIUM" color="var(--accent-2)" />
            <Stat num={extra?.hard ?? 0} label="HARD" color="var(--danger)" />
          </>
        ) : (
          <>
            <Stat num={`${streak}d`} label="CURRENT STREAK" />
            <Stat num={best} label="BEST DAY" />
            <Stat num={GITHUB_USERNAME} label="GITHUB HANDLE" />
          </>
        )}
      </div>

      <div className="overflow-x-auto pb-1.5">
        <div className="heat-grid">
          {cells.map((c, idx) => {
            const pct = [0, 30, 55, 80, 100][c.level] ?? 0
            const dateStr = c.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            const text = `${c.count} ${c.count === 1 ? 'submission' : 'submissions'} on ${dateStr}`
            return (
              <div
                key={idx}
                className="heat-cell"
                style={c.level > 0 ? { background: `color-mix(in srgb, var(${colorVar}) ${pct}%, var(--panel-2))` } : undefined}
                onMouseEnter={(e) => setTip({ x: e.clientX, y: e.clientY, text })}
                onMouseMove={(e) => setTip({ x: e.clientX, y: e.clientY, text })}
                onMouseLeave={() => setTip(null)}
              />
            )
          })}
        </div>
      </div>

      <div className="flex items-center gap-1.5 mt-4 font-mono text-[11px] text-[var(--text-faint)] justify-end">
        less
        {[0, 30, 55, 80, 100].map((pct) => (
          <span
            key={pct}
            className="heat-cell !cursor-default"
            style={pct === 0 ? undefined : { background: `color-mix(in srgb, var(${colorVar}) ${pct}%, var(--panel-2))` }}
          />
        ))}
        more
      </div>
    </div>
  )
}

function Stat({ num, label, color }) {
  return (
    <div>
      <div className="font-mono font-bold text-[20px] md:text-[22px] truncate" style={{ color: color || 'var(--accent)' }}>
        {num}
      </div>
      <div className="text-[11.5px] text-[var(--text-faint)] font-mono mt-0.5">{label}</div>
    </div>
  )
}
