import React, { useRef, useEffect } from 'react';

type TMap = {
    address:string
}

const MapComponent: React.FC<TMap> = ({address}) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const ymaps = window.ymaps;
        if (!ymaps) return;

        ymaps.ready(() => {
            const map = new ymaps.Map(mapRef.current, {
                center: [55.76, 37.64],
                zoom: 10,
            });

            ymaps.geocode(address).then((result:any) => {
                const coordinates = result.geoObjects.get(0).geometry.getCoordinates();
                const circle = new ymaps.Circle([coordinates, 250], {
                    balloonContent: 'Circle',
                }, {
                    fillColor: 'rgba(12,51,58,0.4)',
                    strokeColor: 'rgb(122,141,51)',
                    strokeOpacity: 0.8,
                    strokeWidth: 2,
                });

                map.geoObjects.add(circle);


                map.setCenter(coordinates, 15);

                map.events.add('wheel', (e: any) => {
                    if (!e.get('shiftKey')) {
                        e.preventDefault();
                    }
                });
            });
        });
    }, [address]);

    return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
}



export default MapComponent