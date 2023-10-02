import React from "react";
import PropTypes from 'prop-types';
import { Plane } from "@react-three/drei"
import { useDispatch } from 'react-redux';

Info.propTypes = {
    currentPortal: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    textureInfo: PropTypes.array.isRequired
};

import { setPopUpContent } from '../../../store/reducers/panorama.js';

export default function Info({ currentPortal, textureInfo }) {
    const dispatch = useDispatch();

    const openPopUp = (content) => {
        dispatch(setPopUpContent(content))
    }
    const handlePlanePointerOver = () => {
        document.body.style.cursor = 'pointer';
    };

    const handlePlanePointerOut = () => {
        document.body.style.cursor = 'auto';
    };

    return (
        <>
            {textureInfo && textureInfo.map((material, index) => {
                const info = currentPortal.info[index];

                if (info === undefined) return null;

                return (
                    <Plane
                        key={index}
                        material={material}
                        position={info.position}
                        rotation={info.rotation}
                        scale={info.scale}
                        onPointerOver={() => handlePlanePointerOver()}
                        onPointerOut={() => handlePlanePointerOut()}
                        onClick={() => openPopUp(info.content)}
                    />
                )
            })}
        </>
    )
}
