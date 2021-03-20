import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",

    },
    userName: {
        color: "inherit"
    },
    authBtn: {
        marginLeft: "15px"
    },
    header: {
        position: "static",
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
        textDecoration: "none"
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    drawerContainer: {
        padding: "20px 30px",
    },


});