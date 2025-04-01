'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { motion } from "framer-motion";

export function SpinningCoin() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // -------------------------------
    // Scene, Camera, and Renderer Setup
    // -------------------------------
    const scene = new THREE.Scene();
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 16);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // -------------------------------
    // Create the Coin Mesh
    // -------------------------------
    const geometry = new THREE.CylinderGeometry(5.5, 5.5, 0.4, 32);
    geometry.center();
    const faceMaterial = new THREE.MeshBasicMaterial({ color: 0x0433FF });
    const edgeMaterial = new THREE.MeshBasicMaterial({ color: 0x043392 });

    const materials = [edgeMaterial, faceMaterial, faceMaterial];
    const coin = new THREE.Mesh(geometry, materials);
    scene.add(coin);

    // Set initial position to show face
    coin.rotation.x = Math.PI / 2;
    
    // -------------------------------
    // Spin Control Setup
    // -------------------------------
    let isDragging = false;
    let previousMouseX = 0;
    let rotationSpeed = 0;
    const friction = 0.95;

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMouseX = e.clientX;
    });

    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      previousMouseX = e.touches[0].clientX;
    });

    container.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        rotationSpeed = deltaX * 0.01;
        // Rotate around Z axis (side-to-side flip)
        coin.rotation.z += rotationSpeed;
        previousMouseX = e.clientX;
      }
    });

    container.addEventListener('touchmove', (e) => {
      if (isDragging) {
        const deltaX = e.touches[0].clientX - previousMouseX;
        rotationSpeed = deltaX * 0.01;
        // Rotate around Z axis (side-to-side flip)
        coin.rotation.z += rotationSpeed;
        previousMouseX = e.touches[0].clientX;
      }
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // -------------------------------
    // Animation Loop
    // -------------------------------
    function animate() {
      requestAnimationFrame(animate);
      
      // Apply momentum when not dragging
      if (!isDragging && Math.abs(rotationSpeed) > 0.0001) {
        coin.rotation.z += rotationSpeed;
        rotationSpeed *= friction;
      }

      renderer.render(scene, camera);
    }

    // -------------------------------
    // Resize Handler
    // -------------------------------
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    handleResize();
    animate();
    window.addEventListener('resize', handleResize);

    // -------------------------------
    // Cleanup on Unmount
    // -------------------------------
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      faceMaterial.dispose();
      edgeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[250px]"
      ref={containerRef}
      style={{
        minHeight: '250px',
        cursor: 'grab',
        touchAction: 'none'
      }}
    />
  );
}
