/**
 * @ Author: Hikaru
 * @ Create Time: 2022-02-08 03:11:16
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:31:47
 * @ Description: i@rua.moe
 */

import { BackSide } from "three";

export default () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[10, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color={0xd2452b}
        attach="material"
        side={BackSide}
        metalness={0.4}
      />
    </mesh>
  );
};
