import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import { Arrow } from "./Arrow/Arrow.jsx";

Arrows.propTypes = {
    currentPortal: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    portals: PropTypes.array.isRequired,
    setLoader: PropTypes.func.isRequired,
    loader: PropTypes.bool.isRequired
};

import { setPanoramaImage } from '../../../store/reducers/panorama.js';

export default function Arrows({ currentPortal, portals, setLoader, loader }) {

    const dispatch = useDispatch();
    const handleClick = (panoram) => {
        setLoader(true)
        dispatch(setPanoramaImage(panoram.portal))
    };

    return (
        <>
            {currentPortal && portals.map((arrow, index) => {
                return (
                    <Arrow
                        key={index}
                        position={arrow.position}
                        rotation={arrow.rotation}
                        onClick={() => handleClick(arrow)}
                        visible={loader ? false : true}
                    />
                )
            })}
        </>
    )
}
