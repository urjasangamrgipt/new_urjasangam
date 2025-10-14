'use client'

import { useEffect } from 'react'
import * as THREE from 'three'

export default function KaltarangBackground() {
  useEffect(() => {
    // Three.js Starfield implementation from kaltarang.html
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas: document.getElementById('bg-canvas'), 
      alpha: true 
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.z = 1.5
    
    // Create starfield
    const starVertices = []
    for (let i = 0; i < 15000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        -Math.random() * 2000
      )
    }
    
    const starGeometry = new THREE.BufferGeometry()
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))
    
    const stars = new THREE.Points(
      starGeometry, 
      new THREE.PointsMaterial({ 
        color: 0xffffff, 
        size: 0.7, 
        transparent: true 
      })
    )
    
    scene.add(stars)
    
    // Mouse interaction
    const mouse = new THREE.Vector2()
    
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate)
      
      // Move stars towards camera
      stars.position.z += 0.1
      if (stars.position.z > 1000) {
        stars.position.z = -1000
      }
      
      // Camera follows mouse
      camera.position.x += (mouse.x * 0.2 - camera.position.x) * 0.02
      camera.position.y += (mouse.y * 0.2 - camera.position.y) * 0.02
      camera.lookAt(scene.position)
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return null
}
