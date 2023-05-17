import {
  Environment,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Artics } from "../Model/Artics";

export default function Scene() {
  return (
    <Canvas
      camera={{
        fov: 65,
        position: [0, 0, 8.3],
      }}>
      <ScrollControls pages={6} damping={0.25}>
        <Artics />
      </ScrollControls>

      <ambientLight intensity={1} />
      <Environment preset='city' />
      <directionalLight
        intensity={2.5}
        position={[10, 10, 10]}
        color={"#ffffff"}
      />
    </Canvas>
  );
}
