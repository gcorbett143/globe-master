import * as THREE from 'three'

export const CITIES = {
  easy: [
    { name: 'New York', region: 'NY', country: 'USA', lat: 40.71, lon: -74.01 },
    { name: 'Los Angeles', region: 'CA', country: 'USA', lat: 34.05, lon: -118.24 },
    { name: 'Chicago', region: 'IL', country: 'USA', lat: 41.88, lon: -87.63 },
    { name: 'Toronto', region: 'ON', country: 'Canada', lat: 43.65, lon: -79.38 },
    { name: 'Mexico City', region: null, country: 'Mexico', lat: 19.43, lon: -99.13 },
    { name: 'São Paulo', region: null, country: 'Brazil', lat: -23.55, lon: -46.63 },
    { name: 'Buenos Aires', region: null, country: 'Argentina', lat: -34.61, lon: -58.38 },
    { name: 'London', region: null, country: 'UK', lat: 51.51, lon: -0.13 },
    { name: 'Paris', region: null, country: 'France', lat: 48.86, lon: 2.35 },
    { name: 'Berlin', region: null, country: 'Germany', lat: 52.52, lon: 13.40 },
    { name: 'Madrid', region: null, country: 'Spain', lat: 40.42, lon: -3.70 },
    { name: 'Rome', region: null, country: 'Italy', lat: 41.90, lon: 12.50 },
    { name: 'Amsterdam', region: null, country: 'Netherlands', lat: 52.37, lon: 4.90 },
    { name: 'Moscow', region: null, country: 'Russia', lat: 55.75, lon: 37.62 },
    { name: 'Istanbul', region: null, country: 'Turkey', lat: 41.01, lon: 28.95 },
    { name: 'Dubai', region: null, country: 'UAE', lat: 25.20, lon: 55.27 },
    { name: 'Cairo', region: null, country: 'Egypt', lat: 30.04, lon: 31.24 },
    { name: 'Nairobi', region: null, country: 'Kenya', lat: -1.29, lon: 36.82 },
    { name: 'Mumbai', region: null, country: 'India', lat: 19.08, lon: 72.88 },
    { name: 'Beijing', region: null, country: 'China', lat: 39.91, lon: 116.39 },
    { name: 'Tokyo', region: null, country: 'Japan', lat: 35.68, lon: 139.69 },
    { name: 'Seoul', region: null, country: 'South Korea', lat: 37.57, lon: 126.98 },
    { name: 'Bangkok', region: null, country: 'Thailand', lat: 13.75, lon: 100.52 },
    { name: 'Singapore', region: null, country: 'Singapore', lat: 1.35, lon: 103.82 },
    { name: 'Sydney', region: 'NSW', country: 'Australia', lat: -33.87, lon: 151.21 },
  ],

  medium: [
    { name: 'Houston', region: 'TX', country: 'USA', lat: 29.76, lon: -95.37 },
    { name: 'Miami', region: 'FL', country: 'USA', lat: 25.77, lon: -80.19 },
    { name: 'Seattle', region: 'WA', country: 'USA', lat: 47.61, lon: -122.33 },
    { name: 'Atlanta', region: 'GA', country: 'USA', lat: 33.75, lon: -84.39 },
    { name: 'Denver', region: 'CO', country: 'USA', lat: 39.74, lon: -104.98 },
    { name: 'Boston', region: 'MA', country: 'USA', lat: 42.36, lon: -71.06 },
    { name: 'Vancouver', region: 'BC', country: 'Canada', lat: 49.25, lon: -123.12 },
    { name: 'São Paulo', region: null, country: 'Brazil', lat: -23.55, lon: -46.63 },
    { name: 'Rio de Janeiro', region: null, country: 'Brazil', lat: -22.91, lon: -43.17 },
    { name: 'Lagos', region: null, country: 'Nigeria', lat: 6.52, lon: 3.38 },
    { name: 'Johannesburg', region: null, country: 'South Africa', lat: -26.20, lon: 28.04 },
    { name: 'Cape Town', region: null, country: 'South Africa', lat: -33.93, lon: 18.42 },
    { name: 'Mumbai', region: null, country: 'India', lat: 19.08, lon: 72.88 },
    { name: 'Jakarta', region: null, country: 'Indonesia', lat: -6.21, lon: 106.85 },
    { name: 'Bangkok', region: null, country: 'Thailand', lat: 13.75, lon: 100.52 },
    { name: 'Shanghai', region: null, country: 'China', lat: 31.23, lon: 121.47 },
    { name: 'Hong Kong', region: null, country: 'China', lat: 22.32, lon: 114.17 },
    { name: 'Seoul', region: null, country: 'South Korea', lat: 37.57, lon: 126.98 },
    { name: 'Osaka', region: null, country: 'Japan', lat: 34.69, lon: 135.50 },
    { name: 'Madrid', region: null, country: 'Spain', lat: 40.42, lon: -3.70 },
    { name: 'Rome', region: null, country: 'Italy', lat: 41.90, lon: 12.50 },
    { name: 'Vienna', region: null, country: 'Austria', lat: 48.21, lon: 16.37 },
    { name: 'Stockholm', region: null, country: 'Sweden', lat: 59.33, lon: 18.07 },
    { name: 'Warsaw', region: null, country: 'Poland', lat: 52.23, lon: 21.01 },
    { name: 'Lisbon', region: null, country: 'Portugal', lat: 38.72, lon: -9.14 },
    { name: 'Tehran', region: null, country: 'Iran', lat: 35.69, lon: 51.39 },
    { name: 'Riyadh', region: null, country: 'Saudi Arabia', lat: 24.69, lon: 46.72 },
    { name: 'Bogotá', region: null, country: 'Colombia', lat: 4.71, lon: -74.07 },
    { name: 'Lima', region: null, country: 'Peru', lat: -12.05, lon: -77.04 },
    { name: 'Santiago', region: null, country: 'Chile', lat: -33.46, lon: -70.65 },
    { name: 'Karachi', region: null, country: 'Pakistan', lat: 24.86, lon: 67.01 },
    { name: 'Manila', region: null, country: 'Philippines', lat: 14.60, lon: 120.98 },
    { name: 'Kuala Lumpur', region: null, country: 'Malaysia', lat: 3.14, lon: 101.69 },
    { name: 'Cairo', region: null, country: 'Egypt', lat: 30.04, lon: 31.24 },
    { name: 'Nairobi', region: null, country: 'Kenya', lat: -1.29, lon: 36.82 },
  ],

  hard: [
    { name: 'Guadalajara', region: null, country: 'Mexico', lat: 20.66, lon: -103.35 },
    { name: 'Havana', region: null, country: 'Cuba', lat: 23.14, lon: -82.36 },
    { name: 'Guatemala City', region: null, country: 'Guatemala', lat: 14.64, lon: -90.51 },
    { name: 'Panama City', region: null, country: 'Panama', lat: 8.99, lon: -79.52 },
    { name: 'Quito', region: null, country: 'Ecuador', lat: -0.23, lon: -78.52 },
    { name: 'La Paz', region: null, country: 'Bolivia', lat: -16.50, lon: -68.15 },
    { name: 'Caracas', region: null, country: 'Venezuela', lat: 10.48, lon: -66.88 },
    { name: 'Montevideo', region: null, country: 'Uruguay', lat: -34.90, lon: -56.19 },
    { name: 'Dakar', region: null, country: 'Senegal', lat: 14.72, lon: -17.47 },
    { name: 'Accra', region: null, country: 'Ghana', lat: 5.56, lon: -0.20 },
    { name: 'Addis Ababa', region: null, country: 'Ethiopia', lat: 9.03, lon: 38.74 },
    { name: 'Dar es Salaam', region: null, country: 'Tanzania', lat: -6.79, lon: 39.21 },
    { name: 'Luanda', region: null, country: 'Angola', lat: -8.84, lon: 13.23 },
    { name: 'Khartoum', region: null, country: 'Sudan', lat: 15.55, lon: 32.53 },
    { name: 'Tunis', region: null, country: 'Tunisia', lat: 36.82, lon: 10.17 },
    { name: 'Casablanca', region: null, country: 'Morocco', lat: 33.59, lon: -7.62 },
    { name: 'Amman', region: null, country: 'Jordan', lat: 31.96, lon: 35.95 },
    { name: 'Baghdad', region: null, country: 'Iraq', lat: 33.34, lon: 44.40 },
    { name: 'Tel Aviv', region: null, country: 'Israel', lat: 32.09, lon: 34.79 },
    { name: 'St. Petersburg', region: null, country: 'Russia', lat: 59.93, lon: 30.32 },
    { name: 'Bucharest', region: null, country: 'Romania', lat: 44.43, lon: 26.10 },
    { name: 'Budapest', region: null, country: 'Hungary', lat: 47.50, lon: 19.04 },
    { name: 'Copenhagen', region: null, country: 'Denmark', lat: 55.68, lon: 12.57 },
    { name: 'Helsinki', region: null, country: 'Finland', lat: 60.17, lon: 24.94 },
    { name: 'Oslo', region: null, country: 'Norway', lat: 59.91, lon: 10.75 },
    { name: 'Zurich', region: null, country: 'Switzerland', lat: 47.38, lon: 8.54 },
    { name: 'Athens', region: null, country: 'Greece', lat: 37.98, lon: 23.73 },
    { name: 'Kyiv', region: null, country: 'Ukraine', lat: 50.45, lon: 30.52 },
    { name: 'Tashkent', region: null, country: 'Uzbekistan', lat: 41.30, lon: 69.24 },
    { name: 'Dhaka', region: null, country: 'Bangladesh', lat: 23.81, lon: 90.41 },
    { name: 'Kolkata', region: null, country: 'India', lat: 22.57, lon: 88.36 },
    { name: 'Bangalore', region: null, country: 'India', lat: 12.97, lon: 77.59 },
    { name: 'Ho Chi Minh City', region: null, country: 'Vietnam', lat: 10.82, lon: 106.63 },
    { name: 'Colombo', region: null, country: 'Sri Lanka', lat: 6.93, lon: 79.86 },
    { name: 'Minneapolis', region: 'MN', country: 'USA', lat: 44.98, lon: -93.27 },
    { name: 'Calgary', region: 'AB', country: 'Canada', lat: 51.05, lon: -114.07 },
    { name: 'Montreal', region: 'QC', country: 'Canada', lat: 45.50, lon: -73.57 },
    { name: 'Brisbane', region: 'QLD', country: 'Australia', lat: -27.47, lon: 153.02 },
    { name: 'Auckland', region: null, country: 'New Zealand', lat: -36.86, lon: 174.76 },
    { name: 'Perth', region: 'WA', country: 'Australia', lat: -31.95, lon: 115.86 },
  ],

  impossible: [
    { name: 'Ulaanbaatar', region: null, country: 'Mongolia', lat: 47.89, lon: 106.91 },
    { name: 'Bishkek', region: null, country: 'Kyrgyzstan', lat: 42.87, lon: 74.59 },
    { name: 'Dushanbe', region: null, country: 'Tajikistan', lat: 38.56, lon: 68.77 },
    { name: 'Ashgabat', region: null, country: 'Turkmenistan', lat: 37.95, lon: 58.38 },
    { name: 'Nukus', region: null, country: 'Uzbekistan', lat: 42.46, lon: 59.61 },
    { name: 'Yakutsk', region: null, country: 'Russia', lat: 62.03, lon: 129.73 },
    { name: 'Norilsk', region: null, country: 'Russia', lat: 69.35, lon: 88.19 },
    { name: 'Magadan', region: null, country: 'Russia', lat: 59.57, lon: 150.79 },
    { name: 'Iqaluit', region: 'NU', country: 'Canada', lat: 63.75, lon: -68.51 },
    { name: 'Yellowknife', region: 'NT', country: 'Canada', lat: 62.45, lon: -114.37 },
    { name: 'Whitehorse', region: 'YT', country: 'Canada', lat: 60.72, lon: -135.05 },
    { name: 'Manaus', region: null, country: 'Brazil', lat: -3.10, lon: -60.03 },
    { name: 'Belém', region: null, country: 'Brazil', lat: -1.46, lon: -48.50 },
    { name: 'Fortaleza', region: null, country: 'Brazil', lat: -3.72, lon: -38.54 },
    { name: 'Recife', region: null, country: 'Brazil', lat: -8.05, lon: -34.88 },
    { name: 'Antofagasta', region: null, country: 'Chile', lat: -23.65, lon: -70.40 },
    { name: 'Iquitos', region: null, country: 'Peru', lat: -3.75, lon: -73.25 },
    { name: 'Paramaribo', region: null, country: 'Suriname', lat: 5.87, lon: -55.17 },
    { name: 'Cayenne', region: null, country: 'French Guiana', lat: 4.93, lon: -52.33 },
    { name: 'Libreville', region: null, country: 'Gabon', lat: 0.39, lon: 9.45 },
    { name: 'Bangui', region: null, country: 'Central African Republic', lat: 4.36, lon: 18.55 },
    { name: "N'Djamena", region: null, country: 'Chad', lat: 12.11, lon: 15.04 },
    { name: 'Niamey', region: null, country: 'Niger', lat: 13.51, lon: 2.11 },
    { name: 'Ouagadougou', region: null, country: 'Burkina Faso', lat: 12.37, lon: -1.53 },
    { name: 'Conakry', region: null, country: 'Guinea', lat: 9.54, lon: -13.68 },
    { name: 'Freetown', region: null, country: 'Sierra Leone', lat: 8.49, lon: -13.23 },
    { name: 'Monrovia', region: null, country: 'Liberia', lat: 6.31, lon: -10.80 },
    { name: 'Banjul', region: null, country: 'Gambia', lat: 13.45, lon: -16.58 },
    { name: 'Bissau', region: null, country: 'Guinea-Bissau', lat: 11.86, lon: -15.60 },
    { name: 'Porto-Novo', region: null, country: 'Benin', lat: 6.49, lon: 2.63 },
    { name: 'Gitega', region: null, country: 'Burundi', lat: -3.43, lon: 29.93 },
    { name: 'Dodoma', region: null, country: 'Tanzania', lat: -6.17, lon: 35.74 },
    { name: 'Lilongwe', region: null, country: 'Malawi', lat: -13.97, lon: 33.79 },
    { name: 'Lusaka', region: null, country: 'Zambia', lat: -15.42, lon: 28.28 },
    { name: 'Windhoek', region: null, country: 'Namibia', lat: -22.56, lon: 17.08 },
    { name: 'Gaborone', region: null, country: 'Botswana', lat: -24.65, lon: 25.91 },
    { name: 'Maseru', region: null, country: 'Lesotho', lat: -29.32, lon: 27.48 },
    { name: 'Mbabane', region: null, country: 'Eswatini', lat: -26.32, lon: 31.14 },
    { name: 'Antananarivo', region: null, country: 'Madagascar', lat: -18.91, lon: 47.54 },
    { name: 'Moroni', region: null, country: 'Comoros', lat: -11.70, lon: 43.26 },
    { name: 'Port Louis', region: null, country: 'Mauritius', lat: -20.16, lon: 57.50 },
    { name: 'Djibouti', region: null, country: 'Djibouti', lat: 11.59, lon: 43.15 },
    { name: 'Asmara', region: null, country: 'Eritrea', lat: 15.34, lon: 38.93 },
    { name: 'Juba', region: null, country: 'South Sudan', lat: 4.85, lon: 31.60 },
    { name: 'Mogadishu', region: null, country: 'Somalia', lat: 2.05, lon: 45.34 },
    { name: 'Honiara', region: null, country: 'Solomon Islands', lat: -9.43, lon: 160.05 },
    { name: 'Port Moresby', region: null, country: 'Papua New Guinea', lat: -9.44, lon: 147.18 },
    { name: "Nuku'alofa", region: null, country: 'Tonga', lat: -21.13, lon: -175.20 },
    { name: 'Apia', region: null, country: 'Samoa', lat: -13.83, lon: -171.77 },
    { name: 'Funafuti', region: null, country: 'Tuvalu', lat: -8.52, lon: 179.20 },
    { name: 'Tarawa', region: null, country: 'Kiribati', lat: 1.33, lon: 173.00 },
    { name: 'Majuro', region: null, country: 'Marshall Islands', lat: 7.09, lon: 171.38 },
    { name: 'Palikir', region: null, country: 'Micronesia', lat: 6.92, lon: 158.16 },
  ]
}

function latLonToVec3(latDeg, lonDeg, radius) {
  const lat = latDeg * Math.PI / 180
  const lon = lonDeg * Math.PI / 180
  const r = radius + 0.06
  return new THREE.Vector3(
    r * Math.cos(lat) * Math.cos(lon),
    r * Math.sin(lat),
    -r * Math.cos(lat) * Math.sin(lon)
  )
}

export function createCityPins(scene, radius = 2.5) {
  return []
}

export function showCityReveal(scene, city, radius, packageLatDeg, packageLonDeg, durationMs = 4000, miles = 0) {
  const cityPos = latLonToVec3(city.lat, city.lon, radius)
  const normal = cityPos.clone().normalize()

  const dotGeo = new THREE.SphereGeometry(0.015, 8, 8)
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xff4444, transparent: true, opacity: 1 })
  const dot = new THREE.Mesh(dotGeo, dotMat)
  dot.position.copy(cityPos)
  scene.add(dot)

  const ringGeo = new THREE.RingGeometry(0.04, 0.06, 32)
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xff4444,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9
  })
  const ring = new THREE.Mesh(ringGeo, ringMat)
  ring.position.copy(cityPos)
  ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal)
  scene.add(ring)

  const objects = [
    { mesh: dot, mat: dotMat },
    { mesh: ring, mat: ringMat }
  ]

  if (miles > 100) {
    const pkgLat = packageLatDeg * Math.PI / 180
    const pkgLon = packageLonDeg * Math.PI / 180
    const pkgPos = new THREE.Vector3(
      (radius + 0.06) * Math.cos(pkgLat) * Math.cos(pkgLon),
      (radius + 0.06) * Math.sin(pkgLat),
      -(radius + 0.06) * Math.cos(pkgLat) * Math.sin(pkgLon)
    )

    const arcPoints = []
    const start = pkgPos.clone().normalize()
    const end = cityPos.clone().normalize()
    for (let i = 0; i <= 60; i++) {
      const t = i / 60
      const point = new THREE.Vector3().copy(start).lerp(end, t).normalize()
      point.multiplyScalar(radius + 0.06 + Math.sin(t * Math.PI) * 0.15)
      arcPoints.push(point)
    }

    const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints)
    const arcMat = new THREE.LineBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.8 })
    const arc = new THREE.Line(arcGeo, arcMat)
    scene.add(arc)

    const pkgDotGeo = new THREE.SphereGeometry(0.012, 8, 8)
    const pkgDotMat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 1 })
    const pkgDot = new THREE.Mesh(pkgDotGeo, pkgDotMat)
    pkgDot.position.copy(pkgPos)
    scene.add(pkgDot)

    objects.push({ mesh: arc, mat: arcMat })
    objects.push({ mesh: pkgDot, mat: pkgDotMat })
  }

  const startTime = performance.now()
  function fade() {
    const elapsed = performance.now() - startTime
    const t = Math.min(elapsed / durationMs, 1)
    objects.forEach(o => o.mat.opacity = (1 - t))
    if (t < 1) requestAnimationFrame(fade)
    else objects.forEach(o => scene.remove(o.mesh))
  }
  requestAnimationFrame(fade)
}

export function setActivePin() {}

export function getRandomCityIndex(cityList, excludeIndex = -1) {
  let index
  do {
    index = Math.floor(Math.random() * cityList.length)
  } while (index === excludeIndex)
  return index
}