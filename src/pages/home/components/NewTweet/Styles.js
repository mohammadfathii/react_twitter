import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    newTwittBox: {
        backgroundColor : 'white',
        padding : '20px'
    },
    newTwittInput:{
        flex : 1,
        border:'none',
        marginRight: '20px',
        fontFamily : 'Shabnam',
        "&:focus" : {
            outline : 'unset'
        }
    },
    newTwittBtnContainer :{
        marginTop : '2rem !important'
    },
    newTwittBtn:{
        backgroundColor : theme.palette.primary.light + ' !important',
        borderRadius : '2rem !important',
        fontFamily: 'Shabnam !important',
        lineHeight : '1.5rem !important',
        lineWidth : '1.5rem !important',
        marginLeft : '10px !important'
    }
}));

export default useStyles;
