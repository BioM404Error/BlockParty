import React, { useRef } from "react";
import LandingCube from "./LandingCube";

const COLORS = [
  "red",
  "yellow",
  "green",
  "blue"
];
const cubeArray = [];

const CubeArray = (count, start, end, offset) => {
  const range = Math.abs(end - start);

  for (let i=0; i<count; i++) {
    const color = COLORS[Math.floor(Math.random()*COLORS.length)];
    let posX;
    let posY;
    let rotDir = Math.floor(Math.random()*4);
    if (i%2) {
      posX = Math.floor(Math.random()*(range/2)*100)/100;
    } else {
      posX = Math.floor(Math.random()*(range/2)*100)/100 + range/2;
    }
    if (i<count/4) {
      posY = Math.floor(Math.random()*(4/3)*1000)/1000 + 3.5;
    } else if (i>=count/4 && i<2*count/4) {
      posY = Math.floor(Math.random()*(4/3)*1000)/1000 + 3.5 + offset;
    } else if (i>=2*count/4 && i<3*count/4) {
      posY = Math.floor(Math.random()*(4/3)*1000)/1000 + 3.5 + 2*offset;
    } else if (i>=3*count/4) {
      posY = Math.floor(Math.random()*(4/3)*1000)/1000 + 3.5 + 3*offset;
    }
    const singleCube = <LandingCube color={color} posX={posX} posY={posY} rotDir={rotDir} />;
    cubeArray.push(singleCube);
  }

  return (
    <mesh>
      {cubeArray}
    </mesh>
  )
}

export default CubeArray