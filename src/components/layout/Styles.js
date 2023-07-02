import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root : {
        width : '100%',
        height : '100vh',
        display : 'flex',
    },
    divider : {
        backgroundColor : theme.palette.primary.main + " !important",
        height : '100% !important',
        filter : 'opacity(0.2) !important'
    },
    main : {
        backgroundColor : "#e3e3e3",
        flex : 1,
        overflowY : 'scroll !important'
    }
}))

export default useStyles;
