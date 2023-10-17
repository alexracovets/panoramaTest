import React from 'react';
import { useSelector } from 'react-redux';

import Anno from './Anno/Anno';


export default function Annotations() {

    const annotationList = useSelector((state) => state.annotations.annotation);

    return (
        <>
            {
                //Вивід всії анотацій
                annotationList.map((item, index) => {
                    return (
                        <Anno key={index} item={item} />
                    )
                })
            }
        </>
    );
}
