import {
  Environment,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Artics } from "./Artics";

export default function Scene() {
  return (
    <Canvas
      camera={{
        fov: 65,
        position: [0, 0, 8.3],
      }}
      shadows>
      <ScrollControls pages={6} damping={0.25}>
        <Artics />
      </ScrollControls>

      <ambientLight intensity={1.6} />
      <Environment
        files={"../models/abandoned_tiled_room_1k.hdr"}
      />
    </Canvas>
  );
}
