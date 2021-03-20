import { Room } from "@material-ui/icons";
import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const MapComponent = () => {
    const [position, setPosition] = useState({
        latitude: "",
        longitude: "",
    });

    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: position.latitude || 23.891149,
        longitude: position.longitude || 90.472448,
        zoom: 10,
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
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoicmFoYXQ0NyIsImEiOiJja21oYXk5dXgwMDVjMnpvNHdrb2FwMTR3In0.nOuZFWB2dS9cjkKKonGlxw"
            width="100%"
            height="100%"
            onViewportChange={viewport => setViewport(viewport)}
        >
            <Marker
                latitude={position.latitude || viewport.latitude}
                longitude={position.longitude || viewport.longitude}
            >
                <Room fontSize="large" /> You are here.
            </Marker>
        </ReactMapGL>
    );
};

export default MapComponent;
