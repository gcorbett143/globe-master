import * as THREE from 'three'

export function createGlobe(scene, radius = 2.5) {
  const geometry = new THREE.SphereGeometry(radius, 64, 64)
  const texture = new THREE.TextureLoader().load('/textures/earth.jpg')
  const material = new THREE.MeshPhongMaterial({
    map: texture,
    specular: new THREE.Color(0x222222),
    shininess: 15
  })
  const globe = new THREE.Mesh(geometry, material)
  globe.rotation.y = 0
  scene.add(globe)
  return globe
}

export function createStars(scene) {
  const geometry = new THREE.BufferGeometry()
  const count = 6000
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 400
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.3,
    sizeAttenuation: true
  })

  const stars = new THREE.Points(geometry, material)
  scene.add(stars)
  return stars
}