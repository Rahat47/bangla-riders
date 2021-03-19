import {
    CircularProgress,
    Container,
    Grid,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../API";

const Home = () => {
    const [rideData, setRideData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetchData();
                setRideData(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <Container>
            {!rideData ? (
                <CircularProgress />
            ) : (
                <Grid
                    container
                    justify="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h1">
                            {rideData.map(data => data.mode)}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

export default Home;
