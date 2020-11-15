import React, {useEffect, useRef, useState} from "react";
import { useFrame } from "react-three-fiber";

const COLORS = [
  "red",
  "yellow",
  "green",
  "blue"
];

const LandingCube = (props) => {
  const { color, posX, posY, rotDir } = props;
  const box = useRef();
  const [ changeColor, setChangeColor ] = useState(false);
  const [ boxColor, setBoxColor ] = useState(color);

  useFrame(({ clock, delta }) => {
    if (box.current) {
      box.current.rotation.x = clock.getElapsedTime() / 2.5;
      box.current.position.y = Math.min(box.current.position.y - 0.005, posY);
      // console.log(`current: ${box.current.position.y - 0.005}\nposY: ${posY}`)
      if (box.current.position.y >= 3.73) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
      switch (rotDir) {
        case 0:
          box.current.rotation.y = clock.getElapsedTime() / 2.5;
          break;
        case 1:
          box.current.rotation.y = -clock.getElapsedTime() / 2.5;
          break;
      }
      if (box.current.position.y < -0.575) {
        box.current.position.y = 3.75;
      }
    }
  })

  useEffect(() => {
    if (changeColor) {
      setBoxColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }
  }, [changeColor]);

  return  <group position={[posX, posY, 0]} ref={box} castShadow>
    <mesh castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[0.35, 0.35, 0.35]} />
      <meshStandardMaterial attach="material" color={boxColor} />
    </mesh>
  </group>
}

export default LandingCube