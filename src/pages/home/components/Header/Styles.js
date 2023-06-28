import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    header:{
        display : 'flex',
        backgroundColor: "white",
        padding : '20px'

    },
    headerTitle:{
        fontSize : '1.5rem',
        fontWeight : 600,
        marginRight : '10px'
    },
    divider:{
        height : '1px',
        backgroundColor : theme.palette.primary.main + ' !important',
        filter : 'opacity(0.2) !important',
        width:'100% !important',
    },

}))

export default useStyles;
