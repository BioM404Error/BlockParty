import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const LandingCube = (props) => {
  const { color, posX, posY, rotDir } = props;
  const box = useRef();

  useFrame(({ clock, delta }) => {
    if (box.current) {
      box.current.rotation.x = clock.getElapsedTime()/2.5;
      switch(rotDir) {
        case 0:
          // box.current.rotation.x = clock.getElapsedTime()/2.5;
          box.current.rotation.y = clock.getElapsedTime()/2.5;
          break;
        case 1:
          // box.current.rotation.x = -clock.getElapsedTime()/2.5;
          box.current.rotation.y = clock.getElapsedTime()/2.5;
          break;
        case 2:
          // box.current.rotation.x = clock.getElapsedTime()/2.5;
          box.current.rotation.y = -clock.getElapsedTime()/2.5;
          break;
        case 3:
          // box.current.rotation.x = -clock.getElapsedTime()/2.5;
          box.current.rotation.y = -clock.getElapsedTime()/2.5;
          break;
      }
      box.current.position.y = Math.min(box.current.position.y-0.005, posY);
      if (box.current.position.y < -0.575) {
        box.current.position.y = 3.75;
      }
    }
  })

  return  <group position={[posX, posY, 0]} ref={box} castShadow>
    <mesh castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[0.35, 0.35, 0.35]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  </group>
}

export default LandingCube