import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor : "white",
        width : '25%',
        padding : '20px'
    },
    baseProfile:{
        direction :"ltr !important",
        width : 'max-content !important'
    },
    profFullName : {
        fontSize : "1.5rem !important",
        flex : 1
    },
    profUserName : {
        fontSize : "1rem !important",
        flex : 1,
        color : theme.palette.error.main
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
        width: 'max-content'
    },
    topTwitterList : {
        backgroundColor: "#f1f1f1",
        marginTop : '3rem !important',
        padding : '30px 20px ',
        borderRadius: '2.5rem'
    },
    topTwitterTitle:{
        fontSize : '1.5rem !important',
        fontWeight : '600 !important',
        marginBottom : '15px'
    },
    divider:{
        backgroundColor : theme.palette.primary.main + ' !important',
        height : 1
    }
}))

export default useStyles
