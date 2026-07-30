import { useState } from 'react'
import { projects } from '../data'

const filters = [
  ['all', 'all'],
  ['ml', 'ml / ai'],
  ['backend', 'backend'],
  ['fullstack', 'full-stack'],
]

export default function Projects() {
  const [active, setActive] = useState('all')
  const [openId, setOpenId] = useState(null)

  const visible = projects.filter((p) => active === 'all' || p.cat.includes(active))

  return (
    <section id="projects" className="py-[90px] border-t border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-end justify-between gap-5 flex-wrap mb-4">
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-3.5">
              <span className="w-[18px] h-px bg-[var(--accent)]" />
              projects
            </div>
            <h2 className="font-mono text-[28px]">Selected work</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`font-mono text-xs px-3.5 py-2 rounded-lg border transition-all ${
                  active === key
                    ? 'bg-[var(--accent)] text-[#0a0c11] border-[var(--accent)]'
                    : 'bg-transparent text-[var(--text-dim)] border-[var(--border-strong)] hover:bg-[var(--accent)] hover:text-[#0a0c11] hover:border-[var(--accent)]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {visible.map((p) => {
            const isOpen = openId === p.id
            return (
              <div
                key={p.id}
                onClick={() => setOpenId(isOpen ? null : p.id)}
                className="relative border border-[var(--border)] bg-[var(--panel)] rounded-[14px] p-6 cursor-pointer transition-all hover:border-[var(--accent)] hover:-translate-y-1"
              >
                <span className="absolute top-[22px] right-[22px] font-mono text-[11px] text-[var(--text-faint)]">
                  {isOpen ? 'collapse ↑' : 'expand ↓'}
                </span>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--accent-2)]">{p.tag}</div>
                <h3 className="text-[17px] font-bold mt-1">{p.title}</h3>
                <div className="text-[13.5px] leading-[1.7] text-[var(--text-dim)] mt-3">{p.task}</div>

                <div className={`project-detail text-[13.3px] leading-[1.75] text-[var(--text-dim)] ${isOpen ? 'open' : ''}`}>
                  <b className="text-[var(--text)]">Action:</b> {p.action}
                  <br />
                  <br />
                  <b className="text-[var(--text)]">Result:</b> {p.result}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11.5px] px-2.5 py-1 rounded-md bg-[var(--panel-2)] border border-[var(--border)] text-[var(--text-dim)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-xs text-[var(--accent)] mt-3.5 inline-flex gap-1.5 items-center no-underline"
                >
                  ↗ view on GitHub
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
