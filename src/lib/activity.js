// Normalized shape both fetchers resolve to:
// {
//   cells: [{ date: Date, count: number, level: 0-4 }],
//   total: number,
//   streak: number,
//   best: number,
//   extra: {} // source-specific stats (e.g. easy/medium/hard for LeetCode)
// }

export async function fetchGithubActivity(username) {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
  if (!res.ok) throw new Error(`GitHub activity request failed (${res.status})`)
  const json = await res.json()
  if (json.error) throw new Error(json.error)

  const cells = json.contributions.map((c) => ({
    date: new Date(c.date),
    count: c.count,
    level: c.level,
  }))

  const total = Object.values(json.total || {})[0] ?? cells.reduce((sum, c) => sum + c.count, 0)
  const best = cells.reduce((m, c) => Math.max(m, c.count), 0)

  let streak = 0
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i].count > 0) streak++
    else break
  }

  return { cells, total, streak, best, extra: {} }
}

export async function fetchLeetcodeActivity(username) {
  const [statsRes, heatmapRes] = await Promise.all([
    fetch(`https://leetcode-stats.tashif.codes/${username}`),
    fetch(`https://leetcode-stats.tashif.codes/${username}/heatmap`),
  ])

  if (!statsRes.ok) throw new Error(`LeetCode stats request failed (${statsRes.status})`)
  if (!heatmapRes.ok) throw new Error(`LeetCode heatmap request failed (${heatmapRes.status})`)

  const stats = await statsRes.json()
  const heatmap = await heatmapRes.json()

  if (stats.status === 'error') throw new Error(stats.message || 'LeetCode stats lookup failed')
  if (heatmap.status === 'error') throw new Error(heatmap.message || 'LeetCode heatmap lookup failed')

  const cells = (heatmap.dailyContributions || []).map((d) => ({
    date: new Date(d.date),
    count: d.count,
    level: d.level,
  }))

  return {
    cells,
    total: stats.totalSolved ?? heatmap.totalSubmissions ?? 0,
    streak: heatmap.currentStreak ?? 0,
    best: heatmap.maxDailySubmissions ?? 0,
    extra: {
      easy: stats.easySolved ?? 0,
      medium: stats.mediumSolved ?? 0,
      hard: stats.hardSolved ?? 0,
    },
  }
}
