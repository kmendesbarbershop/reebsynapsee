'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

const GreenParticleScene = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.2) * 0.05;
      meshRef.current.position.x = pointer.x * 0.3;
      meshRef.current.position.y = pointer.y * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 3, 32, 32]} />
      <meshBasicMaterial color="#4ade80" wireframe transparent opacity={0.35} />
    </mesh>
  );
};

export const FuturisticHero = () => {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <GreenParticleScene />
    </Canvas>
  );
};

export default FuturisticHero;