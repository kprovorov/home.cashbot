"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";

const Model = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const object = useLoader(GLTFLoader, "./logo.glb");

  useFrame((state, delta) => (mesh.current.rotation.y += delta));

  return (
    <mesh ref={mesh}>
      <primitive object={object.scene} scale={2} />
    </mesh>
  );
};

export default function Scene() {
  return (
    <Canvas camera={{ fov: 25, position: [0, 0, 9] }}>
      <Model />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Environment preset="sunset" />
    </Canvas>
  );
}
