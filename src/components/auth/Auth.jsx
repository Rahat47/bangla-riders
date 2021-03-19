import {
    Avatar,
    Button,
    Container,
    Grid,
    Paper,
    Snackbar,
    Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { LockOutlined } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import useStyles from "./styles";
import Input from "./Input";
import { auth } from "../../firebase";
import FirebaseAuthProvider from "./authManager/FirebaseAuthProvider";
import { UserContext } from "../../App";
import { useHistory } from "react-router";
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [dataValid, setDataValid] = useState(true);
    const [snackOpen, setSnackOpen] = useState({
        open: false,
        severity: "",
        message: "",
    });
    const history = useHistory();
    const [, setLoggedInUser] = useContext(UserContext);
    const classes = useStyles();

    //Functions
    const handleSubmit = e => {
        e.preventDefault();

        if (isSignUp) {
            if (formData.password !== formData.confirmPassword) {
                setDataValid(false);
                return;
            } else {
                setDataValid(true);
                auth.createUserWithEmailAndPassword(
                    formData.email,
                    formData.password
                )
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
        } else {
            auth.signInWithEmailAndPassword(formData.email, formData.password)
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

        if (!dataValid) {
            setSnackOpen({
                open: true,
                severity: "warning",
                message:
                    "Looks like your passwords are not matching. Please try again!!",
            });
            return;
        }
    };

    const switchMode = () => {
        setIsSignUp(prevSwitchMode => !prevSwitchMode);
        setShowPassword(false);
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackOpen({
            open: false,
            severity: "",
            message: "",
        });
    };

    return (
        <Container component="main" maxWidth="xs">
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
            <Paper elevation={3} className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">
                    {isSignUp ? "Sign Up" : "Sign In"}
                </Typography>

                <form
                    className={classes.form}
                    autoComplete="off"
                    onSubmit={e => handleSubmit(e)}
                >
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={e => handleChange(e)}
                                    half
                                    autoFocus
                                />
                                <Input
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={e => handleChange(e)}
                                    half
                                />
                            </>
                        )}
                        <Input
                            type="email"
                            handleChange={e => handleChange(e)}
                            name="email"
                            label="Email Address"
                        />
                        <Input
                            type={showPassword ? "text" : "password"}
                            handleChange={e => handleChange(e)}
                            name="password"
                            label="Password"
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignUp && (
                            <Input
                                name="confirmPassword"
                                label="Repeat Password"
                                handleChange={e => handleChange(e)}
                                type="password"
                            />
                        )}
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                    <FirebaseAuthProvider
                        snackOpen={snackOpen}
                        setSnackOpen={setSnackOpen}
                        handleClose={handleClose}
                        Alert={Alert}
                    />

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp
                                    ? "Already Have an Account? Sign In"
                                    : "Don't have an Account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
