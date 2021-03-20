import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@material-ui/core";
import { DirectionsBike } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import useStyles from "./styles";

export default function Navbar() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const classes = useStyles();
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const headersData = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Destination",
            href: "/destination",
        },
    ];

    const { mobileView, drawerOpen } = state;
    const logout = () => {
        setLoggedInUser(null);
        localStorage.clear();
        history.push("/");
    };

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState(prevState => ({ ...prevState, mobileView: true }))
                : setState(prevState => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={classes.toolbar}>
                {banglaRidersLogo}
                <div className={classes.menuItem}>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState(prevState => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState(prevState => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={classes.drawerContainer}>
                        {getDrawerChoices()}
                    </div>
                </Drawer>

                <div>{banglaRidersLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return (
            <>
                {headersData.map(({ label, href }) => {
                    return (
                        <Link
                            {...{
                                component: RouterLink,
                                to: href,
                                color: "inherit",
                                style: { textDecoration: "none" },
                                key: label,
                            }}
                        >
                            <MenuItem>{label}</MenuItem>
                        </Link>
                    );
                })}

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
                        <MenuItem>Log Out</MenuItem>
                    </Button>
                ) : (
                    <Button
                        component={RouterLink}
                        to="/auth"
                        variant="contained"
                        color="primary"
                        className={classes.authBtn}
                    >
                        Sign In
                    </Button>
                )}
            </>
        );
    };

    const banglaRidersLogo = (
        <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            className={classes.logo}
        >
            Bangla Riders <DirectionsBike />
        </Typography>
    );

    const getMenuButtons = () => {
        return (
            <>
                {headersData.map(({ label, href }) => {
                    return (
                        <Button
                            {...{
                                key: label,
                                color: "inherit",
                                to: href,
                                component: RouterLink,
                                className: classes.menuButton,
                            }}
                        >
                            {label}
                        </Button>
                    );
                })}

                {loggedInUser && (
                    <Button
                        className={classes.menuButton}
                        component={RouterLink}
                        to="/profile"
                        color="inherit"
                    >
                        {loggedInUser.displayName}
                    </Button>
                )}

                {loggedInUser ? (
                    <Button
                        onClick={logout}
                        variant="contained"
                        color="secondary"
                        className={classes.authBtn}
                    >
                        <MenuItem>Log Out</MenuItem>
                    </Button>
                ) : (
                    <Button
                        component={RouterLink}
                        to="/auth"
                        variant="contained"
                        color="primary"
                        className={classes.authBtn}
                    >
                        Sign In
                    </Button>
                )}
            </>
        );
    };

    return (
        <AppBar className={classes.header}>
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
    );
}
