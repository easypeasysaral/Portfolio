import { useState } from 'react'
import { experience, education } from '../data'

export default function Timeline() {
  const [tab, setTab] = useState('exp')
  const items = tab === 'exp' ? experience : education

  return (
    <section id="timeline" className="py-[90px] border-t border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-3.5">
          <span className="w-[18px] h-px bg-[var(--accent)]" />
          experience &amp; education
        </div>
        <h2 className="font-mono text-[28px] mb-8">Timeline</h2>

        <div className="flex gap-1.5 bg-[var(--panel-2)] border border-[var(--border)] rounded-[10px] p-1 w-fit">
          {[
            ['exp', 'Experience'],
            ['edu', 'Education'],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`font-mono text-[12.5px] px-[18px] py-2 rounded-[7px] border-none cursor-pointer ${tab === key ? 'bg-[var(--accent)] text-[#0a0c11] font-semibold' : 'bg-transparent text-[var(--text-dim)]'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="timeline-rail mt-9">
          {items.map((item) => (
            <div key={item.title} className="timeline-dot relative pb-0">
              <div className="font-mono text-[11.5px] text-[var(--accent)] tracking-[0.05em]">{item.date}</div>
              <h3 className="text-base font-bold mt-1.5">{item.title}</h3>
              <div className="text-[var(--text-dim)] text-[13.5px] mt-0.5 font-mono">{item.org}</div>
              <ul className="mt-3 pl-[18px] text-[var(--text-dim)] text-[13.6px] leading-[1.8]">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}