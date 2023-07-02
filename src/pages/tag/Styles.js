import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    tagTitle: {
        fontWeight : 600,
        fontSize : '1.5rem !important',
        marginRight : '5px',
    },
    divider : {
        width : '100% !important',
        height:'5px !important'
        // filter : 'opacity(1) !important'
    },
    headerBox:{
        backgroundColor : "white" ,
        padding : '30px',
    }
})

export default useStyles;
