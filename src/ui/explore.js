import * as THREE from 'three'

function latLonToVec3(latDeg, lonDeg, radius) {
  const lat = latDeg * Math.PI / 180
  const lon = lonDeg * Math.PI / 180
  const r = radius + 0.08
  return new THREE.Vector3(
    r * Math.cos(lat) * Math.cos(lon),
    r * Math.sin(lat),
    -r * Math.cos(lat) * Math.sin(lon)
  )
}

function getLabelColor(miles) {
  if (miles < 30)   return { bg: 'rgba(0,150,70,0.9)',   border: '#00cc55' }
  if (miles < 500)  return { bg: 'rgba(0,120,50,0.9)',   border: '#00aa44' }
  if (miles < 1000) return { bg: 'rgba(180,140,0,0.9)',  border: '#ffcc00' }
  if (miles < 2000) return { bg: 'rgba(190,70,0,0.9)',   border: '#ff6600' }
  return               { bg: 'rgba(150,0,0,0.9)',        border: '#ff2222' }
}

export function createExploreMode(scene, camera, renderer, globe, drops, dailySequence, globeRadius, onExit) {
  const objects = []
  const labelData = []

  // Convert screen position to point on unit sphere
  function screenToSphere(clientX, clientY) {
    const rect = renderer.domElement.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 2 - 1
    const y = -((clientY - rect.top) / rect.height) * 2 + 1
    const ray = new THREE.Raycaster()
    ray.setFromCamera(new THREE.Vector2(x, y), camera)
    const sphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), globeRadius)
    const target = new THREE.Vector3()
    const hit = ray.ray.intersectSphere(sphere, target)
    return hit ? target.normalize() : null
  }

  let isDragging = false
  let prevMouse = { x: 0, y: 0 }
  const currentQuat = new THREE.Quaternion()
  let spinY = 0
  let tiltX = 0

  function applyRotation() {
    const qY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), spinY)
    const qX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), tiltX)
    currentQuat.copy(qY).multiply(qX)
    globe.quaternion.copy(currentQuat)
    pivot.quaternion.copy(currentQuat)
  }

  function onMouseDown(e) {
    isDragging = true
    prevMouse = { x: e.clientX, y: e.clientY }
  }

  function onMouseMove(e) {
    if (!isDragging) return
    const dx = e.clientX - prevMouse.x
    const dy = e.clientY - prevMouse.y

    // Always rotate around SCREEN axes, not globe's local axes
    // This prevents twist/roll completely
    const screenYAxis = new THREE.Vector3(0, 1, 0) // world Y — always spins left/right
    const screenXAxis = new THREE.Vector3(1, 0, 0) // world X — always tilts up/down

    const qY = new THREE.Quaternion().setFromAxisAngle(screenYAxis, dx * 0.005)
    const qX = new THREE.Quaternion().setFromAxisAngle(screenXAxis, dy * 0.005)

    // Apply Y spin first, then X tilt — both in world space
    currentQuat.premultiply(qY).premultiply(qX)

    // Extract the current tilt to clamp it
    // Get the angle between world Y and the globe's transformed Y
    const globeUp = new THREE.Vector3(0, 1, 0).applyQuaternion(currentQuat)
    const tiltAngle = Math.acos(Math.max(-1, Math.min(1, globeUp.y)))
    if (tiltAngle > Math.PI / 2.2) {
      // Undo the X rotation if we'd exceed the tilt limit
      currentQuat.premultiply(qX.invert())
    }

    globe.quaternion.copy(currentQuat)
    pivot.quaternion.copy(currentQuat)
    prevMouse = { x: e.clientX, y: e.clientY }
  }

  function onMouseUp() { isDragging = false }

  const pivot = new THREE.Group()
  scene.add(pivot)

  drops.forEach((drop, i) => {
    const city = dailySequence[i]
    const cityPos = latLonToVec3(city.lat, city.lon, globeRadius)
    const normal = cityPos.clone().normalize()

    const dotGeo = new THREE.SphereGeometry(0.025, 8, 8)
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xff4444 })
    const dot = new THREE.Mesh(dotGeo, dotMat)
    dot.position.copy(cityPos)
    pivot.add(dot)
    objects.push(dot)

    const ringGeo = new THREE.RingGeometry(0.05, 0.075, 32)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff4444,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.position.copy(cityPos)
    ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal)
    pivot.add(ring)
    objects.push(ring)

    const pkgLat = drop.packageLatDeg * Math.PI / 180
    const pkgLon = drop.packageLonDeg * Math.PI / 180
    const pkgPos = new THREE.Vector3(
      (globeRadius + 0.08) * Math.cos(pkgLat) * Math.cos(pkgLon),
      (globeRadius + 0.08) * Math.sin(pkgLat),
      -(globeRadius + 0.08) * Math.cos(pkgLat) * Math.sin(pkgLon)
    )

    const pkgGeo = new THREE.SphereGeometry(0.02, 8, 8)
    const pkgMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 })
    const pkgDot = new THREE.Mesh(pkgGeo, pkgMat)
    pkgDot.position.copy(pkgPos)
    pivot.add(pkgDot)
    objects.push(pkgDot)

    if (drop.miles > 50) {
      const arcPoints = []
      const start = pkgPos.clone().normalize()
      const end = cityPos.clone().normalize()
      for (let j = 0; j <= 60; j++) {
        const t = j / 60
        const point = new THREE.Vector3().copy(start).lerp(end, t).normalize()
        point.multiplyScalar(globeRadius + 0.08 + Math.sin(t * Math.PI) * 0.2)
        arcPoints.push(point)
      }
      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints)
      const arcMat = new THREE.LineBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.6 })
      const arc = new THREE.Line(arcGeo, arcMat)
      pivot.add(arc)
      objects.push(arc)
    }

    const { bg, border } = getLabelColor(drop.miles)
    const label = document.createElement('div')
    label.style.cssText = `
      position: fixed;
      background: ${bg};
      color: white;
      font-family: sans-serif;
      font-size: 12px;
      padding: 5px 9px;
      border-radius: 5px;
      border: 1px solid ${border};
      pointer-events: none;
      white-space: nowrap;
      transform: translate(-50%, -130%);
      display: none;
      z-index: 60;
    `
    const milesText = drop.miles < 30 ? '🎯 Bullseye!' : `${Math.round(drop.miles).toLocaleString()} mi off`
    label.innerHTML = `<strong>${city.name}, ${city.country}</strong><br><span style="opacity:0.85">${milesText}</span>`
    document.body.appendChild(label)

    // Create a Three.js object AT the city position to use for projection
    const labelAnchor = new THREE.Object3D()
    labelAnchor.position.copy(cityPos)
    pivot.add(labelAnchor)

    labelData.push({ el: label, anchor: labelAnchor, localPos: cityPos.clone() })
  })

  // Overlay
  const overlay = document.createElement('div')
  overlay.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    font-family: sans-serif;
    z-index: 50;
  `

  const title = document.createElement('div')
  title.style.cssText = `
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffdd00;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0 0 8px rgba(0,0,0,0.9);
  `
  title.textContent = '🌍 EXPLORE — Drag to rotate'
  overlay.appendChild(title)

  const resultsList = document.createElement('div')
  resultsList.style.cssText = `
    position: absolute;
    top: 60px;
    right: 20px;
    background: rgba(0,0,10,0.85);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 12px 16px;
    color: white;
    font-size: 13px;
    max-width: 240px;
  `
  resultsList.innerHTML = `
    <div style="color:#ffdd00;font-size:11px;letter-spacing:1px;margin-bottom:10px;">YOUR DROPS</div>
    ${drops.map((d, i) => {
      const city = dailySequence[i]
      const emoji = d.miles < 30 ? '🎯' : d.miles < 200 ? '⭐' : d.miles < 500 ? '👍' : d.miles < 1000 ? '😅' : d.miles < 2000 ? '😬' : '💀'
      return `<div style="display:flex;justify-content:space-between;gap:16px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
        <span>${emoji} ${city.name}</span>
        <span style="color:rgba(255,255,255,0.5)">${Math.round(d.miles).toLocaleString()} mi</span>
      </div>`
    }).join('')}
  `
  overlay.appendChild(resultsList)

  const resetBtn = document.createElement('button')
  resetBtn.style.cssText = `
    position: absolute;
    bottom: 30px;
    left: calc(50% + 120px);
    background: rgba(255,255,255,0.15);
    color: white;
    border: 1px solid rgba(255,255,255,0.3);
    padding: 12px 20px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    letter-spacing: 1px;
    pointer-events: all;
  `
  resetBtn.textContent = '⬆️ Reset North'
  overlay.appendChild(resetBtn)

  const exitBtn = document.createElement('button')
  exitBtn.style.cssText = `
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffdd00;
    color: #000;
    border: none;
    padding: 12px 36px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    letter-spacing: 1px;
    pointer-events: all;
  `
  exitBtn.textContent = 'BACK TO MENU'
  overlay.appendChild(exitBtn)
  document.body.appendChild(overlay)

  // Fixed camera
  camera.position.set(0, 0, 14)
  camera.up.set(0, 1, 0)
  camera.lookAt(0, 0, 0)

  renderer.domElement.addEventListener('mousedown', onMouseDown)
  renderer.domElement.addEventListener('mousemove', onMouseMove)
  renderer.domElement.addEventListener('mouseup', onMouseUp)

  // Render loop with correct label projection
  let running = true

  function exploreLoop() {
    if (!running) return
    requestAnimationFrame(exploreLoop)

    camera.position.set(0, 0, 14)
    camera.up.set(0, 1, 0)
    camera.lookAt(0, 0, 0)

    renderer.render(scene, camera)

    // Project label anchors AFTER render so matrices are up to date
    labelData.forEach(({ el, anchor }) => {
      const worldPos = new THREE.Vector3()
      anchor.getWorldPosition(worldPos)

      const toCamera = new THREE.Vector3(0, 0, 14).sub(worldPos).normalize()
      const surfaceNormal = worldPos.clone().normalize()
      const facing = surfaceNormal.dot(toCamera)

      if (facing < 0.15) {
        el.style.display = 'none'
        return
      }

      const projected = worldPos.clone().project(camera)
      const x = (projected.x * 0.5 + 0.5) * window.innerWidth
      const y = (-projected.y * 0.5 + 0.5) * window.innerHeight
      el.style.display = 'block'
      el.style.left = x + 'px'
      el.style.top = y + 'px'
    })
  }

  exploreLoop()

  exitBtn.addEventListener('click', () => {
    running = false
    scene.remove(pivot)
    labelData.forEach(({ el }) => el.remove())
    overlay.remove()
    resetBtn.remove()
    renderer.domElement.removeEventListener('mousedown', onMouseDown)
    renderer.domElement.removeEventListener('mousemove', onMouseMove)
    renderer.domElement.removeEventListener('mouseup', onMouseUp)
    globe.quaternion.set(0, 0, 0, 1)
    pivot.quaternion.set(0, 0, 0, 1)
    onExit()
  })

  resetBtn.addEventListener('click', () => {
    const startQuat = currentQuat.clone()

    // Find the roll by checking where the globe's "right" axis points
    // Project globe's X axis onto the screen plane and find its angle from horizontal
    const globeRight = new THREE.Vector3(1, 0, 0).applyQuaternion(currentQuat)
    const globeUp = new THREE.Vector3(0, 1, 0).applyQuaternion(currentQuat)
    const roll = Math.atan2(globeUp.x, globeUp.y)
    const endQuat = new THREE.Quaternion()
      .setFromAxisAngle(new THREE.Vector3(0, 0, 1), roll)
      .multiply(currentQuat)

    const startTime = performance.now()
    const duration = 600

    function animateReset() {
      const t = Math.min((performance.now() - startTime) / duration, 1)
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      currentQuat.slerpQuaternions(startQuat, endQuat, eased)
      globe.quaternion.copy(currentQuat)
      pivot.quaternion.copy(currentQuat)
      if (t < 1) requestAnimationFrame(animateReset)
    }
    animateReset()
  })
}