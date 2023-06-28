import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root :{
        backgroundColor : 'white',
        padding:'20px',
        flex:1,
        overflowY:'scroll !important',

    },
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
        marginBottom : '4rem'
    }
})

export default useStyles;
