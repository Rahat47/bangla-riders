import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

const MapComponent = () => {
    const [position, setPosition] = useState({
        latitude: 23.891149,
        longitude: 90.472448,
    });

    function getLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            setPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        });
    }
    getLocation();

    return (
        <Map
            defaultCenter={[position.latitude, position.longitude]}
            defaultZoom={11}
        >
            <Marker
                width={50}
                anchor={[position.latitude, position.longitude]}
            />
            <ZoomControl />
        </Map>
    );
};

export default MapComponent;
