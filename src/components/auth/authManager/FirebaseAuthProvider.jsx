import { Button, Snackbar } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import { UserContext } from "../../../App";
import { useHistory } from "react-router";
import firebase, { auth } from "../../../firebase";

const FirebaseAuthProvider = ({
    setSnackOpen,
    snackOpen,
    handleClose,
    Alert,
}) => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const classes = useStyles();

    function handleGoogleAuth() {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider)
            .then(result => {
                setLoggedInUser(result.user);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
                setSnackOpen({
                    open: true,
                    severity: "error",
                    message: err.message,
                });
            });
    }
    function handleFacebookAuth() {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(facebookProvider)
            .then(result => {
                setLoggedInUser(result.user);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
                setSnackOpen({
                    open: true,
                    severity: "error",
                    message: err.message,
                });
            });
    }
    function handleGithubAuth() {
        const githubProvider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(githubProvider)
            .then(result => {
                setLoggedInUser(result.user);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
                setSnackOpen({
                    open: true,
                    severity: "error",
                    message: err.message,
                });
            });
    }

    return (
        <>
            <Snackbar
                open={snackOpen.open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleClose} severity={snackOpen.severity}>
                    {snackOpen.message}
                </Alert>
            </Snackbar>

            <Button
                variant="outlined"
                fullWidth
                color="secondary"
                className={classes.submit1}
                onClick={handleGoogleAuth}
            >
                Sign in with Google
            </Button>

            <Button
                variant="outlined"
                fullWidth
                color="secondary"
                className={classes.submit1}
                onClick={handleFacebookAuth}
            >
                Sign in with Facebook
            </Button>

            <Button
                variant="outlined"
                fullWidth
                color="secondary"
                className={classes.submit1}
                onClick={handleGithubAuth}
            >
                Sign in with Github
            </Button>
        </>
    );
};

export default FirebaseAuthProvider;
