import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root : {
        backgroundColor : 'white !important',
        padding : '20px !important',
        overflow : 'auto'

    },
    TweetInput:{
        flex : 1,
        border:'none',
        marginRight: '20px',
        fontFamily : 'Shabnam',
        "&:focus" : {
            outline : 'unset'
        }
    },
    TweetBtnContainer :{
        marginTop : '2rem !important'
    },
    TweetBtn:{
        backgroundColor : theme.palette.primary.light + ' !important',
        borderRadius : '2rem !important',
        fontFamily: 'Shabnam !important',
        lineHeight : '1.5rem !important',
        lineWidth : '1.5rem !important',
        marginLeft : '10px !important'
    },
    fullName : {
        fontSize : '1.5rem !important',
        fontWeight : 600
    },
    username : {

    }
}));

export default useStyles;
