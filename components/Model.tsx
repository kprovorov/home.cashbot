"use client";

import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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

export default Model;
