import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    // Hot Hash Tags in Right Sidebar
    HashTagBox :{
        marginBottom : '2rem'
    },

    TagIcon : {
        fontSize : '1.3rem !important',
    },

    TagSubject: {
        fontSize : '1.3rem !important',
        marginRight : '0.3rem',
        fontWeight : '400' ,
        textDecoration : 'none'
        // lineHeight : '30px'
    },

    HashTagClick :{
        padding : '1rem',
        width : '100%'
    }
})

export default useStyles;

