import { stats } from '../data'

export default function About() {
  return (
    <section id="about" className="py-[90px] border-t border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-3.5">
            <span className="w-[18px] h-px bg-[var(--accent)]" />
            about
          </div>
          <h2 className="font-mono text-[28px] mb-4">The full lifecycle, not just the notebook</h2>
          <p className="text-[var(--text-dim)] leading-[1.85] text-[15.5px] mb-4">
            I'm a final-year Computer Science undergrad specializing in AI &amp; Machine Learning at MITS Gwalior. My
            projects don't stop at a Jupyter notebook — I build the pipeline, evaluate it honestly, explain its
            decisions with SHAP, and wrap it in a FastAPI backend with a React frontend people can actually use.
          </p>
          <p className="text-[var(--text-dim)] leading-[1.85] text-[15.5px] mb-4">
            I'm currently a 6G Research &amp; Innovation Intern at HNNOIX India, exploring where AI applications meet
            emerging telecom systems — bringing an LLM-and-deployment background into a research context I'm still
            learning.
          </p>
          <p className="text-[var(--text-dim)] leading-[1.85] text-[15.5px]">
            Outside of ML, I have solid systems fundamentals — C++, concurrency, socket programming — which is why I
            go after both ML engineering and general software engineering roles.
          </p>
        </div>
        {/* <div className="grid grid-cols-2 gap-3.5">
          {stats.map((s) => (
            <div key={s.label} className="border border-[var(--border)] rounded-xl px-[18px] py-[18px] bg-[var(--panel)]">
              <div className="font-mono text-[26px] font-bold text-[var(--accent)]">{s.num}</div>
              <div className="text-xs text-[var(--text-faint)] mt-1 font-mono">{s.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
