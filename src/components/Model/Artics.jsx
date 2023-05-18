import React, {
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  useGLTF,
  OrbitControls,
  useScroll,
  Html,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as dat from "dat.gui";
import * as THREE from "three";
import gsap from "gsap";
import Labels from "./Labels";

export function Artics(props) {
  const { nodes, materials } = useGLTF(
    "/models/Artics.glb"
  );

  // Camera
  const gui = new dat.GUI({ width: 400 });
  const camera = useThree((state) => state.camera);

  // gsap
  const timeline = useRef();
  const scroll = useScroll();

  //References
  const controls = useRef();
  const controlsPivot = useRef();

  // mesh refs
  const generalGroup = useRef();
  const diademaTop1Ref = useRef();
  const diademaTop2Ref = useRef();
  const coverLeftRef = useRef();

  const rightTapRef = useRef();
  const innerTapRef = useRef();
  const inside1Ref = useRef();
  const inside2Ref = useRef();
  const padRightRef = useRef();
  const hornRightRef = useRef();

  const page_1_ref = useRef();
  const page_2_ref = useRef();
  const page_3_ref = useRef();
  const page_4_ref = useRef();
  const page_5_ref = useRef();
  const page_6_ref = useRef();

  useLayoutEffect(() => {
    //timeline
    timeline.current = gsap.timeline();

    // Controls
    const controlFolder = gui.addFolder("Controls");
    controlFolder
      .add(controls.current.target, "x", -10, 10, 0.0001)
      .onChange((x) => {
        controlsPivot.current.position.x = x;
      });
    controlFolder
      .add(controls.current.target, "z", -10, 10, 0.0001)
      .onChange((z) => {
        controlsPivot.current.position.z = z;
      });
    controlFolder
      .add(controls.current.target, "y", -10, 10, 0.0001)
      .onChange((y) => {
        controlsPivot.current.position.y = y;
      });

    //  Camera
    const cameraFolder = gui.addFolder("Camera");
    cameraFolder
      .add(camera.position, "x", -30, 30, 0.0001)
      .onChange((x) => {
        camera.position.x = x;
      });
    cameraFolder
      .add(camera.position, "z", -30, 30, 0.0001)
      .onChange((z) => {
        camera.position.z = z;
      });
    cameraFolder
      .add(camera.position, "y", -30, 30, 0.0001)
      .onChange((y) => {
        camera.position.y = y;
      });

    cameraFolder
      .add(camera, "zoom", 1, 4, 0.0001)
      .onChange(() => {
        camera.updateProjectionMatrix();
      });

    const generalGroupFolder =
      gui.addFolder("General Group");
    generalGroupFolder.add(
      generalGroup.current.rotation,
      "x",
      -Math.PI * 2,
      Math.PI * 2,
      0.00001
    );
    generalGroupFolder.add(
      generalGroup.current.rotation,
      "y",
      -Math.PI * 2,
      Math.PI * 2,
      0.00001
    );
    generalGroupFolder.add(
      generalGroup.current.rotation,
      "z",
      -Math.PI * 2,
      Math.PI * 2,
      0.00001
    );

    const coverLeftFolder = gui.addFolder("Cover Left");
    coverLeftFolder.add(
      coverLeftRef.current.position,
      "x",
      -20,
      20,
      0.00001
    );
    coverLeftFolder.add(
      coverLeftRef.current.position,
      "y",
      -20,
      20,
      0.00001
    );
    coverLeftFolder.add(
      coverLeftRef.current.position,
      "z",
      -20,
      20,
      0.00001
    );

    //
    const others = gui.addFolder("others");
    others.add(
      rightTapRef.current.position,
      "x",
      -10,
      20,
      0.00001
    );

    others.add(
      rightTapRef.current.position,
      "y",
      -10,
      20,
      0.00001
    );

    others.add(
      innerTapRef.current.position,
      "x",
      -10,
      20,
      0.00001
    );
    others.add(
      innerTapRef.current.position,
      "y",
      -10,
      20,
      0.00001
    );

    others.add(
      inside1Ref.current.position,
      "x",
      -10,
      20,
      0.00001
    );
    others.add(
      inside1Ref.current.position,
      "y",
      -10,
      20,
      0.00001
    );

    others.add(
      inside2Ref.current.position,
      "x",
      -10,
      20,
      0.00001
    );
    others.add(
      inside2Ref.current.position,
      "y",
      -10,
      20,
      0.00001
    );

    others.add(
      padRightRef.current.position,
      "x",
      -10,
      20,
      0.00001
    );
    others.add(
      padRightRef.current.position,
      "y",
      -10,
      20,
      0.00001
    );

    others.add(
      hornRightRef.current.position,
      "x",
      -10,
      20,
      0.00001
    );
    others.add(
      hornRightRef.current.position,
      "y",
      -10,
      20,
      0.00001
    );

    return () => {
      gui.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    const page_1 = window.document.getElementById("page-1");
    const page_2 = window.document.getElementById("page-2");
    const page_3 = window.document.getElementById("page-3");
    const page_4 = window.document.getElementById("page-4");
    const page_5 = window.document.getElementById("page-5");
    const page_6 = window.document.getElementById("page-6");
    page_1_ref.current = page_1;
    page_2_ref.current = page_2;
    page_3_ref.current = page_3;
    page_4_ref.current = page_4;
    page_5_ref.current = page_5;
    page_6_ref.current = page_6;
  }, []);

  useLayoutEffect(() => {
    timeline.current = gsap.timeline();
    timeline.current.to(generalGroup.current.position, {
      x: 0,
      y: 0,
      z: 0,
    });

    // Init animation - Diadema
    timeline.current
      .to(
        page_1_ref.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        0.8
      )
      .to(
        controls.current.target,
        {
          y: 3.0974,
          duration: 0.8,
        },
        1
      )
      .to(
        camera.position,
        {
          y: 6.6098,
          duration: 0.8,
        },
        1
      )
      .to(
        camera,
        {
          zoom: 2.5,
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        1
      )
      .to(
        diademaTop1Ref.current.material,
        {
          transparent: true,
          opacity: 0.2,
          duration: 0.3,
        },
        1.2
      )
      .to(
        page_2_ref.current,
        {
          opacity: 1,
          duration: 0.8,
        },
        1.3
      )
      .to(
        diademaTop2Ref.current.material,
        {
          transparent: true,
          opacity: 0.2,
          duration: 0.8,
        },
        1.3
      );

    //Second animation - Sound controls
    timeline.current
      .to(
        diademaTop1Ref.current.material,
        {
          transparent: true,
          opacity: 1,
          duration: 0.8,
        },
        2.3
      )
      .to(
        page_2_ref.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        2.1
      )
      .to(
        page_3_ref.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        2.3
      )
      .to(
        diademaTop2Ref.current.material,
        {
          transparent: true,
          opacity: 1,
          duration: 0.8,
        },
        2.3
      )
      .to(
        controls.current.target,
        {
          x: -1.5761,
          y: -1.3143,
          z: 0,
          duration: 0.8,
          onStart: () => {
            diademaTop1Ref.current.material.opacity = 1;
            diademaTop2Ref.current.material.opacity = 1;
          },
        },
        2
      )
      .to(
        camera.position,
        {
          x: 0,
          y: 0,
          z: 8.3,
          duration: 0.8,
        },
        2
      )
      .to(
        camera,
        {
          zoom: 2,
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        2.3
      )
      .to(
        generalGroup.current.rotation,
        {
          x: -0.38311,
          y: 0.16447,
          z: -0.1356,
          duration: 0.8,
        },
        2.1
      );

    //third animation - battery
    timeline.current
      .to(
        controls.current.target,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        3
      )
      .to(
        page_3_ref.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        3.2
      )
      .to(
        camera.position,
        {
          x: 0,
          y: 0,
          z: 8.5,
          duration: 0.8,
        },
        3
      )
      .to(
        camera,
        {
          zoom: 2.5,
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        3
      )
      .to(
        generalGroup.current.rotation,
        {
          x: 0,
          y: 1.59699,
          z: -0.63054,
          duration: 0.8,
        },
        3
      )
      .to(
        page_4_ref.current,
        {
          opacity: 1,
          duration: 0.6,
        },
        3.2
      )
      .to(
        coverLeftRef.current.material,
        {
          opacity: 0,
          transparent: true,
          duration: 0.4,
        },
        3.3
      );

    //Forth animation - Construction
    timeline.current
      .to(
        coverLeftRef.current.material,
        {
          opacity: 1,
          transparent: true,
          duration: 0.8,
        },
        4.3
      )
      .to(
        page_4_ref.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        4.1
      )
      .to(
        controls.current.target,
        {
          x: 4.4156,
          y: -1.996,
          z: 0,
          duration: 0.8,
        },
        4
      )
      .to(
        camera.position,
        {
          x: 4.1873,
          y: 0,
          z: 8.2999,
          duration: 0.8,
        },
        4
      )
      .to(
        camera,
        {
          zoom: 1.2517,
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        4.3
      )
      .to(
        generalGroup.current.rotation,
        {
          x: 0.21692,
          y: -0.52559,
          z: 0.21692,
          duration: 0.8,
        },
        4.3
      )
      .to(
        rightTapRef.current.position,
        {
          x: 4.33,
          y: -0.89,
          z: 0,
          duration: 0.8,
        },
        4.8
      )
      .to(
        innerTapRef.current.position,
        {
          x: 2.96,
          y: -0.59,
          z: 0,
          duration: 0.8,
        },
        4.8
      )
      .to(
        inside1Ref.current.position,
        {
          x: 1.78,
          y: -0.4,
          z: 0,
          duration: 0.8,
        },
        4.8
      )
      .to(
        page_5_ref.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        4.6
      )
      .to(
        inside2Ref.current.position,
        {
          x: 0.99,
          y: -0.2,
          z: 0,
          duration: 0.8,
        },
        4.8
      );

    // Fifth animation - Logo
    timeline.current
      .to(
        innerTapRef.current.position,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        5.6
      )
      .to(
        rightTapRef.current.position,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        5.6
      )
      .to(
        page_5_ref.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        5.8
      )
      .to(
        inside1Ref.current.position,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        5.6
      )
      .to(
        inside2Ref.current.position,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        5.6
      )
      .to(
        controls.current.target,
        {
          x: -1.8,
          y: 1.10198,
          z: 0,
          duration: 0.8,
        },
        5.5
      )
      .to(
        camera.position,
        {
          x: 0,
          y: 0,
          z: 8.3,
          duration: 0.8,
        },
        5.5
      )
      .to(
        camera,
        {
          zoom: 1.8,
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        5.8
      )
      .to(
        generalGroup.current.rotation,
        {
          x: 0,
          y: 1.30195,
          z: 0,
          duration: 0.8,
        },
        5.9
      )
      .to(
        page_6_ref.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        6.2
      );
  }, []);

  useFrame(() => {
    timeline.current.seek(
      scroll.offset * timeline.current.duration()
    );
  });

  return (
    <>
      <group {...props} dispose={null} ref={generalGroup}>
        <mesh
          name='Pad_Left'
          castShadow
          receiveShadow
          geometry={nodes.Pad_Left.geometry}
          material={materials.Dark_Fabric}
        />
        <mesh
          name='Horns'
          castShadow
          receiveShadow
          geometry={nodes.Horns.geometry}
          material={materials.Dark_Plastic}
        />
        <mesh
          name='Cover_Left'
          castShadow
          receiveShadow
          geometry={nodes.Cover_Left.geometry}
          material={materials.Dark_Plastic_Cover_Left}
          ref={coverLeftRef}
        />
        <mesh
          name='Diadema_Inner'
          castShadow
          receiveShadow
          geometry={nodes.Diadema_Inner.geometry}
          material={materials.Dark_Fabric}
        />
        <mesh
          name='SoundControl'
          castShadow
          receiveShadow
          geometry={nodes.SoundControl.geometry}
          material={materials.Grey_plastic}
        />
        <mesh
          name='Inside_1'
          castShadow
          receiveShadow
          geometry={nodes.Inside_1.geometry}
          material={materials.Orange_Plastic}
          ref={inside1Ref}
        />
        <mesh
          name='Cover_Rght_tap'
          castShadow
          receiveShadow
          geometry={nodes.Cover_Rght_tap.geometry}
          material={materials.Dark_Plastic}
          ref={innerTapRef}
        />
        <mesh
          name='Diadema_Top_2'
          castShadow
          receiveShadow
          geometry={nodes.Diadema_Top_2.geometry}
          material={materials.Gold_Metallic_Diadema}
          ref={diademaTop2Ref}
        />
        <mesh
          name='Diadema_Top_1'
          castShadow
          receiveShadow
          geometry={nodes.Diadema_Top_1.geometry}
          material={materials.Dark_Plastic_Diadema}
          ref={diademaTop1Ref}
        />
        <mesh
          name='Horn_Right'
          castShadow
          receiveShadow
          geometry={nodes.Horn_Right.geometry}
          material={materials.Dark_Plastic}
          ref={hornRightRef}
        />
        <mesh
          name='Inside_2'
          castShadow
          receiveShadow
          geometry={nodes.Inside_2.geometry}
          material={materials.Blue_Metallic}
          ref={inside2Ref}
        />
        <mesh
          name='Supports_1'
          castShadow
          receiveShadow
          geometry={nodes.Supports_1.geometry}
          material={materials.Dark_Plastic}
        />
        <mesh
          name='Supports_2'
          castShadow
          receiveShadow
          geometry={nodes.Supports_2.geometry}
          material={materials.Gold_Metallic}
        />
        <mesh
          name='Microphone'
          castShadow
          receiveShadow
          geometry={nodes.Microphone.geometry}
          material={materials.Grey_plastic}
        />
        <mesh
          name='Sticker'
          castShadow
          receiveShadow
          geometry={nodes.Sticker.geometry}
          material={materials.Dark_Fabric}
        />
        <mesh
          name='Bat'
          castShadow
          receiveShadow
          geometry={nodes.Bat.geometry}
          material={materials.Orange_Plastic}
        />
        <mesh
          name='Cover_Rght'
          castShadow
          receiveShadow
          geometry={nodes.Cover_Rght.geometry}
          material={materials.Dark_Plastic}
          ref={rightTapRef}
        />
        <mesh
          name='Pad_Right'
          castShadow
          receiveShadow
          geometry={nodes.Pad_Right.geometry}
          material={materials.Dark_Fabric}
          ref={padRightRef}
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
