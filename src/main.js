import * as THREE from 'three'
import { createGlobe, createStars } from './world/globe.js'
import { createPlane, updatePlane } from './entities/plane.js'
import { createHUD, updateTimer, updateCompass, updateThrottle, showScorePopup } from './ui/hud.js'
import { createFallingPackage, updatePackage } from './entities/package.js'
import { createStartScreen, createEndScreen, createDailyEndScreen } from './ui/screens.js'
import { createCityPins, setActivePin, getRandomCityIndex, CITIES, showCityReveal } from './world/cities.js'
import { scoreDelivery, angularDistanceMiles } from './game/scoring.js'
import { getDailySequence, getDailyNumber, getTimeMultiplier } from './game/daily.js'

// Scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 6)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
scene.add(ambientLight)
const dirLight = new THREE.DirectionalLight(0xffffff, 1.5)
dirLight.position.set(5, 5, 5)
scene.add(dirLight)
const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.4)
dirLight2.position.set(-5, -3, -5)
scene.add(dirLight2)

// World
const globeRadius = 6
const globe = createGlobe(scene, globeRadius)
createStars(scene)
const plane = createPlane(scene)
createCityPins(scene, globeRadius)

// HUD
const hud = createHUD()
let totalScore = 0
let deliveryCount = 0
let gameSeconds = 300
let lastTime = performance.now()
let gameOver = true
let gameStarted = false

// Game mode state
let isDailyMode = false
let currentCityList = CITIES.easy
let activeCityIndex = 0
let dailySequence = []
let dailyDropIndex = 0
let dailyElapsed = 0
let dailyDrops = []

// Plane 3D state
const planePos = new THREE.Vector3(0, 0, 1).normalize()
const planeDir = new THREE.Vector3(1, 0, 0).normalize()
let planeSpeed = 0.006

const SPEEDS = {
  slow:   0.0015,
  cruise: 0.003,
  full:   0.006
}

const activePackages = []
const keys = {}

function getCityLabel(city) {
  if (!city) return ''
  if (city.region) return `${city.name}, ${city.region}, ${city.country}`
  return `${city.name}, ${city.country}`
}

function getCurrentCity() {
  if (isDailyMode) return dailySequence[dailyDropIndex]
  return currentCityList[activeCityIndex]
}

function showStartScreen() {
  createStartScreen(
    (difficulty) => {
      // Freeplay mode
      isDailyMode = false
      currentCityList = CITIES[difficulty]
      activeCityIndex = getRandomCityIndex(currentCityList)
      totalScore = 0
      deliveryCount = 0
      gameSeconds = 300
      hud.score.textContent = 'Score: 0'
      hud.timer.textContent = '5:00'
      hud.cityName.textContent = `Deliver to: ${getCityLabel(currentCityList[activeCityIndex])}`
      gameOver = false
      gameStarted = true
      lastTime = performance.now()
    },
    () => {
      // Daily mode
      isDailyMode = true
      dailySequence = getDailySequence(CITIES)
      dailyDropIndex = 0
      dailyElapsed = 0
      dailyDrops = []
      totalScore = 0
      deliveryCount = 0
      hud.score.textContent = 'Score: 0'
      hud.timer.textContent = '0:00'
      hud.cityName.textContent = `Deliver to: ${getCityLabel(dailySequence[0])} (1/10)`
      gameOver = false
      gameStarted = true
      lastTime = performance.now()
    }
  )
}

showStartScreen()

// Input
window.addEventListener('keydown', e => {
  keys[e.key] = true
  if (e.key === ' ' && !gameOver && gameStarted) {
    e.preventDefault()
    const worldPos = planePos.clone().multiplyScalar(globeRadius + 0.25)
    const pkg = createFallingPackage(scene, worldPos, globeRadius)
    pkg.targetCity = getCurrentCity()
    pkg.scored = false
    activePackages.push(pkg)

    if (!isDailyMode) {
      activeCityIndex = getRandomCityIndex(currentCityList, activeCityIndex)
      hud.cityName.textContent = `Deliver to: ${getCityLabel(currentCityList[activeCityIndex])}`
    }
  }
})
window.addEventListener('keyup', e => keys[e.key] = false)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

const quaternion = new THREE.Quaternion()

function animate() {
  requestAnimationFrame(animate)

  if (!gameOver && gameStarted) {
    const now = performance.now()
    const delta = (now - lastTime) / 1000
    lastTime = now

    // Timer
    if (isDailyMode) {
      dailyElapsed += delta
      const m = Math.floor(dailyElapsed / 60)
      const s = Math.floor(dailyElapsed % 60)
      hud.timer.textContent = `${m}:${s.toString().padStart(2, '0')}`
    } else {
      gameSeconds = Math.max(0, gameSeconds - delta)
      updateTimer(hud.timer, gameSeconds)
      if (gameSeconds <= 0 && !gameOver) {
        gameOver = true
        createEndScreen(totalScore, deliveryCount, () => {
          totalScore = 0
          deliveryCount = 0
          gameOver = true
          hud.score.textContent = 'Score: 0'
          showStartScreen()
        })
      }
    }

    // Steering
    if (keys['ArrowLeft']) {
      quaternion.setFromAxisAngle(planePos, 0.03)
      planeDir.applyQuaternion(quaternion)
    }
    if (keys['ArrowRight']) {
      quaternion.setFromAxisAngle(planePos, -0.03)
      planeDir.applyQuaternion(quaternion)
    }

    // Speed
    if (keys['ArrowUp'] && !keys['ArrowDown']) {
      planeSpeed = SPEEDS.full
    } else if (keys['ArrowDown'] && !keys['ArrowUp']) {
      planeSpeed = SPEEDS.slow
    } else {
      planeSpeed = SPEEDS.cruise
    }

    // Move forward
    const moveAxis = new THREE.Vector3().crossVectors(planePos, planeDir).normalize()
    quaternion.setFromAxisAngle(moveAxis, -planeSpeed)
    planePos.applyQuaternion(quaternion)
    planeDir.applyQuaternion(quaternion)

    // Keep tangent to surface
    planeDir.addScaledVector(planePos, -planeDir.dot(planePos))
    planeDir.normalize()
    planePos.normalize()

    // Update plane mesh position
    const worldPos = planePos.clone().multiplyScalar(globeRadius + 0.15)
    plane.position.copy(worldPos)

    // Orient plane mesh
    const up = planePos.clone()
    const forward = planeDir.clone()
    const right = new THREE.Vector3().crossVectors(forward, up).normalize()
    const correctedForward = new THREE.Vector3().crossVectors(up, right).normalize()
    const matrix = new THREE.Matrix4().makeBasis(right, up, correctedForward.negate())
    plane.rotation.setFromRotationMatrix(matrix)

    // Banking
    const turnInput = keys['ArrowLeft'] ? 1 : keys['ArrowRight'] ? -1 : 0
    updatePlane(plane, null, null, null, globeRadius, turnInput)

    // Falling packages
    for (const pkg of activePackages) {
      updatePackage(pkg)
      if (pkg.landed && !pkg.scored) {
        pkg.scored = true
        const target = pkg.targetCity
        const packageLatDeg = Math.asin(Math.max(-1, Math.min(1, pkg.mesh.position.y / globeRadius))) * 180 / Math.PI
        const packageLonDeg = Math.atan2(-pkg.mesh.position.z, pkg.mesh.position.x) * 180 / Math.PI
        const miles = angularDistanceMiles(packageLatDeg, packageLonDeg, target.lat, target.lon)
        const { points, message } = scoreDelivery(miles)

        totalScore += points
        hud.score.textContent = `Score: ${totalScore}`
        showScorePopup(hud.popupContainer, points, message, Math.round(miles))
        showCityReveal(scene, target, globeRadius, packageLatDeg, packageLonDeg, 4000, miles)
        setTimeout(() => scene.remove(pkg.mesh), 1000)

        if (isDailyMode) {
          dailyDrops.push({ miles, points })
          dailyDropIndex++

          if (dailyDropIndex >= 10) {
            gameOver = true
            const { multiplier, label } = getTimeMultiplier(dailyElapsed)
            const finalScore = Math.round(totalScore * multiplier)
            setTimeout(() => {
              createDailyEndScreen(finalScore, dailyElapsed, dailyDrops, getDailyNumber(), () => {
                totalScore = 0
                gameOver = true
                hud.score.textContent = 'Score: 0'
                showStartScreen()
              })
            }, 2500)
          } else {
            hud.cityName.textContent = `Deliver to: ${getCityLabel(dailySequence[dailyDropIndex])} (${dailyDropIndex + 1}/10)`
          }
        } else {
          deliveryCount++
          activeCityIndex = getRandomCityIndex(currentCityList, activeCityIndex)
          hud.cityName.textContent = `Deliver to: ${getCityLabel(currentCityList[activeCityIndex])}`
        }
      }
    }

    // Compass + throttle
    const north = new THREE.Vector3(0, 1, 0)
    const northOnSurface = north.clone().addScaledVector(planePos, -north.dot(planePos)).normalize()
    const eastOnSurface = new THREE.Vector3().crossVectors(planePos, northOnSurface).normalize()
    const headingAngle = Math.atan2(-planeDir.dot(eastOnSurface), planeDir.dot(northOnSurface))
    updateCompass(hud.compassNeedle, headingAngle)
    updateThrottle(hud.throttleFill, hud.throttleLabel, planeSpeed, SPEEDS)
  } else {
    lastTime = performance.now()
  }

  // Camera
  const up = planePos.clone()
  const forward = planeDir.clone()
  const targetCamPos = planePos.clone()
    .multiplyScalar(globeRadius)
    .addScaledVector(up, 0.6)
    .addScaledVector(forward, 0.8)

  camera.position.lerp(targetCamPos, 0.12)
  camera.up.lerp(up, 0.12).normalize()
  camera.lookAt(plane.position)

  renderer.render(scene, camera)
}

animate()