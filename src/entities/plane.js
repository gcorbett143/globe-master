import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

let propDisc = null
let planeMesh = null
let currentBank = 0

export function createPlane(scene) {
  const geo = new THREE.BoxGeometry(0.08, 0.02, 0.12)
  const mat = new THREE.MeshBasicMaterial({ visible: false })
  const placeholder = new THREE.Mesh(geo, mat)
  scene.add(placeholder)

  const loader = new GLTFLoader()
  loader.load('/models/cessna_180_skywagon_bush_version.glb', (gltf) => {
    planeMesh = gltf.scene
    planeMesh.scale.setScalar(0.03)
    planeMesh.rotation.y = Math.PI / 2
    placeholder.add(planeMesh)

    const discGeo = new THREE.CircleGeometry(0.03, 32)
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x888888,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    })
    propDisc = new THREE.Mesh(discGeo, discMat)
    propDisc.position.set(0, 0, 0.11)
    placeholder.add(propDisc)

  }, undefined, (error) => {
    console.error('Model failed to load:', error)
  })

  return placeholder
}

export function updatePlane(plane, lat, lon, heading, radius = 2.5, turnInput = 0) {
  if (propDisc) {
    propDisc.rotation.z += 0.4
  }

  const targetBank = turnInput * 0.5
  currentBank += (targetBank - currentBank) * 0.08

  if (planeMesh) {
    // Reset to base orientation then apply bank
    planeMesh.rotation.set(0, Math.PI / 2, 0)
    planeMesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), currentBank)
  }
}