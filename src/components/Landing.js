import React from "react";
import { Canvas } from "react-three-fiber";
import styled from "@emotion/styled";

const CanvasSpace = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: block;
`

const Landing = () => {
  return (
    <CanvasSpace>
      <Canvas>
        <ambientLight intensity={0.1} />
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color="red" />
        </mesh>
      </Canvas>
    </CanvasSpace>
  )
}

export default Landing