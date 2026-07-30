import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="py-[90px] border-t border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-end justify-between gap-5 flex-wrap mb-11">
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-3.5">
              <span className="w-[18px] h-px bg-[var(--accent)]" />
              skills
            </div>
            <h2 className="font-mono text-[28px]">Toolkit</h2>
          </div>
          <div className="font-mono text-xs text-[var(--text-faint)]">6 categories · languages to deployment</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <div
              key={group.title}
              className="border border-[var(--border)] bg-[var(--panel)] rounded-xl p-5 transition-all hover:border-[var(--accent)] hover:-translate-y-1"
            >
              <h3 className="text-sm text-[var(--accent)] mb-3 flex items-center gap-2 font-mono">
                <span className="text-[var(--text-faint)] font-normal">{String(i + 1).padStart(2, '0')}</span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11.5px] px-2.5 py-1 rounded-md bg-[var(--panel-2)] border border-[var(--border)] text-[var(--text-dim)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
