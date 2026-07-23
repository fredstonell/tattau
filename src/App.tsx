import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Body from "./components/body";

export default function App() {
  return (
    <Canvas camera={{ position: [3, 1, 7], fov: 60 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 90, 5]} intensity={2} />
      <Suspense fallback={null}>
        <Body />
      </Suspense>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <circleGeometry args={[2]} />
        <meshStandardMaterial color="#555555" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
