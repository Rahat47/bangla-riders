import React, { useContext } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { DirectionsBike } from "@material-ui/icons";
import { NavLink, Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { UserContext } from "../../App";
const Navbar = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        setLoggedInUser(null);
        history.push("/");
    };

    return (
        <AppBar
            className={classes.appBar}
            position="static"
            color={loggedInUser ? "primary" : "secondary"}
        >
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
                    component={NavLink}
                    to="/destination"
                    className={classes.link}
                    variant="h6"
                    align="center"
                >
                    Destination
                </Typography>
                <Typography
                    component={NavLink}
                    to="/blog"
                    className={classes.link}
                    variant="h6"
                    align="center"
                >
                    Blog
                </Typography>
                {loggedInUser && (
                    <Typography
                        className={classes.userName}
                        variant="h6"
                        align="center"
                    >
                        {loggedInUser.displayName}
                    </Typography>
                )}
                {loggedInUser ? (
                    <Button
                        onClick={logout}
                        variant="contained"
                        color="secondary"
                        className={classes.authBtn}
                    >
                        Log Out
                    </Button>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                        className={classes.authBtn}
                    >
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
