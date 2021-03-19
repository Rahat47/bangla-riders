import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: '15px',
        height: '100%',



    },
    media: {
        width: "50%",
        height: "100px",
        backgroundSize: "cover",

    },
    cardLink: {
        color: "crimson",
        textTransform: "uppercase",
        textDecoration: 'none',
        fontSize: "1.5rem"
    }
})