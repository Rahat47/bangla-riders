import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import MapComponent from "../map/MapComponent";
import RideCard from "../rideCard/RideCard";
import useStyles from "./styles";

const Destination = () => {
    const { mode } = useParams();
    const classes = useStyles();
    return (
        <Container style={{ margin: "40px auto" }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <RideCard mode={mode} />
                </Grid>
                <Grid item xs={12} sm={8} className={classes.map}>
                    <MapComponent />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Destination;
