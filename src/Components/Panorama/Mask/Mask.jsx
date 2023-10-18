import React from "react";
import PropTypes from 'prop-types';
import { Plane, Sphere } from "@react-three/drei"
import { useDispatch } from 'react-redux';

Mask.propTypes = {
    currentPortal: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    textureMask: PropTypes.array.isRequired
};

import { setPopUpContent } from '../../../store/reducers/panorama.js';

export default function Mask({ currentPortal, textureMask }) {
    const dispatch = useDispatch();

    const openPopUp = (content) => {
        dispatch(setPopUpContent(content))
    }

    const handlePlanePointerOver = (material) => {
        if (material) material.opacity = 1;
        document.body.style.cursor = 'pointer';
    };

    const handlePlanePointerOut = (material) => {
        if (material) material.opacity = 0;
        document.body.style.cursor = 'auto';
    };

    return (
        <>
            {textureMask && textureMask.map((material, index) => {
                const mask = currentPortal.mask[index];
                return (
                    <group key={index}>
                        {
                            mask && <>
                                <Sphere args={[500, 60, 60]} scale={[1, 1, 1]} rotation={[0, 0.9, 0]} material={material} />
                                <Plane
                                    key={index}
                                    args={mask.args}
                                    position={mask.position}
                                    rotation={mask.rotation}
                                    scale={mask.scale}
                                    onPointerOver={() => handlePlanePointerOver(material)}
                                    onPointerOut={() => handlePlanePointerOut(material)}
                                    onClick={() => openPopUp(mask.content)}
                                    visible={false}
                                />
                            </>
                        }

                    </group>
                )
            })}
        </>
    )
}
