import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { SaturnRing } from './SaturnRing';

interface PlanetProps {
  texture: string;
  radius: number;
  size: number;
  speed: number;
  ring?: boolean;
}

export function Planets({ texture, radius, size, speed, ring }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null!);
  const planetTexture = useLoader(THREE.TextureLoader, texture);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (planetRef.current) {
      planetRef.current.position.x = Math.cos(elapsedTime * speed) * radius;
      planetRef.current.position.z = Math.sin(elapsedTime * speed) * radius;
      planetRef.current.rotation.y += 0.005;
    }
  });

  const orbitPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return points;
  }, [radius]);

  return (
    <group>
      <mesh ref={planetRef} castShadow receiveShadow>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={planetTexture} />
        {ring && <SaturnRing />}
      </mesh>
      <Line points={orbitPoints} color="white" transparent opacity={0.5} />
    </group>
  );
}