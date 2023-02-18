import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import * as THREE from "three";
import { BoxGeometry } from "three";

export default function Box() {
 
  // const boxRef = useRef()

  useFrame((e) => {
    // boxRef.current.rotation.y += 0.01;
    // boxRef.current.rotation.x += 0.01;
  })

  return (
    <mesh
      scale={1.5}
      // ref={boxRef}
      // onPointerOver={(e) => setIsDragging(true) }
      // onPointerOut={(e) => setIsDragging(false) }
    >
      <boxGeometry args={[1, 1, 1]}/>
      <meshPhongMaterial color={"hotpink"} />
    </mesh>
  );
}
