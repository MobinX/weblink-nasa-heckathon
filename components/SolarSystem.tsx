import { Canvas } from '@react-three/fiber';
import { KeyboardControls, OrbitControls, Stars } from '@react-three/drei';
import { Sun } from './Sun';
import { Planets } from './Planets';
import { Voyager } from './Voyager';
import { CameraManager } from './CameraManager';
import { useRef } from 'react';
import * as THREE from 'three';

export function SolarSystem({ isFollowing }: { isFollowing: boolean }) {
  const voyagerRef = useRef<THREE.Group>(null!);

  const earthRadius = 12;
  const earthSpeed = 0.25;

  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
      ]}
    >
      <Canvas camera={{ position: [0, 20, 50], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <Stars />
        <Sun />
        <Planets texture="/assets/textures/mercury.jpg" radius={5} size={0.5} speed={0.5} />
        <Planets texture="/assets/textures/venus.jpg" radius={8} size={0.8} speed={0.35} />
        <Planets texture="/assets/textures/earth.jpg" radius={earthRadius} size={1} speed={earthSpeed} />
        <Planets texture="/assets/textures/mars.jpg" radius={16} size={0.7} speed={0.2} />
        <Planets texture="/assets/textures/jupiter.jpg" radius={22} size={2} speed={0.1} />
        <Planets texture="/assets/textures/saturn.jpg" radius={28} size={1.8} speed={0.08} ring />
        <Planets texture="/assets/textures/uranus.jpg" radius={34} size={1.5} speed={0.05} />
        <Planets texture="/assets/textures/neptune.jpg" radius={40} size={1.4} speed={0.03} />
        <Voyager ref={voyagerRef} earthRadius={earthRadius} earthSpeed={earthSpeed} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <CameraManager voyagerRef={voyagerRef} isFollowing={isFollowing} />
      </Canvas>
    </KeyboardControls>
  );
}