import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor : "white",
        width : '18%',
        padding : '20px'
    },
    twitter :{
        color : theme.palette.primary.light,
        fontSize : '2rem !important'
    },
    TypegraphyH1 : {
        color : theme.palette.primary.light,
        fontSize : '1.5rem !important',
        fontWeight : '600 !important',
        marginRight : '20px !important'
    },

    
    hashTagsTitle : {
        fontSize : "1.5rem !important",
        fontWeight : "900 !important",
        marginTop:'3rem !important'
    },
    hothastags :{
        marginTop : "2rem !important"
    },

}))

export default useStyles
