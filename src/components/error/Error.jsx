import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Typography variant="h1" color="secondary">
                Oopss !!!
            </Typography>
            <Typography variant="subtitle1">
                This Route Does not Exist!!!
            </Typography>
            <Typography
                variant="h6"
                component={Link}
                to={"/"}
                style={{ color: "inherit", textDecoration: "none" }}
            >
                Lets Head Back Home...
            </Typography>
        </div>
    );
};

export default Error;
