import React from "react";
import PropTypes from 'prop-types';
import { Sphere } from "@react-three/drei"

Photo.propTypes = {
    texture: PropTypes.object
};

export default function Photo({ texture }) {
    return (
        <>
            {texture && (<Sphere args={[500, 60, 60]} scale={[1, 1, 1]} material={texture} rotation={[0, 0.9, 0]} />)}
        </>
    )
}
