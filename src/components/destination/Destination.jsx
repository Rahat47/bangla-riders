import {
    CardContent,
    Container,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import React from "react";
import MapComponent from "../map/MapComponent";
import useStyles from "./styles";

const Destination = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Paper>
                        <CardContent>
                            <Typography variant="h4">
                                Hello from left side
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.map}>
                    <MapComponent />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Destination;
