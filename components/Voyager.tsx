import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { forwardRef } from 'react';
import * as THREE from 'three';

interface VoyagerProps {
  earthRadius: number;
  earthSpeed: number;
}

export const Voyager = forwardRef<THREE.Group, VoyagerProps>(
  ({ earthRadius, earthSpeed }, ref) => {
    const { scene } = useGLTF('/assets/gltfs/voyager.glb');

    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      const group = ref as React.RefObject<THREE.Group>;
      if (group.current) {
        const launchTime = 5; // Start launch after 5 seconds
        if (elapsedTime > launchTime) {
          const journeyTime = elapsedTime - launchTime;
          group.current.position.x =
            Math.cos(launchTime * earthSpeed) * earthRadius + journeyTime * 1.4;
          group.current.position.z =
            Math.sin(launchTime * earthSpeed) * earthRadius + journeyTime * 1.4;
          group.current.position.y = journeyTime * 0.5;
          group.current.rotation.y += 0.01;
        } else {
          group.current.position.x =
            Math.cos(elapsedTime * earthSpeed) * earthRadius;
          group.current.position.z =
            Math.sin(elapsedTime * earthSpeed) * earthRadius;
        }
      }
    });

    return (
      <primitive
        ref={ref}
        object={scene}
        scale={0.05}
        rotation={[0, Math.PI, 0]}
      />
    );
  }
);