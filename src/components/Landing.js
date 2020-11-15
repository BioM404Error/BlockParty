import React, { Suspense, useRef } from "react";
import { Vector3 } from "three";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import ModelCity from "../models/ModelCity";
import Cubes from "./Cubes";
import styled from "@emotion/styled";

const CanvasSpace = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: block;
`

const Landing = () => {
  // const { camera } = useThree();
  const box = useRef();
  // console.log(`CameraX: ${camera.position.x}\nCameraY: ${camera.position.y}\nCameraZ: ${camera.position.z}`);
  // useFrame(({clock}) => {
  //   if (box.current) {
  //     box.current.rotation.x = clock.getElapsedTime()/10;
  //     box.current.rotation.y = clock.getElapsedTime()/10;
  //   }
  // });

  return (
    <CanvasSpace>
      <Canvas colorManagement camera={{
        position: new Vector3(0, 0, 2),
      }}>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <pointLight position={[1, 1, -1]} intensity={0.7} />
        <mesh ref={box} position={[0, 0, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial attach="material" color="red" />
        </mesh>
        <mesh position={[-2, -2, 0]}>
          {Cubes(5, -2, 2)}
        </mesh>
        {/*<Suspense fallback={null}>*/}
        {/*  <ModelCity />*/}
        {/*</Suspense>*/}
      </Canvas>
    </CanvasSpace>
  )
}

export default Landing