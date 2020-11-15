import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const COLORS = [
  "red",
  "yellow",
  "green",
  "blue"
];
const cubeArray = [];

const Cube = (color, range, offset) => {
  const aCube = useRef();
  let positionX = Math.floor(Math.random()*range*100)/100;
  let positionY = Math.floor(Math.random()*3*1000)/1000;

  // useFrame(({ clock }) => {
  //   if (aCube.current) {
  //     aCube.current.position = [aCube.current.position[0], aCube.current.position[1]-0.25, aCube.current.position[2]];
  //   }
  // })

  return (
    <mesh position={[positionX, positionY, 0]} ref={aCube}>
      <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

const Cubes = (count, start, end) => {
  const cubes = useRef();
  const range = Math.abs(end - start);
  const offset = end - start;
  for (let i=0; i<count; i++) {
    const color = COLORS[i%4];
    const singleCube = Cube(color, range, offset);
    cubeArray.push(singleCube);
  }

  // useFrame(({ clock }) => {
  //   // cubeArray.forEach((box) => {
  //   //   box.position = [aCube.position[0], aCube.position[1]-0.25, aCube.position[2]];
  //   // })
  //   if (cubes.current) {
  //     console.log(cubes.current)
  //   }
  // });

  return (
    <mesh ref={cubes}>
      {cubeArray}
    </mesh>
  )
}

export default Cubes