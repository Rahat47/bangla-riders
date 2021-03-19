import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={3}>
            <Card raised className={classes.card}>
                <CardMedia image={data.imageUrl} className={classes.media} />
                <CardContent>
                    <Typography
                        className={classes.cardLink}
                        variant="body2"
                        component={Link}
                        to={`/ride/${data.mode}`}
                    >
                        {data.mode}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Cards;
