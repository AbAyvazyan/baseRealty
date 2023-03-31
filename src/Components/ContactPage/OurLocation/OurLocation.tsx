import React, { useRef, useEffect } from 'react';
import ymaps from 'yandex-maps';

interface MapProps {
    center: [number, number];
    zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
    // const mapRef = useRef(null);
    //
    // useEffect(() => {
    //     ymaps.ready(() => {
    //         const map = new ymaps.Map(mapRef.current, {
    //             center,
    //             zoom,
    //         });
    //     });
    // }, [center, zoom]);

    return (
        // <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
        <></>
    )
};

export default Map;