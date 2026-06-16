// Seeded random number generator — same sequence for same date
function seededRandom(seed) {
  let s = seed
  return function () {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function getDailySeed() {
  const now = new Date()
  // YYYYMMDD as integer — changes every day
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate()
}

export function getDailySequence(CITIES) {
  const seed = getDailySeed()
  const rng = seededRandom(seed)

  function pickN(pool, n) {
    const shuffled = [...pool].sort(() => rng() - 0.5)
    return shuffled.slice(0, n)
  }

  // 4 easy, 3 medium, 2 hard, 1 impossible — always in this order
  return [
    ...pickN(CITIES.easy, 4),
    ...pickN(CITIES.medium, 3),
    ...pickN(CITIES.hard, 2),
    ...pickN(CITIES.impossible, 1)
  ]
}

export function getDailyNumber() {
  // Day 1 = Jan 1 2026
  const start = new Date(2026, 0, 1)
  const now = new Date()
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24))
  return Math.max(1, diff + 1)
}

export function getTimeMultiplier(seconds) {
  if (seconds < 180)      return { multiplier: 1.5,  label: '🚀 Blazing Fast!' }
  else if (seconds < 240) return { multiplier: 1.25, label: '⚡ Quick!' }
  else if (seconds < 300) return { multiplier: 1.0,  label: '👍 Steady' }
  else if (seconds < 360) return { multiplier: 0.9,  label: '🐢 Take your time...' }
  else                    return { multiplier: 0.85, label: '😴 Slow and steady' }
}

export function buildShareText(dailyNumber, drops, finalScore, timeSeconds) {
  const m = Math.floor(timeSeconds / 60)
  const s = Math.floor(timeSeconds % 60)
  const timeStr = `${m}:${s.toString().padStart(2, '0')}`

  const emojiMap = (miles) => {
    if (miles < 50)   return '🎯'
    if (miles < 200)  return '⭐'
    if (miles < 500)  return '👍'
    if (miles < 1000) return '😅'
    if (miles < 2000) return '😬'
    return '💀'
  }

  const grid = drops.map(d => emojiMap(d.miles)).join('')

  return `📦 Delivery Pilot — Daily #${dailyNumber}\n${grid}\nScore: ${finalScore.toLocaleString()} | Time: ${timeStr}\nPlay at: globe-master-daily.vercel.app`
}