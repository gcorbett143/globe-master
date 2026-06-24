export function createHUD() {
  const container = document.createElement('div')
  container.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    font-family: sans-serif;
  `
  document.body.appendChild(container)

  // Timer
  const timer = document.createElement('div')
  timer.style.cssText = `
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 0 0 8px rgba(0,0,0,0.8);
  `
  timer.textContent = '5:00'
  container.appendChild(timer)

  // City name (top center, below timer)
  const cityName = document.createElement('div')
  cityName.style.cssText = `
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffdd00;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0 0 8px rgba(0,0,0,0.9);
    white-space: nowrap;
  `
  container.appendChild(cityName)

  // Score
  const score = document.createElement('div')
  score.style.cssText = `
    position: absolute;
    top: 20px;
    right: 30px;
    color: #ffffff;
    font-size: 22px;
    font-weight: bold;
    text-shadow: 0 0 8px rgba(0,0,0,0.8);
  `
  score.textContent = 'Score: 0'
  container.appendChild(score)

  // Compass (bottom left)
  const compassContainer = document.createElement('div')
  compassContainer.style.cssText = `
    position: absolute;
    bottom: 30px;
    left: 40px;
    width: 80px;
    height: 80px;
  `
  compassContainer.innerHTML = `
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
      <text x="40" y="14" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="sans-serif">N</text>
      <text x="40" y="72" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="sans-serif">S</text>
      <text x="10" y="44" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="sans-serif">W</text>
      <text x="70" y="44" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="sans-serif">E</text>
      <g id="compass-needle">
        <polygon points="40,18 44,40 40,36 36,40" fill="white"/>
        <polygon points="40,62 44,40 40,44 36,40" fill="#ff4444"/>
      </g>
    </svg>
  `
  container.appendChild(compassContainer)
  const compassNeedle = compassContainer.querySelector('#compass-needle')

  // Throttle indicator (bottom right)
  const throttleContainer = document.createElement('div')
  throttleContainer.style.cssText = `
    position: absolute;
    bottom: 30px;
    right: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  `
  throttleContainer.innerHTML = `
    <div style="color:rgba(255,255,255,0.6);font-size:11px;letter-spacing:1px;">THROTTLE</div>
    <div id="throttle-bar" style="
      width: 28px;
      height: 80px;
      background: rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
    ">
      <div id="throttle-fill" style="
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #44ff88;
        transition: height 0.1s, background 0.1s;
      "></div>
      <div style="position:absolute;top:50%;left:0;right:0;height:1px;background:rgba(255,255,255,0.4);"></div>
    </div>
    <div id="throttle-label" style="color:white;font-size:12px;font-weight:bold;">100%</div>
  `
  container.appendChild(throttleContainer)
  const throttleFill = throttleContainer.querySelector('#throttle-fill')
  const throttleLabel = throttleContainer.querySelector('#throttle-label')

  // Score popup container
  const popupContainer = document.createElement('div')
  popupContainer.style.cssText = `
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    pointer-events: none;
  `
  container.appendChild(popupContainer)

  return {
    timer,
    score,
    cityName,
    compassNeedle,
    throttleFill,
    throttleLabel,
    popupContainer,
    compassContainer,
    throttleContainer
  }
}

export function updateTimer(timerEl, secondsLeft) {
  const m = Math.floor(secondsLeft / 60)
  const s = Math.floor(secondsLeft % 60)
  timerEl.textContent = `${m}:${s.toString().padStart(2, '0')}`
  timerEl.style.color = secondsLeft < 30 ? '#ff4444' : '#ffffff'
}

export function updateCompass(compassNeedle, headingRad) {
  const deg = headingRad * (180 / Math.PI)
  compassNeedle.setAttribute('transform', `rotate(${deg}, 40, 40)`)
}

export function updateThrottle(throttleFill, throttleLabel, speed, SPEEDS) {
  if (speed === SPEEDS.slow) {
    throttleFill.style.height = '25%'
    throttleFill.style.background = '#ffcc00'
    throttleLabel.textContent = 'SLOW'
    throttleLabel.style.color = '#ffcc00'
  } else if (speed === SPEEDS.full) {
    throttleFill.style.height = '100%'
    throttleFill.style.background = '#ff4444'
    throttleLabel.textContent = 'FULL'
    throttleLabel.style.color = '#ff4444'
  } else {
    throttleFill.style.height = '55%'
    throttleFill.style.background = '#44ff88'
    throttleLabel.textContent = 'CRUISE'
    throttleLabel.style.color = '#44ff88'
  }
}

export function showScorePopup(popupContainer, points, message, miles) {
  const popup = document.createElement('div')
  popup.style.cssText = `
    color: #ffdd00;
    font-size: 26px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0,0,0,0.9);
    opacity: 1;
    transition: opacity 0.2s;
    white-space: nowrap;
    text-align: center;
  `
  const milesText = miles !== undefined ? `<div style="font-size:14px;color:rgba(255,255,255,0.7);margin-top:4px;">${miles.toLocaleString()} miles from target</div>` : ''
  popup.innerHTML = `${message}<br><span style="font-size:20px;">+${points} pts</span>${milesText}`
  popupContainer.appendChild(popup)

  setTimeout(() => { popup.style.opacity = '0' }, 1800)
  setTimeout(() => { popup.remove() }, 2200)
}