import React, { useEffect, useRef } from "react";
import { useAnimations } from "@react-three/drei";
import PropTypes from 'prop-types';

Info.propTypes = {
    nodes: PropTypes.object.isRequired,
    materials: PropTypes.object.isRequired,
    animations: PropTypes.array.isRequired,
};

export function Info({ nodes, materials, animations, ...props }) {
    const group = useRef();

    const { actions, names } = useAnimations(animations, group);

    useEffect(() => {
        actions[names[0]].reset().fadeIn(0.5).play();
    })

    return (
        <group ref={group} {...props}>
            <group name="Scene">
                <group name="Curve"   // eslint-disable-next-line react/no-unknown-property
                    position={[0.02, -0.002, -0.082]} scale={11.236}>
                    <mesh
                        name="Curve_1"  // eslint-disable-next-line react/no-unknown-property
                        castShadow receiveShadow geometry={nodes.Curve_1.geometry} material={materials.material1} morphTargetDictionary={nodes.Curve_1.morphTargetDictionary} morphTargetInfluences={nodes.Curve_1.morphTargetInfluences}
                    />
                    <mesh
                        name="Curve_2"  // eslint-disable-next-line react/no-unknown-property
                        castShadow receiveShadow geometry={nodes.Curve_2.geometry} material={materials.material2} morphTargetDictionary={nodes.Curve_2.morphTargetDictionary} morphTargetInfluences={nodes.Curve_2.morphTargetInfluences}
                    />
                    <mesh
                        name="Curve_3"  // eslint-disable-next-line react/no-unknown-property
                        castShadow receiveShadow geometry={nodes.Curve_3.geometry} material={materials.material3} morphTargetDictionary={nodes.Curve_3.morphTargetDictionary} morphTargetInfluences={nodes.Curve_3.morphTargetInfluences}
                    />
                </group>
            </group>
        </group>
    );
}