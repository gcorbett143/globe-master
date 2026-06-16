import * as THREE from 'three'

export function createFallingPackage(scene, startPosition, globeRadius) {
  const geo = new THREE.BoxGeometry(0.04, 0.04, 0.04)
  const mat = new THREE.MeshToonMaterial({ color: 0xffaa00 })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.copy(startPosition)
  scene.add(mesh)

  return {
    mesh,
    velocity: 0,
    globeRadius,
    landed: false
  }
}

export function updatePackage(pkg) {
  if (pkg.landed) return

  // Fall toward globe center
  const dirToCenter = pkg.mesh.position.clone().negate().normalize()
  pkg.velocity += 0.003
  pkg.mesh.position.addScaledVector(dirToCenter, pkg.velocity)
  pkg.mesh.rotation.x += 0.08
  pkg.mesh.rotation.z += 0.05

  // Check if it's hit the surface
  if (pkg.mesh.position.length() <= pkg.globeRadius + 0.06) {
    pkg.landed = true
  }
}