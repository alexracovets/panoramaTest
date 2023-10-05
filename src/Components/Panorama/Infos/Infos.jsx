import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useGLTF } from "@react-three/drei";
import { Info } from './info/Info.jsx';

Infos.propTypes = {
    currentPortal: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    textureInfo: PropTypes.array.isRequired
};
import { setPopUpContent } from '../../../store/reducers/panorama.js';


export default function Infos({ currentPortal, textureInfo }) {

    const { nodes, materials, animations } = useGLTF("models/info.gltf");

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
                    <Info
                        key={index}
                        position={info.position}
                        rotation={info.rotation}
                        onPointerOver={() => handlePlanePointerOver()}
                        onPointerOut={() => handlePlanePointerOut()}
                        onClick={() => openPopUp(info.content)}
                        nodes={nodes}
                        materials={materials}
                        animations={animations}
                    />
                )
            })}
        </>
    )
}

useGLTF.preload("models/info.gltf");