import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        backgroundColor : "white",
        flex : 1,
        padding : '20px'
    },
    mainHomeTitle:{
        fontSize:'1.5rem',
        fontWeight : '600',
        marginRight : '10px',
        lineHeight : '30px'
    },
    divider : {
        width : '100% !important',
        height:'3px'
        // filter : 'opacity(1) !important'
    }
})

export default useStyles
