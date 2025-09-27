import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export function Sun() {
  const texture = useLoader(THREE.TextureLoader, '/assets/textures/sun.jpg');
  const sunRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        emissiveMap={texture}
        emissiveIntensity={3}
        emissive={new THREE.Color(0xffffff)}
      />
      <pointLight castShadow intensity={1000} />
    </mesh>
  );
}