import { getDailyNumber, buildShareText } from '../game/daily.js'

export function createStartScreen(onStart, onDaily) {
  const screen = document.createElement('div')
  screen.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 10, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    z-index: 100;
  `
  screen.innerHTML = `
    <div style="text-align: center; max-width: 640px; padding: 2rem;">
      <div style="font-size: 48px; font-weight: bold; color: #ffdd00; margin-bottom: 8px; letter-spacing: 2px;">DELIVERY PILOT</div>
      <div style="font-size: 16px; color: rgba(255,255,255,0.6); margin-bottom: 32px; letter-spacing: 1px;">A GEOGRAPHY CHALLENGE</div>

      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.5rem 2rem; margin-bottom: 32px; text-align: left;">
        <div style="color: #ffdd00; font-size: 13px; letter-spacing: 1px; margin-bottom: 16px;">HOW TO PLAY</div>
        <div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 2;">
          Use the geography of the globe to find each city<br>
          Press <strong style="color:white;">SPACE</strong> to drop a package when you're overhead<br>
          Score is based on how close you land to the city<br><br>
          <span style="color: rgba(255,255,255,0.5); font-size: 13px;">← → to turn &nbsp;|&nbsp; ↑ full speed &nbsp;|&nbsp; ↓ slow &nbsp;|&nbsp; SPACE to drop</span>
        </div>
      </div>

      <!-- Daily mode -->
      <button id="daily-btn" style="
        width: 100%;
        background: rgba(255,220,0,0.1);
        border: 2px solid #ffdd00;
        color: #ffdd00;
        padding: 14px 24px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
        letter-spacing: 1px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      ">
        📦 DAILY CHALLENGE
        <span id="daily-num" style="font-size: 13px; opacity: 0.7;"></span>
      </button>

      <!-- Difficulty -->
      <div style="margin-bottom: 28px;">
        <div style="color: rgba(255,255,255,0.6); font-size: 13px; letter-spacing: 1px; margin-bottom: 14px;">OR PLAY FREEPLAY</div>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
          <button class="diff-btn" data-diff="easy" style="background: rgba(68,255,136,0.15); border: 2px solid #44ff88; color: #44ff88; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; letter-spacing: 1px;">EASY</button>
          <button class="diff-btn" data-diff="medium" style="background: rgba(255,220,0,0.15); border: 1px solid rgba(255,220,0,0.4); color: #ffdd00; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; letter-spacing: 1px;">MEDIUM</button>
          <button class="diff-btn" data-diff="hard" style="background: rgba(255,100,0,0.15); border: 1px solid rgba(255,100,0,0.4); color: #ff6400; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; letter-spacing: 1px;">HARD</button>
          <button class="diff-btn" data-diff="impossible" style="background: rgba(255,0,0,0.15); border: 1px solid rgba(255,0,0,0.4); color: #ff4444; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; letter-spacing: 1px;">IMPOSSIBLE</button>
        </div>
        <div id="diff-desc" style="color: rgba(255,255,255,0.5); font-size: 13px; margin-top: 12px; min-height: 20px;">Cities everyone should know</div>
      </div>

      <button id="start-btn" style="
        background: #ffffff;
        color: #000;
        border: none;
        padding: 14px 48px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        letter-spacing: 1px;
      ">START FREEPLAY</button>
    </div>
  `
  document.body.appendChild(screen)

  const descriptions = {
    easy: 'Cities everyone should know — 5 min timer',
    medium: 'Requires solid geography knowledge — 5 min timer',
    hard: 'Regional capitals and lesser-known cities — 5 min timer',
    impossible: 'Truly obscure — good luck — 5 min timer'
  }

  let selectedDiff = 'easy'

  const diffBtns = screen.querySelectorAll('.diff-btn')
  const diffDesc = screen.querySelector('#diff-desc')

  diffBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDiff = btn.dataset.diff
      diffDesc.textContent = descriptions[selectedDiff]
      diffBtns.forEach(b => b.style.borderWidth = '1px')
      btn.style.borderWidth = '2px'
    })
  })

  // Set daily number
  screen.querySelector('#daily-num').textContent = `#${getDailyNumber()}`

  screen.querySelector('#daily-btn').addEventListener('click', () => {
    screen.remove()
    onDaily()
  })

  const startBtn = screen.querySelector('#start-btn')
  startBtn.addEventListener('mouseover', () => startBtn.style.transform = 'scale(1.05)')
  startBtn.addEventListener('mouseout', () => startBtn.style.transform = 'scale(1)')
  startBtn.addEventListener('click', () => {
    screen.remove()
    onStart(selectedDiff)
  })

  return screen
}

export function createEndScreen(score, deliveries, onRestart) {
  const screen = document.createElement('div')
  screen.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 10, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    z-index: 100;
  `

  const rank = getRank(score)
  screen.innerHTML = `
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <div style="font-size: 18px; color: rgba(255,255,255,0.5); letter-spacing: 2px; margin-bottom: 8px;">FLIGHT COMPLETE</div>
      <div style="font-size: 64px; margin-bottom: 8px;">${rank.emoji}</div>
      <div style="font-size: 28px; font-weight: bold; color: #ffdd00; margin-bottom: 32px;">${rank.title}</div>
      <div style="display: flex; gap: 24px; justify-content: center; margin-bottom: 40px;">
        <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.5rem 2rem;">
          <div style="color: rgba(255,255,255,0.5); font-size: 12px; letter-spacing: 1px; margin-bottom: 8px;">FINAL SCORE</div>
          <div style="color: white; font-size: 36px; font-weight: bold;">${score.toLocaleString()}</div>
        </div>
        <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.5rem 2rem;">
          <div style="color: rgba(255,255,255,0.5); font-size: 12px; letter-spacing: 1px; margin-bottom: 8px;">DELIVERIES</div>
          <div style="color: white; font-size: 36px; font-weight: bold;">${deliveries}</div>
        </div>
      </div>
      <button id="restart-btn" style="
        background: #ffdd00;
        color: #000;
        border: none;
        padding: 16px 48px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        letter-spacing: 1px;
      ">FLY AGAIN</button>
    </div>
  `
  document.body.appendChild(screen)
  screen.querySelector('#restart-btn').addEventListener('click', () => {
    screen.remove()
    onRestart()
  })
  return screen
}

function getRank(score) {
  if (score >= 30000) return { emoji: '🏆', title: 'MASTER NAVIGATOR' }
  if (score >= 20000)  return { emoji: '🥇', title: 'EXPERT PILOT' }
  if (score >= 15000)  return { emoji: '🥈', title: 'SKILLED FLYER' }
  if (score >= 5000)  return { emoji: '🥉', title: 'TRAINEE PILOT' }
  return { emoji: '📦', title: 'LOST IN THE CLOUDS' }
}

export function createDailyEndScreen(score, timeSeconds, drops, dailyNumber, onRestart) {
  const screen = document.createElement('div')
  screen.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 10, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    z-index: 100;
  `

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

  screen.innerHTML = `
    <div style="text-align: center; max-width: 520px; padding: 2rem;">
      <div style="font-size: 14px; color: rgba(255,255,255,0.5); letter-spacing: 2px; margin-bottom: 4px;">DAILY CHALLENGE</div>
      <div style="font-size: 22px; font-weight: bold; color: #ffdd00; margin-bottom: 24px;">📦 Delivery Pilot #${dailyNumber}</div>

      <div style="font-size: 32px; letter-spacing: 4px; margin-bottom: 24px;">${grid}</div>

      <div style="display: flex; gap: 16px; justify-content: center; margin-bottom: 24px;">
        <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.2rem 1.5rem;">
          <div style="color: rgba(255,255,255,0.5); font-size: 12px; letter-spacing: 1px; margin-bottom: 6px;">SCORE</div>
          <div style="color: white; font-size: 32px; font-weight: bold;">${score.toLocaleString()}</div>
        </div>
        <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.2rem 1.5rem;">
          <div style="color: rgba(255,255,255,0.5); font-size: 12px; letter-spacing: 1px; margin-bottom: 6px;">TIME</div>
          <div style="color: white; font-size: 32px; font-weight: bold;">${timeStr}</div>
        </div>
      </div>

      <div id="share-text" style="
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        padding: 1rem;
        font-size: 14px;
        color: rgba(255,255,255,0.7);
        white-space: pre;
        text-align: left;
        margin-bottom: 20px;
        line-height: 1.6;
      "></div>

      <div style="display: flex; gap: 12px; justify-content: center;">
        <button id="copy-btn" style="
          background: #ffdd00;
          color: #000;
          border: none;
          padding: 12px 28px;
          font-size: 15px;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          letter-spacing: 1px;
        ">📋 COPY RESULT</button>
        <button id="restart-btn" style="
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 12px 28px;
          font-size: 15px;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          letter-spacing: 1px;
        ">PLAY AGAIN</button>
      </div>
    </div>
  `
  document.body.appendChild(screen)

  const shareText = buildShareText(dailyNumber, drops, score, timeSeconds)
  screen.querySelector('#share-text').textContent = shareText

  screen.querySelector('#copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(shareText).then(() => {
      screen.querySelector('#copy-btn').textContent = '✅ COPIED!'
      setTimeout(() => {
        screen.querySelector('#copy-btn').textContent = '📋 COPY RESULT'
      }, 2000)
    })
  })

  screen.querySelector('#restart-btn').addEventListener('click', () => {
    screen.remove()
    onRestart()
  })

  return screen
}