import React, { useEffect, useState } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import PropTypes from 'prop-types';
import { EffectComposer, Pixelation, DepthOfField } from "@react-three/postprocessing";

Camera.propTypes = {
    loader: PropTypes.bool.isRequired
};
export default function Camera({ loader }) {
    const { camera } = useThree();
    const [zoomDirection, setZoomDirection] = useState(-1); // Почнемо зменшення
    const [zoomAnimation, setZoomAnimation] = useState(false);

    useFrame(() => {
        if (zoomAnimation) {
            camera.fov += zoomDirection;
            camera.updateProjectionMatrix();
            if ((zoomDirection === -0.25 && camera.fov <= 65) || (zoomDirection === 0.5 && camera.fov >= 75)) {
                setZoomAnimation(false);
            }
        }
    });

    useEffect(() => {
        if (loader) {
            setZoomDirection(-0.2);
            setZoomAnimation(true);
        } else {
            setZoomDirection(0.5);
            setZoomAnimation(true);
        }
    }, [loader]);

    return (
        <EffectComposer>
            <Pixelation granularity={loader ? 5 : 0} />
            <DepthOfField
                focusDistance={0}
                focalLength={0.02}
                bokehScale={loader ? 5 : 0}
            />
        </EffectComposer>
    );
}
