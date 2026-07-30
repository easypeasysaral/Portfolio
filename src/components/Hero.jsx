export default function Hero() {
  return (
    <header className="pt-[150px] pb-[90px]">
      <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-3.5">
            <span className="w-[18px] h-px bg-[var(--accent)]" />
            final-year b.tech · ai &amp; ml
          </div>
          <h1 className="font-mono text-[32px] md:text-[44px] leading-[1.12] font-bold -tracking-[0.01em]">
            Building models &amp; shipping
            <br />
            them like <span className="text-[var(--accent)]">production software</span>
            <span className="cursor-blink" />
          </h1>
          <div className="font-mono text-[16px] text-[var(--text-dim)] mt-4">
            AI/ML Engineer &nbsp;·&nbsp; Full-Stack Developer &nbsp;·&nbsp; Sagar, India
          </div>
          <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-dim)] max-w-[52ch]">
            I take a model from a messy dataset to a deployed, explainable API — feature engineering, evaluation, and
            a real FastAPI + React interface around it. Currently researching AI in 6G telecom systems.
          </p>
          <div className="flex gap-3.5 mt-8 flex-wrap">
            <a
              href="#projects"
              className="font-mono text-[13px] px-5 py-3 rounded-[9px] no-underline inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--accent)] text-[#0a0c11] font-semibold hover:bg-[var(--accent-strong)] hover:-translate-y-px transition-all"
            >
              View projects →
            </a>
            <a
              href="mailto:tsaraljain@gmail.com"
              className="font-mono text-[13px] px-5 py-3 rounded-[9px] no-underline inline-flex items-center gap-2 border border-[var(--border-strong)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="rounded-[14px] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] font-mono text-xs text-[var(--text-faint)] bg-[var(--panel-2)]">
            <span className="w-[9px] h-[9px] rounded-full bg-[var(--danger)]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[var(--accent-2)]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[var(--accent)]" />
            &nbsp;&nbsp;profile.yaml
          </div>
          <div className="px-[22px] py-5 font-mono text-[13.2px] leading-[2]">
            <div><span className="text-[var(--text-faint)]">name:</span> Saral Jain</div>
            <div><span className="text-[var(--text-faint)]">role:</span> AI/ML Engineer, Full-Stack Dev</div>
            <div>
              <span className="text-[var(--text-faint)]">status:</span>{' '}
              <span className="inline-flex items-center gap-1.5 text-[11.5px] px-2.5 py-0.5 rounded-full bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] text-[var(--accent)] border border-[color-mix(in_srgb,var(--accent)_40%,transparent)]">
                <span className="status-pulse" /> open to internships
              </span>
            </div>
            <div><span className="text-[var(--text-faint)]">location:</span> Sagar, Madhya Pradesh, IN</div>
            <div><span className="text-[var(--text-faint)]">education:</span> B.Tech CS (AI &amp; ML), MITS Gwalior</div>
            <div><span className="text-[var(--text-faint)]">cgpa:</span> <span className="text-[var(--accent-2)]">7.94</span></div>
            <div>
              <span className="text-[var(--text-faint)]">stack:</span>{' '}
              <span className="text-[var(--accent)]">[Python, FastAPI, React, PyTorch, XGBoost]</span>
            </div>
            <div><span className="text-[var(--text-faint)]">current:</span> 6G Research &amp; Innovation Intern @ HNNOIX</div>
          </div>
        </div>
      </div>
    </header>
  )
}
