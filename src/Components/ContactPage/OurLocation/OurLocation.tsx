import React, { useEffect } from 'react';

interface YandexMapProps {
    address: string;
}

declare global {
    interface Window {
        ymaps: any;
    }
}

const YandexMap = ({ address }: YandexMapProps) => {
    useEffect(() => {
        window.ymaps.ready(() => {
            window.ymaps.geocode(address).then((result: any) => {
                const coordinates = result.geoObjects.get(0).geometry.getCoordinates();
                const map = new window.ymaps.Map('map', {
                    center: coordinates,
                    zoom: 15,
                });
                const placemark = new window.ymaps.Placemark(coordinates, {
                    balloonContent: address,
                });
                map.geoObjects.add(placemark);

                map.events.add('wheel', (e: any) => {
                    if (!e.get('shiftKey')) {
                        e.preventDefault();
                    }
                });
        });
        });
    }, [address]);

    return(
        <>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
            <p>Shift+scroll to zoom</p>
        </>
    );
};

export default YandexMap;