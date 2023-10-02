import React from "react";
import PropTypes from 'prop-types';
import { Plane } from "@react-three/drei"
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
        if (material) material.opacity = 0.3;
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
                    <Plane
                        key={index}
                        material={material}
                        args={mask.args}
                        position={mask.position}
                        rotation={mask.rotation}
                        scale={mask.scale}
                        onPointerOver={() => handlePlanePointerOver(material)}
                        onPointerOut={() => handlePlanePointerOut(material)}
                        onClick={() => openPopUp(mask.content)}
                    />
                )
            })}
        </>
    )
}
