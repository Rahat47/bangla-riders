import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { DirectionsBike } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="secondary">
            <Typography
                component={Link}
                to="/"
                className={classes.heading}
                variant="h4"
                align="center"
            >
                Bangla Riders&nbsp;
                <DirectionsBike fontSize="large" />
            </Typography>
            <Toolbar className={classes.toolbar}>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.link}
                    variant="h6"
                    align="center"
                >
                    Home
                </Typography>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.link}
                    variant="h6"
                    align="center"
                >
                    Destination
                </Typography>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.link}
                    variant="h6"
                    align="center"
                >
                    Blog
                </Typography>
                <Button
                    component={Link}
                    to="/auth"
                    variant="contained"
                    color="primary"
                >
                    Sign In
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
