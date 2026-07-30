import { useEffect, useState } from 'react'
import Heatmap from './Heatmap'
import { fetchGithubActivity, fetchLeetcodeActivity } from '../lib/activity'
import { GITHUB_USERNAME, LEETCODE_USERNAME } from '../config'

function useActivity(kind) {
  const [state, setState] = useState({ status: 'loading', data: null, error: null })

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading', data: null, error: null })

    const fetcher = kind === 'gh' ? fetchGithubActivity(GITHUB_USERNAME) : fetchLeetcodeActivity(LEETCODE_USERNAME)

    fetcher
      .then((data) => {
        if (!cancelled) setState({ status: 'ready', data, error: null })
      })
      .catch((err) => {
        if (!cancelled) setState({ status: 'error', data: null, error: err.message || 'Failed to load activity data' })
      })

    return () => {
      cancelled = true
    }
  }, [kind])

  return state
}

export default function Activity() {
  const [tab, setTab] = useState('gh')
  const gh = useActivity('gh')
  const lc = useActivity('lc')
  const current = tab === 'gh' ? gh : lc

  return (
    <section id="activity" className="py-[90px] border-t border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-end justify-between gap-5 flex-wrap mb-11">
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-3.5">
              <span className="w-[18px] h-px bg-[var(--accent)]" />
              activity
            </div>
            <h2 className="font-mono text-[28px]">Contributions &amp; problem solving</h2>
          </div>
          <div className="flex gap-1.5 bg-[var(--panel-2)] border border-[var(--border)] rounded-[10px] p-1 w-fit">
            {[
              ['gh', 'GitHub'],
              ['lc', 'LeetCode'],
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
        </div>

        <div className="border border-[var(--border)] bg-[var(--panel)] rounded-[14px] p-6 shadow-[var(--shadow)] min-h-[220px]">
          {current.status === 'loading' && (
            <div className="flex items-center justify-center h-[180px] font-mono text-[13px] text-[var(--text-faint)]">
              fetching {tab === 'gh' ? 'GitHub' : 'LeetCode'} activity…
            </div>
          )}

          {current.status === 'error' && (
            <div className="flex flex-col items-center justify-center h-[180px] gap-2 text-center">
              <div className="font-mono text-[13px] text-[var(--danger)]">
                Couldn't load {tab === 'gh' ? 'GitHub' : 'LeetCode'} activity.
              </div>
              <div className="font-mono text-[11.5px] text-[var(--text-faint)] max-w-[46ch]">{current.error}</div>
            </div>
          )}

          {current.status === 'ready' && (
            <Heatmap
              cells={current.data.cells}
              total={current.data.total}
              streak={current.data.streak}
              best={current.data.best}
              extra={current.data.extra}
              kind={tab === 'gh' ? 'github' : 'leetcode'}
              colorVar={tab === 'gh' ? '--accent' : '--accent-2'}
            />
          )}
        </div>

        {/* <p className="mt-4 font-mono text-[11.5px] text-[var(--text-faint)]">
          * live data — GitHub via github-contributions-api.jogruber.de, LeetCode via leetcode-stats.tashif.codes.
          Confirm <code>LEETCODE_USERNAME</code> in <code>src/config.js</code> matches your real handle.
        </p> */}
      </div>
    </section>
  )
}
