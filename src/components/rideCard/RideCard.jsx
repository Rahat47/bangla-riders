import {
    Avatar,
    Button,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Snackbar,
    TextField,
    Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { ArrowDownward, DirectionsBike } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../API";
import useStyles from "./styles";
import Ticket from "./Ticket";
const initialState = {
    from: "",
    to: "",
    date: "",
    time: "",
};
const RideCard = ({ mode }) => {
    const classes = useStyles();
    const [rideData, setRideData] = useState([]);
    const [ride, setRide] = useState(mode ? mode : "");
    const [formData, setFormData] = useState(initialState);
    const [snackOpen, setSnackOpen] = useState({
        open: false,
        severity: "",
        message: "",
    });
    const [showTicket, setShowTicket] = useState(false);
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const handleSelectChange = event => {
        setRide(event.target.value);
    };
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (!ride) {
            setSnackOpen({
                open: true,
                severity: "warning",
                message: "Please Select A Ride!!",
            });
        } else {
            setShowTicket(true);
        }
    };
    useEffect(() => {
        async function getData() {
            try {
                setRideData(await fetchData());
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackOpen({
            open: false,
        });
    };

    return (
        <Paper elevation={3} className={classes.paper}>
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

            <CardContent className={classes.paper}>
                <Typography variant="h4">Bangla Riders</Typography>
                <Avatar className={classes.avatar}>
                    <DirectionsBike />
                </Avatar>
            </CardContent>
            <FormControl className={classes.formControl}>
                <InputLabel>Select Ride</InputLabel>
                <Select
                    name="ride"
                    required
                    value={ride}
                    onChange={handleSelectChange}
                >
                    {rideData.map(data => {
                        return (
                            <MenuItem key={data.id} value={data.mode}>
                                {data.mode.toUpperCase()}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>

            {showTicket ? (
                <>
                    <CardContent className={classes.paper}>
                        <Typography variant="h6">Riding With {ride}</Typography>
                        <Avatar
                            className={classes.avatar}
                            alt={rideData.find(data => data.mode === ride).mode}
                            src={
                                rideData.find(data => data.mode === ride)
                                    .imageUrl
                            }
                        />
                        <div className={classes.rect}>
                            <Typography variant="subtitle1">
                                Riding From &nbsp;{formData.from}
                            </Typography>
                            <ArrowDownward fontSize="large" />
                            <Typography variant="subtitle1">
                                Riding To &nbsp;{formData.to}
                            </Typography>
                        </div>
                    </CardContent>
                    <div className={classes.dataTable}>
                        <Ticket
                            data={rideData.find(data => data.mode === ride)}
                            classes={classes}
                        />
                    </div>
                </>
            ) : (
                <CardContent className={classes.paper}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="from"
                            className={classes.input}
                            required
                            label="Pick From"
                            fullWidth
                            onChange={handleChange}
                        />
                        <TextField
                            name="to"
                            className={classes.input}
                            required
                            label="Drop To"
                            fullWidth
                            onChange={handleChange}
                        />
                        <TextField
                            name="date"
                            className={classes.input}
                            type="date"
                            required
                            fullWidth
                            label="Pick Date"
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            name="time"
                            className={classes.input}
                            type="time"
                            required
                            fullWidth
                            label="Select Time"
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.btn}
                        >
                            Search
                        </Button>
                    </form>
                </CardContent>
            )}
        </Paper>
    );
};

export default RideCard;
