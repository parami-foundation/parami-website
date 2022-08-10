/**
 * @ Author: Hikaru
 * @ Create Time: 2022-02-08 03:11:50
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:32:22
 * @ Description: i@rua.moe
 */


export default () => {
  const FakeSphere = () => {
    return (
      <mesh>
        <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
        <meshBasicMaterial color={0xfff1ef} attach="material" />
      </mesh>
    );
  };

  return (
    <group>
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </group>
  );
};
