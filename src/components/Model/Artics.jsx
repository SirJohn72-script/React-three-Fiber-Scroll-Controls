import React, { useRef, useLayoutEffect } from "react";
import {
  useGLTF,
  OrbitControls,
  useScroll,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { ScrollTimeline } from "./Helpers";

export function Artics(props) {
  const { nodes, materials } = useGLTF(
    "/models/Artics.glb"
  );

  // Camera
  const camera = useThree((state) => state.camera);

  // gsap
  const scrollTimeline = new ScrollTimeline();
  const scrollControls = useScroll();

  //References
  const controls = useRef();

  // Mesh References
  const generalGroup = useRef();
  const headbandRef = useRef();
  const coverLeftRef = useRef();

  const rightCoverRef = useRef();
  const rightCoverInnerRef = useRef();
  const inside1Ref = useRef();
  const inside2Ref = useRef();

  // Html div references
  const page_1_ref = useRef();
  const page_2_ref = useRef();
  const page_3_ref = useRef();
  const page_4_ref = useRef();
  const page_5_ref = useRef();
  const page_6_ref = useRef();

  useLayoutEffect(() => {
    page_1_ref.current = document.getElementById("page-1");
    page_2_ref.current = document.getElementById("page-2");
    page_3_ref.current = document.getElementById("page-3");
    page_4_ref.current = document.getElementById("page-4");
    page_5_ref.current = document.getElementById("page-5");
    page_6_ref.current = document.getElementById("page-6");
  }, []);

  useLayoutEffect(() => {
    let AnimationsData = [];

    // Fist Animation - Headband
    const HeadbandAnimations = [
      {
        // Html div
        // Restore previous animations
        objectToAnimate: page_1_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 0.5,
      },
      // html div
      {
        objectToAnimate: page_2_ref.current,
        properties: {
          opacity: 1,
          duration: 0.8,
        },
        timelinePoint: 1.3,
      },

      // Controls, Camera, Camera zoom
      {
        objectToAnimate: controls.current.target,
        properties: {
          y: 3.0974,
          x: 0,
          z: 0,
        },
        timelinePoint: 0.8,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 6.6097,
          z: 8.3,
          duration: 0.8,
        },
        timelinePoint: 1,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 2.5,
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 1,
      },
    ];
    AnimationsData = [
      ...AnimationsData,
      ...HeadbandAnimations,
    ];

    // Second Animation - Sounds Controls
    const DataSoundControlsAnimations = [
      // Restore previous animations
      {
        objectToAnimate: page_2_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 2.1,
      },

      //html div
      {
        objectToAnimate: page_3_ref.current,
        properties: {
          opacity: 1,
          duration: 0.3,
        },
        timelinePoint: 2.3,
      },
      // Controls, camera, camera zoom
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: -1.5761,
          y: -1.3143,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 2,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0,
          z: 8.3,
          duration: 0.8,
        },
        timelinePoint: 2,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 2,
          duration: 0.3,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
      },
      // General group
      {
        objectToAnimate: generalGroup.current.rotation,
        properties: {
          x: -0.38311,
          y: 0.16447,
          z: -0.1356,
          duration: 0.8,
        },
        timelinePoint: 2.1,
      },
    ];
    AnimationsData = [
      ...AnimationsData,
      ...DataSoundControlsAnimations,
    ];

    //third animation - Battery
    const BatteryAnimations = [
      // Restore previous animations
      {
        objectToAnimate: page_3_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 3.2,
      },

      //html div
      {
        objectToAnimate: page_4_ref.current,
        properties: {
          opacity: 1,
          duration: 0.3,
        },
        timelinePoint: 3.3,
      },

      // controls, camera, camera zoom
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 3,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0,
          z: 8.5,
          duration: 0.8,
        },
        timelinePoint: 3,
      },
      {
        objectToAnimate: camera,
        propertines: {
          zoom: 2.5,
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 3,
      },
      // General groups
      {
        objectToAnimate: generalGroup.current.rotation,
        properties: {
          x: 0,
          y: 1.59699,
          z: -0.63054,
          duration: 0.8,
        },
        timelinePoint: 3,
      },

      // Battery cover
      {
        objectToAnimate: coverLeftRef.current.material,
        properties: {
          opacity: 0,
          transparent: true,
          duration: 0.4,
        },
        timelinePoint: 3.3,
      },
    ];
    AnimationsData = [
      ...AnimationsData,
      ...BatteryAnimations,
    ];

    // fourth animation - Construction
    const ConstructionAnimations = [
      // Reset previous animations
      {
        objectToAnimate: page_4_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 4.1,
      },
      {
        objectToAnimate: coverLeftRef.current.material,
        properties: {
          opacity: 1,
          transparent: false,
          duration: 0.8,
        },
        timelinePoint: 4.3,
      },

      // Html div
      {
        objectToAnimate: page_5_ref.current,
        properties: {
          opacity: 1,
          duration: 0.8,
        },
        timelinePoint: 4.6,
      },

      // Controls, Camera and Camera Zoom
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: 4.4156,
          y: -1.996,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 4.1873,
          y: 0,
          z: 8.2999,
          duration: 0.8,
        },
        timelinePoint: 4,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 1.2517,
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 4.3,
      },

      // General group
      {
        objectToAnimate: generalGroup.current.rotation,
        properties: {
          x: 0.21692,
          y: -0.52559,
          z: 0.21692,
          duration: 0.8,
        },
        timelinePoint: 4.3,
      },

      // Inside headphones
      {
        objectToAnimate: rightCoverRef.current.position,
        properties: {
          x: 4.33,
          y: -0.89,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },
      {
        objectToAnimate:
          rightCoverInnerRef.current.position,
        properties: {
          x: 2.96,
          y: -0.59,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },
      {
        objectToAnimate: inside1Ref.current.position,
        properties: {
          x: 1.78,
          y: -0.4,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },
      {
        objectToAnimate: inside2Ref.current.position,
        properties: {
          x: 0.99,
          y: -0.2,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },
    ];
    AnimationsData = [
      ...AnimationsData,
      ...ConstructionAnimations,
    ];

    // Fifth Animations - Brand Logo
    const BrandLogoAnimations = [
      // Reset previous animations
      // Html div
      {
        objectToAnimate: page_5_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 5.8,
      },

      // Animations
      {
        objectToAnimate: rightCoverRef.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate:
          rightCoverInnerRef.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate: inside1Ref.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate: inside2Ref.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },

      // Current Animations
      // Html div
      {
        objectToAnimate: page_6_ref.current,
        properties: {
          opacity: 1,
          duration: 0.8,
        },
        timelinePoint: 6.2,
      },
      // Controls, Camera, Camera zoom
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: -1.8,
          y: 1.10198,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.5,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 1.8,
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 5.8,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0,
          z: 8.3,
          duration: 0.8,
        },
        timelinePoint: 5.5,
      },
      //General group
      {
        objectToAnimate: generalGroup.current.rotation,
        properties: {
          x: 0,
          y: 1.30195,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.9,
      },
    ];
    AnimationsData = [
      ...AnimationsData,
      ...BrandLogoAnimations,
    ];

    AnimationsData.map((animation) => {
      scrollTimeline.addAnimation(
        animation.objectToAnimate,
        animation.properties,
        animation.timelinePoint
      );
    });
  }, []);

  useFrame(() => {
    scrollTimeline
      .getTimeline()
      .seek(
        scrollControls.offset *
          scrollTimeline.getTimeline().duration()
      );
  });

  return (
    <>
      <group {...props} dispose={null} ref={generalGroup}>
        <mesh
          name='Battery'
          castShadow
          receiveShadow
          geometry={nodes.Battery.geometry}
          material={nodes.Battery.material}
        />
        <mesh
          name='Neon'
          castShadow
          receiveShadow
          geometry={nodes.Neon.geometry}
          material={materials.Material}
        />
        <mesh
          name='Sounds'
          castShadow
          receiveShadow
          geometry={nodes.Sounds.geometry}
          material={materials.Orange_Plastic}
        />
        <mesh
          name='Cylinders'
          castShadow
          receiveShadow
          geometry={nodes.Cylinders.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name='Pads'
          castShadow
          receiveShadow
          geometry={nodes.Pads.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name='Supports'
          castShadow
          receiveShadow
          geometry={nodes.Supports.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name='Cover_Right'
          castShadow
          receiveShadow
          geometry={nodes.Cover_Right.geometry}
          material={materials.ArticsMaterial}
          ref={rightCoverRef}
        />
        <mesh
          name='Brand'
          castShadow
          receiveShadow
          geometry={nodes.Brand.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name='Headband_Inner'
          castShadow
          receiveShadow
          geometry={nodes.Headband_Inner.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name='Inside_1'
          castShadow
          receiveShadow
          geometry={nodes.Inside_1.geometry}
          material={materials.Blue_Metallic}
          position={[0.01, 0, 0]}
          ref={inside1Ref}
        />
        <mesh
          name='Inside_2'
          castShadow
          receiveShadow
          geometry={nodes.Inside_2.geometry}
          material={materials.Orage_Mertallic}
          position={[0.01, 0, 0]}
          ref={inside2Ref}
        />
        <mesh
          name='Battery_Holder'
          castShadow
          receiveShadow
          geometry={nodes.Battery_Holder.geometry}
          material={materials.ArticsMaterial}
          position={[0, 0.01, 0]}
        />
        <mesh
          name='Cover_Left_Inn'
          castShadow
          receiveShadow
          geometry={nodes.Cover_Left_Inn.geometry}
          material={materials.ArticsMaterial}
          position={[0, 0.01, 0]}
        />
        <mesh
          name='Cover_Right_Inn'
          castShadow
          receiveShadow
          geometry={nodes.Cover_Right_Inn.geometry}
          material={materials.ArticsMaterial}
          position={[0, 0.01, 0]}
          ref={rightCoverInnerRef}
        />
        <mesh
          name='Headband_outter'
          castShadow
          receiveShadow
          geometry={nodes.Headband_outter.geometry}
          material={materials.ArticsMaterial_Headband}
          ref={headbandRef}
        />
        <mesh
          name='Cover_Left'
          castShadow
          receiveShadow
          geometry={nodes.Cover_Left.geometry}
          material={materials.ArticsMaterial_CoverLeft}
          ref={coverLeftRef}
        />
      </group>

      {/* <mesh ref={controlsPivot}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshNormalMaterial />
      </mesh> */}
      <OrbitControls
        makeDefault
        ref={controls}
        enableZoom={false}
        minAzimuthAngle={-Math.PI / 12}
        maxAzimuthAngle={Math.PI / 12}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.6}
        enablePan={false}
      />
    </>
  );
}

useGLTF.preload("/models/Artics.glb");
