import {
    CircularProgress,
    Container,
    Grid,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../API";
import Cards from "../card/Cards";
import useStyles from "./styles";

const Home = () => {
    const [rideData, setRideData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                setRideData(await fetchData());
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h2" gutterBottom>
                    Welcome to Bangla Riders
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Find your favourite rides here.
                </Typography>
            </div>
            {!rideData ? (
                <CircularProgress color="secondary" size={85} />
            ) : (
                <Grid container alignItems="stretch" spacing={4}>
                    {rideData.map(data => (
                        <Cards key={data.id} data={data} />
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default Home;
