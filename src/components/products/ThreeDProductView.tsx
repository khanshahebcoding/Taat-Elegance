"use client"

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDProductViewProps {
  imageUrl: string;
}

export function ThreeDProductView({ imageUrl }: ThreeDProductViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Create a cylinder to represent a folded saree roll or a plane for texture
    const geometry = new THREE.CylinderGeometry(1.5, 1.5, 4, 32);
    
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageUrl);
    const material = new THREE.MeshStandardMaterial({ 
      map: texture,
      roughness: 0.5,
      metalness: 0.1
    });

    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 6;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaMove = {
          x: e.offsetX - previousMousePosition.x,
          y: e.offsetY - previousMousePosition.y
        };

        cylinder.rotation.y += deltaMove.x * 0.01;
        cylinder.rotation.x += deltaMove.y * 0.01;
      }
      previousMousePosition = { x: e.offsetX, y: e.offsetY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    containerRef.current.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging) {
        cylinder.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousedown', handleMouseDown);
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [imageUrl]);

  return (
    <div className="relative w-full h-full bg-secondary/5 rounded-3xl cursor-grab active:cursor-grabbing flex flex-col items-center justify-center">
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute bottom-6 glass-panel px-4 py-1 rounded-full text-[10px] uppercase tracking-widest text-secondary font-bold pointer-events-none">
        Drag to rotate saree roll
      </div>
    </div>
  );
}