import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: "flex",
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',

    },
    btn: {
        marginTop: theme.spacing(2)
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    input: {
        margin: "8px 0"
    },
    rect: {
        padding: "5px",
        color: "white",
        textAlign: "center",
        width: "100%",
        backgroundColor: "#333",
        borderRadius: "5px"
    },
    dataTable: {
        width: "100%",
        marginTop: "10px",
    }

}))