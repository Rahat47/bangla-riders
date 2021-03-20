import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
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
                Contructing.......
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

export default Profile;
