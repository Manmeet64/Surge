import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/mascot.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.CustomMaterial}
        rotation={[Math.PI / 2, 0, 0]} // Keeps original rotation
        scale={[3, 3, 3]}
        position={[0, -2.5, 0]} // Ensure model is centered in the scene
      />
    </group>
  );
}

useGLTF.preload("/mascot.glb");
