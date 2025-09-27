import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export function SaturnRing() {
  const texture = useLoader(THREE.TextureLoader, '/assets/textures/saturn-ring.png');

  return (
    <mesh rotation-x={Math.PI / 2}>
      <ringGeometry args={[2, 3, 64]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} transparent />
    </mesh>
  );
}