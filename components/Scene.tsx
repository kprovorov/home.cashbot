"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  return (
    <Canvas camera={{ fov: 25, position: [0, 0, 9] }}>
      <Model />
      <Environment preset="sunset" />
    </Canvas>
  );
}
