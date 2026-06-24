export function scoreDelivery(miles) {
  if (miles <= 50) return { points: 1000, message: '🎯 Bullseye!' }
  if (miles >= 3000) return { points: 0, message: '💀 Way off!' }

  let points
  if (miles <= 100) {
    points = Math.round(1000 - ((miles - 50) / 70) * 100)
  } else {
    points = Math.round(900 * Math.max(0, 1 - Math.sqrt((miles - 100) / 2900)))
  }

  let message
  if (miles < 150)   message = '⭐ Outstanding!'
  else if (miles < 400)  message = '👍 Great!'
  else if (miles < 900)  message = '😅 Not bad!'
  else if (miles < 2000) message = '😬 A little far...'
  else                   message = '📦 Way off!'

  return { points, message }
}

export function angularDistanceMiles(lat1Deg, lon1Deg, lat2Deg, lon2Deg) {
  const toRad = d => d * Math.PI / 180
  const lat1 = toRad(lat1Deg)
  const lat2 = toRad(lat2Deg)
  const dlon = toRad(lon2Deg - lon1Deg)
  const dlat = toRad(lat2Deg - lat1Deg)
  const a = Math.sin(dlat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dlon/2)**2
  const centralAngle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return centralAngle * 3958.8
}