import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    appBar: {
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        color: 'black',
        textDecoration: 'none',
    },
    link: {
        marginRight: '15px',
        textDecoration: "none",
        color: "white"
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },


});