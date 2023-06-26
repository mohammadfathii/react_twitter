import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root : {
        width : '100%',
        height : '100vh',
        display : 'flex',
        overflow : 'hidden',
        flexWrap : 'wrap',
        flexDirection : 'row'
    },
    divider : {
        backgroundColor : theme.palette.primary.main + " !important",
        height : '100% !important',
        filter : 'opacity(0.2) !important'
    }
}))

export default useStyles;
