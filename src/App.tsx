import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Cube />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#555555" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
