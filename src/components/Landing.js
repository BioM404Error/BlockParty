import React from "react";
import { Vector3 } from "three";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import CubeArray from "./CubeArray";
import "./styles/Canvas.css";

const Landing = () => {
  return (
    <>
      <Canvas
        gl={{
          alpha: false,
        }}
        camera={{
          position: new Vector3(0, 0, 2),
          fov: 60
        }}
        shadowMap
        colorManagement
      >
        {/*<OrbitControls />*/}
        <Stars />
        <ambientLight intensity={0.1} />
        <pointLight
          position={[0, 2, -0.5]}
          intensity={0.7}
          castShadow
        />
        <pointLight
          position={[0, 0, 4]}
          intensity={0.1}
          decay={2}
          castShadow
        />
        <mesh
          position={[0, 0, -1]}
          rotation={[0, 0, Math.PI/2]}
          receiveShadow
        >
          <planeBufferGeometry attach="geometry" args={[10, 10, 15]} />
          <meshStandardMaterial attach="material" color="lightgrey" />
        </mesh>
        <group position={[-7, -1.5, 0]}>
          <mesh castShadow receiveShadow>
            {CubeArray(15, -7, 7, 1)}
          </mesh>
        </group>
      </Canvas>
    </>
  )
}

export default Landing