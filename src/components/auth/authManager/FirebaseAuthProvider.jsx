import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import { UserContext } from "../../../App";
import { useHistory } from "react-router";
import firebase, { auth } from "../../../firebase";

const FirebaseAuthProvider = () => {
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
            });
    }
    function handleFacebookAuth() {
        var facebookProvider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(facebookProvider)
            .then(result => {
                setLoggedInUser(result.user);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
            });
    }
    function handleGithubAuth() {}

    return (
        <>
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
                type="submit"
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
