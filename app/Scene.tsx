"use client";

import { Canvas, ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";

function Box(props: ThreeElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += delta));

  const model = useLoader(GLTFLoader, "./3d/logo.gltf");

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <primitive object={model.scene} />
      {/* <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} /> */}
    </mesh>
  );
}

const Model = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, "./3d/logo.gltf");

  const [scale, setScale] = useState(10);

   useFrame((state, delta) => (mesh.current.rotation.y += delta));

  return (
    <mesh
      ref={mesh}
      onPointerOver={(event) => setScale(12)}
      onPointerOut={(event) => setScale(11)}
    >
      <primitive object={gltf.scene} scale={scale} />
    </mesh>
  );
};

export default function Scene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        {/* <OrbitControls /> */}
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
}
