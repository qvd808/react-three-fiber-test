import { useFrame, useThree } from "@react-three/fiber";
import Box from "./Box";
import { OrthographicCamera, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef } from "react";


export default function Scene() {

    const orbitalControlRef = useRef();
    const [hover, setHover] = useState(false);

    useFrame((e) => {
        const x = orbitalControlRef.current.getAzimuthalAngle();
        const controlValue = x + Math.PI
        console.log(x % Math.PI + Math.PI)

        if (!hover) {
            if ( Math.PI/4 < controlValue & controlValue < Math.PI/2 + Math.PI/4){
                orbitalControlRef.current.setAzimuthalAngle(3*Math.PI/2);
            } else if (Math.PI/2 + Math.PI/4 <= controlValue & controlValue < Math.PI + Math.PI/4){
                orbitalControlRef.current.setAzimuthalAngle(0)
            } else if (Math.PI + Math.PI/4 <= controlValue & controlValue < 3*Math.PI/2 + Math.PI/4){
                orbitalControlRef.current.setAzimuthalAngle(Math.PI/2)
            } else {
                orbitalControlRef.current.setAzimuthalAngle(Math.PI)
            }
        }

        orbitalControlRef.current.update()

    })

    return (
        <>
            <ambientLight />
            <pointLight position={[10, 5, 5]} />
            <Box setHover={setHover} />

            {/* <OrthographicCamera makeDefault zoom={50} position={[0, 40, 200]} /> */}

            <OrbitControls enableZoom={false} enablePan={false} ref={orbitalControlRef} />
            <axesHelper args={[5]} />
        </>

    )
}