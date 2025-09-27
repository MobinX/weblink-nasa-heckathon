import { SolarSystem } from '../../components/SolarSystem';
import { useState } from 'react';

export default function Page() {
  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <SolarSystem isFollowing={isFollowing} />
      <button
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1,
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        Toggle Focus on Voyager
      </button>
    </div>
  );
}
