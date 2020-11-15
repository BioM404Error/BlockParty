import React, { Suspense, useRef } from "react";
import { Vector3 } from "three";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls, softShadows } from "@react-three/drei";
import CubeArray from "./CubeArray";
import styled from "@emotion/styled";

softShadows({
  frustrum: 3.75, // Frustrum width (default: 3.75)
  size: 0.005, // World size (default: 0.005)
  near: 9.5, // Near plane (default: 9.5)
  samples: 17, // Samples (default: 17)
  rings: 11, // Rings (default: 11)
});

const CanvasSpace = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: block;
`

const Landing = () => {
  const sunRef = useRef();
  return (
    <CanvasSpace>
      <Canvas
        gl={{
          alpha: false,
        }}
        camera={{
          position: new Vector3(0, 0, 2),
        }}
        shadowMap
        colorManagement
      >
        {/*<OrbitControls />*/}
        <ambientLight intensity={0.1} />
        <pointLight
          position={[0, 2, -0.5]}
          intensity={0.7}
          ref={sunRef}
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
          <meshStandardMaterial attach="material" color="#AAAAAA" />
        </mesh>
        <group position={[-2.5, -1.5, 0]}>
          <mesh castShadow receiveShadow>
            {CubeArray(7, -2.5, 2.5, 1)}
          </mesh>
        </group>
      </Canvas>
    </CanvasSpace>
  )
}

export default Landing