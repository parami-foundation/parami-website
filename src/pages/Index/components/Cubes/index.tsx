/**
 * @ Author: Hikaru
 * @ Create Time: 2022-02-08 03:09:30
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:31:07
 * @ Description: i@rua.moe
 */

import { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Cube from "./Cube";

export default () => {
  const group: any = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  const nodesCubes = map(new Array(50), (el, i) => {
    return <Cube key={i} />;
  });

  return <group ref={group}>{nodesCubes}</group>;
};
