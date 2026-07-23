import * as THREE from "three";
import { useMemo, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/TATTAU_MDL.glb");
  const tattooTexture = useTexture("/tattoos/TRAD_FLOWER.png");
  const mirroredTattooTexture = useMemo(() => {
    const texture = tattooTexture.clone();
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = -1;
    texture.offset.x = 1;
    texture.needsUpdate = true;
    return texture;
  }, [tattooTexture]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const highlightMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "orange" }),
    [],
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={2.113}>
        <mesh
          geometry={nodes.ABDOMEN001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.BODY.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.CHEST002.geometry}
          material={
            selectedRegion === "CHEST002"
              ? highlightMaterial
              : materials["Material.001"]
          }
          onClick={() => {
            console.log("Chest clicked");
            setSelectedRegion("CHEST002");
          }}
        >
          <Decal
            position={[0.13, 0.1, -1.7]}
            //rotation X to 180 fixed main issue
            rotation={[180, 0, 0]}
            scale={0.2}
            map={tattooTexture}
          />
          <Decal
            position={[-0.13, 0.1, -1.7]}
            rotation={[180, 0, 0]}
            scale={0.2}
            map={mirroredTattooTexture}
          />
        </mesh>

        <mesh
          geometry={nodes.LEFT_FOREARM.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.LEFT_LEG.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.LEFT_UPPERARM001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.LOWER_BACK.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.RIGHT_FOREARM.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.RIGHT_LEG.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.RIGHT_UPPERARM001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.UPPER_BACK.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/TATTAU_MDL.glb");
