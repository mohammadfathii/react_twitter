import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        backgroundColor : "#e3e3e3",
        flex : 1,
        overflowY : 'scroll !important'
    },
    mainHomeTitle:{
        fontSize:'1.5rem',
        fontWeight : '600',
        marginRight : '10px',
        lineHeight : '30px'
    },
    divider : {
        width : '100% !important',
        height:'5px !important'
        // filter : 'opacity(1) !important'
    }
})

export default useStyles
