import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme =>({
    baseProfile:{
        direction :"rtl !important",
        width : 'max-content !important',
    },
    profFullName : {
        fontSize : "1rem !important",
        flex : 1,
        color : theme.palette.primary.dark
    },
    profUserName : {
        fontSize : "0.8rem !important",
        flex : 1,
        color : theme.palette.secondary.dark
    },
    Avatar : {
        fontSize : '4rem !important',
        marginRight : '1rem !important',
        width: 'max-content'
    },
    BaseAvatar : {
        img:{
            borderRadius : '2rem !important'
        }
    },
    profile:{
        width: 'max-content',
        marginRight:'10px'

    }
}))


export default useStyles;

