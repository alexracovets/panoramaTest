import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, Plane } from '@react-three/drei'

export function Arrow(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/2121.glb')
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
    actions[names[1]].reset().fadeIn(0.5).play();
  }, [actions, names])

  const handlePlanePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handlePlanePointerOut = () => {
    document.body.style.cursor = 'auto';
  };
  return (
    <group ref={group} {...props}>
      <group name="Scene"
        onPointerOver={() => handlePlanePointerOver()}
        onPointerOut={() => handlePlanePointerOut()}
      >
        <Plane args={[9, 4.5]} position={[3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} visible={false} />
        <mesh name="Plane"
          // eslint-disable-next-line react/no-unknown-property
          geometry={nodes.Plane.geometry} material={materials.white} position={[5.586, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={[0.5, 1, 1.35]} />
        <mesh name="PlaneTransparent1"
          // eslint-disable-next-line react/no-unknown-property
          geometry={nodes.PlaneTransparent1.geometry} material={materials.white} position={[5.588, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={[0.5, 1, 1.35]} />
        <mesh name="PlaneTransparent2"
          // eslint-disable-next-line react/no-unknown-property
          geometry={nodes.PlaneTransparent2.geometry} material={materials.white} position={[2.815, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={[0.5, 1, 1.35]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/2121.glb')
