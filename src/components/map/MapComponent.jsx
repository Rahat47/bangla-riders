import { Room } from "@material-ui/icons";
import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const MapComponent = () => {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 23.891149,
        longitude: 90.472448,
        zoom: 10,
    });
    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoicmFoYXQ0NyIsImEiOiJja21oYXk5dXgwMDVjMnpvNHdrb2FwMTR3In0.nOuZFWB2dS9cjkKKonGlxw"
            width="100%"
            height="100%"
            onViewportChange={viewport => setViewport(viewport)}
        >
            <Marker
                latitude={23.810651}
                longitude={90.4126466}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <Room fontSize="large" /> You are here.
            </Marker>
        </ReactMapGL>
    );
};

export default MapComponent;
